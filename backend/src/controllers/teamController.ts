import { Response } from 'express';
import { query } from '../db/database';
import { AuthRequest } from '../middleware/auth';

export const getTeams = async (req: AuthRequest, res: Response) => {
  try {
    const result = await query(`
      SELECT t.*, u.full_name as manager_name,
             (SELECT COUNT(*) FROM team_members WHERE team_id = t.id) as member_count
      FROM teams t
      LEFT JOIN users u ON t.manager_id = u.id
      ORDER BY t.created_at DESC
    `);

    res.json(result.rows);
  } catch (error) {
    console.error('Get teams error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const getTeamById = async (req: AuthRequest, res: Response) => {
  try {
    const { id } = req.params;

    const teamResult = await query(`
      SELECT t.*, u.full_name as manager_name
      FROM teams t
      LEFT JOIN users u ON t.manager_id = u.id
      WHERE t.id = $1
    `, [id]);

    if (teamResult.rows.length === 0) {
      return res.status(404).json({ error: 'Team not found' });
    }

    const membersResult = await query(`
      SELECT u.id, u.email, u.full_name, u.phone, u.role, u.status, tm.joined_at
      FROM team_members tm
      JOIN users u ON tm.user_id = u.id
      WHERE tm.team_id = $1
    `, [id]);

    res.json({
      ...teamResult.rows[0],
      members: membersResult.rows,
    });
  } catch (error) {
    console.error('Get team error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const createTeam = async (req: AuthRequest, res: Response) => {
  try {
    const { name, manager_id, description, target_monthly } = req.body;

    if (!name) {
      return res.status(400).json({ error: 'Team name is required' });
    }

    const result = await query(
      `INSERT INTO teams (name, manager_id, description, target_monthly)
       VALUES ($1, $2, $3, $4)
       RETURNING *`,
      [name, manager_id, description, target_monthly]
    );

    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error('Create team error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const updateTeam = async (req: AuthRequest, res: Response) => {
  try {
    const { id } = req.params;
    const { name, manager_id, description, target_monthly } = req.body;

    const result = await query(
      `UPDATE teams
       SET name = COALESCE($1, name),
           manager_id = COALESCE($2, manager_id),
           description = COALESCE($3, description),
           target_monthly = COALESCE($4, target_monthly)
       WHERE id = $5
       RETURNING *`,
      [name, manager_id, description, target_monthly, id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Team not found' });
    }

    res.json(result.rows[0]);
  } catch (error) {
    console.error('Update team error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const deleteTeam = async (req: AuthRequest, res: Response) => {
  try {
    const { id } = req.params;

    const result = await query('DELETE FROM teams WHERE id = $1 RETURNING id', [id]);

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Team not found' });
    }

    res.json({ message: 'Team deleted successfully' });
  } catch (error) {
    console.error('Delete team error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const addTeamMember = async (req: AuthRequest, res: Response) => {
  try {
    const { id } = req.params;
    const { user_id } = req.body;

    if (!user_id) {
      return res.status(400).json({ error: 'User ID is required' });
    }

    await query(
      'INSERT INTO team_members (team_id, user_id) VALUES ($1, $2)',
      [id, user_id]
    );

    res.status(201).json({ message: 'Team member added successfully' });
  } catch (error: any) {
    if (error.code === '23505') {
      return res.status(409).json({ error: 'User is already a team member' });
    }
    console.error('Add team member error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const removeTeamMember = async (req: AuthRequest, res: Response) => {
  try {
    const { id, userId } = req.params;

    const result = await query(
      'DELETE FROM team_members WHERE team_id = $1 AND user_id = $2 RETURNING id',
      [id, userId]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Team member not found' });
    }

    res.json({ message: 'Team member removed successfully' });
  } catch (error) {
    console.error('Remove team member error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
