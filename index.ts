import express, { Express } from "express";
import bodyParser from "body-parser";
import cors from "cors";

const app: Express = express();
const port: number = 4000;

import { userRouter } from "./src/routes/user_routes";
import { authRouter } from "./src/routes/auth_routes";

app.use(cors());
app.use(bodyParser.json());
app.use(userRouter);
app.use("/auth", authRouter);


app.listen(4000, (): void => {
    console.log("Server started at port " + port);
})