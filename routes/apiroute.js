const db = require("../db/db.json")
const uuid = require('uuid')
const fs = require('fs')

function apiroutes(app) {
  app.get("/api/notes", function(req, res){
    console.log(req.body)
      res.json(db)
  })
  app.post("/api/notes", function(req, res){
    console.log(req.body) 
    let newItem = req.body;
    newItem.id = uuid.v4();
    db.push(newItem)
    fs.writeFile("./db/db.json", JSON.stringify(db), function(err){
      if (err) {
        console.log(err)
      }
    });
    res.json(db)
  })
}

module.exports = apiroutes