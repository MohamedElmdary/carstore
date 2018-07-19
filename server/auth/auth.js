const express = require("express");
const router = express.Router();
const User = require("mongoose").model("user");
const validEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const jwt = require("jsonwebtoken");
var bcrypt = require('bcryptjs');
const config = require("../helpers/Config");


/**
 * @description: handle register with validation
 *               used next() for cleaner page
 */
router.post("/register", (req, res, next) => {
    console.log(req.body);
    const {name, email, password, re_password} = req.body;
    const errors = [];
    if (!(typeof(name) === "string" && name.length >= 4)) errors.push("invalid username");
    if (!(typeof(email) === "string" && validEmail.test(email.toLowerCase()))) errors.push("invalid email");
    if (!(typeof(password) === "string" && typeof(re_password) === "string" && password === re_password && password.length >= 6)) errors.push("invalid password");
    
    console.log(errors);
    if (!errors.length) {
        return next();
    } else {
        return res.json({
            success: false,
            errors
        });
    }
});

router.post("/register", (req, res) => {
    const {name, email, password} = req.body;
    const hashedPassword = bcrypt.hashSync(password, 8);
    new User({
        username: name,
        email: email,
        password: hashedPassword
    })
        .save()
        .then(data => {
            return res.json({
                success: true
            })
        })
        .catch(err => {
            return res.json({
                success: false,
                errors: [err]
            })
        });
});



/**
 * @description: handle login with jwt
 */
router.post("/login", (req, res) => {
    const {email, password} = req.body;
    User.findOne({email}, (err, user) => {
        if (err) {
            return res.json({
                success: false,
                mess: "Something went wrong"
            })
        }
        if (user) {
            const id = user._id;
            const hashedPassword = user.password;
            const { email } = user;
            const { username } = user;
            bcrypt.compare(password, hashedPassword, function(err, result) {
                if (err || !result) {
                    return res.json({
                        success: false,
                        mess: "Something went wrong"
                    })
                }

                const token = jwt.sign({id}, config.jwtPass, {
                    expiresIn: 7200
                });
                return res.json({
                    token: token,
                    expiresIn: 7200,
                    email,
                    username,
                    id
                });

            });
        } else {
            return res.json({
                success: false,
                mess: "User not found"
            })
        }
    });
});


module.exports = router;