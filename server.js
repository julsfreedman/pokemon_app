require("dotenv").config();
const express = require("express");
const app = express();
const PORT = 3000;
const pokemon = require("./models/pokemon");
const reactViews = require("express-react-views");
const mongoose = require("mongoose");

// ==== Connection to Database ====
//include these options to get rid of the deprecation warnings:
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
mongoose.connection.once("open", () => {
    console.log("connected to mongo")
})

//====View Engine====
app.set('view engine', 'jsx');
app.engine('jsx', reactViews.createEngine());

//====Middleware====
app.use((req, res, next) => {
    console.log("middleware")
    next();
});
app.use(express.urlencoded({ extended: false }));

//====HomePage====
app.get("/", (req, res) => {
    res.send('Welcome to the Pokemon App!' +
        '</br>' +
        '</br>' +
        '<a href="/pokemon/">Next Page</a>');
});

//====Index====
app.get("/pokemon/", (req, res) => {
    pokemon.find({}, (error, allPokemon) => {
        if (!error) {
            res.status(200).render("Index", {
                pokemon: allPokemon
            });
        } else {
            res.status(400).send(error);
        }
    });
});

//====New====
app.get("/pokemon/new", (req, res) => {
    res.render("New")
})

//====Create====
app.post("/pokemon", (req, res) => {
    pokemon.create(req.body, (error, createdPokemon) => {
        if (!error) {
            res
                .status(200)
                .redirect("/pokemon")
        } else {
            res
                .status(400).send(error)
        }
    })
});

//====Show====
app.get("/pokemon/:id", (req, res) => {
    pokemon.findById(req.params.id, (error, foundPokemon) => {
        if (!error) {
            res
                .status(200)
                .render("Show", {
                    pokemon: foundPokemon
                })
        } else {
            res
                .status(400)
                .send(error)
        }
    })
});


//Listen to PORT 3000
app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
});
