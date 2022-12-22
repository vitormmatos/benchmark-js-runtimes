export default {
  port: 5000,
  fetch (request) {
    return new Response('Hello Bun!')
  }
}
