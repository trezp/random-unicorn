(function(){
  var unicornFrame  = document.getElementById('unicornFrame'),
      button        = document.getElementById('printRandomUnicorn'),
      infoContainer = document.getElementById('info-container'),
      img           = document.getElementById('img'),
      body          = document.querySelector('body');

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

  function getRandomColor(colors){
    var randNum = Math.floor(Math.random() * colors.length);
    console.log(randNum);
    return colors[randNum];
  }

  function printRandomUnicorn(){
    var unicorn = getUniqueUnicorn(),
        randColor = getRandomColor(colors);

    console.log(unicorn.name);
    //take this unicorn out of the list of eligible unicorns
    unicorn.duplicate = true;

    //name.innerHTML = unicorn.name + " the Unicorn";
    img.src = 'images/' + unicorn.image;
    infoContainer.innerHTML = '<h2>' + unicorn.name + ' the Unicorn</h2>';
    infoContainer.innerHTML += '<p>Age: ' + unicorn.age + '</p>';
    infoContainer.innerHTML += '<p>Favorite Dessert: ' + unicorn.dessert + '</p>';

    body.style.color = randColor;
    img.style.borderColor = randColor;
    button.style.backgroundColor = randColor;
    button.style.borderColor = randColor;
  }

  function autoUnicorn(){
    setInterval(printRandomUnicorn, 5000);
  }

  button.addEventListener('click', function(){
    printRandomUnicorn();
  });
  setInterval(printRandomUnicorn, 12000);
}());
