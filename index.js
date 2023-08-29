import express from 'express';
const app = express();
import bodyParser from 'body-parser';
import dateFns from 'date-fns';
const PORT = process.env.PORT || 3000;
var date = dateFns.format(new Date(), 'dd MMM yy')
var allTasks = []

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));

app.get('/', (req, res)=>{
    res.render('index.ejs', {
        date: date, 
        allTasks:allTasks, 
        length: allTasks.length
    })
})

app.get('/*', (req, res)=>{
    res.redirect('/')
})

app.post('/add', (req, res)=>{
    let newTitle = req.body.title;
    let newDescription = req.body.description;
    allTasks.push({title: newTitle, description: newDescription})
    console.log(allTasks);
    res.redirect('/')
})

app.listen(PORT, ()=>{
    console.log(`server is running on port  ${PORT}`)
})

export { allTasks};