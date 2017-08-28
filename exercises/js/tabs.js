function TabbedNavigationCreator(options) {
  this.$divModules = options.$divModules;
}

TabbedNavigationCreator.prototype.initialize = function () {
  // hide all div modules
  this.$divModules.hide();
  // create unordered list
  var $list= this.createUnorderedList();
  var $listItems = $list.find('li');
  // create click event on list items
  this.bindClickEvent($listItems);
  // show first tab
  $listItems.first().trigger('click');
};

TabbedNavigationCreator.prototype.createUnorderedList = function() {
  var $list = $('<ul>');
  this.$divModules.first().before($list);
  this.createListItems($list);
  return $list;
};

TabbedNavigationCreator.prototype.createListItems = function($list) {
  var _this = this;
  this.$divModules.each(function() {
    var text = $(this).find('h2').text();
    var $listItem = $('<li>');
    $listItem.html(text);
    $list.append($listItem);
  });
};

TabbedNavigationCreator.prototype.bindClickEvent = function($listItems) {
  var _this = this;
  $listItems.on('click', function() {
    _this.$divModules.hide();
    var $this = $(this);
    // select div by id and show it
    $('#' + $this.html().toLowerCase()).show();
    // remove current class from items
    $listItems.removeClass('current');
    // add current class to clicked item
    $this.addClass('current');
  });
};

// starts------------------------
$(document).ready(function() {
  var options = {
    $divModules : $('div.module')
  },
  tabNavigation = new TabbedNavigationCreator(options);
  tabNavigation.initialize();
});
