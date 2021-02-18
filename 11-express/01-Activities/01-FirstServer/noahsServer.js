const http = require('http');
const PORT = 4444; // 3000 - 10000;

const handleRequest = (request, response) => {
  response.end(`IT WORKS! PATH HIT ${request.url}`);
};

const server = http.createServer(handleRequest);

server.listen(PORT, () =>
  console.log(`SERVER LISTENING ON: http://localhost:${PORT}`)
);
