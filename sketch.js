let img;
let img2;
let img3;
let img4;
let img5;
let img6;
let img7;
let img8;
let img9;
let img10;
let img11;
let img12;
let img13;
let img14;
let img15;
let img16;
let ya;
const fontPath = "PPNeueMontreal-Bold.otf";
const font2Path = "PPNeueMontreal-Medium.otf";
let font;
let font2;
let imgSize = 200;
let mouseXPos, mouseYPos;
let scatterParticles = [];

const squareSizeCm = 4; // Size of each square in cm
const squareSizePx = squareSizeCm * 10; // Size of each square in pixels
const canvasWidth = 595;
const canvasHeight = 850;
const strokeWeightPx = 2; // Stroke weight in pixels

function preload() {
  img = loadImage("bla1.svg");
  img2 = loadImage("bla3.svg");
  img3 = loadImage("bla6.svg");
  img4 = loadImage("bla8.svg");
  img5 = loadImage("bla6.svg");
  img6 = loadImage("bla10.svg");
  img7 = loadImage("bla1.svg");
  img8 = loadImage("bla3.svg");
  img9 = loadImage("bla6.svg");
  img10 = loadImage("bla10.svg");
  img11 = loadImage("bla8.svg");
  img12 = loadImage("bla8.svg");
  img13 = loadImage("bla6.svg");
  img14 = loadImage("bla10.svg");
  img15 = loadImage("bla1.svg");
  img16 = loadImage("bla10.svg");
  ya = loadImage("yama.png");
  font = loadFont(fontPath);
  font2 = loadFont(font2Path);
}

function setup() {
  createCanvas(canvasWidth, canvasHeight);
  textFont(font);
  textSize(34);
}

function draw() {
  background(0, 22, 255); // Set the background color
  // Draw grid in the background
  drawGrid();

  // Draw images and text on top
  drawImagesAndText();
}

function drawGrid() {
  // Set the stroke color to white with transparency (alpha value)
  stroke(255, 255, 255, 20); // 128 is the alpha value, ranging from 0 (transparent) to 255 (opaque)

  // Set the stroke weight
  strokeWeight(strokeWeightPx);

  // Remove fill color
  noFill();

  // Iterate over the canvas and draw the grid
  for (let x = 0; x < canvasWidth; x += squareSizePx) {
    for (let y = 0; y < canvasHeight; y += squareSizePx) {
      rect(x, y, squareSizePx, squareSizePx); // Draw an empty square
    }
  }
}

function mouseMoved() {
  mouseXPos = mouseX;
  mouseYPos = mouseY;

  let particle = {
    x: mouseXPos,
    y: mouseYPos,
    alpha: 255,
  };

  scatterParticles.push(particle);
}

function drawImagesAndText() {
  imageMode(CENTER);

  textFont(font);
  fill(255);
  text("Unleash Your Potential", 36, 750);

  textFont(font2);
  text("October 6, 2023", 36, 790);

  textFont(font);
  text("Ein Bokek beach", 36, 830);

  let c1 = color(0, 255, 224); // Set the fill color for img to green
  let c2 = color(255); // Set the fill color for img2 to white
  let c3 = color(0, 255, 224); // Set the fill color for img3 to white
  let c4 = color(255); // Set the fill color for img3 to white
  let c5 = color(255); // Set the fill color for img to green
  let c6 = color(0, 255, 224); // Set the fill color for img2 to white
  let c7 = color(255); // Set the fill color for img3 to white
  let c8 = color(0, 255, 224); // Set the fill color for img3 to white
  let c9 = color(0, 255, 224); // Set the fill color for img to green
  let c10 = color(255); // Set the fill color for img2 to white
  let c11 = color(0, 255, 224); // Set the fill color for img3 to white
  let c12 = color(255); // Set the fill color for img3 to white
  let c13 = color(255); // Set the fill color for img to green
  let c14 = color(0, 255, 224); // Set the fill color for img2 to white
  let c15 = color(255); // Set the fill color for img3 to white
  let c16 = color(0, 255, 224); // Set the fill color for img3 to white

  for (let i = scatterParticles.length - 1; i >= 4; i--) {
    let particle = scatterParticles[i];

    // Update alpha value to make particle gradually disappear
    particle.alpha -= 2;

    // Remove particle if alpha value becomes 0
    if (particle.alpha <= 0) {
      scatterParticles.splice(i, 1);
      continue;
    }

    noStroke();
    fill(255, particle.alpha);
    ellipse(particle.x, particle.y, 10, 10);
  }

  let img1X = 90;
  let img1Y = 130;
  let img1Size = 200;

  if (
    mouseXPos > img1X - img1Size / 2 &&
    mouseXPos < img1X + img1Size / 2 &&
    mouseYPos > img1Y - img1Size / 2 &&
    mouseYPos < img1Y + img1Size / 2
  ) {
    img1X += random(-2, 2); // Adjust the movement speed and range as desired
    img1Y += random(-2, 2); // Adjust the movement speed and range as desired
  }

  tint(c1); // Apply the fill color as a tint to img
  for (let i = 200; i > 30; i -= 7) {
    push(); // Save the current transformation state
    translate(img1X, img1Y); // Set the center position for rotation
    rotate(radians(0)); // Rotate based on the frame count
    image(img, 0, 0, i, i);
    pop();
  }

  let img2X = 235;
  let img2Y = 130;
  let img2Size = 200;

  if (
    mouseXPos > img2X - img2Size / 2 &&
    mouseXPos < img2X + img2Size / 2 &&
    mouseYPos > img2Y - img2Size / 2 &&
    mouseYPos < img2Y + img2Size / 2
  ) {
    img2X += random(-2, 2); // Adjust the movement speed and range as desired
    img2Y += random(-2, 2); // Adjust the movement speed and range as desired
  }

  tint(c2); // Apply the fill color as a tint to img2
  for (let i = 200; i > 30; i -= 7) {
    push(); // Save the current transformation state
    translate(img2X, img2Y); // Set the center position for rotation
    rotate(radians(0)); // Rotate based on the frame count
    image(img2, 0, 0, i, i);
    pop();
  }

  let img3X = 380;
  let img3Y = 130;
  let img3Size = 200;

  if (
    mouseXPos > img3X - img3Size / 2 &&
    mouseXPos < img3X + img3Size / 2 &&
    mouseYPos > img3Y - img3Size / 2 &&
    mouseYPos < img3Y + img3Size / 2
  ) {
    img3X += random(-2, 2); // Adjust the movement speed and range as desired
    img3Y += random(-2, 2); // Adjust the movement speed and range as desired
  }
  tint(c3); // Apply the fill color as a tint to img3
  for (let i = 200; i > 30; i -= 6) {
    push(); // Save the current transformation state
    translate(img3X, img3Y); // Set the center position for rotation
    rotate(radians(-140)); // Rotate based on the frame count
    image(img3, 0, 0, i, i);
    pop(); // Restore the previous transformation state
  }

  let img4X = 510;
  let img4Y = 125;
  let img4Size = 200;

  if (
    mouseXPos > img4X - img4Size / 2 &&
    mouseXPos < img4X + img4Size / 2 &&
    mouseYPos > img4Y - img4Size / 2 &&
    mouseYPos < img4Y + img4Size / 2
  ) {
    img4X += random(-2, 2); // Adjust the movement speed and range as desired
    img4Y += random(-2, 2); // Adjust the movement speed and range as desired
  }

  tint(c4); // Apply the fill color as a tint to img3
  for (let i = 200; i > 30; i -= 8) {
    push(); // Save the current transformation state
    translate(img4X, img4Y); // Set the center position for rotation
    rotate(radians(360)); // Rotate based on the frame count
    image(img4, 0, 0, i, i);
    pop(); // Restore the previous transformation state
  }

  let img5X = 90;
  let img5Y = 290;
  let img5Size = 200;

  if (
    mouseXPos > img5X - img5Size / 2 &&
    mouseXPos < img5X + img5Size / 2 &&
    mouseYPos > img5Y - img5Size / 2 &&
    mouseYPos < img5Y + img5Size / 2
  ) {
    img5X += random(-2, 2); // Adjust the movement speed and range as desired
    img5Y += random(-2, 2); // Adjust the movement speed and range as desired
  }

  tint(c5); // Apply the fill color as a tint to img3
  for (let i = 200; i > 30; i -= 8) {
    push(); // Save the current transformation state
    translate(img5X, img5Y); // Set the center position for rotation
    rotate(radians(-250)); // Rotate based on the frame count
    image(img5, 0, 0, i, i);
    pop(); // Restore the previous transformation state
  }

  let img6X = 235;
  let img6Y = 280;
  let img6Size = 200;

  if (
    mouseXPos > img6X - img6Size / 2 &&
    mouseXPos < img6X + img6Size / 2 &&
    mouseYPos > img6Y - img6Size / 2 &&
    mouseYPos < img6Y + img6Size / 2
  ) {
    img6X += random(-2, 2); // Adjust the movement speed and range as desired
    img6Y += random(-2, 2); // Adjust the movement speed and range as desired
  }

  tint(c6); // Apply the fill color as a tint to img3
  for (let i = 200; i > 30; i -= 8) {
    push(); // Save the current transformation state
    translate(img6X, img6Y); // Set the center position for rotation
    rotate(radians(-250)); // Rotate based on the frame count
    image(img6, 0, 0, i, i);
    pop(); // Restore the previous transformation state
  }

  let img7X = 380;
  let img7Y = 290;
  let img7Size = 200;

  if (
    mouseXPos > img7X - img7Size / 2 &&
    mouseXPos < img7X + img7Size / 2 &&
    mouseYPos > img7Y - img7Size / 2 &&
    mouseYPos < img7Y + img7Size / 2
  ) {
    img7X += random(-2, 2); // Adjust the movement speed and range as desired
    img7Y += random(-2, 2); // Adjust the movement speed and range as desired
  }

  tint(c7); // Apply the fill color as a tint to img3
  for (let i = 200; i > 20; i -= 6) {
    push(); // Save the current transformation state
    translate(img7X, img7Y); // Set the center position for rotation
    rotate(radians(-70)); // Rotate based on the frame count
    image(img7, 0, 0, i, i);
    pop(); // Restore the previous transformation state
  }

  let img8X = 510;
  let img8Y = 290;
  let img8Size = 200;

  if (
    mouseXPos > img8X - img8Size / 2 &&
    mouseXPos < img8X + img8Size / 2 &&
    mouseYPos > img8Y - img8Size / 2 &&
    mouseYPos < img8Y + img8Size / 2
  ) {
    img8X += random(-2, 2); // Adjust the movement speed and range as desired
    img8Y += random(-2, 2); // Adjust the movement speed and range as desired
  }

  tint(c8); // Apply the fill color as a tint to img3
  for (let i = 200; i > 20; i -= 8) {
    push(); // Save the current transformation state
    translate(img8X, img8Y); // Set the center position for rotation
    rotate(radians(-70)); // Rotate based on the frame count
    image(img8, 0, 0, i, i);
    pop();
  }

  let img9X = 90;
  let img9Y = 450;
  let img9Size = 200;

  if (
    mouseXPos > img9X - img9Size / 2 &&
    mouseXPos < img9X + img9Size / 2 &&
    mouseYPos > img9Y - img9Size / 2 &&
    mouseYPos < img9Y + img9Size / 2
  ) {
    img9X += random(-2, 2); // Adjust the movement speed and range as desired
    img9Y += random(-2, 2); // Adjust the movement speed and range as desired
  }

  tint(c9); // Apply the fill color as a tint to img
  for (let i = 200; i > 20; i -= 7) {
    push(); // Save the current transformation state
    translate(img9X, img9Y); // Set the center position for rotation
    rotate(radians(10)); // Rotate based on the frame count
    image(img9, 0, 0, i, i);
    pop();
  }

  let img10X = 235;
  let img10Y = 450;
  let img10Size = 200;

  if (
    mouseXPos > img10X - img10Size / 2 &&
    mouseXPos < img10X + img10Size / 2 &&
    mouseYPos > img10Y - img10Size / 2 &&
    mouseYPos < img10Y + img10Size / 2
  ) {
    img10X += random(-2, 2); // Adjust the movement speed and range as desired
    img10Y += random(-2, 2); // Adjust the movement speed and range as desired
  }

  tint(c10); // Apply the fill color as a tint to img2
  for (let i = 200; i > 20; i -= 9) {
    push(); // Save the current transformation state
    translate(img10X, img10Y); // Set the center position for rotation
    rotate(radians(270)); // Rotate based on the frame count
    image(img2, 0, 0, i, i);
    pop();
  }

  let img11X = 375;
  let img11Y = 450;
  let img11Size = 200;

  if (
    mouseXPos > img11X - img11Size / 2 &&
    mouseXPos < img11X + img11Size / 2 &&
    mouseYPos > img11Y - img11Size / 2 &&
    mouseYPos < img11Y + img11Size / 2
  ) {
    img11X += random(-2, 2); // Adjust the movement speed and range as desired
    img11Y += random(-2, 2); // Adjust the movement speed and range as desired
  }

  tint(c11); // Apply the fill color as a tint to img3
  for (let i = 200; i > 20; i -= 6) {
    push(); // Save the current transformation state
    translate(img11X, img11Y); // Set the center position for rotation
    rotate(radians(110)); // Rotate based on the frame count
    image(img3, 0, 0, i, i);
    pop(); // Restore the previous transformation state
  }

  let img12X = 500;
  let img12Y = 450;
  let img12Size = 200;

  if (
    mouseXPos > img12X - img12Size / 2 &&
    mouseXPos < img12X + img12Size / 2 &&
    mouseYPos > img12Y - img12Size / 2 &&
    mouseYPos < img12Y + img12Size / 2
  ) {
    img12X += random(-2, 2); // Adjust the movement speed and range as desired
    img12Y += random(-2, 2); // Adjust the movement speed and range as desired
  }

  tint(c12); // Apply the fill color as a tint to img4
  for (let i = 200; i > 20; i -= 8) {
    push(); // Save the current transformation state
    translate(img12X, img12Y); // Set the center position for rotation
    rotate(radians(280)); // Rotate based on the frame count
    image(img4, 0, 0, i, i);
    pop(); // Restore the previous transformation state
  }

  let img13X = 97;
  let img13Y = 610;
  let img13Size = 200;

  if (
    mouseXPos > img13X - img13Size / 2 &&
    mouseXPos < img13X + img13Size / 2 &&
    mouseYPos > img13Y - img13Size / 2 &&
    mouseYPos < img13Y + img13Size / 2
  ) {
    img13X += random(-2, 2); // Adjust the movement speed and range as desired
    img13Y += random(-2, 2); // Adjust the movement speed and range as desired
  }

  tint(c13); // Apply the fill color as a tint to img3
  for (let i = 200; i > 20; i -= 8) {
    push(); // Save the current transformation state
    translate(img13X, img13Y); // Set the center position for rotation
    rotate(radians(30)); // Rotate based on the frame count
    image(img7, 0, 0, i, i);
    pop(); // Restore the previous transformation state
  }

  let img14X = 235;
  let img14Y = 610;
  let img14Size = 200;

  if (
    mouseXPos > img14X - img14Size / 2 &&
    mouseXPos < img14X + img14Size / 2 &&
    mouseYPos > img14Y - img14Size / 2 &&
    mouseYPos < img14Y + img14Size / 2
  ) {
    img14X += random(-2, 2); // Adjust the movement speed and range as desired
    img14Y += random(-2, 2); // Adjust the movement speed and range as desired
  }

  tint(c14); // Apply the fill color as a tint to img2
  for (let i = 200; i > 20; i -= 7) {
    push(); // Save the current transformation state
    translate(img14X, img14Y); // Set the center position for rotation
    rotate(radians(140)); // Rotate based on the frame count
    image(img2, 0, 0, i, i);
    pop();
  }

  let img15X = 375;
  let img15Y = 610;
  let img15Size = 200;

  if (
    mouseXPos > img15X - img15Size / 2 &&
    mouseXPos < img15X + img15Size / 2 &&
    mouseYPos > img15Y - img15Size / 2 &&
    mouseYPos < img15Y + img15Size / 2
  ) {
    img15X += random(-2, 2); // Adjust the movement speed and range as desired
    img15Y += random(-2, 2); // Adjust the movement speed and range as desired
  }

  tint(c15); // Apply the fill color as a tint to img3
  for (let i = 200; i > 20; i -= 6) {
    push(); // Save the current transformation state
    translate(img15X, img15Y); // Set the center position for rotation
    rotate(radians(-65)); // Rotate based on the frame count
    image(img15, 0, 0, i, i);
    pop(); // Restore the previous transformation state
  }

  let img16X = 510;
  let img16Y = 630;
  let img16Size = 200;

  if (
    mouseXPos > img16X - img16Size / 2 &&
    mouseXPos < img16X + img16Size / 2 &&
    mouseYPos > img16Y - img16Size / 2 &&
    mouseYPos < img16Y + img16Size / 2
  ) {
    img16X += random(-2, 2); // Adjust the movement speed and range as desired
    img16Y += random(-2, 2); // Adjust the movement speed and range as desired
  }

  tint(c16); // Apply the fill color as a tint to img3
  for (let i = 200; i > 20; i -= 8) {
    push(); // Save the current transformation state
    translate(img16X, img16Y); // Set the center position for rotation
    rotate(radians(-90)); // Rotate based on the frame count
    image(img16, 0, 0, i, i);
    pop(); // Restore the previous transformation state
  }

  tint(255); // Set the fill color to white
  scale(0.5);
  translate(575, 820);
  image(ya, 510, 830, 148.59, 47); // Draw the PNG image at (510, 630)
}
