var cfg = require("./config.json");
var mc = require('minecraft-protocol');
var server = mc.createServer({
  'online-mode': cfg["online-mode"],
  encryption: cfg.encryption,
  host: '0.0.0.0',
  port: cfg.port,
  version: cfg.version,
  motd: cfg.motd
});

server.on('login', (client) => {
  client.end(cfg.kickmessage);
});

server.on('listening', () => {
    console.log("Server up!");
});