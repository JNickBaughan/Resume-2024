
import express, { Request, Response } from 'express';
let bodyParser = require('body-parser')
let PORT = 3000;
let server = express();

const middlewares = [
  express.static('dist'),
  bodyParser.json(),
  bodyParser.urlencoded({ extended: true })
];
	
server.use(...middlewares);

server.get("/", (_: Request, res: Response) => {
  res.send(`
  <!DOCTYPE html>
  <html>
    <head>
    <style>
      html, body {
        height: 100%;
        overflow: hidden;
        font-family: arial, sans-serif;
        box-sizing: border-box;
      }

      body::-webkit-scrollbar {
          display: none;
      }

      #root {
        max-width: 1200px;
        margin: 0 auto; 
        height: 96vh;
        padding: 1px 0;
      }
    </style>
    <link rel="stylesheet" type="text/css" href="styles.css" />
    </head>
    <body>
      <div id="root" />
      <div>HELLO WORLD!!</div>
      <script src="bundle.js"></script>
    </body>
  </html>
  `);
});

server.listen(PORT, function(){
	console.log('server listening on port: ' + PORT);
});
