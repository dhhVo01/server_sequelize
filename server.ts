import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config();
import express, { Application } from 'express';
import bodyParser from 'body-parser';
export const router = express.Router();
import cors from "cors";
import { sequelize } from './config/db';


const app: Application = express();
const PORT = process.env.PORT || 3000;

const connect_db = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

connect_db();


const corsOptions = {
    origin: process.env.CLIENT_URL,
    optionsSuccessStatus: 200
}
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));



app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});