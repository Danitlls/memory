var Memory = require('./../js/memory.js').memory;

$(document).ready(function() {
  function flashScreen() {
    switch (color) {
      case "#f00": $('body').css('background-color', '#0f0'); color = '#0f0'; break;
      case "#0f0": $('body').css('background-color', '#f00'); color = '#f00'; break;
    }
  }

  var color = "#f00";
  var game = new Memory();

  game.shuffleDeck();

  game.deck.forEach(function(card) {
    $('.container').append('<div class="card" data-id="' + card + '"><span>' + card + '</span></div>');
  });


  $('.card').click(function() {
    $(this).find('span').show();
    $(this).addClass('clicked');
    var clicked = [];
    if ($('.clicked').length === 2) {
      $('.clicked').each(function(card) {
        clicked.push($(this).attr('data-id'));
      });
      if (game.checkForMatch(clicked)) {
        $('.clicked').each(function() {
          $(this).toggleClass('matched clicked');
        });
        if ($('.matched').length === game.deck.length) {
          setInterval(function() {
            flashScreen();
          }, 100);
        }
      } else {
        setTimeout(function() {
          $('.clicked').each(function() {
            $(this).toggleClass('clicked');
            $(this).find('span').hide();
          });
        }, 1000);
      }
    }
  });
});
