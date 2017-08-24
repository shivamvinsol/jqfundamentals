function InputHintCreator(pageElements) {
  this.$labelField = pageElements.labelField;
  this.$searchField = pageElements.searchField;
  this.$labelFieldText = this.$labelField.text();
}

InputHintCreator.prototype.initialize = function () {
  this.$searchField.attr('value', this.$labelFieldText);
  this.$searchField.addClass('hint');
  this.$labelField.remove();
  this.bindFocusEvent();
  this.bindBlurEvent();
};

InputHintCreator.prototype.bindFocusEvent = function() {
  var _this = this;
  this.$searchField.bind('focus', function () {
     var text = _this.$searchField.attr('value');
     // remove text only when user didn't enter anything
     if (text === _this.$labelFieldText) {
       _this.$searchField.attr('value', '');
       _this.$searchField.removeClass('hint');
     }
  });
};

InputHintCreator.prototype.bindBlurEvent = function($searchField, $labelFieldText) {
  var _this = this;
  this.$searchField.bind('blur', function () {
    var text = _this.$searchField.attr('value');
    if (text.length === 0){
      _this.$searchField.attr('value', _this.$labelFieldText);
      _this.$searchField.addClass('hint');
    }
  });
};

// starts-----------------------
$(document).ready(function () {
  var pageElements = {
    'labelField' : $('label[for="q"]'),
    'searchField' : $('input[name="q"]')
  },
  inputHint = new InputHintCreator(pageElements);
  inputHint.initialize();
});
