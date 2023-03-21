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

