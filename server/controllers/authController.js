const { default: mongoose } = require("mongoose");
const User = require("../models/user");
const { hashPassword, comparePassword } = require("../helpers/Auth");
const jwt = require("jsonwebtoken");
const { Router } = require("express");
const { body } = require("express-validator");
const { validateRequest } = require("../middleware/validateRequest");

const router = Router();

// /api/v1/auth/register

router.post(
  "/register",
  [
    body("firstname").notEmpty().withMessage("First name is required"),
    body("lastname").notEmpty().withMessage("Last name is required"),
    body("email")
      .isEmail()
      .withMessage("Email is not valid e.g example@email.com"),
    body("phone").isMobilePhone().withMessage("Phone number is required"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password is required and should be atleast 6 characters"),
  ],
  validateRequest,
  async (req, res) => {
    try {
      const { firstname, lastname, email, phone, password } = req.body;
      // email check
      const exists = await User.findOne({ email });
      if (exists) {
        return res.json({
          error: "Email has already been taken",
        });
      }

      // hash password
      const hashedPassword = await hashPassword(password);
      // creat user fun
      const user = await User.create({
        firstname,
        lastname,
        email,
        phone,
        password: hashedPassword,
      });

      return res.status(201).json({
        message: "User created successfully",
        status: "success",
        user,
      });
    } catch (error) {
      console.log("Register:  ", error);
      return res.status(400).json({
        message: "Failed to register user",
        status: "failed",
        user: null,
      });
    }
  }
);

router.post("/signin", async (req, res) => {
  try {
    const { email, password } = req.body;

    // check user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.json({
        error: "No user Found",
      });
    }
    // compare passwords
    const match = await comparePassword(password, user.password);
    if (!match) {
      res.json({
        error: "Passwords don't match",
      });
    }

    if (match) {
      const token = jwt.sign(
        { email: user.email, id: user._id, firstname: user.firstname },
        process.env.JWT_SECRET,
        {},
        (err, token) => {
          if (err) throw err;
          res.cookie("token", token).json(user);
        }
      );
    }
  } catch (error) {
    console.log(error);
    return res.json({
      message: "Failed to login",
      status: "failed",
      user: null,
    });
  }
});

router.get("/signout", async (req, res) => {});
router.get("/current-user", async (req, res) => {
  res.status(200).json({ user: { firstName: "Some Name" } });
});
module.exports = router;
