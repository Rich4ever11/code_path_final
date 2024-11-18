import "../config/dotenv.js";
import { pool } from "../config/database.js";
import { getTimeInSeconds } from "../util/timelib.js";
import { request, response } from "express";

const getAllBlogs = async (request, response) => {
  const getBlogsQuery = `
    SELECT id, user_id, location_id, title, rating, likes, images, description, created_at
    FROM blog
    ORDER BY id ASC
`;

  try {
    const result = await pool.query(getBlogsQuery);
    console.log("🎉 all blog data obtained");
    response.status(200).json({ data: result.rows });
  } catch (error) {
    console.error("⚠️ error grabbing all blog data: ", error);
    response.status(500).json({ error: error.message });
  }
};

const createBlog = async (request, response) => {
  const {
    user_id,
    location_id,
    title,
    description,
    blog_content,
    images,
    rating,
  } = request.body;
  const created_at = getTimeInSeconds();
  const likes = 0;

  const createBlogQuery = `
      INSERT INTO blog (user_id, location_id, title, description, blog_content, images, rating, likes, created_at) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *
    `;

  const createBlogParams = [
    user_id,
    location_id,
    title,
    description,
    blog_content,
    images,
    rating,
    likes,
    created_at,
  ];

  try {
    const result = await pool.query(createBlogQuery, createBlogParams);
    console.log("🎉 blog data added");
    response.status(200).json({ data: result.rows });
  } catch (error) {
    console.error("⚠️ error grabbing blog data: ", error);
    response.status(500).json({ error: error.message });
  }
};

const getBlogById = async (request, response) => {
  const id = request.params.id;

  const getBlogByIdQuery = `
    SELECT *
    FROM blog
    WHERE id = $1
    ORDER BY id ASC
    `;

  try {
    const result = await pool.query(getBlogByIdQuery, [id]);
    console.log("🎉 blog data obtained");
    response.status(200).json({ data: result.rows });
  } catch (error) {
    console.error("⚠️ error grabbing blog data: ", error);
    response.status(500).json({ error: error.message });
  }
};

const getBlogByLocationId = async (request, response) => {
  const blogId = request.params.id;

  const getBlogByIdQuery = `
    SELECT *
    FROM blog
    WHERE location_id = $1
    ORDER BY id ASC
    `;

  try {
    const result = await pool.query(getBlogByIdQuery, [blogId]);
    console.log("🎉 blog data obtained");
    response.status(200).json({ data: result.rows });
  } catch (error) {
    console.error("⚠️ error grabbing blog data: ", error);
    response.status(500).json({ error: error.message });
  }
};

const deleteBlog = async (request, response) => {
  const { blog_id } = request.body;

  const deleteBlogByIdQuery = `DELETE FROM blog WHERE id = $1`;
  const deleteBlogByIdParams = [blog_id];

  try {
    const result = await pool.query(deleteBlogByIdQuery, deleteBlogByIdParams);
    console.log("🎉 blog deleted");
    response.status(200).json({ data: result.rows });
  } catch (error) {
    console.error("⚠️ error deleting blog: ", error);
    response.status(500).json({ error: error.message });
  }
};

const updateBlog = async (request, response) => {
  const { blog_id, title, description, blog_content, images, rating } =
    request.body;

  const updateBlogByIdQuery = `UPDATE blog SET title = $1, description = $2, blog_content = $3, rating = $4, images = $5 WHERE id = $6;`;
  const updateBlogByIdParams = [
    title,
    description,
    blog_content,
    rating,
    images,
    blog_id,
  ];

  try {
    const result = await pool.query(updateBlogByIdQuery, updateBlogByIdParams);
    console.log("🎉 blog deleted");
    response.status(200).json({ data: result.rows });
  } catch (error) {
    console.error("⚠️ error deleting blog: ", error);
    response.status(500).json({ error: error.message });
  }
};

export default {
  getAllBlogs,
  createBlog,
  deleteBlog,
  updateBlog,
  getBlogById,
  getBlogByLocationId,
};
