$(document).ready(function(){

  //Tracks energy level and appends to the #status div. 
  var userEnergy = 100;
  var energyP = document.createElement('div');
  var energyText = document.createTextNode('energy: ' + userEnergy);
  var energyTracker = energyP.appendChild(energyText);
  $(energyTracker).appendTo('#status');

  //initialize step tracker, appends to #status and sets display: none
  var stepCounter = 0;
  var stepDiv = document.createElement('div');
  stepDiv.setAttribute('id', 'steps');
  $(stepDiv).appendTo('#status');

  //Text dialgougegeg
  

  //Sets behavior for the walk button. Increments stepCounter by 1 and sets #steps to display: true.
  $('#walk').click(function(){
    this.setAttribute('disabled', true);
    setTimeout(function(){
      $('#walk').removeAttr('disabled')
    }, 3000);
    $('#steps').css('display', 'block');
    stepCounter += 1;
    stepDiv.innerHTML = 'steps: ' + stepCounter;
    var walking = document.createElement('div');
    walking.innerHTML = 'you continue down the trail';
    $('#left').prepend(walking);
  });
});



