const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Hello World!'))
app.get('/users', (req, res, next) => res.json({ users: ['Ray', 'Bob', 'Joe'] }))
app.listen(3000, () => console.log('Example app listening on port 3000!'))

module.exports = app;