var vid = document.getElementById("bgvid");
var pauseButton = document.querySelector("#vid-ctrl");
var muteButton = document.querySelector("#vid-mute");

function vidFade() {
  vid.classList.add("stopfade");
}

vid.addEventListener('ended', function()
{
// only functional if "loop" is removed 
vid.pause();
// to capture IE10
vidFade();
}); 


pauseButton.addEventListener("click", function() {
  vid.classList.toggle("stopfade");
  if (vid.paused) {
    vid.play();
    pauseButton.innerHTML = "Pause";
  } else {
    vid.pause();
    pauseButton.innerHTML = "Paused";
  }
})

muteButton.addEventListener("click", function() {
  if (vid.muted) {
    vid.muted = false;
    muteButton.innerHTML = '<i class="fa fa-volume-up"></i>';
  } else {
    vid.muted = true;
    muteButton.innerHTML = '<i class="fa fa-volume-off fa-lg"></i><i class="fa fa-times"></i>';
  }
})

