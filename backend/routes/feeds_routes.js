const express = require("express");
const router = express.Router();

// Get all feeds from users according time and location
router.get('/', ()=>{
    console.log('Get all feeds from users')
})

// Get all feeds from a user 
router.get('/user', ()=>{
    console.log('Get all feeds from a user')
})

// Get a specific feed
router.get('/user/:id', ()=>{
    console.log('Get a specific feed')
})

router.post('/', ()=>{
    console.log('Add new feed to the feeds')
})

router.delete('/', ()=>{
    console.log('delete a feed from the feeds')
})

router.patch('/', ()=>{
    console.log('Edit a feed')
})

module.exports = router