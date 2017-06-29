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
    Materialize.toast('We are sooooo happy to have your email address for all kinds of reasons!', 4000);
  } else {
    Materialize.toast('Oh no! That is not an email address we can reach you at...', 4000);
  }
});
