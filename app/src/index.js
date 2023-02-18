import express from "express";
import cors from 'cors'
import * as dotenv from 'dotenv'
import router from './routes/index.js'
import { sequelize } from "./database/database.js";

import './models/User.js';
import './models/Store.js';
import './models/Relations.js';
import './models/Article.js';


dotenv.config()
const app = express();
const port = process.env.PORT || 3000;
app.use(cors())
app.use(express.json())
app.use('/api', router)


try {
  await sequelize.sync({ force: false });
  app.listen(port, () => console.log(`backend listening on port ${port}!`));
} catch (error) {
  console.error('Unable to connect to the database:', error);

}

