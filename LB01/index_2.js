const http = require('http')
const fs = require('fs')
const path = require('path')

const filename = path.join(__dirname, 'public/data.json')

// console.log(__dirname)
// console.log(__dirname + filename)
// console.log(path.join(__dirname, filename))

fs.readFile(filename, 'utf8', (err, data) => {
  if (err) { // throw err
    console.error(err)
    return
  }
  console.log(JSON.parse(data))
})

// ** synchronous version **
// const data
// try {
//   data = fs.readFileSync(filename, 'utf8')
//   console.log(JSON.parse(data))
// } catch (err) {
//   console.error(err)
// }

// file write
// const filename = path.join(__dirname, 'public/data.json')
// const data = JSON.stringify({ name: 'John Doe', age: 25 })
// fs.writeFile
// fs.writeFile(filename, data, (err) => {
//   if (err) {
//     console.error(err)
//     return
//   }
//   console.log('file written')
// })



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
