import bcrypt from 'bcryptjs';

const users = [
    {
        name : 'Admin User',
        email : 'admin@gmail.com',
        password : bcrypt.hashSync('123456', 10),
        isAdmin : true
    },
    {
        name : 'Nayan',
        email : 'nayan@gmail.com',
        password : bcrypt.hashSync('123456', 10)
    },
    {
        name : 'Rahul',
        email : 'rahul@gmail.com',
        password : bcrypt.hashSync('123456', 10)
    },
    {
        name : 'Golu',
        email : 'golu@gmail.com',
        password : bcrypt.hashSync('123456', 10)
    }
];

export default users;