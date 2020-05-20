document.onreadystatechange = function() { 
  if (document.readyState !== "complete") { 
      document.querySelector( 
        "body").style.visibility = "hidden"; 
      document.querySelector( 
        "lottie-player").style.visibility = "visible"; 
  } else { 
      document.querySelector( 
        "lottie-player").style.display = "none"; 
      document.querySelector( 
        "body").style.visibility = "visible"; 
  } 
}; 
$(document).ready(function(){

    $("#gallery img").click(function(){
    var t = $(this).attr("src");
    $(".modal-body").html("<img src='"+t+"' class='modal-img'>");
    $("#myModal").modal();
  });
  });//EOF Document.ready
