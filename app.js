

const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const serveStatic = require('serve-static');
const bodyParser = require('body-parser')
const mongoose = require('mongoose');

//application server
const app = express()

app.use(cors())
app.use(helmet())
app.use(bodyParser.json())
app.use(serveStatic(__dirname + "/dist"));

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://heroku_5d8vctdf:ojeeck5qn5rumhsoomlb8n8tt9@ds143132.mlab.com:43132/heroku_5d8vctdf"
mongoose.connect(MONGODB_URI, {
    promiseLibrary: require('bluebird'),
    useNewUrlParser:true
})
.then(()=>{
    console.log(`Database connection established.`)
})
.catch((err)=>{
    console.log(`ERROR in connecting to DB ::: ${err}`)
})


app.listen(process.env.PORT || 4000, ()=>{
    console.log(`started at port: ${process.env.PORT || 4000}`)
})
