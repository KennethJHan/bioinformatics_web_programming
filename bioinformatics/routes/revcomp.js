var express = require('express');
var router = express.Router();
var exec = require("child_process").exec;

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("## GET: revcomp");
  res.render('revcomp', { input: "", result: "", option: "" });
});

router.post('/', function(req, res, next) {
  console.log("## POST: revcomp");
  var result = "";
  var seq = req.body.seq;
  var option = "";
  seq = seq.toUpperCase();
  if(req.body.rev !== undefined)
    option += "rev";
  if(req.body.comp !== undefined)
    option += "comp";

  var cmd = "python public/scripts/revComp.py "+seq+" "+option;
  console.log("cmd: "+cmd);
  console.log("seq: "+seq);
  console.log("opt: "+option);
  if(seq){
    exec(cmd, function(err,stdout,stderr){
      console.log("stdout: "+stdout);
      console.log("stderr: "+stderr);
      res.render('revcomp', {input: seq, result: stdout, option: option});
    });
  }
  
  //res.render('revcomp', { result: result });
});

module.exports = router;