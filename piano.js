const keys = document.querySelectorAll(".key"),
  hints = document.querySelectorAll(".hints");

function playNote(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`),//selecting an audio element which has a keycode in datakey attribute
    key = document.querySelector(`.key[data-key="${e.keyCode}"]`);//selecting all the keys element with keycode of given

  if (!key) return; // stop the function running all togetther.

  key.classList.add("playing");//adding the css playing to the key for animation.
  audio.currentTime = 0;//rewind to the start
  audio.play();
}

function removeTransition(e) {
  if (e.propertyName !== "transform") return;//skip if its not transform.
  this.classList.remove("playing");//removing from playing(css)
}

keys.forEach(key => key.addEventListener("transitionend", removeTransition));//listening to event transistioned and if occured it is going to function removetransistion.

window.addEventListener("keydown", playNote);//Listening to the event of keydown and if occurs it is going to the function playNote.
