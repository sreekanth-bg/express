// routes that respond to HTTP GET requests

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

app.get('/api/courses', (req,res) => { 
    res.send(courses);
  });

//app.listen(3000);
//app.listen(3000, () => console.log('Listening on port 3000...'));

const port = process.env.PORT || 3000 //env variable PORT is used if set
app.listen(port, () => console.log(`Listening on port ${port}...`));

