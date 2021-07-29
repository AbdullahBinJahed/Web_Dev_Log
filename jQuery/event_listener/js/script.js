$("#b1").click(() =>
{
  $("#out1").text("You have clicked the button, here have a cookie");
  $("#out1").toggleClass("style1");
});

$(".myButton").mouseover(function()
{
  var value = this.innerHTML;
  $("#out2").text(`${value} is clicked`);
});