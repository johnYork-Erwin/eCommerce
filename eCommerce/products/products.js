let $list = $('#salesList');
let criteria = {'price':Infinity, 'rating':0};

orderedProducts = JSON.parse(localStorage.getItem('orderedProducts'));



//Add to cart button, function that adds to cart is specific to card layout on this page
const addButtonListeners = function() {
  $('.btn-floating').on('click', function() {
    let name = event.target.parentElement.parentElement.innerText.toLowerCase().slice(0, -4);
    console.log(name);
    products.forEach(function(product) {
      if (product['name'].toLowerCase() === name) {
        orderedProducts.push(product);
        localStorage.setItem('orderedProducts', JSON.stringify(orderedProducts));

        cartButton.text(orderedProducts.length + ' Items in Cart');
        return;
      }
    });
  });
};

renderProducts();
addButtonListeners();

function renderProducts() {
  $list.empty();
  products.forEach(function(product) {
    //Builds a new row for the product IF it meets the criteria laid out
    if (product['price'] < criteria['price'] && product['rating'] >= criteria['rating']) {
      let $button = $('<a>').addClass('btn-floating halfway-fab waves-effect waves-light red');
      $button.append($('<i>').addClass('material-icons').text('add'));

      let $rightCol = $('<div>').addClass('col l9 right');
      let $rowRight = $('<div>').addClass('row center-align').append($('<h4>').text(product.name + ' ').append($button));

      $rightCol.append($rowRight.append($('<p>').text(product['description']).addClass('col l11 center center-align')));

      let $rightColBot = $('<div>').addClass('row');
      $rightColBot.append($('<div>').addClass('col l6 left center-align').append($('<h4>').text('Price: $' + product['price'])));
      $rightColBot.append($('<div>').addClass('col l6 right center-align').append($('<h4>').text('Rating: ' + product['rating']+'/5')));

      $rightCol.append($rightColBot);

      let $image = $('<img>');
      $image.attr({
        src: product['image'],
        alt: product['name']
      });

      let $row = $('<div>').addClass('row valign-wrapper').css({
               "border-weight":"1px",
               "border-style":"solid"}
             ).append($image).append($rightCol);
      $list.append($row);
    }
  });
}

$('#priceCriteria').on('click', function() {
  if (event.target.tagName === 'A') {
    let price = event.target.innerText.replace('$','');
    criteria['price'] = Number(price);
  }
  renderProducts();
  addButtonListeners();
});

$('#ratingCriteria').on('click', function() {
  if (event.target.tagName === 'A') {
    criteria['rating'] = Number(event.target.innerText.charAt(0));
  }
  renderProducts();
  //after any render products we need to re-add event listeners
  addButtonListeners();
});
