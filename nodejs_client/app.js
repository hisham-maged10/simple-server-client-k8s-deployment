let request = require('request');
let express = require("express")

let app = express();

app.get("/accessServer",accessServer);

function accessServer(req,res){
    console.log("Accessing Client server");
    let body_client = "hey I'm client and I got";
    request('http://server', function (error, response, body) {
      if (!error && response.statusCode == 200) {
        console.log(body) // Print the google web page.
        body_client = body_client + " " + body;
        console.log(body_client);
        res.send(body_client);
      }
        console.log("ana d5lt b3d al edit");
    });
}

app.listen(80,() => console.log("client's server started listening on port 80"));
