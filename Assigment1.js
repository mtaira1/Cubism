let mood = 0;
let motion = 0;
let animationPower = 1;
let circleRotate = 0;

function setup() {
  createCanvas(500, 850);
  angleMode(DEGREES);
}

function draw() {
  background(230, 215, 175);

  // clear animation movement
  motion = sin(frameCount * 2) * 18 * animationPower;
  circleRotate = sin(frameCount * 1.5) * 10 * animationPower;

  drawBackground();
  drawTopCircle();
  drawDiagonalPlanes();
  drawViolinBody();
  drawViolinNeck();
  drawStringsAndDetails();
  drawSignature();
  drawInstructions();
}

// ---------------- BACKGROUND ----------------

function drawBackground() {
  noStroke();

  // slightly animated color block
  let glow = map(sin(frameCount * 1.2), -1, 1, 0, 25);

  fill(220, 220, 205);
  rect(0, 0, 115, 130);

  fill(205 + glow, 150, 35);
  rect(115, 0, 190, 240);

  fill(232, 218, 175);
  rect(305, 0, 70, 240);

  fill(135, 55, 40);
  rect(375, 0, 125, 240);

  fill(210, 195, 160);
  rect(0, 130, 115, 250);

  fill(238, 222, 175);
  rect(115, 130, 190, 250);

  fill(244, 230, 185);
  rect(305, 130, 120, 250);

  fill(210 + glow, 155, 35);
  rect(425, 130, 75, 250);

  fill(185, 180, 150);
  rect(425, 380, 75, 130);

  fill(150, 115, 65);
  rect(0, 365, 500, 55);

  fill(226, 218, 190);
  rect(0, 420, 115, 230);

  fill(245, 230, 175);
  rect(115, 420, 190, 230);

  fill(235, 218, 170);
  rect(305, 420, 120, 230);

  fill(225, 220, 200);
  rect(425, 510, 75, 140);

  fill(190, 150, 30);
  rect(0, 645, 500, 45);

  fill(150, 90, 45);
  rect(0, 690, 115, 160);

  fill(210, 190, 165);
  rect(115, 690, 250, 160);

  fill(185, 65, 45);
  rect(365, 690, 135, 160);

  // dividing lines
  stroke(110, 85, 55, 120);
  strokeWeight(2);
  line(115, 0, 115, height);
  line(305, 0, 305, 650);
  line(375, 0, 375, 260);
  line(0, 130, width, 130);
  line(0, 365, width, 365);
  line(0, 420, width, 420);
  line(0, 645, width, 645);
  line(0, 690, width, 690);
}

// ---------------- TOP CIRCLE ----------------

function drawTopCircle() {
  push();
  translate(185, 105);

  noStroke();

  if (mood === 0) {
    fill(224, 112, 60, 210);
  } else {
    fill(235, 145, 90, 210);
  }

  // large orange circular form
  ellipse(0, 0, 220, 220);

  // cover part of the circle to make a cubist cut
  fill(205, 150, 35);
  beginShape();
  vertex(0, -115);
  vertex(115, -115);
  vertex(115, 115);
  vertex(45, 115);
  endShape(CLOSE);

  // animated fan section
  push();
  rotate(circleRotate);

  fill(230, 190, 110, 190);
  beginShape();
  vertex(-110, 35);
  vertex(-10, 35);
  vertex(-55, 115);
  endShape(CLOSE);

  stroke(120, 70, 35);
  strokeWeight(2);
  for (let i = 0; i < 7; i++) {
    line(-110, 35, -55 + i * 8, 115);
  }

  pop();
  pop();
}

// ---------------- DIAGONAL PLANES ----------------

function drawDiagonalPlanes() {
  noStroke();

  // left large diagonal pale triangle
  fill(230, 185, 105, 170);
  beginShape();
  vertex(0, 380);
  vertex(115, 245);
  vertex(115, 380);
  endShape(CLOSE);

  // main animated diagonal transparent yellow plane
  fill(220, 140, 25, 150);
  beginShape();
  vertex(315 + motion, 190);
  vertex(365 + motion, 190);
  vertex(230 - motion, 650);
  vertex(185 - motion, 650);
  endShape(CLOSE);

  // animated red diagonal line
  stroke(210, 50, 45, 190);
  strokeWeight(2);
  line(360 + motion, 0, 235 - motion, 650);

  // right diagonal outline
  stroke(210, 75, 55, 150);
  strokeWeight(2);
  line(500, 310, 360, 650);

  // bottom diagonal plane
  noStroke();
  fill(230, 170, 60, 120);
  beginShape();
  vertex(0, 655 + motion * 0.2);
  vertex(500, 625 - motion * 0.2);
  vertex(500, 670 + motion * 0.2);
  vertex(0, 690 - motion * 0.2);
  endShape(CLOSE);
}

// ---------------- VIOLIN BODY ----------------

function drawViolinBody() {
  push();
  translate(255, 515);

  // shadow body
  noStroke();
  fill(110, 55, 35, 70);
  beginShape();
  vertex(-75, -150);
  bezierVertex(-150, -120, -130, -20, -85, 30);
  bezierVertex(-130, 100, -70, 220, 20, 220);
  bezierVertex(120, 220, 145, 105, 90, 35);
  bezierVertex(135, -30, 115, -120, 45, -150);
  bezierVertex(5, -165, -35, -165, -75, -150);
  endShape(CLOSE);

  // main golden violin body
  fill(220, 160, 45);
  beginShape();
  vertex(-70, -145);
  bezierVertex(-145, -115, -125, -15, -82, 35);
  bezierVertex(-128, 105, -65, 215, 18, 215);
  bezierVertex(112, 215, 138, 108, 88, 40);
  bezierVertex(132, -25, 110, -115, 42, -145);
  bezierVertex(5, -160, -35, -160, -70, -145);
  endShape(CLOSE);

  // yellow left inner plane
  fill(240, 210, 95, 170);
  beginShape();
  vertex(-60, -135);
  bezierVertex(-100, -80, -95, 40, -55, 95);
  bezierVertex(-20, 145, 15, 170, 35, 205);
  bezierVertex(-35, 215, -105, 135, -85, 45);
  bezierVertex(-125, 0, -115, -100, -60, -135);
  endShape(CLOSE);

  // orange central geometric plane using vertex
  fill(225, 125, 25, 170);
  beginShape();
  vertex(5, -140);
  vertex(70, -115);
  vertex(42, 205);
  vertex(-30, 205);
  endShape(CLOSE);

  // red right side
  fill(175, 60, 45, 180);
  beginShape();
  vertex(50, -135);
  bezierVertex(120, -95, 115, -15, 82, 40);
  bezierVertex(130, 105, 90, 195, 25, 215);
  vertex(93, 205);
  bezierVertex(145, 140, 145, -75, 72, -140);
  endShape(CLOSE);

  // pale geometric block over body
  fill(210, 175, 95, 150);
  beginShape();
  vertex(-80, -125);
  vertex(85, -125);
  vertex(55, -40);
  vertex(-95, -40);
  endShape(CLOSE);

  // outline
  noFill();
  stroke(105, 45, 35);
  strokeWeight(4);
  beginShape();
  vertex(-70, -145);
  bezierVertex(-145, -115, -125, -15, -82, 35);
  bezierVertex(-128, 105, -65, 215, 18, 215);
  bezierVertex(112, 215, 138, 108, 88, 40);
  bezierVertex(132, -25, 110, -115, 42, -145);
  bezierVertex(5, -160, -35, -160, -70, -145);
  endShape(CLOSE);

  pop();
}

// ---------------- VIOLIN NECK ----------------

function drawViolinNeck() {
  push();
  translate(280, 300);

  // dark neck
  noStroke();
  fill(95, 45, 55);
  beginShape();
  vertex(-28, 190);
  bezierVertex(-18, 120, -20, 30, -22, -55);
  bezierVertex(-22, -115, 18, -145, 60, -125);
  bezierVertex(100, -105, 90, -60, 55, -58);
  bezierVertex(28, -56, 30, -95, 58, -95);
  bezierVertex(35, -120, 5, -100, 5, -58);
  bezierVertex(5, 40, 5, 125, 18, 190);
  endShape(CLOSE);

  // orange highlight inside neck
  fill(230, 100, 65, 185);
  beginShape();
  vertex(0, 180);
  bezierVertex(8, 105, 8, 30, 7, -55);
  bezierVertex(8, -92, 33, -105, 55, -88);
  bezierVertex(35, -85, 30, -62, 42, -52);
  bezierVertex(18, -50, 22, 60, 25, 180);
  endShape(CLOSE);

  // yellow highlight
  fill(235, 170, 70, 140);
  beginShape();
  vertex(18, 175);
  bezierVertex(17, 90, 18, 10, 18, -55);
  bezierVertex(22, -82, 35, -87, 48, -80);
  bezierVertex(32, -70, 32, -45, 35, -25);
  bezierVertex(32, 45, 32, 120, 38, 178);
  endShape(CLOSE);

  pop();
}

// ---------------- STRINGS AND DETAILS ----------------

function drawStringsAndDetails() {
  // animated strings
  stroke(80, 50, 35, 180);
  strokeWeight(2);

  let stringMove = sin(frameCount * 10) * 8 * animationPower;

  line(278 + stringMove, 190, 245 - stringMove, 650);
  line(286 - stringMove, 190, 255 + stringMove, 650);
  line(294 + stringMove * 0.5, 190, 265 - stringMove * 0.5, 650);

  // f holes
  noFill();
  stroke(85, 35, 30);
  strokeWeight(4);

  push();
  translate(205, 510);
  beginShape();
  vertex(0, 0);
  bezierVertex(-35, 20, 20, 45, -10, 75);
  bezierVertex(-35, 100, 15, 115, 0, 135);
  endShape();
  pop();

  push();
  translate(315, 525);
  beginShape();
  vertex(0, 0);
  bezierVertex(35, 20, -20, 45, 10, 75);
  bezierVertex(35, 100, -15, 115, 0, 135);
  endShape();
  pop();

  // dark horizontal accent
  stroke(75, 45, 30, 170);
  strokeWeight(5);
  line(0, 390, 210, 390);

  // fine red edge line
  stroke(160, 45, 35, 130);
  strokeWeight(2);
  line(410, 310, 315, 650);
}

// ---------------- SIGNATURE-LIKE MARK ----------------

function drawSignature() {
  push();
  translate(325, 750);
  rotate(-8);

  noFill();
  stroke(230, 200, 160, 150);
  strokeWeight(2);

  beginShape();
  vertex(-40, 0);
  bezierVertex(-20, -25, 10, 25, 30, 0);
  bezierVertex(45, -15, 60, 15, 75, 0);
  endShape();

  textSize(34);
  fill(230, 200, 160, 140);
  noStroke();
  text("&", 10, 15);
  text("♬", 55, 15);

  pop();
}

// ---------------- INTERACTION ----------------

function mousePressed() {
  mood = 1 - mood;

  // click changes animation strength
  if (animationPower === 1) {
    animationPower = 2;
  } else {
    animationPower = 1;
  }
}

function keyPressed() {
  if (key === "s" || key === "S") {
    saveCanvas("cubist_violin", "png");
  }
}

function drawInstructions() {
  noStroke();
  fill(50, 40, 30, 180);
  textSize(13);
  textAlign(LEFT);
  text("Click to change color + animation speed / Press S to save", 18, height - 18);
}
