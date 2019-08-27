var express = require('express');
var router = express.Router();

// get
router.get('/', function(req, res, next) {
  res.render('gc', {gcp:0});
});

// post
router.post('/', function(req, res, next) {
  console.log("## post");
  var a=0, c=0, g=0, t=0, gcp=0;
  /* seq set to req.body.seq */
  var seq = /**/;
  seq = seq.toUpperCase();
  console.log(req.body);
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
    /* calc gc percent */
    gcp = /**/;
    /* round using Math.round() */
    gcp = /**/;
    console.log("a: "+a+",c: "+c+",g: "+g+",t: "+t);
    console.log('gc: '+gcp);
  }
  /* render gcp : gcp */
  res.render('gc', {/**/});
});

module.exports = router;