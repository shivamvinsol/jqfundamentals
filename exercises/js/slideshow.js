function SlideshowCreator(options) {
  this.$slideshow = options.$slideshow;
  this.$slides = options.$slides;
}

SlideshowCreator.prototype.initialize = function() {
  $('body').prepend(this.$slideshow);
  this.$slides.hide();
  this.$nav = this.createNavigationArea();
  this.$nav.hide();
  this.createSlideshow();
};

SlideshowCreator.prototype.createSlideshow = function() {
  var _this = this,
    $slide = this.$slides.first();
  this.$nav.show();
  this.runSlideshow($slide);
  setInterval(function() {
    $slide = _this.getNextSlide($slide);
    _this.runSlideshow($slide);
  } ,3000);
};

// displays slide
SlideshowCreator.prototype.runSlideshow = function($slide) {
  $slide.fadeIn(1500);
  $slide.fadeOut(1500);
  this.displayData($slide.prevAll().length);
};

// return next slide to display
SlideshowCreator.prototype.getNextSlide = function($slide) {
  if ($slide[0] === this.$slides.last()[0]) {
    return this.$slides.first();
  } else {
    return $slide.next();
  }
};

// navigation area to display order of slides
SlideshowCreator.prototype.createNavigationArea = function() {
  $nav = $('<div>');
  $nav.css('height', '20px');
  $nav.css('border', '1px black solid');
  this.$slideshow.append($nav);
  return $nav;
};

// displays order of slides
SlideshowCreator.prototype.displayData = function(slideNumber) {
  var str = 'Currently showing slide number ' + (slideNumber+ 1) + ' Total slides = ' + this.$slides.length;
  this.$nav.html(str);
};

// ----------------starts
$(document).ready(function() {
  var options = {
    $slideshow : $('#slideshow'),
    $slides : $('#slideshow li')
  },
  slideshow = new SlideshowCreator(options);
  slideshow.initialize();
});
