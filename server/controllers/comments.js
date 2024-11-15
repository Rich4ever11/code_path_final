import "../config/dotenv.js";
import { pool } from "../config/database.js";
import { getTimeInSeconds } from "../util/timelib.js";
import { request, response } from "express";

const getAllLocationComments = async (request, response) => {
  const getLocationCommentsQuery = `
    SELECT *
    FROM location_comment
    ORDER BY id ASC
`;

  try {
    const result = await pool.query(getLocationCommentsQuery);
    console.log("🎉 all location comment obtained");
    response.status(200).json({ data: result.rows });
  } catch (error) {
    console.error("⚠️ error grabbing all location comment: ", error);
    response.status(500).json({ error: error.message });
  }
};

const getAllLocationCommentsByLocationId = async (request, response) => {
  const locationId = request.params.location_id;

  const getLocationCommentsByLocationId = `
    SELECT *
    FROM location_comment
    WHERE location_id = $1
    ORDER BY location_id ASC
    `;

  try {
    const result = await pool.query(getLocationCommentsByLocationId, [
      locationId,
    ]);
    console.log("🎉 location comment data found");
    response.status(200).json({ data: result.rows });
  } catch (error) {
    console.error("⚠️ error grabbing location comment data: ", error);
    response.status(500).json({ error: error.message });
  }
};

const createLocationComment = async (request, response) => {
  const { user_id, location_id, comment } = request.body;
  const created_at = getTimeInSeconds();
  const updated_at = created_at;
  const likes = 0;

  const createBlogQuery = `
      INSERT INTO location_comment (user_id, location_id, comment, likes, created_at, updated_at) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *
    `;
  const createBlogParams = [
    user_id,
    location_id,
    comment,
    likes,
    created_at,
    updated_at,
  ];

  try {
    const result = await pool.query(createBlogQuery, createBlogParams);
    console.log("🎉 location comment added");
    response.status(200).json({ data: result.rows });
  } catch (error) {
    console.error("⚠️ error creating location comment: ", error);
    response.status(500).json({ error: error.message });
  }
};

const updateLocationComment = async (request, response) => {
  const { comment_id, user_id, location_id, comment } = request.body;
  const updated_at = getTimeInSeconds();

  const updateLocationCommentByIdQuery = `UPDATE location_comment SET comment = $1, updated_at = $2 WHERE id = $3 AND user_id = $4 AND location_id = $5;`;
  const updateLocationCommentByIdParams = [
    comment,
    updated_at,
    comment_id,
    user_id,
    location_id,
  ];

  try {
    const result = await pool.query(
      updateLocationCommentByIdQuery,
      updateLocationCommentByIdParams
    );
    console.log("🎉 location comment updated");
    response.status(200).json({ data: result.rows });
  } catch (error) {
    console.error("⚠️ error updating location comment: ", error);
    response.status(500).json({ error: error.message });
  }
};

const deleteLocationComment = async (request, response) => {
  const { comment_id } = request.body;

  const deleteLocationCommentByIdQuery = `DELETE FROM location_comment WHERE id = $1`;
  const deleteLocationCommentByIdParams = [comment_id];

  try {
    const result = await pool.query(
      deleteLocationCommentByIdQuery,
      deleteLocationCommentByIdParams
    );
    console.log("🎉 location comment deleted");
    response.status(200).json({ data: result.rows });
  } catch (error) {
    console.error("⚠️ error deleting location comment: ", error);
    response.status(500).json({ error: error.message });
  }
};

const getAllBlogComments = async (request, response) => {
  const getBlogCommentsQuery = `
      SELECT *
      FROM blog_comment
      ORDER BY id ASC
  `;

  try {
    const result = await pool.query(getBlogCommentsQuery);
    console.log("🎉 all blog comment obtained");
    response.status(200).json({ data: result.rows });
  } catch (error) {
    console.error("⚠️ error grabbing all blog comment: ", error);
    response.status(500).json({ error: error.message });
  }
};

const getAllBlogCommentsByBlogId = async (request, response) => {
  const blog_id = request.params.blog_id;

  const getBlogCommentsByBlogId = `
    SELECT *
    FROM blog_comment
    WHERE blog_id = $1
    `;

  try {
    const result = await pool.query(getBlogCommentsByBlogId, [blog_id]);
    console.log("🎉 blog comment data found");
    response.status(200).json({ data: result.rows });
  } catch (error) {
    console.error("⚠️ error grabbing blog comment data: ", error);
    response.status(500).json({ error: error.message });
  }
};

const createBlogComment = async (request, response) => {
  const { user_id, blog_id, comment } = request.body;
  const created_at = getTimeInSeconds();
  const updated_at = created_at;
  const likes = 0;

  const createBlogCommentQuery = `
        INSERT INTO blog_comment (user_id, blog_id, comment, likes, created_at, updated_at) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *
      `;
  const createBlogCommentParams = [
    user_id,
    blog_id,
    comment,
    likes,
    created_at,
    updated_at,
  ];

  try {
    const result = await pool.query(
      createBlogCommentQuery,
      createBlogCommentParams
    );
    console.log("🎉 blog comment added");
    response.status(200).json({ data: result.rows });
  } catch (error) {
    console.error("⚠️ error creating blog comment: ", error);
    response.status(500).json({ error: error.message });
  }
};

const updateBlogComment = async (request, response) => {
  const { comment_id, user_id, blog_id, comment } = request.body;
  const updated_at = getTimeInSeconds();

  const updateBlogCommentByIdQuery = `UPDATE blog_comment SET comment = $1, updated_at = $2 WHERE id = $3 AND user_id = $4 AND blog_id = $5;`;
  const updateBlogCommentByIdParams = [
    comment,
    updated_at,
    comment_id,
    user_id,
    blog_id,
  ];

  try {
    const result = await pool.query(
      updateBlogCommentByIdQuery,
      updateBlogCommentByIdParams
    );
    console.log("🎉 blog comment updated");
    response.status(200).json({ data: result.rows });
  } catch (error) {
    console.error("⚠️ error updating blog comment: ", error);
    response.status(500).json({ error: error.message });
  }
};

const deleteBlogComment = async (request, response) => {
  const { comment_id } = request.body;

  const deleteBlogCommentByIdQuery = `DELETE FROM blog_comment WHERE id = $1`;
  const deleteBlogCommentByIdParams = [comment_id];

  try {
    const result = await pool.query(
      deleteBlogCommentByIdQuery,
      deleteBlogCommentByIdParams
    );
    console.log("🎉 location comment updated");
    response.status(200).json({ data: result.rows });
  } catch (error) {
    console.error("⚠️ error updating location comment: ", error);
    response.status(500).json({ error: error.message });
  }
};

export default {
  getAllLocationComments,
  getAllLocationCommentsByLocationId,
  createLocationComment,
  updateLocationComment,
  deleteLocationComment,

  getAllBlogComments,
  getAllBlogCommentsByBlogId,
  createBlogComment,
  updateBlogComment,
  deleteBlogComment,
};
