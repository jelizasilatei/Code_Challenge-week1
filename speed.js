// This code listens for the DOMContentLoaded event, then gets references to the relevant HTML elements.
document.addEventListener('DOMContentLoaded', function() {
    const speedInput = document.getElementById('speed-input');
    //const submitBtn = document.getElementById('submit-btn');
    const resultDiv = document.getElementById('result');
    let form = document.getElementById("form");
    
    //Attach an event listener to the form's submit event to call the calculateSpeed function.
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      calculateSpeed();
 
    });

    // The calculateSpeed function reads the input value and calculates points based on the speed.
    function calculateSpeed() {
      const speed = parseInt(speedInput.value);
      let points = 0;
      
      // The result is then displayed in the resultDiv element.
      if (speed <= 70) {
        // If the speed is less than or equal to 70, "OK" is displayed in the resultDiv.
        resultDiv.textContent = 'OK';
        return;
      }
      points = Math.floor((speed - 70) / 5);
      
      if (points >= 12) {
        // If the calculated points are greater than or equal to 12, "License suspended" is displayed in the resultDiv.
        resultDiv.textContent = 'License suspended';
      } else {
        // Otherwise, "Points: [points]" is displayed in the resultDiv.
        resultDiv.textContent = 'Points: ' + points;
      }
    }
    
  });
  