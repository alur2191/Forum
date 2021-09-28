require("dotenv").config()
const express = require("express")
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(express.json());

app.use(cors())
app.use(express.urlencoded({ extended: true }));
// Routes
app.use('/api/posts', require('./routes/api/posts'));
app.use('/api/auth', require('./routes/api/auth'));


const port = process.env.PORT || 3004

app.listen(port, () => {
    console.log((`Server is running on port ${port}`));
})