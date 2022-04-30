const db = require('../database/postgres')
const User = require('../models/Users')

const UserRepo = {}
    
UserRepo.registerUser = async function(user){
        await db.query(`insert into users(first_name, last_name, email, password, designation)
        values($1, $2, $3, $4, $5)`, [user.firstName, user.lastName, user.email,
        user.password, user.desgination])
            
    }

UserRepo.userExists = async function(email){
        const res = await db.query('select * from users where email = $1;', [email])
        return !(res.rowCount == 0)
    
    }

UserRepo.findUser = async function(email){
    const res = await db.query('select * from users where email = $1', [email])
    const u = res.rows[0]
    return setUser(u)
   
}

const setUser = function(u){
    return new User(
        u.id,
        u.first_name,
        u.last_name,
        u.email,
        u.password,
        u.desgination
    )
}


module.exports = UserRepo