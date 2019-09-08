var screensDir = 'captures/';
var stepCounter = 0;

var casper = require('casper').create({
  verbose: true,
   logLevel: "debug",
  onError: function(self, msg) {
        this.capture('error.png');
        console.log('error: ' + msg);
        self.exit();
  },
  // viewportSize: {
  //   width: 1200,
  //   height: 900
  // }
});

var stepCapture = function () {
  var str = String(++stepCounter);
  while (str.length < 5) {
    str = '0' + str;
  }
  casper.capture(screensDir + 'step-complete-' + str + '.png', {
    top: 0,
    left: 0,
    width: 1200,
    height: 900
  });
};

// casper.on('step.start', stepCapture);
// casper.on('step.complete', stepCapture);

casper.start('http://www.baidu.com/',function(){
   this.echo(this.getCurrentUrl());
    this.echo("current page title is "+this.getTitle());
    str="0";
   
    // casper.capture(screensDir + 'step-complete-' + str + '.png');
    // casper.captureSelector('1.png', '#defaultCanvas0');
});
casper.wait(3000);

casper.then(function() {
    // this.page.sendEvent("keypress", this.page.event.key.PageUp);
    // stepCapture();
    str="0";
    // casper.capture(screensDir + 'step-complete-' + str + '.png');
    casper.captureSelector('1.png', 'html');
});

casper.run();