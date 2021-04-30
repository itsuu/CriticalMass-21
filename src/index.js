import "./styles.css";
import menu from "./menu";

const menuItems = menu.items;
var starterItems = [];
var pastaItems = [];
var pizzaItems = [];

console.log("NEW ITERATION");

console.log(menuItems);

console.log(menuItems[0].name);

//Splits the entire list of items into separate lists of each type
for (var i = 0; i < menuItems.length; i++) {
  if (menuItems[i].type === "starters") {
    //test prints, will later add to html using id tag
    starterItems.push(menuItems[i]);
  }
  if (menuItems[i].type === "pasta") {
    pastaItems.push(menuItems[i]);
  }
  if (menuItems[i].type === "pizza") {
    pizzaItems.push(menuItems[i]);
  }
}

/*
function compareNumbers(a, b) {
  return a - b;
}
*/
