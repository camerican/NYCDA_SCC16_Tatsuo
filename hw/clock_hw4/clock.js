$(document).ready(function(){

  //function to create random color
  function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
  var colorArray = ["red", "black", "white", "purple", "pink", "yellow"];


  // $("#hours").text()
  setInterval(function(){
    var dateTime = new Date();
    var minutesTwoDigitsWithLeadingZero = ("0" + dateTime.getMinutes()).substr(-2);
    $("#milliseconds").text(dateTime.getMilliseconds());
    $("#seconds").text(dateTime.getSeconds());
    $("#minutes").text(minutesTwoDigitsWithLeadingZero);
    $("#hours").text(dateTime.getHours());

    var minutes = dateTime.getMinutes();
    var hours = dateTime.getHours();

    if(minutes%2 === 0){
      $("body").css("backgroundColor", "pink");
     } else if(minutes%5 === 0) {
      $("body").css("backgroundColor", getRandomColor());
     } else {
       $("body").css("backgroundColor", "yellow");
    }

  },100);

  var CurrentDateTime = new Date();
  var CurrentHour = CurrentDateTime.getHours();
  var nextHour;

  setInterval(function() {
    var nextDateTime = new Date();
    var nextHour = nextDateTime.getHours();

    if(nextHour === currentHour) {

    } else {
      $("body").css("backgroundColor", getRandomColor());

      CurrentHour = nextHour;
    }

  }, 60*1000);

 $(".fa-twitter-square").click(function() {
  window.open('http://twitter.com', '_blank');
  });

 $(".fa-facebook-square").click(function() {
  window.open('https://facebook.com', '_blank');
  });

 $(".fa-snapchat-square").click(function() {
  window.open('https://snapchat.com', '_blank');
  });



});

