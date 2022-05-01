const express = require('express')
const bcrypt = require('bcryptjs')
const User = require('../../models/Users')
const UserRepo = require('../../repository/user_repo')
const asyncHandler = require('express-async-handler')

// @desc Register User
// @route POST api/user/
// @access Public

const registerUser = asyncHandler(async (req, res, next) =>{
    const user = new User(
        0,
        req.body.firstName,
        req.body.lastName, 
        req.body.email,
        req.body.password,
        req.body.designation
    )

    if(!user.isValid()){
       return next(new Error(400))
    }
        
    //check if user exists
    if(await UserRepo.userExists(user.email)){
        return next(new Error(400))
    }

    //Hash password
    const salt = await bcrypt.genSalt(10)
    user.password = await bcrypt.hash(user.password, salt)

    UserRepo.registerUser(user)

    res.status(200).json({
        'msg': 'Successfully registered'
    })
    
})
 
// @desc Authenticate a user
// @route POST api/user/login
// @access Public

const loginUser = asyncHandler(async (req, res, next) =>{

    const {email, password} = req.body

    const user = await UserRepo.findUser(email)

    if(user && (await bcrypt.compare(password, user.password))){
        res.json({
            _id: user.id,
           msg: `Welcome ${user.firstName}`
        })
    } else{
        next(new Error(400))
    }

})

module.exports = {
    registerUser,
    loginUser
}
