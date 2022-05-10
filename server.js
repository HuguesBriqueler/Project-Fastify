const PORT = process.env.PORT || 5000;

const server = require("./src/app")({
  logger: {
    level: "info",
    prettyPrint: true,
  },
});

const start = async () => {
  try {
    await server.listen(PORT);
    server.log.info(`server listening on port:${server.server.address().port}`);
  } catch (error) {
    server.log.info(error);
    process.exit(1);
  }
};

start();
