$('.toggle').click(function(){
    $('.formulario').animate({
        height: "toggle",
        'padding-top':'toggle',
        'padding-bottom': 'toggle',
        opacity: 'toggle'
    }, "slow");
});

$(document).ready(function(){
  $('ul.tabs li a:first').addClass('active1');
  $('.container .row').hide();
  $('.container .row:first').show();
  
  $('ul.tabs li a').click(function(){
      $('ul.tabs li a').removeClass('active1');
      $(this).addClass('active1');
      $('.container .row').hide();

      var activeTab = $(this).attr('href');
      $(activeTab).show();
      return false;
  });

  });


  function videoUrl(image){
    document.getElementById("slider").src = image;
}

  