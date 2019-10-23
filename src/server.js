const express = require('express');
const next = require("next");
const http = require("http");
const authRoutes = require("./auth-routes");

const app = next({
  dev: false,
  dir: "./src",
});

const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.use(authRoutes);
  // handling everything else with Next.js
  server.get("*", handle);

  http.createServer(server).listen(3000, () => {
    console.log(`listening on port 3000`);
  });
});




