import { Response } from 'express';
import { query } from '../db/database';
import { AuthRequest } from '../middleware/auth';

export const getDashboardStats = async (req: AuthRequest, res: Response) => {
  try {
    const isAgent = req.user!.role === 'agent';
    const userId = isAgent ? req.user!.id : undefined;

    // Get sales stats
    const salesStatsQuery = `
      SELECT
        COUNT(*) as total_sales,
        SUM(amount) as total_revenue,
        COUNT(CASE WHEN status = 'confirmed' THEN 1 END) as confirmed_sales,
        COUNT(CASE WHEN DATE(sale_date) = CURRENT_DATE THEN 1 END) as today_sales,
        SUM(CASE WHEN DATE(sale_date) = CURRENT_DATE THEN amount ELSE 0 END) as today_revenue
      FROM sales
      ${userId ? 'WHERE agent_id = $1' : ''}
    `;

    const salesStats = await query(salesStatsQuery, userId ? [userId] : []);

    // Get customer stats
    const customerStatsQuery = `
      SELECT
        COUNT(*) as total_customers,
        COUNT(CASE WHEN status = 'lead' THEN 1 END) as leads,
        COUNT(CASE WHEN status = 'prospect' THEN 1 END) as prospects,
        COUNT(CASE WHEN status = 'customer' THEN 1 END) as active_customers
      FROM customers
      ${userId ? 'WHERE assigned_to = $1' : ''}
    `;

    const customerStats = await query(customerStatsQuery, userId ? [userId] : []);

    // Get check-ins today
    const checkInsQuery = `
      SELECT COUNT(*) as check_ins_today
      FROM check_ins
      WHERE DATE(checked_in_at) = CURRENT_DATE
      ${userId ? 'AND user_id = $1' : ''}
    `;

    const checkIns = await query(checkInsQuery, userId ? [userId] : []);

    // Get pending activities
    const activitiesQuery = `
      SELECT COUNT(*) as pending_activities
      FROM activities
      WHERE status = 'pending'
      ${userId ? 'AND user_id = $1' : ''}
    `;

    const activities = await query(activitiesQuery, userId ? [userId] : []);

    // Get active agents count (admin only)
    let agentStats = null;
    if (!isAgent) {
      const agentsQuery = await query(`
        SELECT COUNT(*) as total_agents,
               COUNT(CASE WHEN status = 'active' THEN 1 END) as active_agents
        FROM users WHERE role = 'agent'
      `);
      agentStats = agentsQuery.rows[0];
    }

    res.json({
      sales: salesStats.rows[0],
      customers: customerStats.rows[0],
      check_ins: checkIns.rows[0],
      activities: activities.rows[0],
      agents: agentStats,
    });
  } catch (error) {
    console.error('Get dashboard stats error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const getRecentActivities = async (req: AuthRequest, res: Response) => {
  try {
    const limit = parseInt(req.query.limit as string) || 10;
    const isAgent = req.user!.role === 'agent';

    const result = await query(`
      SELECT
        'sale' as type,
        s.id,
        s.created_at,
        c.name as customer_name,
        u.full_name as agent_name,
        s.amount,
        s.product_name as description
      FROM sales s
      LEFT JOIN customers c ON s.customer_id = c.id
      LEFT JOIN users u ON s.agent_id = u.id
      ${isAgent ? 'WHERE s.agent_id = $1' : ''}

      UNION ALL

      SELECT
        'check_in' as type,
        ci.id,
        ci.checked_in_at as created_at,
        c.name as customer_name,
        u.full_name as agent_name,
        NULL as amount,
        ci.location_name as description
      FROM check_ins ci
      LEFT JOIN customers c ON ci.customer_id = c.id
      LEFT JOIN users u ON ci.user_id = u.id
      ${isAgent ? 'WHERE ci.user_id = $1' : ''}

      ORDER BY created_at DESC
      LIMIT $${isAgent ? '2' : '1'}
    `, isAgent ? [req.user!.id, limit] : [limit]);

    res.json(result.rows);
  } catch (error) {
    console.error('Get recent activities error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const getTopPerformers = async (req: AuthRequest, res: Response) => {
  try {
    const period = req.query.period || 'month'; // day, week, month
    const limit = parseInt(req.query.limit as string) || 10;

    let dateFilter = '';
    switch (period) {
      case 'day':
        dateFilter = "DATE(sale_date) = CURRENT_DATE";
        break;
      case 'week':
        dateFilter = "sale_date >= CURRENT_DATE - INTERVAL '7 days'";
        break;
      case 'month':
      default:
        dateFilter = "DATE_TRUNC('month', sale_date) = DATE_TRUNC('month', CURRENT_DATE)";
    }

    const result = await query(`
      SELECT
        u.id,
        u.full_name,
        u.profile_image,
        COUNT(s.id) as sales_count,
        SUM(s.amount) as total_revenue,
        AVG(s.amount) as avg_sale_value
      FROM users u
      INNER JOIN sales s ON u.id = s.agent_id
      WHERE u.role = 'agent' AND ${dateFilter}
      GROUP BY u.id, u.full_name, u.profile_image
      ORDER BY total_revenue DESC
      LIMIT $1
    `, [limit]);

    res.json(result.rows);
  } catch (error) {
    console.error('Get top performers error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const getSalesChart = async (req: AuthRequest, res: Response) => {
  try {
    const period = req.query.period || 'week'; // week, month, year
    const isAgent = req.user!.role === 'agent';

    let groupBy = '';
    let dateFilter = '';

    switch (period) {
      case 'week':
        groupBy = "TO_CHAR(sale_date, 'Day')";
        dateFilter = "sale_date >= CURRENT_DATE - INTERVAL '7 days'";
        break;
      case 'month':
        groupBy = "TO_CHAR(sale_date, 'DD Mon')";
        dateFilter = "DATE_TRUNC('month', sale_date) = DATE_TRUNC('month', CURRENT_DATE)";
        break;
      case 'year':
        groupBy = "TO_CHAR(sale_date, 'Mon YYYY')";
        dateFilter = "DATE_TRUNC('year', sale_date) = DATE_TRUNC('year', CURRENT_DATE)";
        break;
    }

    const result = await query(`
      SELECT
        ${groupBy} as period,
        COUNT(*) as sales_count,
        SUM(amount) as total_amount
      FROM sales
      WHERE ${dateFilter}
      ${isAgent ? 'AND agent_id = $1' : ''}
      GROUP BY ${groupBy}
      ORDER BY MIN(sale_date)
    `, isAgent ? [req.user!.id] : []);

    res.json(result.rows);
  } catch (error) {
    console.error('Get sales chart error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
