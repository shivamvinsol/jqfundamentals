function InputHintCreator(labelFieldSelector, searchFieldSelector) {
  this.$labelField = $(labelFieldSelector);
  this.$searchField = $(searchFieldSelector);
  this.$labelFieldText = this.$labelField.text();
}

InputHintCreator.prototype.initialize = function () {
  this.setInputFieldValue();
  this.addClassHint();
  this.removeLabel();
  this.bindFocusEvent();
  this.bindBlurEvent();
};


InputHintCreator.prototype.setInputFieldValue = function() {
  this.$searchField.attr('value', this.$labelFieldText);
};

InputHintCreator.prototype.addClassHint = function() {
  this.$searchField.addClass('hint');
};

InputHintCreator.prototype.removeLabel = function() {
  this.$labelField.remove();
};

InputHintCreator.prototype.bindFocusEvent = function() {
  var _this = this;
  this.$searchField.bind('focus', function () {
    _this.removeText();
    _this.removeClassHint();
  });
};

InputHintCreator.prototype.removeText = function() {
  this.$searchField.attr('value', '');
};

InputHintCreator.prototype.removeClassHint = function() {
  this.$searchField.removeClass('hint');
};

InputHintCreator.prototype.bindBlurEvent = function($searchField, $labelFieldText) {
  var _this = this;
  this.$searchField.bind('blur', function () {
    var text = $(this).attr('value');
    if (text.length === 0){
      _this.addText();
      _this.addClassHint();
    }
  });
};

InputHintCreator.prototype.addText = function() {
  this.setInputFieldValue(this.$searchField, this.labelFieldText);
};

// starts-----------------------
$('document').ready(function () {
  var labelFieldSelector = 'label[for="q"]', searchFieldSelector = 'input[name="q"]';
  var object = new InputHintCreator(labelFieldSelector, searchFieldSelector);
  object.initialize();
});
