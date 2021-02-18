const http = require('http');
const PORT = 8080;

const displayRoot = (response) => {
  const myHTML = `<html>
    <body>
    <h1>Home Page</h1>
    <a href="/portfolio">Portfolio</a>
    </body>
    </html>`;

  response.writeHead(200, { 'Content-Type': 'text/html' });

  response.end(myHTML);
};

const displayPortfolio = (response) => {
  const myHTML = `<html>
      <body>
      <h1>My Portfolio</h1>
      <a href="/">Go Home</a>
      </body>
      </html>`;

  response.writeHead(200, { 'Content-Type': 'text/html' });

  response.end(myHTML);
};

const display404 = (response) => {
  const myHTML = `<html>
        <body>
        <h1>404 Not Found</h1>
        <p>The page you were looking for can not be found</p>
        </body>
        </html>`;

  response.writeHead(200, { 'Content-Type': 'text/html' });

  response.end(myHTML);
};

const handleRequest = (request, response) => {
  const path = request.url;
  console.log('path:', path);

  switch (path) {
    case '/':
      console.log('went to / route');
      return displayRoot(response);

    case '/portfolio':
      console.log('went to portfolio route');
      return displayPortfolio(response);

    default:
      console.log('default hit');
      return display404(response);
  }
};

const server = http.createServer(handleRequest);

server.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
