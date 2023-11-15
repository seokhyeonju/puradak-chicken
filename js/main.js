$(function() {
    // alert('dd')
    var $w = $(window),
      footerHei = $('footer').outerHeight(),
      fix = $('#quick-btm');
  
    $w.on('scroll', function() {
  
      var sT = $w.scrollTop();
      var val = $(document).height() - $w.height() - footerHei;
  
      if (sT >= val)
          fix.addClass('on')
      else
          fix.removeClass('on')
  
    });
  
  });