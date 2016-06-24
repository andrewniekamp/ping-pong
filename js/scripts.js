//business logic
var rangeInput = 0;
var result = [];

var pingPong = function(upperRange) {
  for (var i = 1; i <= upperRange; i++) {
    if (i % 3 === 0) {
      result.push("ping");
    } else {
      result.push(i);
    }
  }
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
