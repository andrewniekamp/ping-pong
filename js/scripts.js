//business logic
var rangeInput = 0;
var result = [];
var outputItem = '';

var pingPong = function(upperRange) {
  result = [];
  for (var i = 1; i <= upperRange; i++) {
    if (i % 5 === 0 && i % 3 === 0) {
      result.push("ping-pong")
    } else if (i % 5 === 0) {
      result.push("pong")
    } else if (i % 3 === 0) {
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
    outputItem = '';
    for (var i = 0; i < result.length; i++) {
      outputItem += "<li>" + result[i] + "</li>";
    };
    outputItem += "</ul>";
    $("#result").html(outputItem);
  });
});
