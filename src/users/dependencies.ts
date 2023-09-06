import { MongoUserRepository } from "./mongo-user-collection";
import { UserByIdFinder } from "./user-by-id-finder";
import { UserController } from "./user-controller";

const mongoUserRepository = new MongoUserRepository();
const userByIdFinder = new UserByIdFinder(mongoUserRepository);

export const userController = new UserController(userByIdFinder);
