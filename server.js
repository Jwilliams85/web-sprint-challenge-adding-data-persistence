const express = require("express");
const helmet = require ("helmet");


const projectRouter = require("./project/projectRouter");
const taskRouter = require("./task/taskRouter");

const resourceRouter = require("./resource/resourceRouter");
const projectResourceRouter = require("./resource/projectResourceRouter");
const CORS = require("cors");

const server=express();
server.use(helmet());
server.use(CORS());

server.use(express.json());
server.use("/api/project", projectRouter);
server.use("/api/task", taskRouter);
server.use("/api/resource", resourceRouter);
server.use("/api/projectresource", projectResourceRouter)

// server.get("/", (req, res) => {
//     res.send(`<h1>Hello World</h1>`)
// })
module.exports = server;