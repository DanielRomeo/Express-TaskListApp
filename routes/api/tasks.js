const express = require('express');
const router = express.Router();
const tasks = require('../../Tasks.js');
const uuid = require('uuid');

//get all tasks:
router.get('/', (req, res)=>{
	res.json(tasks);
});

router.post('/', (req, res)=>{

	const newTask = {
		id: uuid.v4(),
		title: req.body.title,
		info: req.body.info
	}

	if(!newTask.title || !newTask.info){
		return res.status(400).json({"msg": "Please input title and info"});
	}

	tasks.push(newTask);
	res.redirect('/');
})

router.post('/:id', (req,res)=>{

	if(req.query.method == "delete"){
		console.log("true");
		const found = tasks.some(task => task.id === req.params.id);


		if(found){
			// dont just filter but delete the item from teh array:
			/* first get the array and delete waht u want then push back to the array*/
			let data = tasks;
			for(let i = 0; i < tasks.length; i++){
				if(req.params.id == tasks[i].id ){
					tasks.splice(0, 1);
				}
			}
			res.redirect('/');
			console.log(`Task with the id ${req.params.id} has been deleted...`);

		}else{
			// http status: 400 == bad req.
			res.status(400).json({msg: 'task not found'})
		}
		
	}
	// res.redirect('/');

	// res.json(tasks);
})

module.exports = router;