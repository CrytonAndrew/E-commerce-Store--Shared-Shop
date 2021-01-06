import bcrypt from "bcryptjs"

const users = [
    {
        name: "Admin User",
        email: "admin@example.com", 
        password: bcrypt.hashSync("123456", 10), //Use b-crypt to hash our passwords
        isAdmin: true
    },
    {
        name: "John Doe",
        email: "john@example.com", 
        password: bcrypt.hashSync('123456', 10) //Use b-crypt to hash our passwords
    },
    {
        name: "Jane Doe",
        email: "jane@example.com", 
        password: bcrypt.hashSync('123456', 10) //Use b-crypt to hash our passwords
    }
]

export default users