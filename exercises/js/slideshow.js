function Slider(options) {
  this.$slideshow = options.$slideshow;
  this.$slides = options.$slides;
  this.totalSlides = this.$slides.length; // count of all slides
}

Slider.prototype.initialize = function() {
  $('body').prepend(this.$slideshow); // moves slideshow element to top of body
  this.$slides.hide();  // hides all slides initially
  this.createNavigationArea();
  this.createSlideshow();
};

Slider.prototype.createSlideshow = function() {
  var _this = this;
  this.$slide = this.$slides.first();
  // run for the first time
  this.runSlideshow();

  // will keep changing slides at interval of 3 seconds
  setInterval(function() {
    _this.getNextSlide();
    _this.runSlideshow();
  } ,3000);
};

// displays slide
Slider.prototype.runSlideshow = function() {
  this.$slide.fadeIn(1500);
  this.$slide.fadeOut(1500);
  this.displayData();
};

// get next slide to display
Slider.prototype.getNextSlide = function() {
  if (this.$slide.is(this.$slides.last())) {
    this.$slide = this.$slides.first();
  } else {
    this.$slide =  this.$slide.next();
  }
};

// navigation area to display order of slides
Slider.prototype.createNavigationArea = function() {
  this.$nav = $('<div>').css({height: '20px', border: '1px black solid'});
  this.$slideshow.append(this.$nav);
};

// displays order of slides
Slider.prototype.displayData = function() {
  var slideNumber = this.$slide.prevAll().length,
      sliderData = 'Currently showing slide number ' + (slideNumber+ 1) + ' Total slides = ' + this.totalSlides;
  this.$nav.html(sliderData);
};

// ----------------starts
$(document).ready(function() {
  var options = {
    $slideshow : $('#slideshow'),
    $slides : $('#slideshow li')
  },
      slideshow = new Slider(options);
  slideshow.initialize();
});
