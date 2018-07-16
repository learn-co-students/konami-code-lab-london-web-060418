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
  let i = 0;

  document.body.addEventListener("keydown", (e) => {
    const key = e.key

    i = (codes[i] === key) ? ++i : 0


    if (i === codes.length) {
      window.alert("Hurray!");
      i = 0
    }

  });
}


// // Keys for A, B, and C keys.
// const alphabet = ['a', 'b', 'c'];
//
// // Keep track of index outside of the event handler.
// let index = 0;
//
// // This is the function that would be invoked by the event listener.
// function onKeyDownHandler(e) {
//   const key = e.key;
//
//   if (key === alphabet[index]) {
//     index++;
//
//     if (index === alphabet.length) {
//       alert("Hurray!");
//
//       index = 0;
//     }
//   } else {
//     index = 0;
//   }
// }
