function setAlarm() {
  setTime = document.getElementById("alarmSet").value
  timeRemaining = document.getElementById("timeRemaining");
  timeRemaining.innerText = "Time Remaining: " + setTime;
  document.body.style.backgroundColor = "white";
  myInterval = setInterval(countdown, 1000);
  countdown()
}


function countdown() {
 
  if (setTime > 0) {
    setTime--;
    var minutes = Math.floor(setTime / 60);
    var seconds = setTime - minutes * 60;
    var minutesString = "";
    if (minutes < 10) {
      minutesString = "0" + minutes;
    } else {
      minutesString = minutes;
    }
    var secondsString = "";
    if (seconds < 10) {
      secondsString = "0" + seconds;
    } else {
      secondsString = seconds
    }
    timeRemaining.innerHTML = "Time Remaining: " + minutesString + ":" + secondsString;
  } else if (setTime === 0) {
    playAlarm();
    setTime = null;
    document.body.style.backgroundColor = "red";
    clearInterval(myInterval);
    timeRemaining.innerHTML = "Time Remaining: 00:00";
  }

}
// DO NOT EDIT BELOW HERE

var audio = new Audio("alarmsound.mp3");

function setup() {
  document.getElementById("set").addEventListener("click", () => {
    setAlarm();
  });

  document.getElementById("stop").addEventListener("click", () => {
    pauseAlarm();
  });
}

function playAlarm() {
  audio.play();
}

function pauseAlarm() {
  audio.pause();
  
}

window.onload = setup;