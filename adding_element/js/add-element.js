
$(document).ready(function(){
  $("#in").hide();
    $("#btn2").hide();

$("#todo").slideUp(1000).slideDown(1000);
$("#but").click(function(){
  $("#in").show();
      $("#but").hide();
          $("#btn2").show();


  });

  $("#btn2").click(function(){

      var s=$("#in").val();
      $("#todo").append("<li class='ho'>"+s+"</li>");
var c=$("#todo li").length;
$("#no").val(c);

});
});
