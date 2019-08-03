const express = require('express'); // express module loaded and const express is assignd which returns a function
const app = express(); // the function returns an object which is stored in the const app whichich will have CURD http methods

const courses = [
  { id:1, name: 'course1' },
  { id:2, name: 'course2' },
  { id:3, name: 'course3' },
];

app.get('/', (req,res) => { //this is  a route with the callback funtion (req, res)) or route angular
  res.send('hello world');
});

//app.get('/api/courses/:id', (req,res) => {
//  res.send(req.params.id);                     // the value of parameter (route parameters) can be read by using req.param
//});

//app.get('/api/posts/:year/:month', (req,res) => {
//  res.send(req.params);                        // all the values of the parameters can be read using req.params
//});

//app.get('/api/posts/:year/:month', (req,res) => {
//  res.send(req.query);                        // query parameters (after ? ex sortBy=name va be read using req.query)
//});

app.get('/api/courses', (req,res) => {
  const course = courses.find(c => c.id === parseInt(req.params.id)); // const course stores the result of the array function which has the logic to find id which matches the request
  if (!course) res.status(404).send('The course with the given ID was not found');
  res.send(course);
});

//app.listen(3000);
//app.listen(3000, () => console.log('Listening on port 3000...'));

const port = process.env.PORT || 3000 //env variable PORT is used if set
app.listen(port, () => console.log(`Listening on port ${port}...`));
