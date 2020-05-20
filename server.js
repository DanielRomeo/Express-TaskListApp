const express = require('express');
const app = express();
const exphbs  = require('express-handlebars');
const tasks = require('./Tasks.js');


//handlebars middle:
app.engine('handlebars', exphbs({defaultLayout: "main"}));
app.set('view engine', 'handlebars');


// render handlebars first page:
app.get('/', (request, response)=>{
	response.render('index', {
		tasks
	});
})

// body parser:
app.use(express.json());
app.use(express.urlencoded({extended: false}));


// // members api routers
app.use('/api/tasks', require('./routes/api/tasks') );

const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=> console.log(`Server running on port:${PORT}`));