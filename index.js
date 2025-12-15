require('dotenv').config();
const express = require('express');
const app = express();
const path = require("path");

app.use(express.static(__dirname)); // Serve all static files (HTML, JS)

const port = 3000;

// Trang chính
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

// ListVoters
app.get("/ListVoters.html", (req, res) => {
    res.sendFile(path.join(__dirname, "ListVoters.html"));
});

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});