import express from 'npm:express'

const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello Deno!')
})

app.listen(port)
