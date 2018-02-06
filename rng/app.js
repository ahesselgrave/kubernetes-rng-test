let express = require('express');
let app = express();
let PORT = 80;

let randomDigit = () => Math.floor(Math.random() * 10);

app.get('/', (req, res) => res.send('' + randomDigit()));

app.listen(PORT, () => console.log('Listening on port ' + PORT));
