$(document).ready(function() {
  selectElements();
});

function selectElements() {
  // div with class module
  $classModuleDiv = $('div.module');

  // three selectors to get the third item in the #myList
  $myListItem1 = $('#myListItem');
  $myListItem2 = $('#myList > li').eq(2);
  $myListItem3 = $('#myList li:nth-child(3)');
  // $myListItem1 is fastest , as it uses ID

  // label for the search input
  $searchInputLabel = $("label[for='q']");

  // hidden elements on page
  $hiddenElementsCount = $(':hidden').length;

  // images with alt attribute
  $imagesWithAlt = $('img[alt]').length;

  // // odd table rows in table body
  $oddRows = $('tbody > tr:odd');
}
