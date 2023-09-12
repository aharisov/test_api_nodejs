import { Request, Response } from "express";
import User, { getAllUsers, getUserById, updateUser, deleteUser } from "../models/user_model";

// contoller for showing all users
export function getAllUsersControl(req: Request, res: Response): void {
    res.status(200).json(getAllUsers());
}

// contoller for showing user by id
export function getUserByIdControl(req: Request, res: Response): void {
    const id: number = parseInt(req.params.id);
    const user: User | undefined = getUserById(id);
    
    if (user == undefined) {
        res.status(404).json({
            "message": "User not found"
        });
    } else {
        res.status(200).json(user);
    }
}

// contoller for updating user
export function updateUserControl(req: Request, res: Response): void {
    const { name, email, password, image } = req.body;
    const id: number = parseInt(req.params.id);
    const user: User | undefined = updateUser(id, name, email, password, image);

    if (user == undefined) {
        res.status(404).json({
            "message": "User with id " + id + " not found"
        })
    } else {
        res.status(207).json({
            "message": "Updated user with id " + id
        })
    }
}

// contoller for deleting user
export function deleteUserControl(req: Request, res: Response): void {
    const id: number = parseInt(req.params.id);
    const users: User[] | undefined = deleteUser(id);

    if (users == undefined) {
        res.status(404).json({
            "message": "User with id " + id + " not found"
        })
    } else {
        res.status(207).json({
            "message": "Deleted user with id " + id
        })
    }
}