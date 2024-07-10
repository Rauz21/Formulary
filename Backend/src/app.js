import express from 'express';
import connectDB from './db';

const app = express();

// Connect to the database
connectDB();

// Configurar CORS

// Middlewares and routes go here
const indexRouter = require('./routes');
app.use('/', indexRouter);

module.exports = app;