const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
var test = [];

const app = express();

app.set('views', path.join(__dirname, '../public/views/'))

.use('/public', express.static('public'))
.use(bodyParser.urlencoded({ extended: true }))

.get('/', (req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.render('todolist.ejs', {test: test});
})

.post('/', (req, res) => {
    if(req.body.inputList != ''){
        test.push(req.body.inputList)   ;
    }
    console.log(test);
    res.render('todolist.ejs', {test: test});
})

.listen(8080);

