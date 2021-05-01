import "./styles.css";
import menu from "./menu";

const menuItems = menu.items;
var starterItems = [];
var pastaItems = [];
var pizzaItems = [];

console.log("NEW ITERATION");

//Splits the entire list of items into separate lists of each respective type
for (var i = 0; i < menuItems.length; i++) {
  if (menuItems[i].type === "starters") {
    starterItems.push(menuItems[i]);
  }
  if (menuItems[i].type === "pasta") {
    pastaItems.push(menuItems[i]);
  }
  if (menuItems[i].type === "pizza") {
    pizzaItems.push(menuItems[i]);
  }
}

//Sort items using a sort function and a custom function sorting order
starterItems.sort(leastToGreatest);
pastaItems.sort(leastToGreatest);
pizzaItems.sort(leastToGreatest);

function itemsToHTML(listOfItems, idName) {}

//Sorting function order from least to greatest
function leastToGreatest(a, b) {
  return a.menuOrder - b.menuOrder;
}
