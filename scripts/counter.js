
//Variables
let number = 0;
let counter = document.getElementById("counter");
let plusoneButton= document.getElementById("plusone-button");
let minusoneButton= document.getElementById("minusone-button");
let zeroButton= document.getElementById("zero-button");
let oneButton= document.getElementById("one-button");
let twoButton= document.getElementById("two-button");
let threeButton= document.getElementById("three-button");
let fourButton= document.getElementById("four-button");
let fiveButton= document.getElementById("five-button");


//Functions
function addOne(){
    number = number + 1;
    counter.textContent =number;

}
   function minusOne(){
    number = number - 1;
    counter.textContent =number;
   }

//Event Listeners
plusoneButton.addEventListener("click", addOne);
minusoneButton.addEventListener("click", minusOne);














/*
counterButton.addEventListener("click", () => {
    count++;
    counter.textContent = "★" + count;
    console.log("like+1");
});

*/