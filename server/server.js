require("dotenv").config()
const express = require("express")
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors())
// Routes
app.use('/api/posts', require('./routes/api/posts'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/category', require('./routes/api/category'));

const port = process.env.PORT || 3004

app.listen(port, () => {
    console.log((`Server is running on port ${port}`));
})