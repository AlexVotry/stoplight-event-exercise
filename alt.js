var button = document.getElementById('controls');
var cmd = document.getElementsByClassName('bulb');
var btnId= ["stopButton", "slowButton", "goButton"];
var colors = ["red", "yellow", "green"];

function checkButton(event) {
  var btn = event.target.id;
  for (var i = 0; i < btnId.length; i++) {
    if (btn === btnId[i]) {
      if (cmd[i].style.backgroundColor === colors[i]) {
        cmd[i].style.backgroundColor = "#111";
        } else {
          cmd[i].style.backgroundColor = colors[i];
        }
      }
    }
}
button.addEventListener('click', checkButton);
