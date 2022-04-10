const http = require('http');

const express = require('express');

const app = express();

const server = http.createServer(app);

var message = {
    name: 'mumumu',
    surname: 'Piyarat',
    IsageMember: true
}
var api = {
    message: message
}

app.get('/api/name', (req, res) => {
    api["statusCode"] = res.statusCode;
    res.send(api);
});

app.listen(3000);