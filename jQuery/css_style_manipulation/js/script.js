$("h1").css(
{
  "color" : "red",
  "font-size" : "3rem",
  "font-style": "italic"
});

let x = 1;

setInterval(() =>
{
  x === 2 ? x = 1 : x = 2;
  $("p").removeClass(`style${x % 2 + 1}`);
  $("p").addClass(`style${x}`);
  // if (x == 1)
  // {
  // $("p").removeClass(`style2`);
  // $("p").addClass(`style${x}`);
  //   x = 2;
  // }
  // else if (x == 2)
  // {
  //   $("p").removeClass(`style1`);
  //   $("p").addClass(`style${x}`);
  //   x = 1;
  // }
}, 1000);