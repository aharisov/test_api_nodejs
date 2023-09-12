import expess, { Router } from "express";
export const authRouter = Router();
import { authSignUp, authSignIn } from "../controllers/auth_controller";

authRouter.post("/signup", authSignUp);
authRouter.post("/signin", authSignIn);