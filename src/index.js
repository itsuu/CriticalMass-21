import "./styles.css";
import menu from "./menu";

const menuItems = menu.items;
const numberOfMenuTypes = 3;
var starterItems = [];
var pastaItems = [];
var pizzaItems = [];

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

//Runs when page load with the spicy items checked
itemsToHTML(starterItems, "starters", "item-list");
itemsToHTML(pastaItems, "pasta", "item-list");
itemsToHTML(pizzaItems, "pizza", "item-list");

//event listener for checkbox changes to update the menu
document
  .getElementById("spicy checkbox")
  .addEventListener("change", function () {
    var spicyCheck = document.getElementById("spicy checkbox").checked;
    updateMenu(spicyCheck);
  });

/* function that removes the current list of items then
 * re-adds it with an updated version of the list of items
 * depending if the checkbox is checked or not
 */
function updateMenu(spicyCheck) {
  //remove all the list of items on that are in the HTML
  for (var i = 0; i < numberOfMenuTypes; i++) {
    var thisList = document.getElementById("item-list");
    thisList.remove();
  }
  //re-add the items to the HTML with the correct spicy/non-spicy items shown
  itemsToHTML(starterItems, "starters", "item-list");
  itemsToHTML(pastaItems, "pasta", "item-list");
  itemsToHTML(pizzaItems, "pizza", "item-list");
}

//function that add items from list to the HTML
function itemsToHTML(listOfItems, sectionIdName, listIdName) {
  //Only add items to the list if they exist in the list
  if (listOfItems.length !== 0 || listOfItems !== undefined) {
    var section = document.getElementById(sectionIdName);
    var spicyCheck = document.getElementById("spicy checkbox").checked;
    var item = "<dl id=" + listIdName + ">";
    //adds all the items from their respective item list
    for (var i = 0; i < listOfItems.length; i++) {
      var itemInfo;
      //add the spicy items if spicy and vice-versa
      if (listOfItems[i].spicy && spicyCheck) {
        itemInfo =
          '<dt class="disclaimer spicy">' +
          listOfItems[i].name +
          " " +
          formatPrice(listOfItems[i].price) +
          "</dt><dd>" +
          listOfItems[i].description +
          "</dd>";
        item += itemInfo;
      } else if (!listOfItems[i].spicy) {
        itemInfo =
          "<dt>" +
          listOfItems[i].name +
          " " +
          formatPrice(listOfItems[i].price) +
          "</dt><dd>" +
          listOfItems[i].description +
          "</dd>";
        item += itemInfo;
      }
    }
    item += "</dl>";
    section.innerHTML += item;
  }
}

//function to format the price properly
function formatPrice(price) {
  var priceString = price.toString();
  var priceArray = priceString.split("");
  var indexOfPeriod = priceArray.indexOf(".");

  /* The space between the length of array
   * and index of the period to determine
   * if there is two trailing numbers
   */
  if (priceArray.length - indexOfPeriod === 2) {
    priceArray.push("0");
  }
  priceArray.unshift("$");
  var formattedPrice = priceArray.join("");
  return formattedPrice;
}

//Sorting function used to order from least to greatest
function leastToGreatest(a, b) {
  return a.menuOrder - b.menuOrder;
}
