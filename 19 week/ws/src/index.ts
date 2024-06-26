import express from "express";
import { WebSocketServer, WebSocket } from "ws";

const app = express();

app.get("/", (req, res) => {
    res.send("Hello World!");
})

const httpServer = app.listen(8080);

const wss = new WebSocketServer({ server: httpServer });

wss.on('connection', function connection(socket) {
    socket.on('error', console.error);

    socket.on('message', (data, isBinary) => {
        wss.clients.forEach((client) => {
            if(client.readyState === WebSocket.OPEN) {
                client.send(data, { binary: isBinary });
            }
        });
    });

    socket.send('Hello! Message from server!!');
});
 