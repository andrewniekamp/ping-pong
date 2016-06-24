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
};

//interface logic
$(function() {
  $("#num-form").submit(function(event) {
    event.preventDefault();
    rangeInput = parseInt($("#range").val());
    if (rangeInput < 1) {
      $("#result").html(" ");
      $("#result").css("opacity", "0.01");
      $("#result").animate({opacity: 1}, 1500);
      $("#result").html("<h1>That number is too low!</h1><p>Please use a positive number...</p>");
    } else if (rangeInput > 10000) {
      $("#result").html(" ");
      $("#result").css("opacity", "0.01");
      $("#result").animate({opacity: 1}, 1500);
      $("#result").html("<h1>That number is too high!</h1><p>Please use a number lower than 10,000...</p>");
    } else {
      pingPong(rangeInput);
      outputItem = "<h1>Here you are!</h1>"
      outputItem += '<ul>';
      for (var i = 0; i < result.length; i++) {
        outputItem += "<li>" + result[i] + "</li>";
      };
      outputItem += "</ul>";
      $("#result").html(outputItem);
      $("#result").css("opacity", "0.01");
      $("#result").animate({opacity: 1}, 1500);
    }
  });
});
