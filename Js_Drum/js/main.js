
function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
}

function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
 if (!audio) return;
    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
}

var audioBase = document.getElementById("base");
var isPlaying = false;
var img = document.getElementById("img_sound");
img.src = 'img/play.png';  

function togglePlay() {
  if (isPlaying) {
    img.src = 'img/play.png';   
    audioBase.pause();
  } else {   
    img.src = 'img/pause.png';     
    audioBase.play();
  }
};

audioBase.onplaying = function() {
  isPlaying = true;
};
audioBase.onpause = function() {
  isPlaying = false;
};

 const keys = Array.from(document.querySelectorAll('.key'));

 keys.forEach(key => key.addEventListener('transitionend', removeTransition));  

 window.addEventListener('keydown', playSound);


 
     
