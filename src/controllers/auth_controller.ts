// include libraries
import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import envLib from "dotenv";

// import signp function
import { userSignUp, getUserByEmail } from "../models/user_model";
// import user type
import User from "../models/user_model";

const env = envLib.config();

export function authSignUp(req: Request, res: Response): void {
    // get name, email and password from request
    const { name, email, password, image } = req.body;
    
    // crypt user's password
    bcrypt.hash(password, 10).then(newPassword => {
        // save user
        userSignUp(name, email, newPassword, image);

        // send response ok
        res.status(201).json({
            "message": "User created"
        })
    }).catch(error => {
        // send error response
        res.status(500).json({
            "error": error
        })
    });
}

export function authSignIn(req: Request, res: Response): void {
    // get email and password from request
    const { email, password } = req.body;
    // search for user in file
    const user: User | undefined = getUserByEmail(email);
    console.log(email);

    // if user found
    if (user != undefined) {
        // compare password with saved hash
        bcrypt.compare(password, user.password).then(passwordOk => {
            // if ok create token
            if (passwordOk) {
                //const token = jwt.sign(user, process.env.JWT_TOKEN, {expiresIn: "1h"});
                const token: string = jwt.sign(user, "my-secret-key", {expiresIn: "1h"});

                // send token to user
                res.status(200).json({
                    "token": token
                })
            } else {
                res.status(500).json({
                    "error": "Bad password"
                })
            }
        }).catch(error => console.log(error))
    } else {
        // if user not found send 404
        res.status(404).json({
            "message": "User not found"
        })
    }
}