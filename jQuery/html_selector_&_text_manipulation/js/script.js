$(".my-div h1, #p1").text("Adachi wa saiko");
$("#p2").html("<b>Tsuki</b>");
// adds text at the beginning
$("#p3").prepend("Adachi");
// adds text at the end
$("#p3").append("Shimamura");

var p_before = $("<p></p>").text("Before");
var p_after = $("<p></p>").text("After");
$("#p4").before(p_before);
$("#p4").after(p_after);