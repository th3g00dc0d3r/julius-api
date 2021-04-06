import * as express from "express";
import * as cors from "cors";
import * as morgan from "morgan";

import { connectServerToDB } from "./config/db";
import { userRouter } from "./routes/user";
import { entryRouter} from "./routes/entry";

export const app = express();

app.use(cors());

app.use(express.json());

app.use(morgan('dev'));

connectServerToDB();

app.use("/user", userRouter);

app.use("/entry", entryRouter);

app.use("/", (req, res) => res.send("Julius API at PORT: 3000"));