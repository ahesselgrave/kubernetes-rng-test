const express = require('express');
const request = require('request-promise');

let app = express();
let PORT = 80;
let RNG_URL = 'http://rng-service.playfull.svc.cluster.local';

app.get('/rng', async (req, res) => {
    let rngResult = await request(RNG_URL);
    res.send(rngResult);
});

app.listen(PORT, () => console.log('Listening on port ' + PORT));
