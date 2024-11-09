import "../config/dotenv.js";
import { pool } from "../config/database.js";
import { createHash } from "crypto";
import { getTimeInSeconds } from "../util/timelib.js";

function hash_password(password) {
  return createHash("sha256")
    .update(password + process.env.DYNAMODB_SALT)
    .digest("hex");
}

const createNewUser = async (request, response) => {
  const { first_name, last_name, role, bio, email, username, password } =
    request.body;

  created_at = getTimeInSeconds();
  secure_password = hash_password(password);

  const createUserQuery = `
      INSERT INTO user (first_name, last_name, role, bio, email, created_at, username, password) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *
    `;

  const createUserParams = [
    first_name,
    last_name,
    role,
    bio,
    email,
    created_at,
    username,
    secure_password,
  ];

  try {
    const result = await pool.query(createUserQuery, createUserParams);
    console.log("🎉 user account created");
    response.status(200).json({ data: result.rows });
  } catch (error) {
    console.error("⚠️ error creating user account: ", error);
    response.status(500).json({ error: error.message });
  }
};

const getUserById = async (request, response) => {
  const userId = request.params.id;
  const getUserQuery = `
    SELECT *
    FROM user
    WHERE id = $1
    ORDER BY id ASC
        `;

  try {
    const result = await pool.query(getUserQuery, [userId]);
    console.log("🎉 user obtained");
    response.status(200).json({ data: result.rows });
  } catch (error) {
    console.error("⚠️ error grabbing user: ", error);
    response.status(500).json({ error: error.message });
  }
};

const authenticateUser = async (request, response) => {
  const { username, password } = request.body;
  const authenticateUsersQuery = `
      SELECT *
      FROM users
      WHERE username = $1 AND password = $2
  `;

  const userCredentials = [username, password];

  try {
    const result = await pool.query(authenticateUsersQuery, userCredentials);
    console.log("🎉 user data obtained");
    response.status(200).json({ data: result.rows });
  } catch (error) {
    console.error("⚠️ error grabbing user data: ", error);
    response.status(500).json({ error: error.message });
  }
};

export default {
  createNewUser,
  authenticateUser,
  getUserById,
};
