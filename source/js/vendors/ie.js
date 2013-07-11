//= require jquery.placeholder.min

$( function () {
  $('input, textarea').placeholder();

  // IE10 detection
  if (/*@cc_on!@*/false) {
    document.documentElement.className+=' ie10';
  }

});
