const express = require('express');
var bodyParser = require('body-parser')

const app = express();
var urlencodedParser = bodyParser.json({ extended: false })

const port = 5000;


app.get('/api/test', (req, res) => {
    const test = [1, 2, 3];
    res.json(test);
})
let booklist = [
];

app.get('/api/booklist', (req, res) => {
    res.json(booklist);
})

app.delete('/api/delete/book/:id', (req, res) => {
    console.log( req.params.id)
    booklist =  booklist.filter(book => {
        return book.id !== req.params.id
    });
    res.json("book deleted  succesfully");
})

app.post('/api/addbook', urlencodedParser, (req, res) => {
    booklist.push(req.body)
    res.json("book added succesfully");
})

app.listen(port, () => console.log(`server started on port ${port}`));