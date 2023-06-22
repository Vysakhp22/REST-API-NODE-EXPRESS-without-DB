const express = require('express');
const app = express();

const courses = [
    { id: 1, name: 'MCA' },
    { id: 2, name: 'BCA' },
    { id: 3, name: 'BBA' }
];

app.get('/', (req, res) => {
    res.send('Hello world');
});

app.get('/api/courses', (req, res) => {
    res.send('MCA');
});

app.get('/api/courses/:id', (req, res) => {
    const course = courses.find(v => v.id === parseInt(req.params.id));
    if (!course) res.status(404).send('couldnot find any courses');
    res.send(course);
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
app.listen(port, () => console.log(`Listening to the port ${port}...`))