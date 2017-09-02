function TabbedNavigationCreator(options) {
  this.$divModules = options.$divModules;
}

TabbedNavigationCreator.prototype.initialize = function () {
  this.$divModules.hide();  // initially hide all div modules
  this.createUnorderedList();  // create unordered list
  this.bindEvents();
  this.$listItems.first().trigger('click'); // show first tab
};

TabbedNavigationCreator.prototype.createUnorderedList = function() {
  this.$list = $('<ul>');
  this.$divModules.first().before(this.$list);
  this.createListItems();
};

TabbedNavigationCreator.prototype.createListItems = function($list) {
  var _this = this;
  this.$divModules.each(function() {
    var text = $(this).find('h2').text(),
        $listItem = $('<li>').html(text);
    _this.$list.append($listItem);
  });
};

TabbedNavigationCreator.prototype.bindEvents = function() {
  this.$listItems = this.$list.find('li');
  var _this = this;
  this.$listItems.on('click', function() { _this.bindClickEvent(this) });
};

TabbedNavigationCreator.prototype.bindClickEvent = function(listItem) {
  var $listItem = $(listItem);
  this.$divModules.hide();
  $('#' + $listItem.html().toLowerCase()).show(); // show div module with given id
  $listItem.addClass('current')
           .siblings().removeClass('current'); // adds current class to itself, and remove current class from other tabs
};

// starts------------------------
$(document).ready(function() {
  var options = {
    $divModules : $('div.module')
  },
      tabNavigation = new TabbedNavigationCreator(options);
  tabNavigation.initialize();
});
