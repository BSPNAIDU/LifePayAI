const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../models/User");

const router = express.Router();

// ==========================
// REGISTER USER
// ==========================

router.post("/register", async (req, res) => {
  try {
    const {
      fullName,
      email,
      mobile,
      password,
    } = req.body;

    // Check Email
    const existingEmail = await User.findOne({ email });

    if (existingEmail) {
      return res.status(400).json({
        success: false,
        message: "Email already exists",
      });
    }

    // Check Mobile
    const existingMobile = await User.findOne({ mobile });

    if (existingMobile) {
      return res.status(400).json({
        success: false,
        message: "Mobile number already exists",
      });
    }

    // Encrypt Password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create User
    const user = new User({
      fullName,
      email,
      mobile,
      password: hashedPassword,
    });

    await user.save();

    res.status(201).json({
      success: true,
      message: "Registration Successful",
      user,
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });

  }
});

// ==========================
// LOGIN USER
// ==========================

router.post("/login", async (req, res) => {

  try {

    const { email, password } = req.body;

    // Find User
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({
        success: false,
        message: "User not found",
      });
    }

    // Compare Password
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({
        success: false,
        message: "Invalid Password",
      });
    }

    // Create JWT Token
    const token = jwt.sign(
      {
        id: user._id,
        email: user.email,
      },
      "LifePayAISecretKey",
      {
        expiresIn: "7d",
      }
    );

    res.status(200).json({
      success: true,
      message: "Login Successful",
      token,
      user,
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });

  }

});

// ==========================
// EXPORT ROUTER
// ==========================

module.exports = router;