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
  const { firebase_id, firstName, lastName, role, bio, imgurl, username } =
    request.body;

  console.log(request.body);

  const created_at = getTimeInSeconds();
  const createUserQuery = `
      INSERT INTO users (firebase_id, first_name, last_name, role, bio, imgurl, created_at, username) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *
    `;

  const createUserParams = [
    firebase_id,
    firstName,
    lastName,
    role,
    bio,
    imgurl,
    created_at,
    username,
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

const getUserByFirebaseId = async (request, response) => {
  const firebase_id = request.params.id;
  const getUserQuery = `
    SELECT *
    FROM users
    WHERE firebase_id = $1`;

  try {
    const result = await pool.query(getUserQuery, [firebase_id]);
    console.log("🎉 user obtained");
    response.status(200).json({ data: result.rows });
  } catch (error) {
    console.error("⚠️ error grabbing user: ", error);
    response.status(500).json({ error: error.message });
  }
};

const getUserById = async (request, response) => {
  const user_id = request.params.id;
  const getUserQuery = `
    SELECT *
    FROM users
    WHERE id = $1`;

  try {
    const result = await pool.query(getUserQuery, [user_id]);
    console.log("🎉 user obtained");
    response.status(200).json({ data: result.rows });
  } catch (error) {
    console.error("⚠️ error grabbing user: ", error);
    response.status(500).json({ error: error.message });
  }
};

const getAllUsers = async (request, response) => {
  const getUserQuery = `
    SELECT *
    FROM users
    ORDER BY id ASC
    `;

  try {
    const result = await pool.query(getUserQuery);
    console.log("🎉 users obtained");
    response.status(200).json({ data: result.rows });
  } catch (error) {
    console.error("⚠️ error grabbing user: ", error);
    response.status(500).json({ error: error.message });
  }
};

// const getUsersByConnections = async (request, response) => {
//   const user_id = request.params.id;

//   const getConnectionsById = `
//       SELECT *
//       FROM users
//       LEFT JOIN connection ON CAST(users.id as INTEGER) == CAST(connection.send_user as INTEGER)
//       WHERE users.id != $1
//       `;

//   try {
//     const result = await pool.query(getConnectionsById, [user_id]);
//     console.log("🎉 users obtained");
//     response.status(200).json({ data: result.rows });
//   } catch (error) {
//     console.error("⚠️ error grabbing users: ", error);
//     response.status(500).json({ error: error.message });
//   }
// };

export default {
  createNewUser,
  getUserById,
  getUserByFirebaseId,
  getAllUsers,
  // getUsersByConnections,
};
