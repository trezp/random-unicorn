(function(){
  var unicornFrame  = document.getElementById('unicornFrame'),
      button        = document.getElementById('printRandomUnicorn'),
      name          = document.getElementById('unicorn-name'),
      infoContainer = document.getElementById('info-container'),
      img           = document.getElementById('img');


  function getUniqueUnicorn(){
    var randNum,
    // filter by duplicate property to get an array of never-seen-before objects!
    uniqueUnicorns = unicorns.filter(function(unicorn){
      return unicorn.duplicate === false;
    });

    //if we're out of unique unicorns, reset the array
    if (uniqueUnicorns.length <= 1){
        unicorns.forEach(function(unicorn){
          unicorn.duplicate = false;
      });
    }
    //get a random number and pluck a unique unicorn from the list of eligible unicorns
    randNum = Math.floor(Math.random() * uniqueUnicorns.length);
    return uniqueUnicorns[randNum];
  }

  function printRandomUnicorn(){
    var unicorn = getUniqueUnicorn();
    console.log(unicorn.name);
    //take this unicorn out of the list of eligible unicorns
    unicorn.duplicate = true;

    name.innerHTML = unicorn.name + " the Unicorn";
    img.src = 'images/' + unicorn.image;
    infoContainer.innerHTML = '<p>Age: ' + unicorn.age + '</p>';
    infoContainer.innerHTML += '<p>Favorite Dessert: ' + unicorn.dessert + '</p>'

  }

  button.addEventListener('click', printRandomUnicorn);
}());
