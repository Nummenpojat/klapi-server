const express = require('express')
const app = express()

app.get('/', (req, res) => {
res.send("Hello from Klapi")
})

const port = process.env.PORT || 3001
app.listen(port, () => {
console.log(`Server running on port ${port}`)
})
