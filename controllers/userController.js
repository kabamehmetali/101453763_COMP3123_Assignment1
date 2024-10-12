const User = require('../models/userModel');
const bcrypt = require('bcrypt');
const { check, validationResult } = require('express-validator');


exports.createUser = [
    
    check('username').isLength({ min: 3 }).withMessage('Username must be at least 3 characters long'),
    check('email').isEmail().withMessage('Invalid email format'),
    check('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
  
 
    async (req, res) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ status: false, message: errors.array() });
      }
  
      try {
        const newUser = new User(req.body);
        await newUser.save();
        res.status(201).json({ message: 'User created successfully', user: newUser });
      } catch (error) {
        res.status(500).json({ message: 'Error creating user', error });
      }
    }
  ];


exports.loginUser = [
    check('email').isEmail().withMessage('Invalid email format'),
    check('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
  
    async (req, res) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ status: false, message: errors.array() });
      }
  
      const { email, password } = req.body;
      const user = await User.findOne({ email });
  
      if (!user) {
        return res.status(400).json({ status: false, message: 'Invalid Email or password' });
      }
  
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ status: false, message: 'Invalid Email or password' });
      }
  
      res.status(200).json({ message: 'Login successful' });
    }
  ];
  