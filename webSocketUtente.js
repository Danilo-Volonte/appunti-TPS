//importo dgram di node.js per creare un socket UDP
const dgram = require('dgram');

//crea un socket UDP utilizzando IPv4
const client = dgram.createSocket('udp4');

//indriizzo IP e porta del server a cui inviare il messaggio
const HOST = "127.0.0.1";
const PORT = 41234;

//imposta gestore evento per messaggio (si attiva a ogni messaggio messaggio inviato)
client.on("message", (msg) => {
    console.log(msg.toString()); //converte messaggio del buffer
    client.close();
});

//invio del messaggio al server
client.send("hello world", PORT, HOST);
