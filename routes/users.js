const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Users List')
})

router.get('/new', (req, res) => {
    res.send('New user form')
})

router.post('/new', (req, res) => {
    res.send('Create user')
})

router
    .route('/:id')
    .get((req, res) => {
        console.log(req.user)
        res.send(`A page with a user with id: ${req.params.id}`)
    })
    .put((req, res) => {
        console.log(req.user.name = 'Nick')
        res.send(`Updated user with id: ${req.params.id}`)
    })
    .delete((req, res) => {
        res.send(`A deleted user with id: ${req.params.id}`)
    })

const users = [{name: 'Vitaly'}, {name: 'Frank'}]

router.param('id', (req, res, next, id) => {
    req.user = users[id]
    next();
})

module.exports = router