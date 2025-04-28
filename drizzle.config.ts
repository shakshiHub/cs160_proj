import { config } from 'dotenv';
import { defineConfig } from 'drizzle-kit';

config({ path: '.env.local' });

const TURSO_CONNECTION_URL='add-your-personal-turso-url';
const TURSO_AUTH_TOKEN='add-your-personal-turso-tokem';

export default defineConfig({
  schema: './app/db/schema.ts',
  out: './migrations',
  dialect: 'turso',
  dbCredentials: {
    url: TURSO_CONNECTION_URL!,
    authToken: TURSO_AUTH_TOKEN!,
    },
});