const express = require('express')

const app = new express()
const path = require('path')
const bodyParser = require('body-parser')

const db = require('./db/config')

const router = require('./routers/index')
const authenticate = require('./auth/basic-auth')

const cors = require('cors')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))


var allowCrossDomain = function(req, res, next) {
    //res.header('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');

    next();
}


app.use(cors());
app.options('*', cors())
//app.use(allowCrossDomain)


// auth middleware
//app.use(authenticate)

app.use(express.static(path.join(__dirname,'public')));

app.use(function(req,res , next){
    console.log( req.url,' --', req.method)
    next()
})

app.use('/students', router.studentRouter)

app.use(function(err,req,res,next) {

    res.json(err)
})

app.listen(9000, function(){

    console.log('hello listening on 9000')
})