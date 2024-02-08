import express from 'express';
import cors from 'cors';
import mongoose from "mongoose";
import config from "./config";
import linksRouter from "./routers/links";
import redirectRouter from "./routers/redirect";

const app = express();
const port = 8000;

app.use(express.json());
app.use(cors());
app.use('/', redirectRouter);
app.use('/links', linksRouter);
const run = async () => {
    await mongoose.connect(config.mongoose.db);

    app.listen(port, () => {
        console.log('We are live on ' + port);
    });
    process.on('exit', () => {
        mongoose.disconnect();
    });
};
run().catch(console.error);