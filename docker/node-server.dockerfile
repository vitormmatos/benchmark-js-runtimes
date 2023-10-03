FROM node:slim

WORKDIR /app
COPY package.json package.json
COPY bun.lockb bun.lockb
RUN bun install
COPY . .
EXPOSE 3000

ENTRYPOINT ["bun", "http-node-request.js"]
