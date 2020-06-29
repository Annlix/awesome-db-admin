const path = require('path')
const express = require('express')
const app = express()
const port = 65535
const open = require('open')

app.use(express.static(path.resolve(__dirname, 'dist')))

app.get('/', (req, res) => {
  res.send('foobar')
})

app.listen(port, () => {
  console.log(`http://127.0.0.1:${port}`)
})