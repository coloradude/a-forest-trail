$(document).ready(function(){
  //Tracks energy level and appends to the #status div. 
  var userEnergy = 100;
  var energyTracker = document.createElement('div');
  energyTracker.innerHTML = 'energy: ' + userEnergy;
  $(energyTracker).appendTo('#status');

  //initialize step tracker, appends to #status and sets display: none
  var stepCounter = 0;
  var stepDiv = document.createElement('div');
  stepDiv.setAttribute('id', 'steps');
  $(stepDiv).appendTo('#status');

   //Initialize the berry counter div and appends it to the status bar. #berry-tracker is set to display: none.
  var berryCounter = 0;
  var berryDiv = document.createElement('div');
  berryDiv.setAttribute('id', 'berry-tracker');
  $('#status').append(berryDiv);

  //Water tracker div
  var numberOfWaters = 0;
  var waterDiv = document.createElement('div');
  waterDiv.setAttribute('id', 'water-tracker');
  $('#status').append(waterDiv);

  
  //Sets behavior for the walk button. 
  $('#walk').click(function(){

    //lowers userEnergy by a random number between 1 and 10
    userEnergy -= Math.floor(Math.random() * 10);
    energyTracker.innerHTML = 'energy: ' + userEnergy;

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
    if (stepCounter % 3 === 0){
      berryButton = document.createElement('button');
      berryButton.innerHTML = 'pick berries';
      berryButton.setAttribute('id', 'berries');
      $('#buttons').append(berryButton);
    }

    //pick berries button functionality
    $('#berries').click(function(){
      $('#berry-tracker').css('display', 'block');
      randomNumberOfBerries = Math.floor(Math.random() * 10);
      berryCounter += randomNumberOfBerries;
      berryDiv.innerHTML = 'berries: ' + berryCounter;
      $(this).remove();
      var pickingBerries = document.createElement('div');
      pickingBerries.innerHTML = 'you picked ' + randomNumberOfBerries + ' berries' 
      $('#left').prepend(pickingBerries);

      //eat berries every 10 seconds
      setTimeout(function(){
        var eatBerriesButton = document.createElement('button');
        eatBerriesButton.innerHTML = 'eat berries';
        eatBerriesButton.setAttribute('id', 'eat-berries');
        $('#buttons').append(eatBerriesButton);
        //eatBerries button functionality
        $('#eat-berries').click(function(){
          $(this).remove();
          berryCounter -= 1;
          userEnergy  += 2;
          ateBerriesDiv = document.createElement('div');
          ateBerriesDiv.innerHTML = 'you ate berries and gained energy';
          energyTracker.innerHTML = 'energy: ' + userEnergy;
          berryDiv.innerHTML = 'berries: ' + berryCounter;
          $('#left').prepend(ateBerriesDiv);

        });
      }, 10000)

      
    });

    //fund water button creation and addition to #buttons div
    if (stepCounter % 5 === 0){
      findWaterButton = document.createElement('button');
      findWaterButton.innerHTML = 'look for water';
      findWaterButton.setAttribute('id', 'find-water');
      $('#buttons').append(findWaterButton);
    }

    $('#find-water').click(function(){
      chanceOfWater = Math.random() + 0.5;
      if (chanceOfWater > 1){
        numberOfWaters += 1;
        $('#water-tracker').css('display', 'block');
        waterDiv.innerHTML = 'water: ' + numberOfWaters;
        var foundWater = document.createElement('div');
        foundWater.innerHTML = 'you found water';
        $('#left').prepend(foundWater);
      } else {
        var noWater = document.createElement('div');
        noWater.innerHTML = 'you did not find water';
        $('#left').prepend(noWater);
      }
      $(this).remove();
      if (numberOfWaters > 0){
        setTimeout(function(){
          var drinkWaterButton = document.createElement('button');
          drinkWaterButton.innerHTML = 'drink water';
          drinkWaterButton.setAttribute('id', 'drink-water');
          $('#buttons').append(drinkWaterButton);
          //eatBerries button functionality
          $('#drink-water').click(function(){
            $(this).remove();
            numberOfWaters -= 1;
            userEnergy  += 10;
            drnkWaterdDiv = document.createElement('div');
            drnkWaterdDiv.innerHTML = 'you drank water and gained energy';
            energyTracker.innerHTML = 'energy: ' + userEnergy;
            waterDiv.innerHTML = 'water: ' + numberOfWaters;
            $('#left').prepend(drnkWaterdDiv);

          });
        }, 20000)
      }
    });
  });
  setTimeout(function(){
    supriseButton = document.createElement('button');
    supriseButton.innerHTML = 'dont click this';
    supriseButton.setAttribute('id','surprise-button');
    supriseButton.setAttribute('onclick', "window.open('http://i.imgur.com/ASnMips.jpg')");
    $('#surprise').append(supriseButton);
    },50000)
});



