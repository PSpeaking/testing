function checkAnswers() {
    var answer1 = document.getElementById('answer1').value.toLowerCase();
    var answer2 = document.getElementById('answer2').value.toLowerCase();
    var answer3 = document.getElementById('answer3').value.toLowerCase();
  
    if (answer1 === 'lion' && answer2 === 'giraffe' && answer3 === 'peacock') {
      document.getElementById('feedback').innerHTML = 'Congratulations! You got all the answers correct!';
    } else {
      document.getElementById('feedback').innerHTML = 'Oops! One or more answers are incorrect. Please try again.';
    }
  }
  