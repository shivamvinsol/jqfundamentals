$(document).ready(function() {
  selectElements();
  traverseElements();
  manipulateElements();
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

  // odd table rows in table body
  $oddRows = $('tbody > tr:odd');
}

function traverseElements() {
  // log each image's alt attribute
  $('img').each(function() {
    console.log($(this).attr('alt'));
  });

  // select search input textbox
  $searchTextBox = $('input[name="q"]');
  // go to form, add a class to the form
  $searchTextBox.closest('form#search').addClass('class1');

  // remove class current from first item in list #mylist with class current
  $firstListItem = $('#myList > li.current').first().removeClass('current');
  // go to next list item, // add class current to it
  $firstListItem.next().addClass('current');

  // select inside specials
  $selectInsideSpecials = $('#specials select[name="day"]');
  // traverse to submit button
  $submitButton = $selectInsideSpecials.closest('form').find('input[type="submit"]');


  // add the class "current" to the first list item in the #slideshow element;
  $firstItemInSlideshow = $('#slideshow > li').first().addClass('current');
  // add class of disabled to its sibling elements.
  $firstItemInSlideshow.siblings().addClass('disabled')
}

function manipulateElements() {
  // Add five new list items to the end of the unordered list #myList.
  $listItems = $('<li>1</li> <li>2</li> <li>3</li> <li>4</li> <li>5</li>')
  $('#myList').append($listItems);

  // Remove the odd list items
  $('li:odd').remove();

  // Add another h2 and another paragraph to the last div.module
  $lastDivModule = $('div.module').last();
  $heading = $('<h2> Another Heading </h2>');
  $paragraph = $('<p> Another paragraph </p>');
  $lastDivModule.append($heading);
  $lastDivModule.append($paragraph);

  // Add another option to the select element; give the option the value "Wednesday"
  $option = $('<option> Wednesday </option>');
  $option.attr('value', 'Wednesday');
  $('select').append($option);

  // Add a new div.module to the page after the last one; put a copy of one of the existing images inside of it.
  $divModule = $('<div></div>');
  $divModule.addClass('module');
  $image = $('img').first().clone();
  $divModule.append($image);
  $divModule.insertAfter($lastDivModule);
}
