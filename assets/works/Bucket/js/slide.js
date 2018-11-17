$(function() {
  var dot = $('.slide-dot');
  var slideDrag = $('.slide-drag');
  var width = 200;
  var slideDragWidth = 50;
  var params = {
    top: 0,
    left: 0,
    currentX: 0,
    currentY: 0,
    drag: false
  };

  params.y = parseInt(dot.css('top'));
  params.x = parseInt(dot.css('left'));
  dot.on('mousedown', function(e) {
    params.drag = true;
    params.currentX = e.clientX;
    params.currentY = e.clientY;
  });
  $(document).on('mousemove', function(e) {
    if(!params.drag) {
      return;
    }
    console.log('move')
    var nowX = e.clientX;
    var nowY = e.clientY;
    var distX = nowX - params.currentX;
    var distY = nowY - params.currentY;
    var targetX = params.left + distX;

    if(targetX <= 0) {
      targetX = 0;
    }
    if(targetX > width - 20) {
      targetX = width - 20;
    }
    dot.css({
      left: targetX,
      //top: distY
    });
    moveDot(targetX);
  })
  $(document).on('mouseup', function() {
    params.drag = false;
    params.left = parseInt(dot.css('left'));
    params.top = parseInt(dot.css('top'));
    console.log('documnt mouseup', dot.css('left'))
  })
  function moveDot(position) {
    let scale = (width - slideDragWidth) / (width - 20) * position;
    slideDrag.css('left', scale);
  }
})

var o = [
  {value: 300, u: true},
  {value: 500, u: false},
  {value: 100, u: false},
  {value: 100, u: true}
]
var s = o.sort((a, b) => {
  return a.value > b.value
}).sort((a, b) => {
  return (a.value == b.value && b.u) ? 1 : 0;
})
console.log(s) 
