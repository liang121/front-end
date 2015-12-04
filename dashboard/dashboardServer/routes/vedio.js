var express = require('express');
var router  = express.Router();
/* GET users listing. */
router.get('/', function(req, res, next){ 
	console.log("1");
    res.send({

        vedio:[
				    {Name:"Last Minute Goal", url:"https://www.youtube.com/embed/mQdpLFQfonQ",
				   },
				    {Name:"Amazing Curve Goals", url:"https://www.youtube.com/embed/rEKGTq3onIo"},
				    {Name:"Best Goalkeeper Saves Ever", url:"https://www.youtube.com/embed/TS2aJpXPgho"},
				    {Name:"Top 30 Goals World Cup 2014", url:"https://www.youtube.com/embed/j23Pcy9QJ80"},
				    {Name:"Top 20 Last Minutes Goals Ever", url:"https://www.youtube.com/embed/l2lAKflgwrA"}
				]
   			 });
});
module.exports = router;



