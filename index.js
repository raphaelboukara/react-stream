import React from 'react';
import http from 'http';
import {
    renderToString,
    renderToNodeStream
} from 'react-dom/server';
import App from './App';
import { Stream } from 'stream';

const server = http.createServer();

server.listen(4444, 'localhost');

server.on('listening', () => {
    console.log('Server started !');
});


server.on('request', (request, response) => {
    const { method, url } = request;
    console.log('Start request : %s %s', method, url);

    const content_type = 'text/html; charset=utf-8';
    response.setHeader('Content-Type', content_type);

    response.write('<html><head><title>TEST</title></head><body style="display: flex; flex-wrap: wrap;">');

    setInterval(
        () => response.write('<span style="font-size:18px;">-</span>'),
        100
    )

    response.write('</body></html>');
});


// server.on('request', (request, response) => {
//     const { method, url } = request;
//     console.log('Start request : %s %s', method, url);

//     const content_type = 'text/html; charset=utf-8';
//     response.setHeader('Content-Type', content_type);


//     if (url === '/stream') {
//         response.write('<html><head><title>STREAM</title></head><body><div id="root">');

//         const stream = renderToNodeStream(<App />);
//         stream.pipe(response, { end: 'false' });

//         stream.on('end', () => {
//             response.end('</div></body></html>');
//         });
//     } else {
//         const content = renderToString(<App/>);
//         const html = `
//             <html>
//                 <head>
//                     <title>STRING</title>
//                 </head>
//                 <body>
//                     <div id="root">${content}</div>
//                 </body>
//             </html>
//         `;

//         response.end(html);
//     }
// });
