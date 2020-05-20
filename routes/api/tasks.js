const express = require('express');
const router = express.Router();
const tasks = require('../../Tasks.js');

//get all tasks:
router.get('/', (req, res)=>{
	res.json(tasks);
});

module.exports = router;