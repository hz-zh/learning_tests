
const mainInput = document.querySelector('.numberInput');
const para = document.querySelector('#result');

document.getElementById("add").addEventListener("click", add7);
document.getElementById("mult").addEventListener("click", mult);

function add7() { 
   let num = parseFloat(mainInput.value);
   if ( checkNum(parseFloat(mainInput.value)) != undefined )
      {
         print(num + 7); }
}

function mult() {
   let num = mainInput.value.split("*");
   if ( checkNum(parseFloat(mainInput.value)) != undefined ) {
      print(num[0]*num[1]);
   }
}

function print(output){
   para.textContent = `Result: ${output}`; 
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
   const num = parseFloat(mainInput.value);
   para.textContent = `${num} squared is ${squared(num)}.`;
}
*/
