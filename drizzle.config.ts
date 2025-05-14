import { config } from 'dotenv';
import { defineConfig } from 'drizzle-kit';

config({ path: '.env.local' });

const TURSO_CONNECTION_URL='libsql://myapp-smritijhaa.aws-us-west-2.turso.io';
const TURSO_AUTH_TOKEN='eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJhIjoicnciLCJpYXQiOjE3NDcxMDM2NjMsImlkIjoiNGZlNDhjNzYtYzYyYS00MGVjLTg5MTktNWViMGQ5MTQyNzc2IiwicmlkIjoiNzczZDE5MmMtZDNlMS00M2ZlLTliYmMtNzg1NGE2ODlhNjE2In0.qceJGz5lF9ZFCnLpySTWxPCo1_Vgvcc2WFWbfRFYzVs-COntI-mhb9KW_sfqhmMf79fHNPo8ssNT5clWOHjDDw'

export default defineConfig({
  schema: './app/db/schema.ts',
  out: './migrations',
  dialect: 'turso',
  dbCredentials: {
    url: TURSO_CONNECTION_URL!,
    authToken: TURSO_AUTH_TOKEN!,
    },
});