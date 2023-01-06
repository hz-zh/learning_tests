
const input = document.querySelector('.numberInput');
const para = document.querySelector('p');

document.getElementById("square").addEventListener("click", print);
input.addEventListener("change", print);

function add7(num) { 
  return num + 7;}

function print(){
   num = parseFloat(input.float);
   if ( checkNum(parseFloat(input.value)) != undefined )
      { para.textContent = `${add7(checkNum(parseFloat(input.value)))}`; }
   }

function checkNum(num) {
   if (isNaN(num)) {
      para.textContent = "You need to enter a number!";
      } 
   else if (!isNaN(num)){ 
         return num;
      };
}

/*
function squared(num) {
   let newnum = checkNum(num);
   return newnum * newnum;
}

function squareNum()
{
   const num = parseFloat(input.value);
   para.textContent = `${num} squared is ${squared(num)}.`;
}
*/
