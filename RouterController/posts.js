const express = require("express");
const verifyToken = require("../middleware/verifyToken.js");
const { addPost, updatePost, deletePost, getPost, getAllPosts, likePost, commentPost } = require("../controller/post.js");


const router = express.Router();

router.post('/', verifyToken, addPost);
router.put("/:id",verifyToken , updatePost);
router.delete("/:id", verifyToken,deletePost);
router.get("/:id",verifyToken, getPost);
router.put("/like/:id",verifyToken,likePost);
router.put("/comment/:id",verifyToken,commentPost);
//Testing
router.get("/",verifyToken, getAllPosts);

module.exports = router;
