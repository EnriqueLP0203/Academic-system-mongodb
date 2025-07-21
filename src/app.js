import express from 'express'
import morgan from 'morgan'
import dotenv from 'dotenv/config'
import connectDB from './connection/db.js';
import cookieParser from 'cookie-parser';
import authRoutes from './routes/auth.js';
import careerRoutes from './routes/careers.routes.js';
import cors from 'cors';

connectDB();

const app = express();
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));

app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());

app.use('/api', authRoutes)
app.use('/api', careerRoutes);


export default app;