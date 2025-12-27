const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const cors = require("cors");

const PORT = process.env.PORT || 3000;

server.use(cors());
server.use(middlewares);
server.use(jsonServer.bodyParser);

// Optional: auth / user-based logic can go here

server.use(router);

server.listen(PORT, () => {
  console.log(`JSON Server running on port ${PORT}`);
});
