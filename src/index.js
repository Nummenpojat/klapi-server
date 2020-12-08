const express = require('express')
const app = express()
var cors = require('cors')

app.use(cors()) // cors middleware

const users = {
    john_doe: {
        info: {
            id: 0,
            firstName: "John",
            lastName: "Doe",
            localGroup: "Hyvinkään Nummenpojat",
            ageSection: "Explorer",
            roles: ["small group leader", "marketing leader"]
        },
        tasks: [
            {
                name: "Dance in stage",
                points: 10,
                completed: false
            },
            {
                name: "Take a picture",
                points: 10,
                completed: false
            },
            {
                name: "Meet camp leader",
                points: 15,
                completed: true
            }
        ]
    }
  }


app.get('/', (req, res) => {
res.send("Hello from Klapi")
})

app.get('/api/users/:userId', (req, res) => {
    let user = req.params.userId
    res.send(users[user].info)
})

app.get('/api/users/:userId/tasks', (req, res) => {
    let user = req.params.userId
    res.send(users[user].tasks)
})

const port = process.env.PORT || 3001
app.listen(port, () => {
console.log(`Server running on port ${port}`)
})
