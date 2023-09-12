// add library
import fs from "fs";
import bcrypt from "bcryptjs";

// get data path
const path: string = "./src/data/data.json";

// declare types for user list and user 
type User = {
    id: number,
    email: string,
    password: string,
    name: string,
    image: string
}
type Users = {
    users: Array<User>
}

export default User;

// get users from file
export function getAllUsers(): Users {
    const data: string = fs.readFileSync(path, 'utf8');
    const users: Users = JSON.parse(data);
    //console.log(data);
    
    return users;
}

// get user by id
export function getUserById(id: number): User | undefined {
    const usersList: Users = getAllUsers();
    const user: User | undefined = usersList.users.find(user => user.id === id);

    if (!user) {
        return undefined;
    }

    return user;
}

// get user by email
export function getUserByEmail(email: string): User | undefined {
    const usersList: Users = getAllUsers();
    const user: User | undefined = usersList.users.find(user => user.email === email);

    if (!user) {
        return undefined;
    }

    return user;
}

// save user to file
export function saveUser(data: Users): void {
    fs.writeFileSync(path, JSON.stringify(data, null, 2));
}

// update user
export function updateUser (id: number, name: string, email: string, password: string, image: string): User | undefined {
    const usersList: Users = getAllUsers();
    const user: User | undefined = usersList.users.find(user => user.id === id);
    
    if (!user) {
       return undefined; 
    }

    // generate new hash
    const newPassword: string = bcrypt.hashSync(password, 10);
        
    // save new user data
    user.name = name;
    user.email = email;
    user.password = newPassword;
    user.image = image;

    saveUser(usersList);

    return user;
}

// delete user
export function deleteUser(id: number): User[] | undefined {
    const usersList: Users = getAllUsers();
    //console.log(typeof usersList);
    const users: User[] = usersList.users.filter(user => user.id !== id);
    
    if (!users) {
        return undefined;
    }

    usersList.users = users;
    saveUser(usersList);

    return users;
}

// signup user
export function userSignUp (name: string, email: string, password: string, image: string): void {
    const usersList: Users = getAllUsers();
    const id: number = usersList.users.length + 1;
    
    usersList.users.push( { id, name, email, password, image } );

    saveUser(usersList);
}