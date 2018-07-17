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
 let index = 0;
function init() {
  // let index = 0;
  console.log("top", index);
  document.body.addEventListener('keydown', (e) => {
    const key = e.key;

    if (key === codes[index]) {
      // console.log(codes[index]);
      // console.log(index);
      console.log(key);
      index = index + 1
      if (index === codes.length) {
        alert("Hurray!");

        index = 0;
        console.log("first if", index);

      }
    } else if (key !== codes[index]){
      index = 0;
      console.log("else if", index);

    }
  })
}

console.log("my code init is run");


function onKeyDownHandler(e) {
  const key = e.key;
  if (key === codes[index]) {
    index++;

    if (index === codes.length) {
      alert("Hurray!");

      index = 0;
    }
  } else {
    index = 0;
  }
}
