
const input = document.querySelector('.numberInput');
const para = document.querySelector('p');

document.getElementById("add").addEventListener("click", add7);
/*document.getElementById("mult").addEventListener("click", print);*/

function add7() { 
   let num = parseFloat(input.value);
   if ( checkNum(parseFloat(input.value)) != undefined )
      { sum = num + 7;
         console.log(num);
         print(sum); }
}

/*let mult = (num) => num*num;*/

function print(output){
   para.textContent = output; 
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
