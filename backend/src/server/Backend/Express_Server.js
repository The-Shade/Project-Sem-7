require('dotenv').config();

const express = require("express");
const utils = require("../Utils/Utils.js");
const db = new (require('./database.js'))();

const app = express();
app.use(express.json());
app.use((require('cors'))());
app.use((require("cookie-parser"))());

const PORT = process.env.NODE_PORT;

if (!db.connect()) {
    throw new Error ("Database Connection Error");
}

// Posts Routes

app.get('/posts', (req, res) => {
    res.setHeader("Content-Type", "application/json");
    db.get_all_posts().then(value => {
        res.json(value);
    });
});

app.get('/posts/:id', (req, res) => {
    res.setHeader("Content-Type", "application/json");
    db.get_post(utils.ConvertToObjectID(req.params.id)).then(value => {
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

    db.add_post(new_post).then(value => {
        res.send(value);
    });
});

app.put('/posts/:id', (req, res) => {
    res.setHeader("Content-Type", "application/json");

    db.update_post(utils.ConvertToObjectID(req.params.id), req.body).then(value => {
        res.send(value);
    });
});

app.delete('/posts/:id', (req, res) => {
    res.setHeader("Content-Type", "application/json");

    db.delete_post(utils.ConvertToObjectID(req.params.id)).then(value => res.send(value));
})

// User Routes

app.get('/users/', (req, res) => {
    res.setHeader("Content-Type", "application/json");

    db.get_all_users()
        .then(value => res.json(value));
});

app.get('/users/:id', (req, res) => {
    res.setHeader("Content-Type", "application/json");

    db.get_user(utils.ConvertToObjectID(req.params.id))
        .then(value => res.json(value));
});

app.post('/users/', (req, res) => {
    res.setHeader("Content-Type", "application/json");

    db.add_user(req.body.user)
        .then(value => res.json(value));
});


app.put('/users/:id', (req, res) => {
    res.setHeader("Content-Type", "application/json");

    db.update_user(utils.ConvertToObjectID(req.params.id), req.body.user)
        .then(value => res.json(value));
});

app.delete('/users/:id', (req, res) => {
    res.setHeader("Content-Type", "application/json");

    db.delete_user(utils.ConvertToObjectID(req.params.id))
        .then(value => res.json(value));
});

// Admin Routes

app.delete("/admin/delete-all/users/", (req, res) => {
    if (req.body.user.role === "Admin") {
        db.clear_users()
            .then(value => res.json(value));
    } else {
        res.json({status: 403, message: "Request denied"});
    }
});

app.delete("/admin/delete-all/posts/", (req, res) => {
    if (req.body.user.role === "Admin") {
        db.clear_posts()
            .then(value => res.json(value));
    } else {
        res.json({status: 403, message: "Request denied"});
    }
});


app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running on port ${PORT}`);
});