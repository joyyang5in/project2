
//Variables
let number = 0;
let counter = document.getElementById("counter");
let clearButton= document.getElementById("clear-button")
let plusoneButton= document.getElementById("plusone-button");
let minusoneButton= document.getElementById("minusone-button");
let zeroButton= document.getElementById("zero-button");
let oneButton= document.getElementById("one-button");
let twoButton= document.getElementById("two-button");
let threeButton= document.getElementById("three-button");
let fourButton= document.getElementById("four-button");
let fiveButton= document.getElementById("five-button");
let sixButton= document.getElementById("six-button");
let sevenButton= document.getElementById("seven-button");
let eightButton= document.getElementById("eight-button");
let nineButton= document.getElementById("nine-button");

//Functions
function addOne(){
    number = number + 1;
    counter.textContent =number;

}
   function minusOne(){
    number = number - 1;
    counter.textContent =number;
   }

   function clear(){
    number = 0;
    counter.textContent =number;
   } 

   function one(){
    number = 1;
    counter.textContent =number;
   } 

   function two(){
    number = 2;
    counter.textContent =number;
   } 

   function three(){
    number = 3;
    counter.textContent =number;
   } 

    function four(){
    number = 4;
    counter.textContent =number;
   } 

    function five(){
    number = 5;
    counter.textContent =number;
   } 

    function six(){
    number = 6;
    counter.textContent =number;
   } 

    function seven(){
    number = 7;
    counter.textContent =number;
   } 

    function eight(){
    number = 8;
    counter.textContent =number;
   } 

    function nine(){
    number = 9;
    counter.textContent =number;
   } 

    function zero(){
    number = 0;
    counter.textContent =number;
   } 
//Event Listeners
plusoneButton.addEventListener("click", addOne);
minusoneButton.addEventListener("click", minusOne);
clearButton.addEventListener("click", clear);
oneButton.addEventListener("click", one);
twoButton.addEventListener("click", two);
threeButton.addEventListener("click", three);
fourButton.addEventListener("click", four);
fiveButton.addEventListener("click", five);
sixButton.addEventListener("click", six);
sevenButton.addEventListener("click", seven);
eightButton.addEventListener("click", eight);
nineButton.addEventListener("click", nine);
zeroButton.addEventListener("click", zero);













/*
counterButton.addEventListener("click", () => {
    count++;
    counter.textContent = "★" + count;
    console.log("like+1");
});

*/