let express = require("express");
let app = express();

app.get("/",(req,res) => {
    //res.send("Yolo edited 7 my man");
    res.send(process.env.HISHAM);
    console.log(process.env.HISHAM);
    console.log("Entered after edit 4 dude")
});

app.listen(80);
