var frame = document.getElementById('canvas');
frame.height = 500;
frame.width = 800;


function Helix(parentElement){
  var canvas = parentElement;
  var ctx = canvas.getContext('2d');
  var phase = 0;
  var speed = 0.03;
  var maxRadius = 10;
  var count = 0;
  var numRows = 10;
  var numCols = 20;
  var colDifference = 35;
  var y;
  var strandPhase = 0;
  var pi = 3.14;

  this.draw = function() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    var x = 0
    count++;
    phase = count*speed;
    x = 0;
    for (var col = 0; col < numCols; col++) {
        //for difference between verticals
        x = x + colDifference;

        for (var row = 0; row < numRows; row++) {
          var y = 1/4*canvas.height + row * maxRadius*2 + Math.sin(phase+col)*40;
          // var y = Math.sin(row)+canvas.height/2;
          //size changes the radius of the circle
          var size = (Math.cos(phase+col)+1)*0.5;
          // var size = row;
          var radius = size * maxRadius;

          ctx.beginPath();
          ctx.arc(x, y, radius, 0, Math.PI * 2);
          if(row<numRows/2){
           ctx.fillStyle = '#ffae73';
          }
          else{
            ctx.fillStyle = '#e17da4';
          }
        ctx.fill();
      }
    }
  }
  setInterval(this.draw,30);
}

var helix = new Helix(frame);
