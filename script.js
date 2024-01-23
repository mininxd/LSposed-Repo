import {fetchRepoList} from "./fetch.js";
import {searchRepo} from "./search.js";
fetchRepoList();


jQuery(document).ready(function ($) {
  $(window).scroll(function() {
    if ($(this).scrollTop() > 60) {
    $('div.header').css("padding","10px");
    $('span.header').css("font-size","25px");
    $('span.search').css("opacity","1");
    }
    if ($(this).scrollTop() < 60) {
    $('div.header').css("padding","2.5em 0 2em 10px");
    $('span.header').css("font-size","40px");
    $('span.search').css("opacity","0");
    }
  })

$('span.header, span.search').on("click", function() {
 $('span.header').css("display", "none");
 $('#searchBar').css("display", "inline");
 $('#searchBar').css("width", "75%");
 $('#searchBar').focus();
  })
 
$('#searchBar').on("blur", function() {
 $('#searchBar').css("width", "0%");
 setTimeout(function() {
  $('span.header').css("display", "inline");
 $('#searchBar').css("display", "none");
 },450);
})

  $('input.searchBar').on("keyup", function() {
  searchRepo();
  })
})


