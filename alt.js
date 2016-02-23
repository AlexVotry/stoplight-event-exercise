var button = document.getElementById('controls');
var stop = document.getElementById('stopLight');
var slow = document.getElementById('slowLight');
var go = document.getElementById("goLight");
var btnId= ["stopButton", "slowButton", "goButton"];
var cmd = [stop, slow, go];
var colors = ["red", "yellow", "green"];

console.log(cmd);
function checkButton(event) {
  var btn = event.target.id; 
  for (var i = 0; i < btnId.length; i++) {
    if (btn === btnId[i]) {
      console.log(cmd[i]);
      if (cmd[i].style.backgroundColor === colors[i]) {
        cmd[i].style.backgroundColor = "#111";
        } else {
          cmd[i].style.backgroundColor = colors[i];
        }
      }
    }
}
button.addEventListener('click', checkButton);
