var drawn = document.getElementById("drawn");
var drawButton = document.getElementById("drawButton");
var dn = document.getElementById("dn");

var numbers = Array.from({ length: 75 }, (_, i) => i + 1);

console.log(numbers);

drawn.innerHTML = "X";

let number = 0;
let drawnNumbers = [];

function choiceNumber() {
  number = numbers[Math.floor(Math.random() * numbers.length)];
  console.log(number);
  drawn.innerHTML = number;
  dn.innerHTML = drawnNumbers.map((i) => {
    return (
      '<div class="circle ball smallBall" style="min-width: 0;">' + i + "</div>"
    );
  });
  return (
    number,
    numbers.filter(function (value, index, arr) {
      return value != number;
    })
  );
}

function drawNumber() {
  console.log("N: " + numbers.length);
  if (numbers.length > 0) {
    number, (numbers = choiceNumber());
    drawnNumbers.push(number);
    console.log(
      "\nNumber: ",
      number,
      "\nDrawn Numbers: ",
      drawnNumbers,
      "\nNumbers: ",
      numbers
    );
    const audio = new Audio(
      "http://commondatastorage.googleapis.com/codeskulptor-assets/week7-brrring.m4a"
    );
    audio.play();
    drawButton.innerHTML = "Sortear (" + numbers.length + ")";
    document.title = "Bingo Online (" + numbers.length + ")";
  } else {
    drawButton.disabled = true;
  }
}
