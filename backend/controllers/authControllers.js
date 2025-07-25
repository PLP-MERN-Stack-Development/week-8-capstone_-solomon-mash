const User = require("../models/User");
const jwt = require('jsonwebtoken');

exports.registerUser = async (req, res) => {
  const { first_name,last_name, email,phone, password, role } = req.body;

  try {
    const userExists = await User.findOne({ email });
    if (userExists)
      return res.status(400).json({ message: "User already exists" });

    const user = await User.create({first_name,last_name, email, phone, password, role });
    const token = jwt.sign({ id: user._id, role: user.role, first_name: user.first_name, last_name:user?.last_name}, process.env.JWT_SECRET, {
    expiresIn: '1d',
  });

    res.status(201).json({
      message: 'User registered',
      token,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (user && (await user.matchPassword(password))) {
      const token = jwt.sign({ id: user._id, role: user.role, first_name:user.first_name, last_name:user?.last_name}, process.env.JWT_SECRET, {
    expiresIn: '1d'
  });

      res.json({
        token
      });
    } else {
      res.status(401).json({ message: "Invalid credentials" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
