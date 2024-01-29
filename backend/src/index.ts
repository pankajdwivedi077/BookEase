import express, {Request, Response} from 'express';
import cors from 'cors';
import "dotenv/config";
import mongoose from 'mongoose';

const PORT = process.env.PORT || 7000
mongoose.connect(process.env.MONGODB_CONNEXTION_STRING as string);

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

app.get("/api/test", async(req: Request, res: Response) => {
  res.json({message: "Hello from express endpoint"})
});

app.listen(process.env.PORT, () => {
    console.log(`server running on ${PORT} `)
});