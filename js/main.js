
$(document).ready(function(){

    $("#gallery img").click(function(){
    var t = $(this).attr("src");
    $(".modal-body").html("<img src='"+t+"' class='modal-img'>");
    $("#myModal").modal();
  });
  });//EOF Document.ready

window.onbeforeunload = function(e) {
  e.preventDefault();
  if ( $("body").hasClass("about-on") | $("body").hasClass("contact-on") | $("body").hasClass("tech-on") | $("body").hasClass("hackathon-on") | $("body").hasClass("workshop-on") | $("body").hasClass("webinar-on") | $("body").hasClass("gallery-on") ) {
      $("body").removeClass();
      $(".float").attr('style', 'display: none;');
      return none;
  }
}