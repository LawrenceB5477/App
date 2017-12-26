var intropf = function(globalscope) {
  globalscope.setup = function() {
    var mycanvas = globalscope.createCanvas(globalscope.windowWidth, globalscope.windowHeight - 10);
    mycanvas.parent("canvascontainer");
  };

  globalscope.draw = function() {
    globalscope.background("black");
    //globalscope.drawEmbers();
  };

  globalscope.drawEmbers = function() {
    globalscope.fill("red");
    globalscope.noStroke();
    for (var i = 0; i < 20; i++) {
      globalscope.ellipse(globalscope.random(globalscope.width), globalscope.random(globalscope.height), 5, 5);
    }
  }
};

var myIntroP5 = new p5(intropf);
var depresso = document.getElementById("depresso");
depresso.loop = true;
depresso.volume = .25;
