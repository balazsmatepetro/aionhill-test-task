const colourLovers = require('colourlovers');
const express = require('express');
const app = express();

app.use(express.static('dist'));

app.get('/', function (req, res) {
    res.sendFile('index.html');
});

app.get('/palettes', (request, response) => {
    colourLovers.get('/palettes/new', {
        format: 'json',
        resultOffset: request.query.from ? parseInt(request.query.from) : 0,
        numResults: 4
    }, (error, data) => {
        // console.log(request.query);
        // console.log('from', request.query.from ? parseInt(request.query.from) : 0);

        response.send(data);
    });
});

app.listen(8888, function () {
    console.log('Example app listening on port 8888!');
});
