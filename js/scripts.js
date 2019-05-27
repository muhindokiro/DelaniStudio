$(document).ready(function() {
$(".clickable").click(function(){
  $(".design-hidden").toggle();
  $(".design-showing").toggle();
});
$(".clickable2").click(function(){
  $(".development-hidden").toggle();
  $(".development-showing").toggle();
});
$(".clickable3").click(function(){
  $(".management-hidden").toggle();
  $(".management-showing").toggle();
});

$(".buttonsend").click(function(event) {
  event.preventDefault();
  var user = document.getElementById('nem').value;
  alert("Hello there " + user + " your message has been received.");
});
});
