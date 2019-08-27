var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  console.log("## get");
  // SET "a, c, g, t" to 0
  var /**/;
  // SET seq to req.query.seq
  var seq = /**/;
  // seq.toUpperCase()
  seq = /**/;
  console.log("seq: "+seq);
  // count A, C, G, T
  if(seq){
    for(/*;;*/) {
        if(seq[i] == "A"){
            a += 1;
        } else if(/**/) {
            /**/;
        } else if(/**/) {
            /**/;
        } else if(/**/) {
            /**/;
        }
    }
  }
  // render to dnacounter
  // pass value. cntA: a, cntC: c, ...
  res.render('dnacounter', { /**/ });
});

module.exports = router;