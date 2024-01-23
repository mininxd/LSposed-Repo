window.matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change',({ matches }) => {
  if (matches) {
    console.log("change to dark mode!")
  } else {
    console.log("change to light mode!")
  }
})

$('.dontShowIntro').click( function() {
  localStorage.setItem('dontShowIntro', 
  'hide');
  $('.AMLinfo').hide();
});

if (localStorage.getItem('dontShowIntro') == 'hide') {
  $('.AMLinfo').hide();
} else {
  $('.AMLinfo').show();
}



$(document).ready(function(){
  $(".search").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#list *").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});


$('.howToDown').popup({
    popup : $('.ui.howToDownPopup'),
    on    : 'click'
  });
  
$('.dontShowTip').click(function() {
  $('.dontShowTip').hide();
  localStorage.setItem('dontShowTip', 'hide')
})
if (localStorage.getItem('dontShowTip') == 'hide') {
  $('.howToDown').hide();
} else {
  $('.howToDown').show();
}