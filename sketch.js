let x
let y
let dx
let dy
let radius
let r
let g
let b
let bg
let colorChange
let colorInverse

function setup() {
  createCanvas(400, 400)
  createRandomBGColor()
  // ----------------------
  // Task 1 
  // All four of these function calls make the body of setup cleaner. 
  //   They also are all related to the same idea– setting up the properties
  //   of the ball. 
  // Create a function called createBall that does all of these things.
  //   What parameters should it have, if any?
  // ----------------------
  createBall()
  createControlColor()
}

//Task 2
function draw() {
  background(bg)
  fill(color(r,g,b))
  circle(x,y,radius)
  x += dx // x = x + dx
  y += dy // y = y + dy
  if(x < 0 || x > width) {
    dx *= -1
  }
  if(y < 0 || y > height) {
    dy *= -1
  } 
  
  if(x-0.5*radius <= 0 || x+0.5*radius >= width) {
    dx *= -1
  }
  if(y-0.5*radius <= 0 || y+0.5*radius >= height) {
    dy *= -1
  } 

//Task 1
function createBall() {
  setRandomPosition()
  setRandomVelocity()
  radius = random(10,20)
  createRandomColor()
  noStroke()
}

function setRandomPosition() {
  x = random(height)
  y = random(width)
}

function setRandomVelocity() {
  dx = random(-1,1)
  dy = random(-1,1)
}

function createRandomColor() {
  r = random(255)
  g = random(255)
  b = random(255)
}

function createRandomBGColor() {
  bg = color(random(255),random(255),random(255))
}
