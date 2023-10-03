FROM runcitadel/deno:latest

WORKDIR /app
COPY package.json package.json
COPY bun.lockb bun.lockb
RUN bun install
COPY . .
EXPOSE 4000

ENTRYPOINT ["bun", "http-deno-request.js"]
