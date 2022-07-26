//Install express server
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

const path = require('path');

// Serve only the static files form the dist directory
app.use(express.static('./dist/portfolio-fe'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/portfolio-fe/'}),
);

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 80);
