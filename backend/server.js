const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
var axios = require("axios").default;

const UserRoutes = require('./routes/User')
require('dotenv').config()


const app = express()
const port = 5000;

app.use(cors())
app.use(express.json());

const uri = "mongodb://localhost:27017/music";
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })




app.route("/search/:q").get((req, res) => {
    q = req.params.q

    var options = {
        method: 'GET',
        url: 'https://deezerdevs-deezer.p.rapidapi.com/search',
        params: { q: q },
        headers: {
            'x-rapidapi-key': process.env.x_rapidapi_key,
            'x-rapidapi-host': process.env.x_rapidapi_host
        }
    };

    console.log(q)

    axios.request(options).then(function (response) {

        res.send(response.data.data[0].title)
    }).catch(function (error) {
        console.error(error);
    });
})
app.use('/user', UserRoutes)

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection successful")
})

app.listen(port, () => console.log(`Server running on port: ${port}`))



