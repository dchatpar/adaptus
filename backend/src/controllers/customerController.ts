import { Response } from 'express';
import { query } from '../db/database';
import { AuthRequest } from '../middleware/auth';

export const getCustomers = async (req: AuthRequest, res: Response) => {
  try {
    const { status, assigned_to, search } = req.query;

    let sql = `
      SELECT c.*, u.full_name as assigned_to_name
      FROM customers c
      LEFT JOIN users u ON c.assigned_to = u.id
      WHERE 1=1
    `;
    const params: any[] = [];
    let paramCount = 1;

    if (status) {
      sql += ` AND c.status = $${paramCount}`;
      params.push(status);
      paramCount++;
    }

    if (assigned_to) {
      sql += ` AND c.assigned_to = $${paramCount}`;
      params.push(assigned_to);
      paramCount++;
    }

    if (search) {
      sql += ` AND (c.name ILIKE $${paramCount} OR c.email ILIKE $${paramCount} OR c.company ILIKE $${paramCount})`;
      params.push(`%${search}%`);
      paramCount++;
    }

    // Non-admin users only see their assigned customers
    if (req.user!.role === 'agent') {
      sql += ` AND c.assigned_to = $${paramCount}`;
      params.push(req.user!.id);
    }

    sql += ' ORDER BY c.created_at DESC';

    const result = await query(sql, params);
    res.json(result.rows);
  } catch (error) {
    console.error('Get customers error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const getCustomerById = async (req: AuthRequest, res: Response) => {
  try {
    const { id } = req.params;

    const result = await query(`
      SELECT c.*, u.full_name as assigned_to_name
      FROM customers c
      LEFT JOIN users u ON c.assigned_to = u.id
      WHERE c.id = $1
    `, [id]);

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Customer not found' });
    }

    res.json(result.rows[0]);
  } catch (error) {
    console.error('Get customer error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const createCustomer = async (req: AuthRequest, res: Response) => {
  try {
    const {
      name, email, phone, company, address, city, state, country,
      postal_code, latitude, longitude, status, assigned_to, notes
    } = req.body;

    if (!name) {
      return res.status(400).json({ error: 'Customer name is required' });
    }

    const result = await query(
      `INSERT INTO customers (
        name, email, phone, company, address, city, state, country,
        postal_code, latitude, longitude, status, assigned_to, notes
      ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14)
      RETURNING *`,
      [name, email, phone, company, address, city, state, country,
       postal_code, latitude, longitude, status, assigned_to, notes]
    );

    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error('Create customer error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const updateCustomer = async (req: AuthRequest, res: Response) => {
  try {
    const { id } = req.params;
    const {
      name, email, phone, company, address, city, state, country,
      postal_code, latitude, longitude, status, assigned_to, notes
    } = req.body;

    const result = await query(
      `UPDATE customers SET
        name = COALESCE($1, name),
        email = COALESCE($2, email),
        phone = COALESCE($3, phone),
        company = COALESCE($4, company),
        address = COALESCE($5, address),
        city = COALESCE($6, city),
        state = COALESCE($7, state),
        country = COALESCE($8, country),
        postal_code = COALESCE($9, postal_code),
        latitude = COALESCE($10, latitude),
        longitude = COALESCE($11, longitude),
        status = COALESCE($12, status),
        assigned_to = COALESCE($13, assigned_to),
        notes = COALESCE($14, notes)
      WHERE id = $15
      RETURNING *`,
      [name, email, phone, company, address, city, state, country,
       postal_code, latitude, longitude, status, assigned_to, notes, id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Customer not found' });
    }

    res.json(result.rows[0]);
  } catch (error) {
    console.error('Update customer error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const deleteCustomer = async (req: AuthRequest, res: Response) => {
  try {
    const { id } = req.params;

    const result = await query('DELETE FROM customers WHERE id = $1 RETURNING id', [id]);

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Customer not found' });
    }

    res.json({ message: 'Customer deleted successfully' });
  } catch (error) {
    console.error('Delete customer error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
