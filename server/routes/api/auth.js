const express = require('express');
const router = express.Router();
const db = require('../../db')
const bcrypt = require("bcrypt")
const jwtGenerator = require("../../utils/token")
const validation = require('../../middleware/validation')
const auth = require('../../middleware/auth')


// @route    POST api/auth/register
// @desc     Register user
// @access   Public

router.post("/register", validation, async (req,res) => {
    try {
        const {  user_name, user_email, user_password} = req.body;

        const user = await db.query("SELECT * FROM users WHERE user_email = $1", [user_email])

        if (user.rows.length !== 0) {
            return res.status(401).send("User exists")
        }
        
        const saltRound = 10;
        const salt = await bcrypt.genSalt(saltRound)
        const bcryptPassword = await bcrypt.hash(user_password,salt)

        const newUser = await db.query(
            "INSERT INTO users (user_name, user_email, user_password) VALUES ($1, $2, $3) RETURNING *", 
            [user_name,user_email,bcryptPassword]
        )

        const token = jwtGenerator(newUser.rows[0].user_id)

        res.json({token})

    } catch (err) {
        console.log(err);
        res.status(500).send("Server Error")
    }
    
})

// @route    POST api/auth/login
// @desc     Login
// @access   Public

router.post("/login", validation, async (req,res) => {
    try {
        const {user_email,user_password} = req.body;
        const user = await db.query("SELECT * FROM users WHERE user_email = $1", [user_email])
        
        if (user.rows.length === 0) {
            return res.status(401).json("Email or password is incorrect")
        }

        const validPassword = await bcrypt.compare(user_password, user.rows[0].user_password)

        if(!validPassword) {
            return res.status(401).json("Email or password is incorrect")
        }

        const token = jwtGenerator(user.rows[0].user_id)
        
        res.json({token})
    } catch (err) {
        res.status(500).send("Server Error")
    }
})

router.get("/verify", auth, async (req,res) => {
    try {
        res.json(true)
    } catch (err) {
        console.log(err.message);
        res.status(500).send("Server Error")
    }
})

module.exports = router;