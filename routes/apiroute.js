const db = require("../db/db.json")

function apiroutes(app) {
  app.get("/api/notes", function(req, res){
      res.json(db)
  })
  app.post("/api/notes", function(req, res){
    console.log(req.body) 
    db.push(req.body)
    res.json(db)
  })
}

module.exports = apiroutes