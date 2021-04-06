import { Router } from "express";
import { EntryController } from "../controllers/entryController";
import { UserController } from "../controllers/userController";
import { Entry } from "../entity/Entry";

export const entryRouter = Router();

const entryCtrl = new EntryController();
const userCtrl = new UserController();

entryRouter.post("/", async (req, res) => {
    const { userId, value, description, date } = req.body;
    const user = await userCtrl.retrieveUserById(userId);
    if (user) {
        const entry = new Entry(value, description, date, user );
        const savedEntry = await entryCtrl.save(entry);
        res.json(savedEntry);
    } else {
        res.status(404).json({msg: "User Not Found"});
    }
})