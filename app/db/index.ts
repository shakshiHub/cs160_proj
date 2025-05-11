// import { config } from 'dotenv';
import { drizzle } from 'drizzle-orm/libsql';

// config({ path: '.env' }); // or .env.local -- NOT WORKING
//  dont need (hardcoding url/token since reference didn't work)

const TURSO_CONNECTION_URL='your-turso-url';
const TURSO_AUTH_TOKEN='your-turso-token';

export const db = drizzle({ 
    connection: {
        url: TURSO_CONNECTION_URL,
        authToken: TURSO_AUTH_TOKEN,
}});
