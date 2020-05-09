function setAlarm() {
  setTime = document.getElementById("alarmSet").value
  timeRemaining = document.getElementById("timeRemaining");
  timeRemaining.innerText = "Time Remaining: " + setTime;
  setInterval(countdown, 1000);
  countdown()
}




function countdown() {
  if (setTime > 0) {
    setTime--;
    timeRemaining.innerHTML = "Time Remaining: " + setTime;
  } else if (setTime === 0) {
    playAlarm();
    document.body.style.backgroundColor = "red";
    setTime = null;
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
  document.body.style.backgroundColor = "white";
}

window.onload = setup;