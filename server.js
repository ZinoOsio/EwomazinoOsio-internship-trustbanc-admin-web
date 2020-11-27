const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(_dirname + '/dist/FigmaAssignment'));

app.get('/*', function(req, res) {
    res.sendFile(path.join(_dirname + '/dist/FigmaAssignment/index.html'));
});

app.listen(process.env.PORT || 3000);