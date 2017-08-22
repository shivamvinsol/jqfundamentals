$('document').ready(function() {
  initialize();
});

function initialize() {
  const $blog = $('#blog');
  const $headlines = $('#blog li');
  createClickEvent($headlines);
}

function createClickEvent($headlines) {
  $headlines.each(function() {
    bindClickEvent($(this));
  });
}

function bindClickEvent($headline) {
  $headline.children('h3').bind('click', function() {
    event.preventDefault();
    slideUpExcerpts();
    slideDownCurrentExcerpt($(this));
  });
}

function slideDownCurrentExcerpt($headline) {
  $headline.next().slideDown();
}

function slideUpExcerpts() {
  $('p.excerpt').slideUp();
}
