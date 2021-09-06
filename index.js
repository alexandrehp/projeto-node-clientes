import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import SaleRouter from "./routes/sale.routes.js"

dotenv.config();

const app = express();
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

mongoose.connect(
    process.env.DB_CONNECT,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }, () => {
        console.log("Connected to db!");
        app.listen(3000, () => console.log("Server Up and running"));
    });

app.set("view engine", "ejs");

app.use("/defaulters", SaleRouter);



