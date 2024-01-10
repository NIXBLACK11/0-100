const express = require("express")
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());

const users = [
    {
        name: "John",
        kidneys: [
            {
                healthy:false
            }
        ]
    }
]

app.get('/', function(req, res) {
   const johnKidneys = users[0].kidneys;
   const numberOfKidneys = users[0].kidneys.length;
   let numberOfhealthyKidneys = 0;
   for(let i=0;i<numberOfKidneys;i++) {
        if(users[0].kidneys[i].healthy) {
            numberOfhealthyKidneys++;
        }
   }
   res.json({
        johnKidneys,
        numberOfhealthyKidneys
   })
});

app.post('/', function(req, res) {
    const isHealthy = req.body.health;
    users[0].kidneys.push({
        healthy: isHealthy
    })
    res.json({
        msg: "Done!"
    })
});

app.put('/', function(req, res) {
    for(let i=0;i<users[0].kidneys.length;i++) {
        users[0].kidneys[i].healthy = true;
    }
    res.json({
        msg: "Done!"
    })
});

app.delete('/', function(req, res) {
    //based on checks you can send status
    //res.status(411).json({msg:"you have no bad kidneys"})'

    for(let i=0;i<users[0].kidneys.length;i++) {
        if(!users[0].kidneys[i].healthy) {
            users[0].kidneys[i].pop;
        }
    }
    res.json({
        msg: "Done!"
    })
});

app.listen(3000);