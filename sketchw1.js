let squares = [];

function setup() { //背景
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < 50; i++) {
    squares.push({
      x: random(width),
      y: random(height),
      xSpeed: random(-5, 5),
      ySpeed: random(-5, 5),
      color: color(random(255), random(255), random(255))
    });
  }
}

function draw() {
  background(220);//背景顏色
  textSize(40);//文字大小
  text("HELLO",width/2, height/2);//在葉面中央顯示文字
  fill(102);//文字顏色
  noStroke(0) ;

  for (let square of squares) {
    // Move the square
    square.x += square.xSpeed;
    square.y += square.ySpeed;

    // Check for collision with edges
    if (square.x > width - 50 || square.x < 0) {
      square.xSpeed *= -1;
    }
    if (square.y > height - 50 || square.y < 0) {
      square.ySpeed *= -1;
    }

    // Draw the square
    fill(square.color);
    rect(square.x, square.y, 50, 50);
  }
}
