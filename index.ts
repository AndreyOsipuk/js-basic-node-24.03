import { fibonacci } from './fibonacci'
// import { sum } from './sum'
import fs from 'node:fs'
import fsP from 'node:fs/promises'
import os from 'node:os'
import { createServer } from 'node:http';
import express from 'express'
// fs.readFile('./public/index.html', 'utf8', (err, data) => {
//   if(err) {
//     console.log(err)
//     return
//   }

//   console.log(data)
// })

// const data = await fsP.readFile('./public/index.html', 'utf8')

// console.log(data)


const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/', (req, res) => {
  res.send('POST')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})