const keys = document.querySelectorAll(".key");
keys.forEach((key) =>
  key.addEventListener("transitionend", removePlayingClass)
);
window.addEventListener("keydown", playSound);

function playSound(e) {
  const audio = document.querySelector(`audio[data-key = ${e.code}]`);
  if (!audio) return; // stops event if there is no sound associated with key press.
  audio.currentTime = 0; // rewinds to start if pressed before over
  audio.play();
  const div = document.querySelector(`div[data-key = ${e.code}]`);
  div.classList.toggle("playing");
}

function removePlayingClass(e) {
  if (e.propertyName != "transform") return;
  this.classList.remove("playing");
}
