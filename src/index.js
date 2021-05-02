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

itemsToHTML(starterItems, "starters", "item-list");
itemsToHTML(pastaItems, "pasta", "item-list");
itemsToHTML(pizzaItems, "pizza", "item-list");

/*
<dl class="item-list">
<dt>sds</dt>
<dd>sdf</dd>
</dl>
*/

function itemsToHTML(listOfItems, idName, className) {
  //Only add items to the list if they exist
  if (listOfItems.length !== 0 || listOfItems !== undefined) {
    //Get the section by id
    var section = document.getElementById(idName);

    //add a dl tag
    var item = "<dl class=" + className + ">";

    //adds all the items from their respective item list
    for (var i = 0; i < listOfItems.length; i++) {
      var itemInfo;

      //add the spicy class if spicy
      if (listOfItems[i].spicy) {
        itemInfo = '<dt class="disclaimer spicy">';
      } else {
        itemInfo = "<dt>";
      }

      //adds the rest of the info of item
      itemInfo +=
        listOfItems[i].name +
        " " +
        formatPrice(listOfItems[i].price) +
        "</dt><dd>" +
        listOfItems[i].description +
        "</dd>";
      item += itemInfo;
    }
    item += "</dl>";
    section.innerHTML += item;
    console.log(section);
  }
}

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

//Sorting function order from least to greatest
function leastToGreatest(a, b) {
  return a.menuOrder - b.menuOrder;
}
