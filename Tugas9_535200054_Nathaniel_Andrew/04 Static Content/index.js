var express = require('express')

var app = express()
app.use('/public',express.static('public'));

//specified Port
app.listen(3000)