(function () {
  'use strict';

  const squareName = document.querySelectorAll('input[name]');

  console.log('squareName', squareName);

  for (var i = 0; i < squareName.length; i++) {
    squareName[i].addEventListener('click', function (event) {
      console.log('button works', event.target.name);
    });

   }


})();
