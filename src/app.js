const fastify = require("fastify");

// Here we are at the application level
// We create a fastify instance
// that will be used to create the server and manage tests
// at a server level, more specifically in server.js

const build = (opts = {}) => {
  const app = fastify(opts);

  app.get("/", async (request, reply) => {
    reply.send({ hello: "world" });
  });
  return app;
};

module.exports = build;
