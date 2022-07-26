//Install express server
const express = require('express');
const cors = require('cors');
const app = express();

//
const whitelist = ['https://portfolio-be-francovico.herokuapp.com/']; // list of allow domain

const corsOptions = {
    origin: function (origin, callback) {
        if (!origin) {
            return callback(null, true);
        }

        if (whitelist.indexOf(origin) === -1) {
            var msg = 'The CORS policy for this site does not ' +
                'allow access from the specified Origin.';
            return callback(new Error(msg), false);
        }
        return callback(null, true);
    }
}
//

app.use(cors());

const path = require('path');

// Serve only the static files form the dist directory
app.use(express.static('./dist/portfolio-fe'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/portfolio-fe/'}),
);

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
