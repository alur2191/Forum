const express = require('express');
const router = express.Router();
const db = require('../../db')

// @route    GET api/posts
// @desc     Get all posts
// @access   

router.get("/", async (req,res) => {
    try {
        const results = await db.query("select * from posts")
        res.status(200).json({
            status: "success",
            results: results.rows.length,
            data:{ posts: results.rows, }        
        })
    } catch (err) {
        console.log(err);
    }
    
})

// @route    GET api/posts/:id
// @desc     Get post by ID
// @access   

router.get("/:id", async (req,res) => {
    try {
        const results = await db.query(`select * from posts where id = $1`, [req.params.id])
        
        res.status(200).json({
            status: "success",
            data:{ posts: results.rows[0] }     
        })
    } catch (err) {
        
    }
    
})

// @route    POST api/posts
// @desc     Create a post
// @access   

router.post("/", async (req,res)=> {
    try {
        const results = await db.query("INSERT INTO posts (title,body,user_id,category_id,created_at) values ($1,$2,$3,$4,CURRENT_TIMESTAMP) returning *",[req.body.title,req.body.body,req.body.user_id,req.body.category_id])
        
        res.status(201).json({
            status: "success",
            data: {
                posts: results.rows[0]
            }
        })
    } catch (err) {
        console.log(err);
    }
    
})

// @route    PUT api/posts/like/:id
// @desc     Like a post
// @access   

router.put("/:id", async (req,res) => {

    try {
        const results = await db.query("UPDATE posts SET body = $1 where id = $2 returning *", [req.body.body,req.params.id])
        res.status(200).json({
            status: "success",
            data: {
                posts: results.rows[0]
            }
        })
    } catch (err) {
        
    }
    
})

// @route    DELETE api/posts/:id
// @desc     Delete a post
// @access   

router.delete("/:id", async (req,res) => {
    try {
        const results =  db.query("DELETE FROM posts where id = $1", [req.params.id])
        res.status(204).json({
            status:"success"
        })
    } catch (err) {
        console.log(err);
    }
})

module.exports = router;