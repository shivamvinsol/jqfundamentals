$('document').ready(function () {
  intialize();
});

function intialize() {
  const $labelField = $('label[for="q"]');
  const $searchInputField = $('input[name="q"]');
  const $labelFieldText = $labelField.text();

  setInputFieldValue($searchInputField, $labelFieldText);
  addClassHint($searchInputField);
  removeLabel($labelField);
  bindFocusEvent($searchInputField);
  bindBlurEvent($searchInputField, $labelFieldText);
}

function setInputFieldValue($searchInputField, $labelFieldText) {
  $searchInputField.attr('value', $labelFieldText);
}

function addClassHint($searchInputField) {
  $searchInputField.addClass('hint');
}

function removeClassHint($searchInputField) {
  $searchInputField.removeClass('hint');
}

function removeLabel($labelField) {
  $labelField.remove();
}

function bindFocusEvent($searchInputField) {
  $searchInputField.bind('focus', function () {
    removeText($(this));
    removeClassHint($(this));
  });
}

function bindBlurEvent($searchInputField, $labelFieldText) {
  $searchInputField.bind('blur', function () {
    var text = $(this).attr('value');
    if (text.length === 0){
      addText($(this), $labelFieldText);
      addClassHint($(this));
    }
  });
}

function removeText($searchInputField) {
  $searchInputField.attr('value', '');
}

function addText($searchInputField, $labelFieldText) {
  setInputFieldValue($searchInputField, $labelFieldText);
}
