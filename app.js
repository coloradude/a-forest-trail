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
  
  //Sets behavior for the walk button. 
  $('#walk').click(function(){

    //Disables the button for 3 seconds after each click
    this.setAttribute('disabled', true);
    setTimeout(function(){
      $('#walk').removeAttr('disabled')
    }, 3000);

    //displays steps tracker and increments by one for every button click
    $('#steps').css('display', 'block');
    stepCounter += 1;
    stepDiv.innerHTML = 'steps: ' + stepCounter;

    //creates status message and prepends to #left div
    var walking = document.createElement('div');
    walking.innerHTML = 'you continue down the trail';
    $('#left').prepend(walking);

    //berry picking
    if (stepCounter % 1 === 0){
      berryButton = document.createElement('button');
      berryButton.innerHTML = 'pick berries';
      berryButton.setAttribute('id', 'berries');
      $('#buttons').append(berryButton);
    }

    $('#berries').on('click', function(){
      //berriesToAdd = Math.max(Math.random() * 10);
      $('#berry-tracker').css('display', 'block');
      randomNumberOfBerries = Math.floor(Math.random() * 10);
      berryCounter += randomNumberOfBerries;
      berryDiv.innerHTML = 'berries: ' + berryCounter;
      $(this).remove();
      var pickingBerries = document.createElement('div');
      pickingBerries.innerHTML = 'you picked ' + randomNumberOfBerries + ' berries' 
      $('#left').prepend(pickingBerries);
    });
  });

  //Initialize the berry counter div and appends it to the status bar. #berry-tracker is set to display: none.
  var berryCounter = 0;
  var berryDiv = document.createElement('div');
  berryDiv.setAttribute('id', 'berry-tracker');
  $('#status').append(berryDiv);

});



