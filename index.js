const express = require('express');
const app = express();
const port = 3000;

app.use(express.static(__dirname));

app.get('/', function(req, res) {
    res.sendFile(__dirname + "/static/index.html");
})

app.listen(port, () => {
    console.log("listening on port " + port);
});