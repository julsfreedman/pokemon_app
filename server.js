const express = require("express");
const app = express();
const PORT = 3000;
const pokemon = require("./models/pokemon");
const reactViews = require("express-react-views");

//====View Engine====
app.set('view engine', 'jsx');
app.engine('jsx', reactViews.createEngine());

//====Middleware====
app.use((req, res, next) => {
    console.log("middleware is running")
    next();
});
app.use(express.urlencoded({ extended: false }));

//====HomePage====
app.get("/", (req, res) => {
    res.send('Welcome to the Pokemon App!');
});

//====Index====
app.get("/pokemon/", (req, res) => {
    res.render("Index", { pokemon: pokemon });
});

//====New====
app.get("/pokemon/new", (req, res) => {
    res.render("New")
})

//====Create====
app.post("/pokemon", (req, res) => {
    pokemon.push(req.body);
    res.redirect("/pokemon");
});

//====Show====
app.get("/pokemon/:id", (req, res) => {
    res.render('Show', {
        pokemon: pokemon[req.params.id]
    })
});


//Listen to PORT 3000
app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
});
