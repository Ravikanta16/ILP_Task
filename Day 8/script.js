const animation = [
  {
    transform: 'rotate(360deg) scale(1)' 
  }
];

const animationConfig = {
  duration: 2000,
  iterations: 1,
  fill: 'forwards'
};

function animateImage(id) {
  const img = document.getElementById(id);
  const anim = img.animate(animation, animationConfig);
  return anim.finished;
}

function Animation() {
  animateImage('img1')
    .then(() => animateImage('img2'))
    .then(() => animateImage('img3'))
    .then(() => console.log('All animations completed!'));
}

window.onload = Animation;
