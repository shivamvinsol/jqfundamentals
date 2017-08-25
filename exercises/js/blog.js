function HiddenTextManager(options) {
  this.$headlines = options.$headlines;
  this.$excerpts = options.$excerpts;
}

HiddenTextManager.prototype.initialize = function() {
  this.createClickEvent();
};

HiddenTextManager.prototype.createClickEvent = function() {
  var _this = this;
  this.$headlines.on('click', function() {
    event.preventDefault();
    var $this = $(this);
    $this.next().slideToggle();
    // close any other opened excerpt
    _this.$excerpts.not($this.next()).slideUp();
  });
};

// --------starts
$(document).ready(function() {
  var options = {
    $headlines : $('#blog li h3'),
    $excerpts : $('p.excerpt')
  },
  hiddenText = new HiddenTextManager(options);
  hiddenText.initialize();
});
