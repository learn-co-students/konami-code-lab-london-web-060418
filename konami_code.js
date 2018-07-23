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

function init(input) {
  let stepNumber = 0

  document.body.addEventListener("keydown", (x) => {
    const key = x.key

    stepNumber = (codes[stepNumber] === key)? ++stepNumber : 0


    if (stepNumber === codes.length) {
      window.alert("Hurray!");
    }
  })

  // your code here
}
