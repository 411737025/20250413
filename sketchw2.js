function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB); // Set color mode to HSB
  background(0); // Clear the screen with a black background
}

function draw() {
  // Map mouse coordinates to HSB values
  let h = map(mouseX, 0, windowWidth, 0, 360);
  let s = map(mouseY, 0, windowHeight, 0, 100);
  let b = 100;

  // Set fill color based on mouse position
  fill(h, s, b);

  // Calculate opposite hue for stroke color
  let oppositeHue = (h + 180) % 360;
  stroke(oppositeHue, s, b);

  // Draw circle at mouse position
  ellipse(mouseX, mouseY, 50, 50);
}