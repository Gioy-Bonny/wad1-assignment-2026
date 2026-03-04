'use strict';
import { create } from 'express-handlebars';
import express from 'express';
import routes from './routes.js'; 
import logger from './utils/looger.js';

const app = express();
const port = 3000; // Define the port number for the server

app.use(express.static("public")); // Serve static files from the "public" directory

const handlebars = create({extname: '.hbs'}); // Create an instance of the Handlebars view engine with .hbs extension

app.engine(".hbs", handlebars.engine);
app.set("view engine", ".hbs");

app.use("/", routes); // Use the routes defined in routes.js

app.listen(port, () => logger.info(`Express app running on port ${port}!`));
