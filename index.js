const express = require('express');
const Joi = require('joi')
const app = express();

app.use(express.json());

const courses = [
    { id: 1, name: 'MCA' },
    { id: 2, name: 'BCA' },
    { id: 3, name: 'BBA' }
];


// GET endPoint
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


//POST endPoint

app.post('/api/courses', (req, res) =>{
   const schema = Joi.object({
    name :Joi.string().min(3).required()
   });
   const result = schema.validate({name: req.body.name})
    console.log(result);
    if(result.error){
        res.status(400).send('Name is required and should be minimum 3 character');
       res.send('error:'+result.error)
        return;
    }
    const course = {
        id: courses.length+1,
        name: req.body.name
    };
    courses.push(course);
    res.send(course );
});




//PORT
const port = process.env.port || 3000;
app.listen(port, () => console.log(`Listening to the port ${port}...`))