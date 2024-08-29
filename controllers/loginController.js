const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('./../models/user.model');

const jwtSecret = "jwt_secret_jwt_secret_jwt_secret_j";

exports.login = async (req,res) => {
    const {username, password} = req.body;
    await User.find({username,password}).then(rs => {
        if(rs.length>0){
            const token = jwt.sign({username: rs.username}, jwtSecret);
            return res.status(200).json({
                data: token
            })
        }else{
            return res.status(200).json({
                data: "invalid"
            })
        }
    })
}