const express = require('express');
const router = express.Router();
const db = require('../../db')
const auth = require('../../middleware/auth')

// @route    GET api/profile/:username
// @desc     Get post by Username
// @access   

router.get("/:id", async (req,res) => {
    try {
        const results = await db.query(`select user_name from users where user_name = $1`, [req.params.id])
        

        res.status(200).json({
            status: "success",
            profile: results.rows[0]   
        })
    } catch (err) {
        
    }
    
})

// @route    GET api/profile/me
// @desc     Get current users profile
// @access   Private
router.get('/u/me', auth, async (req, res) => {
    try {
        const profile = await db.query("select user_id, user_name, user_email from users where user_name = $1", [req.user.id])

        if (!profile) {
            return res.status(400).json({ msg: 'There is no profile for this user' });
        }
        res.json(profile);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;