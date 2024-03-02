//write a function to create a user table in your database.
import { Client } from 'pg';

const client = new Client({
    connectionString: "postgresql://postgres:Nixblack@11@localhost:5432/postgres"
})

// client.connect();

async function createUserTable() {
    await client.connect();
    const result = await client.query(`
        CREATE TABLE users (
            id SERIAL PRIMARY KEY,
            username VARCHAR(50) UNIQUE NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        );
    `)
    console.log(result);
}

// createUserTable();

async function insertUser(username: string, email: string, password: string) {
    await client.connect();
    try {
        const insertQuery = "INSERT INTO users (username, email, password) VALUES ($1, $2, $3)";
        const values = [username, email, password];
        const res = await client.query(insertQuery, values);
        console.log('Insertion success', res);
    } catch(err) {
        console.log("Error during insertion", err);
    } finally {
        await client.end();
    }
}

insertUser("Nixblack@1123", "Nixblack@1123", "Nixblack@1123");