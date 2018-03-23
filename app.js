const express = require('express');
const app = express();
const PORT = 3000;

app.use('/public', express.static('public'));

app.set('views', './views');
app.set('view engine', 'ejs');

app.get('/movies', (req, res) => {
    res.send("Bientot des films");
});

app.get('/movies/add', (req,res) => {
    res.send("blabla");
});

app.get('/movies/:id', (req,res) => {
    const id = req.params.id;
    res.send(`Film numero ${id} `);
});

app.get('/', (req,res) => {
    res.render('index');    
});

app.listen(3000, function(){
    console.log(`listening on port ${PORT}`);
});