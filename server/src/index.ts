import express from 'express';
const app = express();
const port = 9000;

app.get("/", (req, res) => res.send("Hello My World"));
app.listen(port);

console.log(`app is running on port ${port}`); 

