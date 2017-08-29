function BlogContentManager(options) {
  this.$headlines = options.$headlines;
}

BlogContentManager.prototype.initialize = function() {
  this.createTargetDiv(); // where content will be displayed
  this.bindClickEvent();
};

BlogContentManager.prototype.createTargetDiv = function() {
  this.$headlines.each(function() {
    var $this = $(this),
      $content = $('<div>');
    $this.after($content);
    $this.data('content', $content); // binds div to respective headline, stores reference in $.fn.data
  });

};

BlogContentManager.prototype.bindClickEvent = function() {
  this.$headlines.on('click', function(event) {
    event.preventDefault();
    var $this = $(this),
      contentLink = $this.find('a').attr('href'),
      contentId = contentLink.substring(contentLink.indexOf('#')); // gives contentId to fetch from page
    $this.data('content').load('data/blog.html ' + contentId); // displays content on click
   });
};

$(document).ready(function() {
  var options = {
    $headlines : $('#blog li h3')
  },
    blogContent = new BlogContentManager(options);
  blogContent.initialize();
});
