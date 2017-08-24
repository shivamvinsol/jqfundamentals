function HiddenTextManager(pageElements) {
  this.$blog = pageElements.blog;
  this.$headlines = pageElements.headlines;
  this.$excerpts = pageElements.excerpts;
}
HiddenTextManager.prototype.initialize = function() {
  this.createClickEvent();
}

HiddenTextManager.prototype.createClickEvent = function() {
  var _this = this;
  this.$headlines.each(function() {
    _this.bindClickEvent($(this));
  });
}

HiddenTextManager.prototype.bindClickEvent = function($headline) {
  var _this = this;
  $headline.children('h3').bind('click', function() {
    event.preventDefault();
    // if currently open excerpt is clicked again
    if ($(this).next().is(':visible')) {
      // close currently open excerpt
      $(this).next().slideUp();
    } else {
      // slide up any other excerpt
      _this.$excerpts.not($(this)).slideUp();
      // slide down current excerpt
      $(this).next().slideDown();
    }
  });
}

// --------starts
$(document).ready(function() {
  var pageElements = {
    "blog" : $('#blog'),
    "headlines" : $('#blog li'),
    "excerpts" : $('p.excerpt')
  },
  hiddenText = new HiddenTextManager(pageElements);
  hiddenText.initialize();
});
