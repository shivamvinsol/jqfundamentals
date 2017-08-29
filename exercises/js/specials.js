function SpecialsManager(option) {
  this.$days = option.$days;
  this.$submitButton = option.$submitButton;
  this.$specialsForm = option.$specialsForm;
}

SpecialsManager.prototype.initialize = function() {
  this.$contentArea = this.createTargetDiv();
  this.bindSelectEvent();
  this.$submitButton.hide();
};

SpecialsManager.prototype.createTargetDiv = function() {
  var $contentArea = $('<div>');
  this.$specialsForm.append($contentArea);
  return $contentArea;
}

SpecialsManager.prototype.bindSelectEvent = function() {
  var _this = this, //object
    response = {},
    daySelected = "";
  this.$days.on('change', function() {
    daySelected = $(this);
    if (Object.keys(response).length !== 0) {
      // return result if already fetched once
      _this.displayContent(response[daySelected.val()]);
    } else {
      $.ajax({
        url : 'data/specials.json',
        type : 'GET',
        dataType : 'JSON',

        success : function(json) {
          response = json;  // cache result
          _this.displayContent(response[daySelected.val()]);
        },

        error : function(xhr, status) {
          alert('Error');
        }
      });
    }
  });
};

SpecialsManager.prototype.displayContent = function(content) {
  var $heading = $('<h1>').html(content.title), // Content Title,
    $description = $('<p>').append(content.text), // Content description
    $image = $('<img>', { 'src' : content.image.substring(1) }); // content image

  this.$contentArea.html('') // clear content area
    .css('color', content.color) // content color
    .append($heading, $description, $image);
};

// starts --------------------
$(document).ready(function() {
  var option = {
    $days : $('#specials select[name="day"]'),
    $submitButton : $('#specials li.buttons'),
    $specialsForm : $('#specials form')
  },
    specials = new SpecialsManager(option);
  specials.initialize();
})
