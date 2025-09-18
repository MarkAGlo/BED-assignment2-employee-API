// Importing morgan
import express, { Express, Request, Response } from "express";
import morgan from "morgan";

//initializing the express app 
const app: Express = express();

// Use morgan for HTTP request logging
app.use(morgan("combined"));