$(".bubble").draggable( {
  containment: '.containment',
  snap: '.containment'
});

var isMoving = false;
var isdragging = false;
var chatMode = false;

function closeChat(){
    $(".bubble").css("top", "50%").css("left", "-25px").css("transition", "all 0.5s");
    $(".chat").addClass("bounceout").removeClass("bouncein");
    $(".chat").replaceWith($(".chat").clone(true));
}


$(".bubble").on("click", function(){

  var pos = $(".chat_container").offset();

  if(chatMode){
    closeChat();
    chatMode = false;
  }else{

      $(".chat").addClass("bouncein").removeClass("bounceout");
      $(".bubble").css("top", (pos.top + 30) + "px").css("left", (pos.left - 70) + "px").css("transition", "all 0.3s");
      $(".chat").replaceWith($(".chat").clone(true));

    chatMode = true;

  }
});

$(".bubble").mousedown(function(){
  isdragging = false;
});

$(".bubble").mousemove(function(){
  isdragging = true;
  $(this).css("transition", "all 0s");
});

$(".bubble").mouseup(function(e){
  e.preventDefault();
  var lastY = window.event.clientY;
  var lastX = window.event.clientX;
  var swidth = $( window ).width();

  if(isdragging){

    if(chatMode){
      chatMode = false;
      closeChat();
    }

    if(lastX > (swidth/2)){
      $(this).css("top", lastY).css("left", (swidth-95) + "px").css("transition", "all 0.4s");
    }else{
      $(this).css("top", lastY).css("left", "15px").css("transition", "all 0.4s");
    }
  }
});
