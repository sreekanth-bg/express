// routes that respond to HTTP POST requests. Using npm JOI for input validation

const Joi = require('joi');
const express = require('express'); // express module loaded and const express is assignd which returns a class
const app = express(); // the function returns an object which is stored in the const app whichich will have CURD http methods

app.use(express.json()); // enable parsing of JSON objects in the body of the requests

const courses = [
  { id:1, name: 'course1' },
  { id:2, name: 'course2' },
  { id:3, name: 'course3' },
];

app.get('/', (req,res) => { //this is  a route with the callback funtion (req, res)) or route angular
  res.send('hello world');
});

app.get('/api/courses', (req,res) => { 
  res.send(courses);
});

app.post('/api/courses', (req, res) => {
    const schema = {
        name: Joi.string().min(3).required()
    };

    const result = Joi.validate(req.body, schema);
    //console.log(result);
    if (result.error) {
        //res.status(400).send(result.error); // send all error details of all objects
        res.status(400).send(result.error.details[0].message); //send only message property of details element
        return;
    }
  const course = {
      id: courses.length + 1, //id is automatically incremented by 1
      name: req.body.name    //name is read from the body of the request (req will have object with name property)
  };
  courses.push(course);    // add the course to the courses array
  res.send(course);
});

//app.listen(3000);
//app.listen(3000, () => console.log('Listening on port 3000...'));

const port = process.env.PORT || 3000 //env variable PORT is used if set
app.listen(port, () => console.log(`Listening on port ${port}...`));

