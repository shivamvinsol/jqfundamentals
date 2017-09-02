function MenuManager(options) {
  this.$menuItems = options.$menuItems;
}

MenuManager.prototype.createDropDownMenu = function () {
  this.$menuItems.hover(
    function() {
      $(this).toggleClass('hover')  // adds class 'hover' on hover
             .find('ul').toggle(); // hover shows sub-items, if any
    }
  );
};

// -------starts
$(document).ready(function() {
  var options = {
    $menuItems : $('#nav > li')
  },
      menu = new MenuManager(options);
  menu.createDropDownMenu();
});
