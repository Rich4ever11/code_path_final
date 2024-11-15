import dotenv from "dotenv";
dotenv.config({ path: "../../.env" });
import { pool } from "./database.js";

export const createUserTable = async () => {
  const createTableQuery = `
    DROP TABLE IF EXISTS users CASCADE;

    CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        firebase_id VARCHAR(255) NOT NULL,
        first_name VARCHAR(255) NOT NULL,
        last_name VARCHAR(255) NOT NULL,
        username VARCHAR(255) NOT NULL,
        role VARCHAR(255) NOT NULL,
        bio TEXT NOT NULL,
        imgURL TEXT[] NOT NULL,
        created_at NUMERIC(100, 2) NOT NULL
        )
`;

  try {
    const res = await pool.query(createTableQuery);
    console.log("🎉 user table created successfully");
  } catch (err) {
    console.error("⚠️ error creating user table", err);
  }
};

export const createLocationTable = async () => {
  const createTableQuery = `
      DROP TABLE IF EXISTS location CASCADE;
  
      CREATE TABLE IF NOT EXISTS location (
          id SERIAL PRIMARY KEY,
          user_id INTEGER REFERENCES users (id) NOT NULL,
          name VARCHAR(255) NOT NULL,
          description VARCHAR(255) NOT NULL,
          street_name VARCHAR(255) NOT NULL,
          city VARCHAR(255) NOT NULL,  
          postal_code NUMERIC(100, 2) NOT NULL,
          country VARCHAR(255) NOT NULL,
          image TEXT NOT NULL,
          longitude NUMERIC(100, 2) NOT NULL,
          latitude NUMERIC(100, 2) NOT NULL,
          created_at NUMERIC(100, 2) NOT NULL
      );
  `;

  try {
    const res = await pool.query(createTableQuery);
    console.log("🎉 location table created successfully");
  } catch (err) {
    console.error("⚠️ error creating location table", err);
  }
};

export const createBlogTable = async () => {
  const createTableQuery = `
        DROP TABLE IF EXISTS blog CASCADE;
    
        CREATE TABLE IF NOT EXISTS blog (
            id SERIAL PRIMARY KEY,
            location_id INTEGER REFERENCES location (id) NOT NULL,
            user_id INTEGER REFERENCES users (id) NOT NULL,
            title VARCHAR(255) NOT NULL,
            description TEXT NOT NULL,
            blog_content TEXT NOT NULL,
            images TEXT[] NOT NULL,
            rating NUMERIC(100, 2) NOT NULL,
            likes NUMERIC(1000, 2) NOT NULL,
            created_at NUMERIC(100, 2) NOT NULL
        )
    `;

  try {
    const res = await pool.query(createTableQuery);
    console.log("🎉 blog table created successfully");
  } catch (err) {
    console.error("⚠️ error creating blog table", err);
  }
};

export const createLocationCommentsTable = async () => {
  const createTableQuery = `
        DROP TABLE IF EXISTS location_comment CASCADE;
    
        CREATE TABLE IF NOT EXISTS location_comment (
            id SERIAL PRIMARY KEY,
            location_id INTEGER REFERENCES location (id) NOT NULL,
            user_id INTEGER REFERENCES users (id) NOT NULL,
            created_at NUMERIC(100, 2) NOT NULL,
            updated_at NUMERIC(100, 2) NOT NULL,
            likes NUMERIC(1000, 2) NOT NULL,
            comment TEXT NOT NULL
        )
    `;

  try {
    const res = await pool.query(createTableQuery);
    console.log("🎉 location comment table created successfully");
  } catch (err) {
    console.error("⚠️ error creating blog table", err);
  }
};

export const createBlogCommentsTable = async () => {
  const createTableQuery = `
        DROP TABLE IF EXISTS blog_comment CASCADE;
    
        CREATE TABLE IF NOT EXISTS blog_comment (
            id SERIAL PRIMARY KEY,
            blog_id INTEGER REFERENCES blog(id) NOT NULL,
            user_id INTEGER REFERENCES users(id) NOT NULL,
            created_at NUMERIC(100, 2) NOT NULL,
            updated_at NUMERIC(100, 2) NOT NULL,
            likes NUMERIC(1000, 2) NOT NULL,
            comment TEXT NOT NULL
        )
    `;

  try {
    const res = await pool.query(createTableQuery);
    console.log("🎉 blog comment table created successfully");
  } catch (err) {
    console.error("⚠️ error creating blog comment table", err);
  }
};

export const createConnectionTable = async () => {
  const createTableQuery = `
        DROP TABLE IF EXISTS connection CASCADE;
    
        CREATE TABLE IF NOT EXISTS connection (
            id SERIAL PRIMARY KEY,
            send_user INTEGER REFERENCES users(id) NOT NULL,
            receive_user INTEGER REFERENCES users(id) NOT NULL,
            created_at NUMERIC(100, 2) NOT NULL,
            accepted BOOLEAN
        )
    `;

  try {
    const res = await pool.query(createTableQuery);
    console.log("🎉 connection table created successfully");
  } catch (err) {
    console.error("⚠️ error creating connection table", err);
  }
};

export const createChatTable = async () => {
  const createTableQuery = `
        DROP TABLE IF EXISTS chat CASCADE;
    
        CREATE TABLE IF NOT EXISTS chat (
            id SERIAL PRIMARY KEY,
            user_id INTEGER REFERENCES users(id) NOT NULL,
            connection_id INTEGER REFERENCES connection(id) NOT NULL,
            created_at NUMERIC(100, 2) NOT NULL,
            message TEXT NOT NULL
        )
    `;

  try {
    const res = await pool.query(createTableQuery);
    console.log("🎉 chat table created successfully");
  } catch (err) {
    console.error("⚠️ error creating chat table", err);
  }
};

await createUserTable();
// await createLocationTable();
// await createBlogTable();
// await createLocationCommentsTable();
// await createBlogCommentsTable();
// await createConnectionTable();
// await createChatTable();
