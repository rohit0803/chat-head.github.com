$(".bubble").draggable( {
  containment: '.containment',
  snap: '.containment'
});

var isMoving = false;
var isdragging = false;
var chatMode = false;

$(".bubble").on("click", function(){
  // if chat bubble is in bottom half -> open from bottom
  })

$(".bubble").mousemove(function(){
  isdragging = true;
  $(this).css("transition", "all 0.2s");
});
