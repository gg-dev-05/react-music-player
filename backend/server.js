const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

const UserRoutes = require('./routes/User')


const app = express()
const port = 5000;

app.use(cors())
app.use(express.json());

const uri = "mongodb://localhost:27017/music";
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })

app.route("/").get((req, res) => {
    console.log(req)
    res.send("HELLO WORLD")
})
app.use('/user', UserRoutes)

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection successful")
})

app.listen(port, () => console.log(`Server running on port: ${port}`))

