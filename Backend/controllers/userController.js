// controllers/userController.js
const User = require('../models/userModel');

// Signup
// exports.createUser = async (req, res) => {
//   try {
//     const { name, email, password } = req.body;
//     const existingUser = await User.findOne({ email });
//     if (existingUser) return res.status(400).json({ message: 'User already exists' });

//     const user = new User({ name, email, password });
//     await user.save();
//     res.status(201).json({ message: 'User registered successfully', user });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

exports.createUser = async (req, res) => {
  try {
    const { name, email, password, role, adminCode } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: 'User already exists' });

    // Admin code check
    if (role === 'admin') {
      if (adminCode !== process.env.ADMIN_SECRET) {
        return res.status(403).json({ message: 'Invalid admin secret code' });
      }
    }

    const newUser = new User({
      name,
      email,
      password,
      role: role || 'user',
    });

    await newUser.save();
    res.status(201).json({ message: 'User created successfully', newUser });
  } catch (err) {
    console.error('🚨 Signup error:', err); // 🧠 log this
    res.status(500).json({ error: err.message });
  }
};


// Login
exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user || user.password !== password) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }
    res.json({ message: 'Login successful', user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
