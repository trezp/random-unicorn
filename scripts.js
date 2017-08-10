(function(){
  const unicornFrame  = document.getElementById('unicornFrame'),
      button        = document.getElementById('printRandomUnicorn'),
      infoContainer = document.getElementById('info-container'),
      img           = document.getElementById('img'),
      body          = document.querySelector('body');


  button.addEventListener('click', ()=>{
    printRandomUnicorn();
  });

  setInterval(printRandomUnicorn, 12000);

  function getRandomItemFromArray(arr){
    const randNum = Math.floor(Math.random() * arr.length);
    return arr[randNum];
  }

  function getUniqueUnicorn(){
    // filter by duplicate property to get an array of never-seen-before objects!
    const uniqueUnicorns = unicorns.filter((unicorn) =>{
      return unicorn.duplicate === false;
    });

    //if we're out of unique unicorns, reset the array
    if (uniqueUnicorns.length <= 1){
        unicorns.forEach((unicorn) =>{
          unicorn.duplicate = false;
      });
    }
    //get a random number and pluck a unique unicorn from the list of eligible unicorns
    return getRandomItemFromArray(uniqueUnicorns);
  }

  function printRandomUnicorn(){
    const unicorn = getUniqueUnicorn(),
        randColor = getRandomItemFromArray(colors);

    //take this unicorn out of the list of eligible unicorns
    unicorn.duplicate = true;

    //print and assign random colors
    img.src = 'images/' + unicorn.image;
    infoContainer.innerHTML =
      `
      <h2>${unicorn.name}</h2>
      <p>Age: ${unicorn.age}</p>
      <p>Favorite Dessert: ${unicorn.dessert}`;

    body.style.color = randColor;
    img.style.borderColor = randColor;
    button.style.backgroundColor = randColor;
    button.style.borderColor = randColor;
  }
}());
