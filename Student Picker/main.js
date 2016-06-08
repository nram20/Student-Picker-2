
document.addEventListener('DOMContentLoaded', init)
  
function init() {


document.getElementById('createRoster').addEventListener("click", createInputs);

  function createInputs() {
    var numStudents = document.getElementById('studentNumber').value;
    console.log("number of students: ", numStudents)
      for (var i = 1; i <= numStudents; i++) {
          var newInput = document.createElement("input");
          newInput.className = i;
          document.body.appendChild(newInput);
      }
  }


document.getElementById('picker').addEventListener("click", pickStudents);

  function pickStudents() {

    // remove "picked" class from all inputs to reset 
    var allinputs = document.getElementsByTagName('input')
      for(var i = allinputs.length - 1; i>= 0; --i) {
        allinputs[i].classList.remove('picked')
      }
  
    
    var numStudents = document.getElementById('studentNumber').value;
    
    var random = Math.floor(Math.random()*numStudents) + 1 ;
    console.log("random student number: ", random); 
    
    // Each Input Box Has a class of 1, 2, 3 -> numStudents, so I want to get the input box with class = random, and then add "picked" class, so that the input will be highlighted and bordered
        

    var randomInput = allinputs[random];
      randomInput.classList.add('picked');
    
  }

  
}




