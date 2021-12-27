const express = require('express');
const app = express();

const logger = (req, res, next) => { // middleware
    console.log(req.originalUrl)
    next() // as a must in middleware
}

app.set('view engine', 'ejs');

app.get('/', logger, (req, res, next) => { // we can set up multiple functions inside one by one, even the same!
    console.log('Started')
    res.render('index.ejs', {text: 'some text'})
})

const userRouter = require('./routes/users');

app.use('/users', userRouter)

app.listen(3000);