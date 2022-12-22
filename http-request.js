'use strict'

const autocannon = require('autocannon')

const link = process.argv.slice(2)
const durationInSeconds = process.argv.slice(3)

async function benchmark () {
  const instance = autocannon(
    {
      url: link,
      duration: Number(durationInSeconds)
    },
    console.log
  )

  // this is used to kill the instance on CTRL-C
  process.once('SIGINT', () => {
    instance.stop()
  })

  // just render results
  autocannon.track(instance, { renderProgressBar: false })
}

benchmark()
