const http = require("http");
require("dotenv").config();

const PORT = process.env.PORT || 8083;

const server = http.createServer((req, res) => {
//   res.setHeader("Content-Disposition", "attachment; filename=list.csv");
//   res.writeHead(200, { "Content-Type": "application/csv" });
//   res.write("id, nombre \n");
//   res.write("1, Junior \n");
//   res.write("2, Felix \n");
//   res.write("3, Gervacio \n");
  console.log('Hola mundo');
  res.end();
});

server.listen(PORT, () => {
  console.log(`Escuchando en el puerto ${PORT}`);
});
