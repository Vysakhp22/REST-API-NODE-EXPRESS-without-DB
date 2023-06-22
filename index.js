const express = require('express');
const app = express();

app.get('/', (req, res) =>{
    res.send('Hello world');
});

app.get('/api/courses', (req,res) =>{
    res.send('MCA');
});

app.listen(3000, () => console.log('Listening to the port 3000') )