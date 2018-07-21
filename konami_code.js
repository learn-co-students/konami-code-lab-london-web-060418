//e.key knows keys as strings:
const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

function init() {
  let index = 0

  function konamiKeys(e) {
    if (e.key === codes[index]) {    //codes[0]
      index++;
      if (index === codes.length) {
        alert("Hurray!");

        index = 0
      }
    } else {
      index = 0
    }
  }

  //where, listen to "keydown" event, func to handle it 
  document.body.addEventListener("keydown", konamiKeys)
}

// init();




// //Keys for A, B, and C keys.
// const alphabet = ['a', 'b', 'c'];
//
// // Keep track of index outside of the event handler.
// let idx = 0;
//
// // This is the function that would be invoked by the event listener.
// function onKeyDownHandler(e) {
//   const key = e.key;
//   console.log(key)
//
//   if (key === alphabet[idx]) {
//     idx++;
//
//     if (idx === alphabet.length) {
//       alert("Hurray!");
//
//       idx = 0;
//     }
//   } else {
//     idx = 0;
//   }
// }

//if I wanted to take an input from html form:
// const input = document.querySelector("input")
//
// input.addEventListener("keydown", function(e) {
//   console.log(e.which)
// })

//these are the actual codes:
//if I was to use: e.which
//const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
