//sources for images are below
//chicken:  https://www.freepik.com/free-photos-vectors/chicken
//turkey: https://www.bbcgoodfood.com/recipes/collection/turkey
//mango: https://www.liveeatlearn.com/mangoes/
//bread: https://www.backerhausveit.com/product/medium-pretzel-bun
//lamb: https://www.umami.site/recipes/sous-vide-rack-lamb-rosemary-garlic/
//fish: https://www.pngwing.com/en/free-png-brsrb
//apple: https://www.walmart.ca/en/ip/apple-gala/6000195494284
//grapes: https://www.welchs.com
//oranges: https://www.bbcgoodfood.com/recipes/collection/orange
//bananas: https://www.livescience.com/45005-banana-nutrition-facts.html
//potatoes; https://www.taste.com.au/recipes/sweet-potato-lentil-patties-tzatziki/xtpbp1it
//pasta: https://www.bbcgoodfood.com/recipes/collection/pasta

var cartOfItems = [];
total = 0.0;
var items = {
  0: ["Chicken", 1.99, 1, false, "chicken.jpg"],
  1: ["Turkey", 2.99, 1, false, "turkey.jpg"],
  2: ["Mango", 3.99, 2, false, "mango.jpg"],
  3: ["Bread", 4.05, 0, true, "bread.jpg"],
  4: ["Lamb", 5.09, 1, false, "lamb.jpg"],
  5: ["Fish", 6.08, 1, true, "fish.png"],
  6: ["Apples", 7.99, 2, false, "apple.jpg"],
  7: ["Grapes", 8.75, 2, false, "grapes.png"],
  8: ["Oranges", 9.03, 2, false, "oranges.jpg"],
  9: ["Bananas", 10.08, 2, true, "bananas.jpg"],
  10: [
    "Sweet Potato and Lentil Patties with Tzatziki",
    11.08,
    0.5,
    true,
    "potato.jpg",
  ],
  11: [
    "Millet Risotto with Pesto and Blistered Tomatoes",
    12.03,
    0.5,
    false,
    "pasta.jpg",
  ],
};

var usersCart;

function initItems() {
  Object.keys(items).forEach(function (key) {
    // creating checkbox element
    var checkbox = document.createElement("input");
    checkbox.type = "radio";

    // creating label for checkbox
    var label = document.createElement("label");
    label.appendChild(
      document.createTextNode(items[key][0] + " - Price: " + items[key][1])
    );

    var img = document.createElement("IMG");
    img.setAttribute("src", items[key][4]);
    img.width = "150";
    img.height = "150";
    var div = document.createElement("div");
    div.append(checkbox);
    div.append(label);
    div.append(img);

    document.getElementById("listOfItems").append(div);
  });

  document.getElementById("totalCost").innerHTML =
    "Total Price: " + total + "$";
  showClient();
}

function filter() {
  var selection = document.getElementById("foodFilter").value;

  var removals = [];
  if ("Vegetarian" == selection) {
    selection = 0;
  } else if ("None" == selection) {
    selection = 2;
  } else if ("Gluten-Free" == selection) {
    selection = 1;
  } else if ("VegetarianAndGluten-Free" == selection) {
    selection = 0.5;
  }

  if (selection < 2) {
    Object.keys(items).forEach(function (key) {
      if (items[key][2] == selection || items[key][2] == 0.5) {
        if (document.getElementById("organicOrNah").children[0].checked) {
          if (items[key][3]) {
            removals.push(items[key][0] + " - Price: " + items[key][1]);
          }
        } else {
          removals.push(items[key][0] + " - Price: " + items[key][1]);
        }
      }
    });
  } else {
    var store = document.getElementById("listOfItems").children;
    if (!document.getElementById("organicOrNah").children[0].checked) {
      for (let i = 0; i < store.length; i++) {
        store[i].style.visibility = "visible";
      }
      return;
    } else {
      for (let i = 0; i < store.length; i++) {
        Object.keys(items).forEach(function (key) {
          if (items[key][3]) {
            if (
              items[key][0] + " - Price: " + items[key][1] ==
              store[i].children[1].textContent
            ) {
              removals.push(items[key][0] + " - Price: " + items[key][1]);
            }
          }
        });
      }
      //return;
    }
  }

  var store = document.getElementById("listOfItems").children;
  for (let i = 0; i < store.length; i++) {
    if (removals.includes(store[i].children[1].textContent)) {
      document.getElementById("store").style.display = "hidden";
      store[i].style.visibility = "visible";
    } else {
      store[i].style.visibility = "hidden";
    }
  }
}

function showClient() {
  document.getElementById("store").style.display = "none";
  document.getElementById("cart").style.visibility = "hidden";
  document.getElementById("client").style.visibility = "visible";
}

function showStore() {
  document.getElementById("client").style.visibility = "hidden";
  document.getElementById("cart").style.visibility = "hidden";
  document.getElementById("store").style.display = "block";
}

function showCart() {
  document.getElementById("client").style.visibility = "hidden";
  document.getElementById("store").style.display = "none";
  document.getElementById("cart").style.visibility = "visible";
}

function showCart() {
  document.getElementById("client").style.visibility = "hidden";
  document.getElementById("store").style.display = "none";
  document.getElementById("cart").style.visibility = "visible";
}

function addToCart() {
  for (
    let i = 0;
    i < document.getElementById("listOfItems").children.length;
    i++
  ) {
    if (
      document.getElementById("listOfItems").children[i].children[0].checked &&
      !cartOfItems.includes(
        document.getElementById("listOfItems").children[i].children[1]
          .textContent
      )
    ) {
      var listElement = document.createElement("LI");
      var label = document.createTextNode(
        document.getElementById("listOfItems").children[i].children[1]
          .textContent
      );
      listElement.appendChild(label);
      document.getElementById("cartList").appendChild(listElement);
      cartOfItems.push(
        document.getElementById("listOfItems").children[i].children[1]
          .textContent
      );

      Object.keys(items).forEach(function (key) {
        if (
          items[key][0] + " - Price: " + items[key][1] ==
          document.getElementById("listOfItems").children[i].children[1]
            .textContent
        ) {
          total += items[key][1];
        }
      });
      document.getElementById("totalCost").innerHTML =
        "Total Price: " + total.toFixed(2) + "$";
    }
  }
}
