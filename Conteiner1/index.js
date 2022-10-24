const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

app.listen(port, () => console.log("Hello World!"));

app.get("/", (req, res) => {
    console.log("Hello World!")
    res.send("Hello World!");
});