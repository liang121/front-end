var express = require('express');
var router  = express.Router();
/* GET users listing. */
router.post('/', function(req, res, next) {
    console.log(req.body);
    if ((req.body.userName === 'minh' && req.body.password === 'faith') ||
    	(req.body.userName === 'darth' && req.body.password === 'jedi')) {
        console.log(req.body);
        res.send({
            authentication: 'success'
        });
    } else {
        console.log('fail');
        res.status(403).send({
            authentication: 'fail'
        });
    }
});
module.exports = router;
