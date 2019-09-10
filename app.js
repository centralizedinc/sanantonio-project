const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const serveStatic = require('serve-static');
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
require('dotenv').config();

//application server
const app = express()

console.log('process.env.VUE_APP_GOOGLE_MAP_KEY ::: ',process.env.VUE_APP_GOOGLE_MAP_KEY)
console.log('process.env.VUE_APP_BASE_API_URI ::: ',process.env.VUE_APP_BASE_API_URI)
console.log('process.env.VUE_APP_HOME_URI ::: ',process.env.VUE_APP_HOME_URI)


app.use(cors())
app.use(helmet())
app.use(bodyParser.json())
app.use(serveStatic(__dirname + "/dist"));
app.use('/auth', require('./api/routes/auth'))

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://heroku_66cb3ndj:3uakod32bsvvfek6e1cv4e8839@ds217678.mlab.com:17678/heroku_66cb3ndj"
mongoose.connect(MONGODB_URI, {
        promiseLibrary: require('bluebird'),
        useNewUrlParser: true
    })
    .then(() => {
        console.log(`Database connection established.`)
    })
    .catch((err) => {
        console.log(`ERROR in connecting to DB ::: ${err}`)
    })


app.listen(process.env.PORT || 4000, () => {
    console.log(`started at port: ${process.env.PORT || 4000}`)
})

// Routers
// ########################################################################
app.use("/permit", require('./api/routes/permit_router'));