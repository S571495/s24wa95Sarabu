var express = require('express');
var router = express.Router();




/* GET users listing. */
router.get('/', function(req, res, next) {
  const x = req.query.x ? parseFloat(req.query.x) : Math.random() * 100;
    atan2 = Math.atan2(x);
    atanh = Math.atanh(x);
    cbrt = Math.cbrt(x);
 
  res.send(`Math.atan2 applied to [${x}] is ${atan2}\nMath.atanh applied to [${x}] is ${atanh}\nMath.cbrt applied to [${x}] is ${cbrt}`);
});
module.exports = router;
