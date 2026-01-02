import fs from 'fs';
import path from 'path';
import pool from './database';
import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';

dotenv.config();

async function migrate() {
  const client = await pool.connect();

  try {
    console.log('Starting database migration...');

    // Read and execute schema
    const schemaPath = path.join(__dirname, 'schema.sql');
    const schema = fs.readFileSync(schemaPath, 'utf-8');

    await client.query(schema);
    console.log('✓ Schema created successfully');

    // Create default admin user
    const adminEmail = process.env.ADMIN_EMAIL || 'admin@salesteam.com';
    const adminPassword = process.env.ADMIN_PASSWORD || 'admin123';
    const hashedPassword = await bcrypt.hash(adminPassword, 10);

    await client.query(`
      INSERT INTO users (email, password_hash, full_name, role)
      VALUES ($1, $2, $3, $4)
      ON CONFLICT (email) DO NOTHING
    `, [adminEmail, hashedPassword, 'System Administrator', 'admin']);

    console.log('✓ Default admin user created');
    console.log(`  Email: ${adminEmail}`);
    console.log(`  Password: ${adminPassword}`);

    console.log('\n✓ Migration completed successfully!');
  } catch (error) {
    console.error('Migration failed:', error);
    throw error;
  } finally {
    client.release();
    await pool.end();
  }
}

migrate().catch(console.error);
