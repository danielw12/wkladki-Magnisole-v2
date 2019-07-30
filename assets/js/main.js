var today = new Date();

//var time = today.getHours() + ":" + today.getMinutes();



var currentHours = today.getHours();
currentHours = ("0" + currentHours).slice(-2);
var currentMinutes = today.getMinutes();
currentMinutes = ("0" + currentMinutes).slice(-2);
var time = currentHours + ":" + currentMinutes;


document.getElementById('time').innerHTML = time;