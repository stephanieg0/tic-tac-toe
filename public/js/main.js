(function () {
  'use strict';
  //connecting to websockets
  const ws = io.connect(); // eslint-disable-line no-undef

  //checking if websocket is connetcted.
  ws.on('connect', () => {
    console.log('front end socket!!');
  });

  //assigning the inputs into a variable to use.
  const squareName = document.querySelectorAll('input');

  //to count turns
  let count = 0;
  //for box numbers
  let number;

  //possible wins arrays
  let horizontal1 = [];
  let horizontal2 = [];
  let horizontal3 = [];
  let vertical1 = [];
  let vertical2 = [];
  let vertical3 = [];
  let diagonal1 = [];
  let diagonal2 = [];


  //looping through all my inputs to find name values upon click.
  for (var i = 0; i < squareName.length; i++) {

    squareName[i].addEventListener('click', function start (event) {
       //getting name and assigning to a variable.
       number = parseInt(event.target.name);
       console.log(number);
       //counting each click as a turn.
       count++;

       checkingWhichPlayer(count, event);
    });//end of click function

  }//end of for loop


  //determine which player's turn it is; x or o.
  function checkingWhichPlayer (count, event) {
      console.log('count', count);

      //alternating a value of x or o to each turn based on remainder
     if (count % 2 !== 0){

        event.target.value = 'x';

        //possible wins for x
        if (number === 1 || number ===2 || number === 3) {
          horizontal1.push('x');
        } if (number === 4 || number === 5 || number === 6) {
          horizontal2.push('x');
        } if (number === 7 || number === 8 || number === 9) {
          horizontal3.push('x');
        } if (number === 1 || number === 4 || number === 7) {
          vertical1.push('x');
        } if (number === 2 || number === 5 || number === 8) {
          vertical2.push('x');
        } if (number === 3 || number === 6 || number === 9) {
          vertical3.push('x');
        } if (number === 1 || number === 5 || number === 9) {
          diagonal1.push('x');
        } if (number === 3 || number === 5 || number === 7) {
          diagonal2.push('x');
        }

      } else {

        event.target.value = 'o';

        //possible wins for o
        if (number === 1 || number ===2 || number === 3) {
          horizontal1.push('o');
        } if (number === 4 || number === 5 || number === 6) {
          horizontal2.push('o');
        } if (number === 7 || number === 8 || number === 9) {
          horizontal3.push('o');
        } if (number === 1 || number === 4 || number === 7) {
          vertical1.push('o');
        } if (number === 2 || number === 5 || number === 8) {
          vertical2.push('o');
        } if (number === 3 || number === 6 || number === 9) {
          vertical3.push('o');
        } if (number === 1 || number === 5 || number === 9) {
          diagonal1.push('o');
        } if (number === 3 || number === 5 || number === 7) {
          diagonal2.push('o');
        }

      }//end of else

    //check for winner.
    winningArray();

  }//end of whichPlayer fn

      //emitting event to the server and sending data.
       //ws.emit('data', number);
       //winningArray(number);




    //ws.on('recieveData', data => {
      //console.log('data from server', data);
      ////start();
     //});


  //comparing values to have a winner.
   function winningArray () {

    let masterArray = [];
    masterArray.push(horizontal1, horizontal2, horizontal3, vertical1, vertical2, vertical3, diagonal1, diagonal2);

    for (var i = 0; i < masterArray.length; i ++){

      if (masterArray[i].length === 3) {
        let string = masterArray[i].join('').toString();
        if (string === 'xxx'){
          alert('player 1 won!'); // eslint-disable-line no-undef
        } if (string === 'ooo') {
          alert('player 2 won!'); // eslint-disable-line no-undef
        }
      }
    }
   }//end of winningArray fn


})();//end of iife
