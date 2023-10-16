let calculation = localStorage.getItem('calculation') || '';
const calcDisplay = document.querySelector('.calcDisplay');
const validKeys = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '+', '-', '/', '*', '.', '=', '/'];

if (localStorage.getItem('calculation')) {
  displayCalculation(calculation);
} 


document.body.addEventListener('keydown', (event) => {
  if (event.key === ' ') {
    displayCalc('Clear');
  } else if (validKeys.includes(event.key)) {
    displayCalc(event.key);
  }
})


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