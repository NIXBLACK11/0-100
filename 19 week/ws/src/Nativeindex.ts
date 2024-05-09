// import WebSocket, { WebSocketServer } from "ws";
// import http from 'http';

// const server = http.createServer(function(req: any, res: any) {
//     console.log((new Date()) + `Received request for ${req.url}`);
//     res.end("hi there");
// });

// const wss = new WebSocketServer({ server });

// let userConnect = 0;
// wss.on('connection', function connection(ws) {
//     ws.on('error', console.error);

//     ws.on('message', function message(data, isBinary) {
//         wss.clients.forEach(function each(client) {
//             client.send(data, { binary: isBinary });
//         });
//     });
//     console.log(`User connected => ${++userConnect}`);
//     ws.send('Hello! Message from server!!');
// });

// server.listen(8080, function () {
//     console.log(new Date() + 'Server is listening on port 8080');
// });
