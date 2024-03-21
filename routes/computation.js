var express = require('express');
var router = express.Router();




/* GET users listing. */
router.get('/', function(req, res, next) {
    const randomValue = Math.random() * 100;
    atan2 = Math.atan2(randomValue);
    atanh = Math.atanh(randomValue);
    cbrt = Math.cbrt(randomValue);
 
  res.send(`Math.atan2 applied to [${randomValue}] is ${atan2}\nMath.atanh applied to [${randomValue}] is ${atanh}\nMath.cbrt applied to [${randomValue}] is ${cbrt}`);
});
module.exports = router;
