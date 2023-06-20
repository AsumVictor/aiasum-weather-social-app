const express = require("express");
const router = express.Router();

// get weather condition with limited informations
router.get("/", ()=>{
    console.log('get weather condition with limited informations')
})

module.exports = router;