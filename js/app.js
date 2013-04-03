// Start the application when the dom ready event has fired
$(document).ready(function () {
  /**

  1. Add an event listener for the button

  2. render a form inside the .header from that event.
     wrap the form with in an .add-cweep-form div to get
     the styles.

     The form should have an <input class='message'/>
     and a <a class='button'>Post'</a>

  3. Add a 'cweep' to the list when the form is submitted

  4. Remove the form

  5. Refactor

  **/
  
  $('.add-cweep').on('click', function() {
    $('.add-cweep-form').addClass('show');
  })

  $('.button').on('click', function(){
    var message, li;
    message = $('.message').val();
    li = $('li:first-child').clone();
    li.find('.message').text(message);
    
    li.prependTo('.cweep-list');
    $('.add-cweep-form').removeClass('show');
    $('.message').val('');
  })

});
