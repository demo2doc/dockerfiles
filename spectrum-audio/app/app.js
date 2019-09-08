var express = require("express");
var app     = express();
var path    = require("path");
var fs 		= require("fs");

app.get('/',function(req,res){
  backgroundPath="./public/images/background/"
  fs.readdir(backgroundPath,(err,files)=>{
  	  if(err){
  	  	console.log("err is "+err)
  	  }
  	  fileSize=files.length-1;
  	  console.log("backgroundPath "+backgroundPath);
  	  // console.log(files)
  	  // fileSize=1;
  	  console.log("background file size is "+fileSize);
  	  res.cookie('background-image-size',fileSize)
  	  res.sendFile(path.join(__dirname+'/index.html'));
  });

});
app.use('/static', express.static('public'));

app.listen(3000);

console.log("Running at Port 3000, Access url is http://localhost:3000");