const express = require('express'); // I including express framework
const mongoose = require('mongoose'); // I include mongoose 
const dotenv = require('dotenv'); // I include dotenv


const userRouter = require('./routes/userRouter'); // I include the user router here
const employeeRouter = require('./routes/employeeRouter'); // i inculde the employee router here


// this is to load environment variables
dotenv.config();

// this is to initialize Express app
const app = express();

// this is the middleware to parse JSON requests
app.use(express.json());

// This is my mongo db connection string
const mongoURI = 'mongodb+srv://mehmetalikaba:Mypwd432.@cluster0.hpel7.mongodb.net/comp3123_assigment1?retryWrites=true&w=majority';
mongoose.connect(mongoURI, { // This tryies to connect and returns then if connected or catch if it did not connect
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
