var express = require('express');
var router = express.Router();
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('mydb.db');

// db.run('CREATE TABLE lorem (info TEXT)');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/timbang', function(req, res, next) {
    var rowData={};
    db.serialize(function() {
        db.all('SELECT rowid as id, info FROM lorem',function(err, row)
        {
            rowData = row;
            res.render('timbang', {data:rowData});
        });
     });
    db.close();

    
});

module.exports = router;
