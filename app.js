$(document).ready(function(){
  var userEnergy = 100;
  var energyP = document.createElement('p');
  var energyText = document.createTextNode('energy: ' + userEnergy);
  var energyTracker = energyP.appendChild(energyText);
  $(energyTracker).appendTo('#status');
  console.log(energyP,energyText,energyTracker);
});



