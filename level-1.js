// question 1

var stringVar = "string";

// question 2

var person = {
  height: 180,
};

// question 3

var outOfStock = true;

if (outOfStock === true) {
  console.log("Out of stock");
} else {
  console.log("In stock");
}

// question 4

var temperature = [13, 16, 24, 20, 22];

for (var i = 0; i < temperature.length; i++) {
  console.log(temperature[i]);
}

// question 5

for (var i = 15; i <= 25; i++) {
  console.log(i);
}

// question 6

for (var i = 15; i <= 25; i++) {
  if (i === 20) {
    console.log(i);
  }
}

// question 7

var tRex = {
  name: "therese",
  height: 6,
  deadly: true,
};

var brachiosaurus = {
  name: "sara",
  height: 9,
  deadly: false,
};

var dinosaur = [tRex, brachiosaurus];

for (var i = 0; i < dinosaur.length; i++) {
  console.log("height: " + dinosaur[i].height + " m");
  console.log("deadly: " + dinosaur[i].deadly);
}

// question 8

function whatIDontLike(arg) {
  console.log("I don't like " + arg);
}

whatIDontLike("olives");

// question 9

function subtraction(arg1, arg2) {
  console.log(arg1 - arg2);
}

subtraction(2, 1);

// question 10

var array = [];

function fillArray(arg) {
  array.push(arg);
}

fillArray("hei");

for (var i = 0; i < array.length; i++) {
  console.log(array[i]);
}
