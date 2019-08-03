const express = require('express'); // express module loaded and const express is assignd which returns a function
const app = express(); // the function returns an object which is stored in the const app whichich will have CURD http methods

app.get('/', (req,res) => { //this is  a route with the callback funtion (req, res)) or route angular
  res.send('hello world');
});

app.get('/api/courses', (req,res) => {
  res.send([1, 2, 3]);
});

app.get('/api/courses/:id', (req,res) => {
  res.send(req.params.id);                     // the value of parameter (route parameters) can be read by using req.param
});

//app.get('/api/posts/:year/:month', (req,res) => {
//  res.send(req.params);                        // all the values of the parameters can be read using req.params
//});

app.get('/api/posts/:year/:month', (req,res) => {
  res.send(req.query);                        // query parameters (after ? ex sortBy=name va be read using req.query)
});

//app.listen(3000);
//app.listen(3000, () => console.log('Listening on port 3000...'));

const port = process.env.PORT || 3000 //env variable PORT is used if set
app.listen(port, () => console.log(`Listening on port ${port}...`));
