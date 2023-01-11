import express from "express";
import * as database from "./mysqlDatabase.js";

const app = express();

app.use(express.urlencoded({ extended: true }));

// use ejs
app.set("view engine", "ejs");

// use static files
app.use(express.static("public"));

app.get("/", async (req, res) => {    
    const notes = await database.getNotes();
    res.render("index", { notes: notes });
});

app.post("/createNote", async (req, res) => {
    const {title, content} = req.body;
    await database.addNote(title, content);
    res.redirect("/");
})

app.post("/deleteNote", async (req, res) => {
    await database.deleteNote(req.body.id);
    res.redirect("/");
});

const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log("Server is running on port", port);
});

