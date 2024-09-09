const express = require("express");
const morgan = require('morgan');
const app = express();
const tourRouter = require('./routes/tourRouter');
const userRouter = require('./routes/userRouter');

//app.use(morgan('dev'));
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));

// Middleware to parse JSON
app.use(express.json());

// ROUTES

// Use the tourRouter for all /tours routes
app.use('/api/tours', tourRouter);
app.use('/api/users', userRouter);


const port = 4000;
// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
