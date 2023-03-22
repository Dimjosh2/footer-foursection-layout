// Add smooth scrolling to all links in the footer
$('footer a').on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop: 0}, '300');
});
