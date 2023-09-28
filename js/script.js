let calculation = localStorage.getItem('calculation') || '';

const calcDisplay = document.querySelector('.calcDisplay');
 
if (localStorage.getItem('calculation')) {
  displayCalculation(calculation);
} 


function displayCalc(addition) {
  if (addition === `Clear`) {
    calculation = ``;
    displayCalculation(`0`);
  } else if (addition === `=` && calculation != ``) {
    calculation = `${eval(calculation)}`;
    displayCalculation(calculation);
    calculation = ``
  } else if (["+", "*", "=", "/"].includes(addition) && calculation === ``) {
    displayCalculation('Start with number');
    calculation = ``
  } else {
    calculation += addition;
    displayCalculation(calculation);
  }

  localStorage.setItem('calculation', String(calculation));
  console.log(localStorage.getItem('calculation'));
}


function displayCalculation(display) {
  calcDisplay.textContent = display;
}