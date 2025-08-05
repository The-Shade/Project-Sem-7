const express = require("express");
const app = express();
app.use(express.json());
const db = new (require('./database_test.js'))();
const PORT = 3000;


app.get('/posts', (req, res) => {
    res.setHeader("Content-Type", "application/json");
    db.get_all_posts().then(value => {
        res.send(value);
    });
});

app.get('/posts/:id', (req, res) => {
    res.setHeader("Content-Type", "application/json");
    db.get_post(Number(req.params.id)).then(value => {
        res.send(value);
    });
});

app.post('/posts', (req, res) => {
    let new_post = {
        author: req.body.author,
        title: req.body.title,
        content: req.body.content
    };
    res.setHeader('Content-Type', 'application/json');

    db.add_post(new_post).then(
        value => {
            console.log(value);
            res.send(value);
        }
    );
});

app.put('/posts/:id', (req, res) => {
    res.setHeader("Content-Type", "application/json");

    db.update_post(Number(req.params.id), req.body).then(value => {
        res.send(value);
    });
});

app.delete('/posts/:id', (req, res) => {
    res.setHeader("Content-Type", "application/json");

    db.delete_post(Number(req.params.id)).then(value => res.send(value));
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});