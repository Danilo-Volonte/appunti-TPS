//importo dgram di node.js per creare un socket UDP
const dgram = require('dgram');

//crea un socket UDP utilizzando IPv4
const server = dgram.createSocket('udp4');

//indriizzo IP e porta del server a cui inviare il messaggio
const HOST = "127.0.0.1";
const PORT = 41234;

//imposta gestore evento per messaggio (si attiva a ogni messaggio messaggio inviato)
server.on("message", (msg, info) => {
    console.log(msg.toString()); //converte messaggio del buffer 
    server.send("ricevuto", info.port, info.address); //invia messaggio di conferma al client
});

//invio del messaggio al server
server.bind(PORT, HOST);