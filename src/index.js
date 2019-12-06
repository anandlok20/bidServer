const express = require('express')
require('./utils/db/mongoose')
const playerRouter = require('./router/player')
const teamRouter = require('./router/team')
var cors = require('cors')

var cors = require('cors')
const app = express()
const portNo = 3000
app.use(express.json())
app.use(cors())
app.use(playerRouter)
app.use(teamRouter)


app.listen(portNo, () => {
    console.log("Server is ON : " + portNo)
})