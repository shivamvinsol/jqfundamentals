$('document').ready(function() {
  initialize();
});

function initialize() {
  $menuItems = $('#nav li');
  createDropDownMenu($menuItems);
}

function createDropDownMenu($menuItems) {
  $menuItems.each(function() {
    bindHoverEvent($(this));
  });
}

function bindHoverEvent($menuItem) {
  $menuItem.hover(
    function() {
      if($(this).children('ul').length > 0) {
        $(this).children().show();
      }
      $(this).addClass('hover');
    }, function() {
      if($(this).children('ul').length > 0) {
        $(this).children('ul').hide();
      }
      $(this).removeClass('hover');
    }
  );
}
