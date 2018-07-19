const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");
const config = require("./server/helpers/Config");
const app = express();

/**
 * @description: connect to mongo DataBase
 */
mongoose.connect(config.mongooseUrl, () => console.log("DB Connected!"));
require("./server/models/user.model");

/**
 * @description
 * a - set body parser middleware
 * b - set static folder as output build from react app
 */
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "build")));

/**
 * @description: main Router to handle spa
 */
app.get("*", (_, res) => {
    res.sendFile(path.join(__dirname, "/build"));
});

/**
 * @description: main Router to handle spa
 */
const userAuth = require("./server/auth/auth");
app.use("/user", userAuth);

app.listen(config.port, () => console.log(`Server Started On Port ${config.port}`));