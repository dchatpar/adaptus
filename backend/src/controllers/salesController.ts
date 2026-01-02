import { Response } from 'express';
import { query } from '../db/database';
import { AuthRequest } from '../middleware/auth';

export const getSales = async (req: AuthRequest, res: Response) => {
  try {
    const { status, agent_id, team_id, start_date, end_date } = req.query;

    let sql = `
      SELECT s.*, c.name as customer_name, u.full_name as agent_name, t.name as team_name
      FROM sales s
      LEFT JOIN customers c ON s.customer_id = c.id
      LEFT JOIN users u ON s.agent_id = u.id
      LEFT JOIN teams t ON s.team_id = t.id
      WHERE 1=1
    `;
    const params: any[] = [];
    let paramCount = 1;

    if (status) {
      sql += ` AND s.status = $${paramCount}`;
      params.push(status);
      paramCount++;
    }

    if (agent_id) {
      sql += ` AND s.agent_id = $${paramCount}`;
      params.push(agent_id);
      paramCount++;
    }

    if (team_id) {
      sql += ` AND s.team_id = $${paramCount}`;
      params.push(team_id);
      paramCount++;
    }

    if (start_date) {
      sql += ` AND s.sale_date >= $${paramCount}`;
      params.push(start_date);
      paramCount++;
    }

    if (end_date) {
      sql += ` AND s.sale_date <= $${paramCount}`;
      params.push(end_date);
      paramCount++;
    }

    // Non-admin users only see their own sales
    if (req.user!.role === 'agent') {
      sql += ` AND s.agent_id = $${paramCount}`;
      params.push(req.user!.id);
    }

    sql += ' ORDER BY s.sale_date DESC';

    const result = await query(sql, params);
    res.json(result.rows);
  } catch (error) {
    console.error('Get sales error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const getSaleById = async (req: AuthRequest, res: Response) => {
  try {
    const { id } = req.params;

    const result = await query(`
      SELECT s.*, c.name as customer_name, u.full_name as agent_name, t.name as team_name
      FROM sales s
      LEFT JOIN customers c ON s.customer_id = c.id
      LEFT JOIN users u ON s.agent_id = u.id
      LEFT JOIN teams t ON s.team_id = t.id
      WHERE s.id = $1
    `, [id]);

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Sale not found' });
    }

    res.json(result.rows[0]);
  } catch (error) {
    console.error('Get sale error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const createSale = async (req: AuthRequest, res: Response) => {
  try {
    const { customer_id, agent_id, team_id, product_name, amount, status, notes } = req.body;

    if (!customer_id || !product_name || !amount) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Use current user as agent if not specified
    const finalAgentId = agent_id || req.user!.id;

    const result = await query(
      `INSERT INTO sales (customer_id, agent_id, team_id, product_name, amount, status, notes)
       VALUES ($1, $2, $3, $4, $5, $6, $7)
       RETURNING *`,
      [customer_id, finalAgentId, team_id, product_name, amount, status, notes]
    );

    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error('Create sale error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const updateSale = async (req: AuthRequest, res: Response) => {
  try {
    const { id } = req.params;
    const { customer_id, product_name, amount, status, notes } = req.body;

    const result = await query(
      `UPDATE sales SET
        customer_id = COALESCE($1, customer_id),
        product_name = COALESCE($2, product_name),
        amount = COALESCE($3, amount),
        status = COALESCE($4, status),
        notes = COALESCE($5, notes)
      WHERE id = $6
      RETURNING *`,
      [customer_id, product_name, amount, status, notes, id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Sale not found' });
    }

    res.json(result.rows[0]);
  } catch (error) {
    console.error('Update sale error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const deleteSale = async (req: AuthRequest, res: Response) => {
  try {
    const { id } = req.params;

    const result = await query('DELETE FROM sales WHERE id = $1 RETURNING id', [id]);

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Sale not found' });
    }

    res.json({ message: 'Sale deleted successfully' });
  } catch (error) {
    console.error('Delete sale error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const getSalesStats = async (req: AuthRequest, res: Response) => {
  try {
    const { agent_id, team_id, start_date, end_date } = req.query;

    let whereClause = 'WHERE 1=1';
    const params: any[] = [];
    let paramCount = 1;

    if (agent_id) {
      whereClause += ` AND agent_id = $${paramCount}`;
      params.push(agent_id);
      paramCount++;
    }

    if (team_id) {
      whereClause += ` AND team_id = $${paramCount}`;
      params.push(team_id);
      paramCount++;
    }

    if (start_date) {
      whereClause += ` AND sale_date >= $${paramCount}`;
      params.push(start_date);
      paramCount++;
    }

    if (end_date) {
      whereClause += ` AND sale_date <= $${paramCount}`;
      params.push(end_date);
      paramCount++;
    }

    const result = await query(`
      SELECT
        COUNT(*) as total_sales,
        SUM(amount) as total_amount,
        AVG(amount) as average_amount,
        COUNT(CASE WHEN status = 'confirmed' THEN 1 END) as confirmed_sales,
        COUNT(CASE WHEN status = 'pending' THEN 1 END) as pending_sales,
        COUNT(CASE WHEN status = 'cancelled' THEN 1 END) as cancelled_sales
      FROM sales
      ${whereClause}
    `, params);

    res.json(result.rows[0]);
  } catch (error) {
    console.error('Get sales stats error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
