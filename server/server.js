require("dotenv").config()
const express = require("express")
const cors = require('cors')
const db = require("./db")
const morgan = require('morgan')


const app = express()

var corsOptions = {
    origin: true,
    optionsSuccessStatus: 200
};

app.use (express.json())
app.use(cors(corsOptions))

app.get("/api/posts", async (req,res) => {
    try {
        const results = await db.query("select * from posts")
        console.log(results);
        res.status(200).json({
            status: "success",
            results: results.rows.length,
            data:{ posts: results.rows, }        
        })
    } catch (err) {
        console.log(err);
    }
    
})

app.get("/api/posts/:id", async (req,res) => {
    try {
        const results = await db.query(`select * from posts where id = $1`, [req.params.id])
        console.log(results.rows[0]);
        res.status(200).json({
            status: "success",
            data:{ posts: results.rows[0] }     
        })
    } catch (err) {
        
    }
    
})

app.post("/api/posts", async (req,res)=> {
    console.log(req.body);
    console.log('running');
    try {
        const results = await db.query("INSERT INTO posts (title,body,user_id,category_id,created_at) values ($1,$2,$3,$4,$5) returning *",[req.body.title,req.body.body,req.body.user_id,req.body.category_id,req.body.created_at])
        console.log(results.rows[0]);
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

app.put("/api/posts/:id", async (req,res) => {

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
    console.log(req.params.id);
    console.log(req.body);
    
})

app.delete("/api/posts/:id", async (req,res) => {
    try {
        const results =  db.query("DELETE FROM posts where id = $1", [req.params.id])
        res.status(204).json({
            status:"success"
        })
    } catch (err) {
        console.log(err);
    }
})
const port = process.env.PORT || 3004

app.listen(port, () => {
    console.log((`Server is running on port ${port}`));
})