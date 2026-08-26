import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import * as schema from './schema';

const getDb = () => {
  if (!process.env.DATABASE_URL) {
    return null;
  }
  try {
    const sql = neon(process.env.DATABASE_URL);
    return drizzle(sql, { schema });
  } catch (error) {
    console.error("Failed to initialize database client:", error);
    return null;
  }
};

export const db = getDb();
