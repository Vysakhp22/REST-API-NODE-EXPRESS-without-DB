const express = require('express');
const app = express();

app.get('/', (req, res) =>{
    res.send('Hello world');
});

app.get('/api/courses', (req,res) =>{
    res.send('MCA');
});

app.get('/api/courses/:id', (req, res) => {
    res.send(req.params.id);
});

app.get('/api/post/:id/:name', (req, res) => {
    res.send(req.params);
});

//query parameter
app.get('/api/post/:id/', (req, res) => {
    res.send(req.query);
});


//PORT
const port = process.env.port || 3000;
app.listen(port, () => console.log(`Listening to the port ${port}...`) )