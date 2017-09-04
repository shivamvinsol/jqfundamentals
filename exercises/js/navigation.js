function MenuManager(options) {
  this.$menuItems = options.$menuItems;
}

MenuManager.prototype.bindEvent = function () {
  var _this = this;
  this.$menuItems.hover( function() { _this.bindHoverEvent(this); } );
};

MenuManager.prototype.bindHoverEvent = function(menuItem) {
  var $menuItem = $(menuItem);
  $menuItem.toggleClass('hover')  // adds class 'hover' on hover
           .find('ul').toggle(); // hover shows sub-items, if any
};

// -------starts
$(document).ready(function() {
  var options = {
    $menuItems : $('#nav > li')
  },
      menu = new MenuManager(options);
  menu.bindEvent();
});
