document.addEventListener("DOMContentLoaded", function () {
  const animations = document.querySelectorAll(".logo-animation");

  animations.forEach((animation) => {
    const frames = animation.querySelectorAll("img");
    let currentFrame = 0;
    const numberOfFrames = frames.length;
    const animationIntervalMin = 350;
    const randomnessMax = 200;

    function goToNextFrame() {
      frames[currentFrame].classList.remove("active");

      currentFrame = (currentFrame + 1) % numberOfFrames;

      frames[currentFrame].classList.add("active");

      const currentInterval = Math.floor(Math.random() * randomnessMax) + animationIntervalMin;
      setTimeout(goToNextFrame, currentInterval);
    }

    goToNextFrame();
  });

});

//page transitions

const claraButton = document.getElementById('clara-transition-trigger');
const claraTile = document.getElementById('clara-info-tile');

claraButton.addEventListener('click', () => {
  console.log("pressed")

  claraTile.classList.add('transition');

  setTimeout(() => {
    window.location.href = 'clara.html';
  }, 600)
});


const ontrackButton = document.getElementById('ontrack-transition-trigger');
const ontrackTile = document.getElementById('ontrack-info-tile');

ontrackButton.addEventListener('click', () => {
  console.log("pressed")

  ontrackTile.classList.add('transition');

  setTimeout(() => {
    window.location.href = 'ontrack.html';
  }, 600)
});

const chromeButton = document.getElementById('chrome-transition-trigger');
const chromeTile = document.getElementById('chrome-info-tile');

chromeButton.addEventListener('click', () => {
  console.log("pressed")

  chromeTile.classList.add('transition');

  setTimeout(() => {
    window.location.href = 'chrome.html';
  }, 800)
});





