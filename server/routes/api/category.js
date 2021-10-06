const express = require('express');
const router = express.Router();
const db = require('../../db')

// @route    GET api/categories
// @desc     Get all categories
// @access   

router.get("/", async (req,res) => {
    try {
        const results = await db.query("select * from categories")
        res.status(200).json({
            status: "success",
            results: results.rows.length,
            data:{ categories: results.rows, }        
        })
    } catch (err) {
        console.log(err);
    }
    
})

// @route    GET api/categories/:id
// @desc     Get category by ID
// @access   

router.get("/:id", async (req,res) => {
    try {
        const results = await db.query(`select * from categories where id = $1`, [req.params.id])
        
        res.status(200).json({
            status: "success",
            data:{ categories: results.rows[0] }     
        })
    } catch (err) {
        
    }
    
})

// @route    POST api/categories
// @desc     Create a category
// @access   

router.post("/", async (req,res)=> {
    try {
        const results = await db.query("INSERT INTO categories (title,body,user_id,category_id,created_at) values ($1,$2,$3,$4,CURRENT_TIMESTAMP) returning *",[req.body.title,req.body.body,req.body.user_id,req.body.category_id])
        
        res.status(201).json({
            status: "success",
            data: {
                categories: results.rows[0]
            }
        })
    } catch (err) {
        console.log(err);
    }
    
})

// @route    PUT api/categories/like/:id
// @desc     Like a category
// @access   

router.put("/:id", async (req,res) => {

    try {
        const results = await db.query("UPDATE categories SET body = $1 where id = $2 returning *", [req.body.body,req.params.id])
        res.status(200).json({
            status: "success",
            data: {
                categories: results.rows[0]
            }
        })
    } catch (err) {
        
    }
    
})

// @route    DELETE api/categories/:id
// @desc     Delete a category
// @access   

router.delete("/:id", async (req,res) => {
    try {
        const results =  db.query("DELETE FROM categories where id = $1", [req.params.id])
        res.status(204).json({
            status:"success"
        })
    } catch (err) {
        console.log(err);
    }
})

module.exports = router;