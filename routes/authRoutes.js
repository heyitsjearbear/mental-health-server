const express = require("express");
const authController = require("../controllers/authController");
const requireAuth = require("../middleware/auth");
const router = express.Router();

router.post("/signup", authController.signup);
router.post("/signin", authController.signin);
router.get("/protected", requireAuth, (req, res) => {
  res.send("You are authenticated");
});

module.exports = router;
