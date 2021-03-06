const net = require('net');
const {IP, PORT} = require('./constants');
const connect = function() {
  const conn = net.createConnection({
    host: '165.227.47.243', // IP address
    port: '50541', // PORT number
  });

  conn.setEncoding("utf8");
  conn.on("connect", () => {
    conn.write('Name: DD');
    /*
    conn.write('Move: up');
    setTimeout(() => {
      conn.write("Move: up")
    }, 400);
    */
    console.log("Connection successful!");
  });
  conn.on("data", (data) => {
    console.log(data);
  });
  conn.on("end", () => {
    console.log("Connection terminated.")
  });

  return conn;
};
module.exports = { connect };