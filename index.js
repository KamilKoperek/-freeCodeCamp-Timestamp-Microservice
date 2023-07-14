const express = require("express");
const app = express();


app.get("/api/:date", (req, res) => {
    let date = new Date(req.params.date);
    if(date == "Invalid Date") {
        let time = parseInt(req.params.date)
        if(isNaN(time)) {
            res.json({error: "Invalid Date"});
            return;
        }
        date = new Date(time);
    }
    res.json({utc: date.toUTCString(), unix: date.getTime()});
});

app.listen(3000, () => {
    console.log("server started");
});