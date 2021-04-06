import { getManager } from "typeorm";
import { User } from "../entity/User";

export class UserController {
    async save(user: User) {
        const savedUser = await getManager().save(user);
        return savedUser;
    }

    async listAllUsers() {
        const users = await getManager().find(User);
        return users;
    }

    async retrieveUserById(id: number) {
        const user = await getManager().findOne(User, id);

        return user;
    }

    async retrieveUserEntries(id: number) {
        const user = await getManager().findOne(User, id, {
            relations: ['entries']
        })

        return user.entries;
    }
}