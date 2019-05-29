 var newwidth;
 var newheight;
 var newtop;
 var newleft;
 var scale2 = 1;
 
 $(function() {
	$( "#resizable" ).resizable({
    stop: function(event, ui) {
        newwidth = ui.size.width-40;
        newheight = ui.size.height-40;
		}
	});


    $( "#move-div" ).draggable({
  drag: function(event, ui) {
	  newtop=ui.position.top;
	  newleft=ui.position.left;
		
		$("#my-iframe").css("top",newtop+"px");
		$("#my-iframe").css("left",newleft+"px");
  }
});

  });
  

  $('#move-div').on("mousewheel", function(event) {
    scale2 += event.deltaY < 1 ? -0.05 : 0.05;
    scale2 = scale2 < 0.05 ? 0.05 : scale2;
    scale2 = scale2 > 20 ? 20 : scale2;
		
		$('#move-div').css({ transform: 'scale('+scale2+')' });
		$("#move-div").css("-webkit-transform-origin", "0 0");
		$("#move-div").css("-moz-transform-origin", "0 0");
		$("#move-div").css("-o-transform-origin", "0 0");
		$('#my-iframe').css({ transform: 'scale('+scale2+')' });
		$("#my-iframe").css("-webkit-transform-origin", "0 0");
		$("#my-iframe").css("-moz-transform-origin", "0 0");
		$("#my-iframe").css("-o-transform-origin", "0 0");

		
    event.preventDefault();
  });
  
  
  function loadweb(){
	    $("#my-iframe").attr("src", $("#website").val());
  }