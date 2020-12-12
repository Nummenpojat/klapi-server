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
        }
    },
    testaaja: {
        info: {
            id: 1,
            firstName: "Testaaja",
            lastName: "Testaaja",
            localGroup: "Hyvinkään Nummenpojat",
            ageSection: "Rover",
            roles: []
        }
    }
  }


app.get('/', (req, res) => {
res.send("Hello from Klapi")
})



const port = process.env.PORT || 3001
app.listen(port, () => {
console.log(`Server running on port ${port}`)
})
