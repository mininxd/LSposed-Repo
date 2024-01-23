export function searchRepo() {
   jQuery(document).ready(function ($) {

    var value = $('input.searchBar').val().toLowerCase();
    $(".list").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)

    });
    
  })
}