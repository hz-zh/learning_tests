
const mainInput = document.querySelector('.numberInput');
const multInput1 = document.querySelector('.multInput1');
const multInput2 = document.querySelector('.multInput2');

document.getElementById("add").addEventListener("click", add7);
document.getElementById("mult").addEventListener("click", mult);

function add7() { 
   let num = parseFloat(mainInput.value);
   if ( checkNum(parseFloat(mainInput.value)) != undefined )
      {
         printMain(num + 7); }
}

function mult() {
   let num1 = multInput1.value;
   let num2 = multInput2.value;

   if ( checkNum(parseFloat(multInput1.value)) != undefined && 
   checkNum(parseFloat(multInput2.value)) != undefined ) 
   {
      printMult(num1*num2);
   }
}

function printMain(output){
   const mainPara = document.querySelector('#mainResult');
   mainPara.textContent = `Result: ${output}`; 
   }
function printMult(output){
   const multPara = document.querySelector('#multResult');
   multPara.textContent = `Result: ${output}`; 
   }

function checkNum(num) {
   if (isNaN(num)) {
      printMain("You need to enter a number!");
      printMult("You need to enter a number!");
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
