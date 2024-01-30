import express, {Request, Response} from 'express';
import cors from 'cors';
import "dotenv/config";
import mongoose from 'mongoose';
import userRoutes from './routes/users';
import authRoutes from './routes/auth';

import bodyParser from 'body-parser'

const PORT = process.env.PORT || 7000
mongoose.connect(process.env.MONGODB_CONNEXTION_STRING as string);

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());
app.use(bodyParser.json());

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);


app.listen(process.env.PORT, () => {
    console.log(`server running on ${PORT} `)
});