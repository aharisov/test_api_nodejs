import expess, { Router } from "express";
export const userRouter = Router();
import { getAllUsersControl, getUserByIdControl, updateUserControl, deleteUserControl } from "../controllers/user_controller";
import { checkToken } from "../middlewares/check_token";

// create route for getting all users
userRouter.get("/users/users-list", getAllUsersControl);
// create route for getting user by id
userRouter.get("/users/users-list/:id", getUserByIdControl);
// create route for updating user by id
userRouter.put("/users/users-list/:id", checkToken, updateUserControl);
// create route for deleting user by id
userRouter.delete("/users/users-list/:id", deleteUserControl);
