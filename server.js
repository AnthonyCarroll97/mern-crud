const express = require('express')
const mongoose = require('mongoose')
const bookRouter = require('./routes/bookRouter')
const cors = require('cors')

const app = express()
mongoose.connect("mongodb://localhost/books", {useUnifiedTopology: true, useNewUrlParser: true})
db = mongoose.connection
db.on('error', (e) => console.log(e))
db.once('open', () => console.log("connected to database"))

app.use(express.json())
app.use(cors())

app.listen(5000, () => console.log("server started on port 5000"))

app.use('/books', bookRouter )