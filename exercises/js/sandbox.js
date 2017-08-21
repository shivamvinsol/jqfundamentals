$(document).ready(function() {
  selectElements();
  traverseElements();
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

function traverseElements() {
  // log each image's alt attribute
  $images = $('img');
  $images.each(function() {
    console.log(this.alt);
  });

  // select search input textbox
  $searchTextBox = $('input[name="q"]');
  // go to form, add a class to the form
  $searchTextBox.parent().addClass('class1');

  // first item in list #mylist with class current
  $firstListItem = $('#myList > li.current').first();
  // remove class from it
  $firstListItem.removeClass('current');
  // go to next list item, // add class current to it
  $nextListItem = $firstListItem.next().addClass('current');

  // select inside specials
  $selectInsideSpecials = $('#specials select[name="day"]');
  // traverse to submit button
  $submitButton = $selectInsideSpecials.parent().next().children().first();

  // Select the first list item in the #slideshow element;
  $firstItemInSlideshow = $('#slideshow > li').first();
  //  add the class "current" to it
  $firstItemInSlideshow.addClass('current');
  // add class of disabled to its sibling elements.
  $firstItemInSlideshow.siblings().each(function() {
    $(this).addClass('disabled');
  });
}
