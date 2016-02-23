/*
  Write JS to make this stoplight work.

  When I click on the 'stop' button,
    the top light should turn red.
  When I click on the 'slow' button
    the middle light should turn orange.
  When I click on the 'go' button
    the bottom light should turn green.
*/
var button = document.getElementById('controls');
var stop = document.getElementById('stopLight');
var slow = document.getElementById('slowLight');
var go = document.getElementById("goLight");
var colors = ["red", "yellow", "green"];
// console.log(bulb);
function changeLight(event) {
  var btn = event.target.id;
  if (btn === "stopButton" ) {
    if (stop.style.backgroundColor === "red"){
      stop.style.backgroundColor = "#111";
    } else {
      stop.style.backgroundColor = "red"
    }

 } else if (btn === "slowButton") {
   if (slow.style.backgroundColor === "yellow"){
     slow.style.backgroundColor = "#111";
   } else {
     slow.style.backgroundColor = "yellow";
   }
 } else {
   if (go.style.backgroundColor === "green"){
     go.style.backgroundColor = "#111";
   } else {
     go.style.backgroundColor = "green";
   }
 }
}
button.addEventListener('click', changeLight);
