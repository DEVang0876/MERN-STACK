const express =require('express')
const app = express()
const port=3000

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.urlencoded());

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send("Hello world")
})

app.get('/home', (req,res)=>{
    res.sendFile(__dirname + '/home.html');
})

app.get('/about', (req,res)=>{
    res.sendFile(__dirname + '/about.html');
})

app.get('/params/:id/:id1', (req, res) => {
    const { id, id1 } = req.params;
    res.send(`Received params: ${id}, ${id1}`);
})

app.get('/search/:query', (req, res) => {
    const query = req.params.query;
    res.send(`Search results for: ${query}`);
})

app.get('/search', (req, res) => {
    const query = req.params.query;
    res.send(`Search results for: ${query}`);
})

app.get('/contactprocess', (req, res) => {
    res.sendFile(__dirname + '/contact.html');
})

app.get('/sum'), (req,res)=>{
    res.sendFile(__dirname + '/sum.html');
}
app.post('/sum', (req, res) => {
    const { num1, num2 } = req.body;
    const sum = parseFloat(num1) + parseFloat(num2);
    res.render('sum', { sum });
});

app.listen(port, ()=>{
    console.log(`example runiing on port ${port}`)
})