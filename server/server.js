const express = require('express');
const bodyParser = require('body-parser');

const Port = 3000;
const api = require('./router/api');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/api',api);
app.get('/',function(req,res){
    res.send('Hello word from server');
})
app.listen(Port,function(){
    console.log('Server running in the Port',Port);
})