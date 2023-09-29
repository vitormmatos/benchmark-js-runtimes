import express from 'npm:express'

const app = express()
const port = 4000

app.get('/', (_, res) => {
  res.send('Hello Deno!')
})

app.listen(port)
