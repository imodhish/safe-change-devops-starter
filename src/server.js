import http from 'node:http';
import { route } from './app.js';

const port = process.env.PORT || 3000;

const server = http.createServer((request, response) => {
  const result = route(request.method, request.url);

  response.writeHead(result.statusCode, {
    'Content-Type': 'application/json'
  });

  response.end(JSON.stringify(result.body));
});

server.listen(port, () => {
  console.log(`Safe Change Demo API is running on http://localhost:${port}`);
});
