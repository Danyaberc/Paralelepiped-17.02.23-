const wrapperEL = document.querySelector('.wrapper');

const inputNumber = document.querySelector('.input_number')

const btnRun = document.querySelector('.buttonRun')

let html = "";

let newNumber = "";

btnRun.addEventListener('click', (ev) => {
   newNumber = Number(inputNumber.value);
   numberChange = newNumber
   const renderTL = (placeEL) => {

      for (let i = 1; i <= numberChange; i += 1) {
         html += `<div class="paralel">${i}</div>`
      }

      placeEL.innerHTML = html;
   }
   const init = (placeEL) => {
      renderTL(placeEL);
   }

   init(wrapperEL);

   const newChangeNumber = () => {
      let callMeNumber = document.querySelectorAll('.paralel')
      for (let numb = 0; numb < callMeNumber.length; numb += 1) {
         callMeNumber[numb].addEventListener('click', () => {
            callMeNumber[numb].classList.add('show')
         })
      }

   }
   newChangeNumber();
})





