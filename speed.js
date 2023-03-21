document.addEventListener('DOMContentLoaded', function() {
  const speedInput = document.getElementById('speed-input');
  //const submitBtn = document.getElementById('submit-btn');
  const resultDiv = document.getElementById('result');
  let form = document.getElementById("form");

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    calculateSpeed();

  });

  function calculateSpeed() {
    const speed = parseInt(speedInput.value);
    let points = 0;

    if (speed <= 70) {
      resultDiv.textContent = 'OK';
      return;
    }

    points = Math.floor((speed - 70) / 5);

    if (points >= 12) {
      resultDiv.textContent = 'License suspended';
    } else {
      resultDiv.textContent = 'Points: ' + points;
    }
  }
  
});
