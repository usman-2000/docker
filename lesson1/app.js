const express = require("express")

const app = express()

app.use('/', (req, res) => res.send("Hello Usman"))

app.listen(3000)