const { Server } = require('socket.io');

module.exports = (app) => {
  app.registerType('WsServer', 'HttpServer');

  app.register('WsServer', 'WsServer', ({ HttpServer: { HttpServer } }) => new Server(HttpServer.server));

  return app;
};
