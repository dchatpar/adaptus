import { Response } from 'express';
import { query } from '../db/database';
import { AuthRequest } from '../middleware/auth';

export const getCheckIns = async (req: AuthRequest, res: Response) => {
  try {
    const { user_id, start_date, end_date, type } = req.query;

    let sql = `
      SELECT ci.*, u.full_name as user_name, c.name as customer_name
      FROM check_ins ci
      LEFT JOIN users u ON ci.user_id = u.id
      LEFT JOIN customers c ON ci.customer_id = c.id
      WHERE 1=1
    `;
    const params: any[] = [];
    let paramCount = 1;

    if (user_id) {
      sql += ` AND ci.user_id = $${paramCount}`;
      params.push(user_id);
      paramCount++;
    }

    if (start_date) {
      sql += ` AND ci.checked_in_at >= $${paramCount}`;
      params.push(start_date);
      paramCount++;
    }

    if (end_date) {
      sql += ` AND ci.checked_in_at <= $${paramCount}`;
      params.push(end_date);
      paramCount++;
    }

    if (type) {
      sql += ` AND ci.check_in_type = $${paramCount}`;
      params.push(type);
      paramCount++;
    }

    // Non-admin users only see their own check-ins
    if (req.user!.role === 'agent') {
      sql += ` AND ci.user_id = $${paramCount}`;
      params.push(req.user!.id);
    }

    sql += ' ORDER BY ci.checked_in_at DESC';

    const result = await query(sql, params);
    res.json(result.rows);
  } catch (error) {
    console.error('Get check-ins error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const createCheckIn = async (req: AuthRequest, res: Response) => {
  try {
    const { customer_id, latitude, longitude, location_name, check_in_type, notes, image_url } = req.body;

    if (!latitude || !longitude) {
      return res.status(400).json({ error: 'Location coordinates are required' });
    }

    const result = await query(
      `INSERT INTO check_ins (user_id, customer_id, latitude, longitude, location_name, check_in_type, notes, image_url)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
       RETURNING *`,
      [req.user!.id, customer_id, latitude, longitude, location_name, check_in_type, notes, image_url]
    );

    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error('Create check-in error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const getUserCheckInsToday = async (req: AuthRequest, res: Response) => {
  try {
    const userId = req.params.userId || req.user!.id;

    const result = await query(`
      SELECT ci.*, c.name as customer_name
      FROM check_ins ci
      LEFT JOIN customers c ON ci.customer_id = c.id
      WHERE ci.user_id = $1
        AND DATE(ci.checked_in_at) = CURRENT_DATE
      ORDER BY ci.checked_in_at DESC
    `, [userId]);

    res.json(result.rows);
  } catch (error) {
    console.error('Get user check-ins today error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
