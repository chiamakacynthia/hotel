require("dotenv").config();
const express = require("express");
const port = 4000;
const app = express();

app.use(express.json());


app.get("/", (req, res) => {
res.send("server is now up and running")
});

app.listen(port, () =>{
    console.log(`server is listening to: ${port}`)
});
