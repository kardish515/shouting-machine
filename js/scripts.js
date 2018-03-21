$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var textInput = $("input#inputText").val();
    textInput = textInput.toUpperCase();
    $("h1#shout").text(textInput);
    event.preventDefault();
  });
});
