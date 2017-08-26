function SpecialsManager(option) {
  this.$days = option.$days;
  this.$submitButton = option.$submitButton;
  this.$specialsForm = option.$specialsForm;
}

SpecialsManager.prototype.initialize = function() {
  this.createTargetDiv();
  this.bindSelectEvent();
  this.$submitButton.hide();
};

SpecialsManager.prototype.createTargetDiv = function() {
  $contentArea = $('<div>');
  this.$specialsForm.append($contentArea);
}

SpecialsManager.prototype.bindSelectEvent = function() {
  var _this = this; //object
  var response = {};
  this.$days.on('change', function() {
    var daySelected = $(this);
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

        error : function(error) {
          alert('Error');
        }
      });
    }
  });
};

SpecialsManager.prototype.displayContent = function(content) {
  $contentArea.html('');
  $contentArea.css('color', content.color); // content color
  $heading = $('<h1>').html(content.title); // Content Title
  $contentArea.append($heading);
  $description = $('<p>');
  $description.append(content.text); // Content description
  $contentArea.append($description);
  $image = $('<img>');
  $image.attr('src', content.image.substring(1));
  $contentArea.append($image); // content image
};

// starts --------------------
$(document).ready(function() {
  var option = {
    $days : $('#specials select[name="day"]'),
    $submitButton : $('#specials input[type="submit"]'),
    $specialsForm : $('#specials form')
  },
    specials = new SpecialsManager(option);
  specials.initialize();
})
