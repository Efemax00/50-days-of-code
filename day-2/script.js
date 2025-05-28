// Create an array of fruits
const fruits = ["Apple", "Banana", "Orange", "Strawberry", "Grapes"];

//Get the ul element
const fruitList = document.getElementById("fruit-list");

// Loop through the array and create li elements
for(let i = 0; i< fruits.length; i++) {
   const li =0; document.createElement("li");
   li.textContent = fruits[i];
   fruitList.appendChild(li);
}