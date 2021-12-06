"use strict"
const express = require('express')
const Router = require('./router')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(express.urlencoded({extended: true}))
app.use(Router)

const port = 4000

app.listen(port, () => console.log('Server is Running'))