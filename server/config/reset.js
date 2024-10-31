import "./dotenv.js";
import { pool } from "./database.js";
import { customItems } from "../data/customItems.js";

export const createUserTable = async () => {
  const createTableQuery = `
    DROP TABLE IF EXISTS user CASCADE;

    CREATE TABLE IF NOT EXISTS user (
        id SERIAL PRIMARY KEY,
        first_name VARCHAR(255) NOT NULL,
        last_name VARCHAR(255) NOT NULL,
        username VARCHAR(255) NOT NULL,
        password VARCHAR(255) NOT NULL,
        role VARCHAR(255) NOT NULL,
        bio TEXT NOT NULL,
        email VARCHAR(255) NOT NULL,
        created_at NUMERIC(100, 2) NOT NULL
)
`;

  try {
    const res = await pool.query(createTableQuery);
    console.log("🎉 user table created successfully");
  } catch (err) {
    console.error("⚠️ error creating custom item table", err);
  }
};

export const createLocationTable = async () => {
  const createTableQuery = `
      DROP TABLE IF EXISTS location CASCADE;
  
      CREATE TABLE IF NOT EXISTS location (
          id SERIAL PRIMARY KEY,
          CONSTRAINT user_id SERIAL REFERENCES user(id),
          name VARCHAR(255) NOT NULL,
          description VARCHAR(255) NOT NULL,
          street_name VARCHAR(255) NOT NULL,
          city VARCHAR(255) NOT NULL,  
          postal_code NUMERIC(100, 2) NOT NULL,
          country VARCHAR(255) NOT NULL,
          longitude NUMERIC(100, 2) NOT NULL,
          latitude NUMERIC(100, 2) NOT NULL,
          created_at NUMERIC(100, 2) NOT NULL
      )
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
            CONSTRAINT location_id SERIAL REFERENCES location(id),
            CONSTRAINT user_id SERIAL REFERENCES user(id),
            title VARCHAR(255) NOT NULL,
            description VARCHAR(255) NOT NULL,
            blog_content TEXT NOT NULL,
            images TEXT[] NOT NULL,
            rating NUMERIC(100, 2) NOT NULL
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
            CONSTRAINT location_id SERIAL REFERENCES location(id),
            CONSTRAINT user_id SERIAL REFERENCES user(id),
            created_at NUMERIC(100, 2) NOT NULL
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
        DROP TABLE IF EXISTS location_comment CASCADE;
    
        CREATE TABLE IF NOT EXISTS location_comment (
            id SERIAL PRIMARY KEY,
            CONSTRAINT location_id SERIAL REFERENCES location(id),
            CONSTRAINT blog_id SERIAL REFERENCES blog(id),
            created_at NUMERIC(100, 2) NOT NULL
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
            CONSTRAINT send_user SERIAL REFERENCES user(id),
            CONSTRAINT receive_user SERIAL REFERENCES user(id),
            created_at NUMERIC(100, 2) NOT NULL
            accepted BOOLEAN NOT NULL
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
        DROP TABLE IF EXISTS connection CASCADE;
    
        CREATE TABLE IF NOT EXISTS connection (
            id SERIAL PRIMARY KEY,
            CONSTRAINT connection_id SERIAL REFERENCES connection(id),
            created_at NUMERIC(100, 2) NOT NULL,
            message TEXT NOT NULL
        )
    `;

  try {
    const res = await pool.query(createTableQuery);
    console.log("🎉 connection table created successfully");
  } catch (err) {
    console.error("⚠️ error creating connection table", err);
  }
};

await createUserTable();
await createLocationTable();
await createBlogTable();
await createLocationCommentsTable();
await createBlogCommentsTable();
await createConnectionTable();
await createChatTable();
