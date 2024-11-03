import "../config/dotenv.js";
import { pool } from "../config/database.js";
import { getTimeInSeconds } from "../util/timelib.js";

const getAllBlogs = async (request, response) => {
  const getBlogsQuery = `
    SELECT (user_id, location_id, title, rating, likes, images, created_at)
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
  const blogId = request.params.id;

  const getBlogByIdQuery = `
    SELECT *
    FROM blog
    WHERE id = $1
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

export default {
  getAllBlogs,
  createBlog,
  getBlogById,
  getBlogByLocationId,
};
