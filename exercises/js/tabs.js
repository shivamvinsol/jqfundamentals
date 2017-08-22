$('document').ready(function() {
  createTabbedNavigation();
});

function createTabbedNavigation() {
  const $divModules = $('div.module');
  // hide all div modules
  hideDivModules($divModules);
  // create unordered list
  const $list = createUnorderedList($divModules.eq(0));
  //  create list items inside list
  createListItems($divModules, $list);
  // create click event on list items
  createClickEvent($divModules, $list);
  // show first tab
  showFirstTab($list);
}

function hideDivModules($divModules) {
  $divModules.hide();
}

function  createUnorderedList($firstDivModule) {
  var $list = $('<ul>');
  $firstDivModule.before($list);
  return $list;
}

function createListItems($divModules, $list) {
  $divModules.each(function() {
    var text = getHeadingText($(this));
    var $listItem = $('<li>');
    $listItem.html(text);
    $list.append($listItem);
  });
}

function getHeadingText($divModule) {
  return $divModule.children('h2').text();
}

function createClickEvent($divModules, $list) {
  $list.children().each(function() {
    $(this).bind('click', function(){
      bindClickEvent($(this), $divModules, $list);
    });
  });
}

function bindClickEvent($listItem, $divModules, $list) {
  hideDivModules($divModules);
  showDivModule($listItem.html());
  removeCurrentClass($list);
  addCurrentClass($listItem);
}

function showDivModule(divModuleId) {
  $('#' + divModuleId.toLowerCase()).show();
}

function removeCurrentClass($list) {
  $list.children().removeClass('current');
}

function addCurrentClass($listItem) {
  $listItem.addClass('current');
}

function showFirstTab($list) {
  $list.children().eq(0).trigger('click');
}
