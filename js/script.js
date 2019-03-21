window.addEventListener('load', function(e) {
  $('.menuToggle').on('click', function(){
    $('.navigation').slideToggle(300, function() {
      if ($(this).css('display') === 'none'){
        $(this).removeAttr('style');
      }
    });
  })
})