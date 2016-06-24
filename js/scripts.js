//business logic
var rangeInput = 0;

var pingPong = function(upperRange) {
  console.log(result);
};

//interface logic
$(function() {
  $("#num-form").submit(function(event) {
    event.preventDefault();
    rangeInput = parseInt($("#range").val());
    pingPong(rangeInput);
  })
});
