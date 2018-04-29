var ShoppingCart = function () {

  // an array with all of our cart items
  var cart = [];
  

  var updateCart = function () {
    $(".cart-list").empty();
    $(".total").empty();
      var cartObj = {cart};
      var source = $('#cart-template').html();
      var template = Handlebars.compile(source);
      var newHTML = template(cartObj);
      $(".cart-list").append(newHTML);
      var total = 0;
      for (i = 0; i <cart.length; i++){
        total += cart[i].cost;
      };
      $(".total").append(total);
    // TODO: Write this function. In this function we render the page.
    // Meaning we make sure that all our cart items are displayed in the browser.
    // Remember to empty the "cart div" before you re-add all the item elements.
  }


  var addItem = function (item) {
    cart.push(item);
    // TODO: Write this function. Remember this function has nothing to do with display. 
    // It simply is for adding an item to the cart array, no HTML involved - honest ;-)
  }

  var clearCart = function () {
    cart = [];
    // TODO: Write a function that clears the cart ;-)
  }
  
  return {
    updateCart: updateCart,
    addItem: addItem,
    clearCart: clearCart
  }
};

var app = ShoppingCart();

// update the cart as soon as the page loads!
app.updateCart();


//--------EVENTS---------

$('.view-cart').on('click', function () {
  $(".shopping-cart").toggle();
});

$('.add-to-cart').on('click', function () {
  var $item = $(this).closest(".item");
  var $itemName = $item.data().name;
  var $cost = $item.data().price;
  item = {name:  $itemName, cost: $cost};
  // TODO: get the "item" object from the page
  app.addItem(item);
  app.updateCart();
});

$('.clear-cart').on('click', function () {
  app.clearCart();
  app.updateCart();
});