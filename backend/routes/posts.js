const express = require("express");
const router = express.Router();
const Post = require("../models/Post");


router.post("/", async (req, res) => {
  try {
    const post = new Post(req.body);
    await post.save();
    res.status(201).json(post);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});


router.get("/", async (req, res) => {
  const posts = await Post.find().sort({ createdAt: -1 });
  res.json(posts);
});


router.get("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.json(post);
  } catch {
    res.status(404).json({ message: "Post not found" });
  }
});


router.put("/:id", async (req, res) => {
  try {
    const updated = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch {
    res.status(400).json({ message: "Error updating post" });
  }
});


router.delete("/:id", async (req, res) => {
  try {
    await Post.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted successfully" });
  } catch {
    res.status(400).json({ message: "Error deleting post" });
  }
});

module.exports = router;
