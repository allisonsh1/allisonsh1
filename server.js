const express = require('express');

console.log('server startup');

const app = express();
const PORT = 8080;

app.set('view engine', 'ejs');

app.use('/js', express.static('public/js'));
app.use('/css', express.static('public/css'));

app.use(require('./server/routes/router'));

console.log('setup finished');

app.listen(PORT, "0.0.0.0");

console.log('app listening');

/*
app.listen(PORT, (error) => {
    if (!error) {
        console.log(`Server running at http://localhost:${PORT}`);
    } else {
        console.log(`Server startup failed: ${error}`);
    }
});
*/

module.exports = app;
