$(document).ready(function(){
     $('.carousel').carousel();
   });

autoplay();
function autoplay() {
  $('.carousel').carousel('next');
  setTimeout(autoplay, 4000);
}

$('#submitEmail').on('click', function() {
  let inputForm = event.target.parentElement.children[0];
  if ($(inputForm).hasClass('valid')) {
    Materialize.toast('We are sooooo happy to have your email address for all kinds of trustworthy reasons!', 4000);
  } else {
    Materialize.toast('Oh no! That is not an email address we can reach you at...', 4000);
  }
});

$('.btn-floating').on('click', function() {
  let name = event.target.parentElement.parentElement.parentElement.children[1].children[0].innerText;
  name = name.split(' ')[0];
  name = name.slice(0, -1).toLowerCase();
  products.forEach(function(product) {
    if (product['name'].toLowerCase() === name) {
      orderedProducts.push(product);
      localStorage.setItem('orderedProducts', JSON.stringify(orderedProducts));
      return;
    }
  });
  cartButton.text(orderedProducts.length + ' Items in Cart');
});
