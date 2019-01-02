const express = require('express')
const path = require('path')
const app = express()

app.use('/', (req, res) => {
  res.sendFile(path.join(__dirname, req.url))
})

// app.use(express.static(path.join(__dirname, 'assets')))

app.listen(9999, () => {
  console.log('服务器已启动')
})