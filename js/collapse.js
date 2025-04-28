// collapse.js
window.onload = function() {
  let startTime = Date.now();

  function collapseSky() {
    let elapsed = (Date.now() - startTime) / 1000; // in seconds

    // Collapse progress from 0 (blue) to 1 (storm) over 20 seconds
    let progress = Math.min(elapsed / 20, 1);

    // Sky color transition: blue (135,206,235) to dark (60,60,70)
    let startColor = [135, 206, 235];
    let endColor = [60, 60, 70];

    let r = Math.floor(startColor[0] + (endColor[0] - startColor[0]) * progress);
    let g = Math.floor(startColor[1] + (endColor[1] - startColor[1]) * progress);
    let b = Math.floor(startColor[2] + (endColor[2] - startColor[2]) * progress);

    document.getElementById('sky').style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  }

  setInterval(collapseSky, 100); // update every 0.1 seconds
};
