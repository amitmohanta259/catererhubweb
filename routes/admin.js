const express = require('express');
const router = express.Router();

router.get('/Admin',(req,res,next)=>{
    res.send('<h1>Inside Admin Pages</h1>')
});

module.exports = router;