function TabbedNavigationCreator(pageElements) {
  this.$divModules = pageElements.divModules;
}

TabbedNavigationCreator.prototype.initialize = function () {
  // hide all div modules
  this.$divModules.hide();
  // create unordered list
  var $list = this.createUnorderedList();
  // create click event on list items
  this.createClickEvent($list);
  // show first tab
  this.showFirstTab($list);
};


TabbedNavigationCreator.prototype.createUnorderedList = function() {
  var $list = $('<ul>');
  this.$divModules.first().before($list);
  this.createListItems($list);
  return $list;
}

TabbedNavigationCreator.prototype.createListItems = function($list) {
  var _this = this;
  this.$divModules.each(function() {
    var text = $(this).find('h2').text();
    var $listItem = $('<li>');
    $listItem.html(text);
    $list.append($listItem);
  });
}

TabbedNavigationCreator.prototype.createClickEvent = function($list) {
  var _this = this;
  $list.children().each(function() {
    $(this).bind('click', function(){
      _this.bindClickEvent($list, $(this));
    });
  });
}

TabbedNavigationCreator.prototype.bindClickEvent = function($list, $listItem) {
  this.$divModules.hide();
  // select div by id and show it
  $('#' + $listItem.html().toLowerCase()).show();
  // remove current class from other items
  $list.children().not($listItem).removeClass('current');
  // add current class to clicked item
  $listItem.addClass('current');
}

TabbedNavigationCreator.prototype.showFirstTab = function($list) {
  $list.children().first().trigger('click');
}

// starts------------------------
$(document).ready(function() {
  var pageElements = {
    'divModules' : $('div.module')
  },
  tabNavigation = new TabbedNavigationCreator(pageElements);
  tabNavigation.initialize();
});
