const request = require('supertest');
var app = require('../src/index.js');
 
app.get('/', function(req, res) {
  res.status(200);
});
 
request(app)
  .get('/')
  .expect(200)
  .end(function(err, res) {
    if (err) throw err;
  });