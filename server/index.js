const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.static(path.join(__dirname, 'images')));

app.get('/', function(req, res) {
    res.sendFile(path.resolve(__dirname, '../game/index.html'));
});

app.listen(3000, function() {
    console.log(`Listening on port 3000`);
});
