function MenuManager(options) {
  this.$menuItems = options.$menuItems;
}

MenuManager.prototype.initialize = function () {
  this.createDropDownMenu();
};

MenuManager.prototype.createDropDownMenu = function() {
  var _this = this;
  this.$menuItems.hover(
    function() {
      // show children and add class hover on hover
      var $this = $(this);
      $this.find('ul').show();
      $this.addClass('hover');
    }, function() {
      // hide children and remove class hover when hover ends
      var $this = $(this);
      $this.find('ul').hide();
      $this.removeClass('hover');
    }
  );
};

// -------starts
$(document).ready(function() {
  var options = {
    $menuItems : $('#nav > li')
  },
  menu = new MenuManager(options);
  menu.initialize();
});
