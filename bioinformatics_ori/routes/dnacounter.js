var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  console.log("## get");
  var a=0, c=0, g=0, t=0;
  var seq = req.query.seq+"";
  seq = seq.toUpperCase();
  console.log("seq: "+seq);
  if(seq){
    for(i=0;i<seq.length;i++) {
        if(seq[i] == "A"){
            a += 1;
        } else if(seq[i] == "C") {
            c += 1;
        } else if(seq[i] == "G") {
            g += 1;
        } else if(seq[i] == "T") {
            t += 1;
        }
    }
  }
  
  res.render('dnacounter', { cntA:a, cntC:c, cntG:g, cntT:t });
});

module.exports = router;