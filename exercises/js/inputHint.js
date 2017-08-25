function InputHintCreator(options) {
  this.$labelField = options.$labelField;
  this.$searchField = options.$searchField;
  this.$labelFieldText = this.$labelField.text();
}

InputHintCreator.prototype.initialize = function () {
  this.$searchField.val(this.$labelFieldText);
  this.$searchField.addClass('hint');
  this.$labelField.remove();
  this.createFocusEvent();
  this.createBlurEvent();
};

InputHintCreator.prototype.createFocusEvent = function() {
  var _this = this;
  this.$searchField.on('focus', function () {
    var text = _this.$searchField.val();
    // remove text only when user didn't enter anything
    if (text === _this.$labelFieldText) {
      _this.$searchField.val('');
      _this.$searchField.removeClass('hint');
    }
  });
};

InputHintCreator.prototype.createBlurEvent = function() {
  var _this = this;
  this.$searchField.on('blur', function () {
    var text = _this.$searchField.val();
    // no input or just spaces provided by user
    if (text.trim().length === 0){
      _this.$searchField.val(_this.$labelFieldText);
      _this.$searchField.addClass('hint');
    }
  });
};

// starts-----------------------
$(document).ready(function () {
  var options = {
    $labelField : $('label[for="q"]'),
    $searchField : $('input[name="q"]')
  },
  inputHint = new InputHintCreator(options);
  inputHint.initialize();
});
