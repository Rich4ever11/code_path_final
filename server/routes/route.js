import express from "express";
import "../config/dotenv.js";
// import controller for custom items
import user from "../controllers/user.js";
import location from "../controllers/location.js";
import blog from "../controllers/blog.js";
import comments from "../controllers/comments.js";
import connection from "../controllers/connection.js";
import chat from "../controllers/chat.js";

const router = express.Router();

// define routes to get, create, edit, and delete items
router.post("/user", user.createNewUser);
router.get("/user", user.getAllUsers);
router.get("/user/:id", user.getUserByFirebaseId);
// router.get("/user/connections/:id", user.getUsersByConnections);

router.get("/location", location.getAllLocations);
router.post("/location", location.createLocation);
router.put("/location", location.updateLocation);
router.delete("/location", location.deleteLocation);
router.get("/location/:id", location.getLocationById);

router.get("/blog", blog.getAllBlogs);
router.post("/blog", blog.createBlog);
router.put("/blog", blog.updateBlog);
router.delete("/blog", blog.deleteBlog);
router.get("/blog/:id", blog.getBlogById);
router.get("/blog/location/:id", blog.getBlogByLocationId);

router.get("/location_comment", comments.getAllLocationComments);
router.get(
  "/location_comment/:location_id",
  comments.getAllLocationCommentsByLocationId
);
router.post("/location_comment", comments.createLocationComment);
router.put("/location_comment", comments.updateLocationComment);
router.delete("/location_comment", comments.deleteLocationComment);

router.get("/blog_comment", comments.getAllBlogComments);
router.get("/blog_comment/:blog_id", comments.getAllBlogCommentsByBlogId);
router.post("/blog_comment", comments.createBlogComment);
router.put("/blog_comment", comments.updateBlogComment);
router.delete("/blog_comment", comments.deleteBlogComment);

router.post("/connection", connection.createConnection);
router.post("/connection/accept", connection.acceptConnection);
router.post("/connection/reject", connection.rejectConnection);
router.get("/connection/:id", connection.getConnectionsByUserId);
router.get("/connection/valid/:id", connection.getValidConnectionsByUserId);

router.post("/chat", chat.handleMessageCreation);
router.get("/chat/:connection_id", chat.handleChatRender);
router.get("/chat/user/:user_id", chat.handleMessageLog);

export default router;
