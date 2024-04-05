/*-------------------------------- Constants --------------------------------*/
let numbers = document.querySelectorAll('.button')
const displayValue = document.querySelector('.display')
const equalsButton = document.querySelector('.button.equals')
/*-------------------------------- Variables --------------------------------*/
let xnumbers = '';
//let xnumbers2 = '';
let operand = '';

/*------------------------ Cached Element References ------------------------*/

/*----------------------------- Event Listeners -----------------------------*/

/*-------------------------------- Functions --------------------------------*/
numbers.forEach(number => {
    number.addEventListener("click", (event) => {
      console.log(event.target.innerText);
      xnumbers += event.target.innerText;
      displayValue.textContent = xnumbers;
      if(event.target.innerText === 'C') {
        location.reload();
    }
    console.log('xnumber', xnumbers);
    console.log('xnumber2', xnumbers2);
    console.log('Operand', operand);
    });
    function math() {
        parseInt(xnumbers);
    }
    console.log(xnumbers);
    equalsButton.addEventListener('click', (event) => {
        operand = equalsButton.innerText;
        xnumbers = xnumbers.replace('=', '');
        let xnumbers2 = parseInt(xnumbers.charAt(2));
        let newNumber = parseInt(xnumbers) ;
        if(xnumbers.includes('+')) {
            displayValue.textContent = newNumber + xnumbers2
        } else if(xnumbers.includes('-')) {
            displayValue.textContent = newNumber - xnumbers2
        } else if(xnumbers.includes('/')) {
            displayValue.textContent = newNumber / xnumbers2
        } else if(xnumbers.includes('*')) {
            displayValue.textContent = newNumber * xnumbers2
        }
        console.log('Operand', operand);
        console.log('xnumber', xnumbers);
        console.log('xnumber2', xnumbers2);
        console.log('newNumber', newNumber);
    });
});
 

