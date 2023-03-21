//Challenge 1: Student Grade Generator (Toy Problem)

function calculateGrade() {
    // Get the input element and its value
    var inputElement = document.getElementById("marks-input");
    var marks = inputElement.value;
    
    // Calculate the grade based on the marks
    var grade;
    if (marks >= 80) {
      grade = "A";
    } else if (marks >= 60 && marks < 80) {
      grade = "B";
    } else if (marks >= 50 && marks < 60) {
      grade = "C";
    } else if (marks >= 40 && marks < 50) {
      grade = "D";
    } else {
      grade = "E";
    }
    
    // Set the output element to display the calculated grade
    var outputElement = document.getElementById("grade-output");
    outputElement.innerHTML = "Grade: " + grade;
  }



//Challenge 2: Speed Detector (Toy Problem)


//Challenge 3: Net Salary Calculator (Toy Problem)
function calculatePAYE(grossIncome) {
    let tax = 0;
    let taxableIncome = grossIncome - 24300;
  
    if (taxableIncome <= 0) {
      return 0;
    }
  
    if (taxableIncome <= 12298) {
      tax = taxableIncome * 0.1;
    } else if (taxableIncome <= 23885) {
      tax = 1229.8 + (taxableIncome - 12298) * 0.15;
    } else if (taxableIncome <= 35472) {
      tax = 3126.95 + (taxableIncome - 23885) * 0.20;
    } else if (taxableIncome <= 47059) {
      tax = 5232.95 + (taxableIncome - 35472) * 0.25;
    } else {
      tax = 8367.20 + (taxableIncome - 47059) * 0.3;
    }
  
    return tax;
  }