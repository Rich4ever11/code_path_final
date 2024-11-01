import express from "express";
import "../config/dotenv.js";
// import controller for custom items
import user from "../controllers/user.js";
import location from "../controllers/location.js";
import blog from "../controllers/blog.js";
import comments from "../controllers/comments.js";

const router = express.Router();

// define routes to get, create, edit, and delete items
router.post("/user", user.createNewUser);
router.get("/user/:id", user.getUserById);

router.get("/location", location.getAllLocations);
router.post("/location", location.createLocation);
router.get("/location/:id", location.getLocationById);

router.get("/blog", blog.getAllBlogs);
router.post("/blog", blog.createBlog);
router.get("/blog/:id", blog.getBlogById);

router.get("/location_comment", comments.getAllLocationComments);
router.post("/location_comment", comments.createLocationComment);
router.put("/location_comment", comments.updateLocationComment);
router.delete("/location_comment", comments.deleteLocationComment);

router.get("/blog_comment", comments.getAllBlogComments);
router.post("/blog_comment", comments.createBlogComment);
router.put("/blog_comment", comments.updateBlogComment);
router.delete("/blog_comment", comments.deleteBlogComment);

export default router;
