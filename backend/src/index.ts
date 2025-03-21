import express, { Application } from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import menuRoutes from './routes/menuRoutes';
import itemsRoutes from './routes/itemRoutes';

dotenv.config()
const app:Application = express();
const mongoUrl = process.env.MONGO_DB ||""
// Middleware to parse JSON
app.use(express.json());
app.use(cors())

// MongoDB connection
mongoose.connect(mongoUrl).then(() => {
  console.log('MongoDB connected');
}).catch(err => {
  console.error('MongoDB connection error:', err);
});

// Routes
app.use('/menu', menuRoutes);
app.use('/item', itemsRoutes);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
