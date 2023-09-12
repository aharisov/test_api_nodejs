import { Request, Response } from "express";
//import bcrypt from "bcryptjs";
import dotenv from "dotenv";
dotenv.config();
import jwt, { JwtPayload } from "jsonwebtoken";

export function checkToken(req: Request, res: Response, next: Function): void {
    // get token from headers, query or cookies
    const token: string = req.headers.authorization || "";
    //console.log(token);

    if (!token) {
        res.status(401).json({
            error: "Not authorized"
        })
    }

    try {
        const verifiedToken: string | JwtPayload = jwt.verify(token, "my-secret-key"); //process.env.JWT_TOKEN
        console.log(verifiedToken);

        if (verifiedToken) {
            next();
        } else {
            res.status(502).json({
                error: "Acces denied"
            })
        }
        
    } catch(error) {
        res.status(500).json({
            error: error
        })
    }
        
}
