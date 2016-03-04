(function () {
  'use strict';

  //assigning the inputs into a variable to use.
  const squareName = document.querySelectorAll('input');

  let count = 0;

  //looping through all my inputs to find name values upon click.
  for (var i = 0; i < squareName.length; i++) {

    squareName[i].addEventListener('click', function (event) {

        //counting each click as a turn
        count++;

        //alternating a value of x or o to each turn based on remainder
        if (count % 2 !== 0){
          event.target.value = 'x';
        } else {
          event.target.value = 'o';
        }
        console.log('value', event.target.value);
    });


   }


})();
