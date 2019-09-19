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

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://heroku_008vqzv6:70q80o1h0tq6uahs8jglvdki1e@ds033163.mlab.com:33163/heroku_008vqzv6"
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