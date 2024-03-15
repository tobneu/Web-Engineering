const http = require('http')
const fs = require('fs')
const path = require('path')

let html = ''

// read the html file
const filename = path.join(__dirname, 'public/index.html')
fs.readFile(filename, 'utf8', (err, data) => {
  if (err) { // throw err
    console.error(err)
    return
  }
  html = data
  console.log(data)
})

const port = 8080
const hostname = '127.0.0.1'

const server = http.createServer((req, res) => {
  if (html === '') {
    res.statusCode = 500
    res.setHeader('Content-Type', 'text/plain')
    res.end('Internal Server Error')
    return
  }

  // if req ends with .jpg
  if (req.url.endsWith('.jpg')) {
    const imageName = req.url.split('/')[2]
    let imgData
    try {
      imgData = fs.readFileSync(`./public/${imageName}`)
    } catch (err) {
      res.statusCode = 404
      res.setHeader('Content-Type', 'text/plain')
      res.end('Not Found')
      return
    }

    res.statusCode = 200
    res.setHeader('Content-Type', 'image/jpeg')
    res.end(imgData)
    return
  }

  res.statusCode = 200
  res.setHeader('Content-Type', 'html')
  res.end(html)
})

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
})
