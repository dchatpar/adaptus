import { Response } from 'express';
import { query } from '../db/database';
import { AuthRequest } from '../middleware/auth';

export const getActivities = async (req: AuthRequest, res: Response) => {
  try {
    const { user_id, customer_id, status, type } = req.query;

    let sql = `
      SELECT a.*, u.full_name as user_name, c.name as customer_name
      FROM activities a
      LEFT JOIN users u ON a.user_id = u.id
      LEFT JOIN customers c ON a.customer_id = c.id
      WHERE 1=1
    `;
    const params: any[] = [];
    let paramCount = 1;

    if (user_id) {
      sql += ` AND a.user_id = $${paramCount}`;
      params.push(user_id);
      paramCount++;
    }

    if (customer_id) {
      sql += ` AND a.customer_id = $${paramCount}`;
      params.push(customer_id);
      paramCount++;
    }

    if (status) {
      sql += ` AND a.status = $${paramCount}`;
      params.push(status);
      paramCount++;
    }

    if (type) {
      sql += ` AND a.activity_type = $${paramCount}`;
      params.push(type);
      paramCount++;
    }

    // Non-admin users only see their own activities
    if (req.user!.role === 'agent') {
      sql += ` AND a.user_id = $${paramCount}`;
      params.push(req.user!.id);
    }

    sql += ' ORDER BY a.scheduled_at DESC NULLS LAST, a.created_at DESC';

    const result = await query(sql, params);
    res.json(result.rows);
  } catch (error) {
    console.error('Get activities error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const createActivity = async (req: AuthRequest, res: Response) => {
  try {
    const { customer_id, activity_type, title, description, scheduled_at } = req.body;

    if (!customer_id || !activity_type || !title) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const result = await query(
      `INSERT INTO activities (user_id, customer_id, activity_type, title, description, scheduled_at)
       VALUES ($1, $2, $3, $4, $5, $6)
       RETURNING *`,
      [req.user!.id, customer_id, activity_type, title, description, scheduled_at]
    );

    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error('Create activity error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const updateActivity = async (req: AuthRequest, res: Response) => {
  try {
    const { id } = req.params;
    const { title, description, scheduled_at, completed_at, status } = req.body;

    const result = await query(
      `UPDATE activities SET
        title = COALESCE($1, title),
        description = COALESCE($2, description),
        scheduled_at = COALESCE($3, scheduled_at),
        completed_at = COALESCE($4, completed_at),
        status = COALESCE($5, status)
      WHERE id = $6
      RETURNING *`,
      [title, description, scheduled_at, completed_at, status, id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Activity not found' });
    }

    res.json(result.rows[0]);
  } catch (error) {
    console.error('Update activity error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const deleteActivity = async (req: AuthRequest, res: Response) => {
  try {
    const { id } = req.params;

    const result = await query('DELETE FROM activities WHERE id = $1 RETURNING id', [id]);

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Activity not found' });
    }

    res.json({ message: 'Activity deleted successfully' });
  } catch (error) {
    console.error('Delete activity error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
