const port = 4000

const handler = _ => {
  const body = 'Hello Deno!'

  return new Response(body, { status: 200 })
}

Deno.serve({ port }, handler)
