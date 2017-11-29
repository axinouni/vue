const express = require('express')
const app = express()
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
  extended:true
}));
app.all('*', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, marketToken, sysType')
  res.header('Access-Control-Allow-Methods', 'POST, GET')
  res.header('X-Powered-Type', '3.2.1')
  res.header('Content-Type', 'application/plain;charset=utf-8')
  next()
})
app.post('/login', (req, res, next) => {
  console.log(req.body);
  console.log(req.headers);
  res.send({username: 'zhaiyuxin', pwd: '123'})
})

app.listen(8082, () => {
  console.log('this port 8082')
})
