import { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 8080 });

wss.on("connection", (ws) => {
  console.log("Novo cliente conectado");

  ws.on("message", (data) => {
    let payload;

    try {
      payload = JSON.parse(data);
    } catch (e) {
      return;
    }
  });

  ws.on("close", () => {
    console.log("Cliente desconectado");
  });
});