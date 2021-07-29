$("#btn").click(function()
{
  // $("#div1").hide(2000).show(2000);
  // $("#div1").fadeOut(2000).fadeIn(2000);
  // $("#div1").slideUp(2000).slideDown(2000);
  $("#div1").animate(
    {
      height: "400px",
      width: "25vw"
    }, 2000);
  // console.log("Adachi");
});