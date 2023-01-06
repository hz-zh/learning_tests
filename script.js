
const input = document.querySelector('.numberInput');
const para = document.querySelector('p');

document.getElementById("square").addEventListener("click", squareNum);
/*input.addEventListener("change", printAnswer);*/

function checkNum(num) {

   if (isNaN(num)) {
      para.textContent = "You need to enter a number!";
      } 
      else { return num; }
   }

function squared(num) {
   let newnum = checkNum(num);
   return newnum * newnum;
}

function squareNum()
{
   const num = parseFloat(input.value);
   para.textContent = `${num} squared is ${squared(num)}.`;
}

