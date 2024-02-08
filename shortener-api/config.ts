import path from 'path';
import mongoose from "mongoose";

const rootPath = __dirname;

const config = {
    rootPath,
    publicPath: path.join(rootPath, 'public'),
    mongoose: {
        db: 'mongoDb://localhost/shorten',
    }
};
export default config;