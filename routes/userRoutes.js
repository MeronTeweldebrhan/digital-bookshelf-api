import express from "express";
import User from "../modles/User.js";

const router = express.Router();

// Create a new user                                  MARKED WORKS
router.post("/", async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    res.status(201).json(newUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});
 
//reviews                                                   MARKED WORKS
router.post("/:userId/reviews/:bookId", async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const { rating } = req.body;
    const bookId = req.params.bookId;
    if (!rating) {
      return res.status(400).json({ error: "Rating is required" });
    }

    // push bookId with rating                                   MARKED WORKS
    user.reviews.push({
      book: bookId,
      rating: rating,
    });

    await user.save();
    res.status(201).json({ message: "Review added", reviews: user.reviews });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});
// Get all users                                                    MARKED WORKS
router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});
//like                                                          MARKED WORKS
router.post("/:userId/likes/:bookId", async (req, res) => {
  try {
       const { userId, bookId } = req.params;
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    user.likedBooks.push(bookId);
    await user.save();
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

export default router;
