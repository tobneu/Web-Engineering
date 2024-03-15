const http = require('http')

const port = 8080
const hostname = '127.0.0.1'

const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'html')
  res.end('<h1>Hello from LB01</h1>\n')
})

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
})
