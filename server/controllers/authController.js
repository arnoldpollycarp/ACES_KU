const { default: mongoose } = require("mongoose");
const User = require("../models/user");
const { hashPassword, comparePassword } = require("../helpers/Auth");
const jwt = require("jsonwebtoken");
const { Router } = require("express");
const { body } = require("express-validator");
const { validateRequest } = require("../middleware/validateRequest");
const BadRequestError = require("../errors/BadRequestError");
const { requireAuth } = require("../middleware/requireAuth");

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
      email: email?.toLowerCase(),
      phone,
      password: hashedPassword,
    });

    return res.status(201).json({
      message: "User created successfully",
      status: "success",
      user,
    });
    // } catch (error) {
    //   console.log("Register:  ", error);
    //   return res.status(400).json({
    //     message: "Failed to register user",
    //     status: "failed",
    //     user: null,
    //   });
    // }
  }
);

router.post(
  "/signin",
  [
    body("email").isEmail().withMessage("Email is not valid"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password is required and should be atleast 6 characters"),
  ],
  validateRequest,
  async (req, res) => {
    const { email, password } = req.body;
    // check user exists
    const user = await User.findOne({ email: email?.toLowerCase() });
    if (!user) {
      throw new BadRequestError("Invalid Credentials");
    }
    // compare passwords
    const match = await comparePassword(password, user.password);
    if (!match) {
      throw new BadRequestError("Invalid Credentials");
    }
    // set token
    const payload = {
      id: user.id,
      email: user.email,
      firstname: user.firstname,
      phone: user.phone,
    };
    const token = jwt.sign(payload, process.env.JWT_SECRET);

    res.status(200).json({ user, token, message: "Signin successful" });
  }
);

router.get("/signout", requireAuth, async (req, res) => {
  req.currentUser = null;
  res.status(200).json({ message: "Signout successful" });
});
router.get("/current-user", requireAuth, async (req, res) => {
  const user = await User.findById(req.currentUser.id);
  res.status(200).json({ user });
});
module.exports = router;
