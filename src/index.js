const express = require('express')
const app = express()
var cors = require('cors')

app.use(cors()) // cors middleware

const user = {
    firstName: "John",
    lastName: "Doe",
    localGroup: "Hyvinkään Nummenpojat",
    ageSection: "Explorer",
    positions: []
  }

app.get('/', (req, res) => {
res.send("Hello from Klapi")
})

app.get('/api/user', (req, res) => {
    res.send(user)
})

const port = process.env.PORT || 3001
app.listen(port, () => {
console.log(`Server running on port ${port}`)
})
