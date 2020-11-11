let express = require("express");
let app = express();

app.get("/",(req,res) => {
    res.send("Yolo edited 6 my man");
    console.log("Entered after edit 4 dude")
});

app.listen(80);
