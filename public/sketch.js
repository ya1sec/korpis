// var input;
// ȱ ȣ ☧ ⱷ ♅  Θ ɠ фȴ Ϡ Ϙ
var button;
var lines,
  markov,
  larkov,
  tarkov,
  sarkov,
  macbeth,
  finnegan,
  whitman,
  chesterton,
  kafka,
  wittgenstein,
  dante,
  wells,
  beckett,
  x = 160,
  y = 240;

function preload() {
  macbeth = loadStrings("./data/shakespeare-macbeth.txt");
  finnegan = loadStrings("./data/fw.txt");
  whitman = loadStrings("./data/whitman-leaves.txt");
  chesterton = loadStrings("./data/chesterton-thursday.txt");
  kafka = loadStrings("./data/kafka.txt");
  wittgenstein = loadStrings("./data/wittgenstein.txt");
  dante = loadStrings("./data/dante.txt");
  wells = loadStrings("./data/wells.txt");
  beckett = loadStrings("./data/bonbon.txt");
  surrealism = loadStrings("./data/surrealism.txt");
}

function setup() {
  noCanvas();
  // input = createInput("It was a dark and stormy night.");
  // button = createA("#", "Θ").addClass(
  //   "gen f3 no-underline white bg-animate hover-pink inline-flex items-center pa3 bb--dashed  ml4"
  // );
  // button2 = createA("#", "ȣ").addClass(
  //   "gen f3 no-underline white bg-animate hover-green inline-flex items-center pa3 bb--dashed  ml4"
  // );
  // button3 = createA("#", "♅").addClass(
  //   "gen f3 no-underline white bg-animate hover-yellow inline-flex items-center pa3 bb--dashed ml4"
  // );
  // button4 = createA("#", "Ϡ").addClass(
  //   "gen f3 no-underline white bg-animate hover-red inline-flex items-center pa3 bb--dashed ml4 mr4"
  // );
  button = createA("#", "Θ").addClass(
    "f3 db no-underline bg-animate white link hover-pink"
  );
  button2 = createA("#", "ȣ").addClass(
    "f3 db no-underline bg-animate white link hover-green"
  );
  button3 = createA("#", "♅").addClass(
    "f3 db no-underline bg-animate white link hover-yellow"
  );
  button4 = createA("#", "Ϡ").addClass(
    "f3 db no-underline bg-animate white link hover-red"
  );
  button.parent("sidebar-logos");
  button2.parent("sidebar-logos");
  button3.parent("sidebar-logos");
  button4.parent("sidebar-logos");
  // button = select("#button");
  // input.changed(generateComboOne);
  button.mousePressed(generateComboOne);
  button2.mousePressed(generateComboTwo);
  button3.mousePressed(generateComboThree);
  button4.mousePressed(generateComboFour);
  // input.size(300);
}

function generateComboOne() {
  // var s = input.value();
  // var rs = new RiString(s);
  // var words = rs.words();
  // console.log(words);
  markov = new RiMarkov(3);
  // larkov = new RiMarkov(2);
  markov.loadText(macbeth.join(" "));
  markov.loadText(finnegan.join(" "));
  markov.loadText(whitman.join(" "));
  markov.loadText(kafka.join(" "));
  markov.loadText(wittgenstein.join(" "));
  markov.loadText(dante.join(" "));
  markov.loadText(wells.join(" "));
  markov.loadText(beckett.join(" "));
  markov.loadText(chesterton.join(" "));
  markov.loadText(surrealism.join(" "));
  var output = markov.generateSentences(10);
  var p = createP(">>> " + output).addClass(
    "output bg-animate hover-bg-pink hover-black"
  );
  p.parent("container-div");
  // button = createButton("?").addClass("gen");
  // button.mousePressed(generateComboOne);
}

function generateComboTwo() {
  // var s = input.value();
  // var rs = new RiString(s);
  // var words = rs.words();
  // console.log(words);
  larkov = new RiMarkov(3);
  // larkov = new RiMarkov(2);
  larkov.loadText(macbeth.join(" "));
  larkov.loadText(finnegan.join(" "));
  larkov.loadText(kafka.join(" "));
  larkov.loadText(beckett.join(" "));
  var output = larkov.generateSentences(10);
  var p = createP(">>> " + output).addClass(
    "output bg-animate hover-bg-green hover-black"
  );
  p.parent("container-div");
  // button = createButton("?").addClass("gen");
  // button.mousePressed(generateComboOne);
}

function generateComboThree() {
  // var s = input.value();
  // var rs = new RiString(s);
  // var words = rs.words();
  // console.log(words);
  tarkov = new RiMarkov(3);
  // larkov = new RiMarkov(2);
  tarkov.loadText(wittgenstein.join(" "));
  tarkov.loadText(dante.join(" "));
  tarkov.loadText(wells.join(" "));
  var output = tarkov.generateSentences(10);
  var p = createP(">>> " + output).addClass(
    "output bg-animate hover-bg-yellow hover-black"
  );
  p.parent("container-div");
  // button = createButton("?").addClass("gen");
  // button.mousePressed(generateComboOne);
}

function generateComboFour() {
  // var s = input.value();
  // var rs = new RiString(s);
  // var words = rs.words();
  // console.log(words);
  sarkov = new RiMarkov(3);
  // larkov = new RiMarkov(2);
  sarkov.loadText(surrealism.join(" "));
  sarkov.loadText(whitman.join(" "));
  sarkov.loadText(wittgenstein.join(" "));
  var output = sarkov.generateSentences(10);
  var p = createP(">>> " + output).addClass(
    "output bg-animate hover-bg-red hover-black"
  );
  p.parent("container-div");
  // button = createButton("?").addClass("gen");
  // button.mousePressed(generateComboOne);
}

// var lines,
//   markov,
//   macbeth,
//   finnegan,
//   x = 160,
//   y = 240;

// function preload() {
//   macbeth = loadStrings("data/shakespeare-macbeth.txt");
//   finnegan = loadStrings("data/fw.txt");
// }

// function setup() {
//   createCanvas(500, 500);
//   textFont("times", 16);
//   textAlign(LEFT);

//   lines = ["click to (re)generate!"];

//   // create a markov model w' n=4
//   markov = new RiMarkov(4);

//   // load text into the model
//   markov.loadText(macbeth.join(" "));
//   markov.loadText(finnegan.join(" "));

//   drawText();
// }

// function drawText() {
//   background(250);
//   text(lines.join(" "), x, y, 400, 400);
// }

// function mouseClicked() {
//   x = y = 50;
//   lines = markov.generateSentences(10);
//   drawText();
// }

function showInfo() {
  $(".info-div").removeClass("hide");
  // $(".output").addClass("hide");
}

function hideInfo() {
  $(".info-div").addClass("hide");
  // $(".output").removeClass("hide");
}
