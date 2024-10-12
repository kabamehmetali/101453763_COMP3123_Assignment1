const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');


const userRouter = require('./routes/userRouter');
const employeeRouter = require('./routes/employeeRouter');


// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// MongoDB connection
const mongoURI = process.env.MONGO_URI || 'mongodb+srv://mehmetalikaba:Bilmem555.@cluster0.hpel7.mongodb.net/comp3123_assigment1?retryWrites=true&w=majority';
mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((error) => {
    console.error('Error connecting to MongoDB:', error);
});

// Routes
app.use('/api/v1/user', userRouter);
app.use('/api/v1/emp', employeeRouter);

// Server Port

app.listen(3000, () => {
    console.log(`Server running on port 3000`);
});
