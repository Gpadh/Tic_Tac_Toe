var isPressed = false
var XorO = true
var square = [false,false,false,false,false,false,false,false,false]
var squareCount = ["!","!","!","!","!","!","!","!","!"]

function wincheck () {
  // Xs
  if (squareCount[0] == "x" && squareCount[1] == "x" && squareCount[2] == "x" ){
    alert(" X is a Winner")
  }
  else if (squareCount[0] == "x" && squareCount[4] == "x" && squareCount[8] == "x" ){
    alert(" X is a Winner")
  }
  else if (squareCount[0] == "x" && squareCount[3] == "x" && squareCount[6] == "x" ){
    alert(" X is a Winner")
  }
  else if (squareCount[3] == "x" && squareCount[4] == "x" && squareCount[5] == "x" ){
    alert(" X is a Winner")
  }
  else if (squareCount[6] == "x" && squareCount[7] == "x" && squareCount[8] == "x" ){
    alert(" X is a Winner")
  }
  else if (squareCount[1] == "x" && squareCount[4] == "x" && squareCount[7] == "x" ){
    alert(" X is a Winner")
  }
  else if (squareCount[2] == "x" && squareCount[5] == "x" && squareCount[8] == "x" ){
    alert(" X is a Winner")
  }
  // Os
  else if (squareCount[0] == "o" && squareCount[1] == "o" && squareCount[2] == "o" ){
    alert(" O is a Winner")
  }
  else if (squareCount[0] == "o" && squareCount[4] == "o" && squareCount[8] == "o" ){
    alert(" O is a Winner")
  }
  else if (squareCount[0] == "o" && squareCount[3] == "o" && squareCount[6] == "o" ){
    alert(" O is a Winner")
  }
  else if (squareCount[3] == "o" && squareCount[4] == "o" && squareCount[5] == "o" ){
    alert(" O is a Winner")
  }
  else if (squareCount[6] == "o" && squareCount[7] == "o" && squareCount[8] == "o" ){
    alert(" O is a Winner")
  }
  else if (squareCount[1] == "o" && squareCount[4] == "o" && squareCount[7] == "o" ){
    alert(" O is a Winner")
  }
  else if (squareCount[2] == "o" && squareCount[5] == "o" && squareCount[8] == "o" ){
    alert(" O is a Winner")
  }
}

function mousePressed(){
  isPressed=true
}

function mouseReleased(){
  //Box 1
  if (!square[0] && XorO && mouseX > 0 && mouseX < width/3 && mouseY > 0 && mouseY <height/3){
      stroke(0,255,0)
      strokeWeight(5)
      line(0,0,width/3,height/3)
      line(width/3,0,0,height/3)
      XorO = !XorO
      square[0] = true
      squareCount[0] = "x"
      wincheck()
  }
  else if (!square[0] && !XorO && mouseX > 0 && mouseX < width/3 && mouseY > 0 && mouseY <height/3){
    fill(255,255,255)
    ellipse(width/6,height/6,175,175)
    XorO = !XorO
    square[0] = true
    squareCount[0] = "o"
    wincheck()
  }

  //Box 2
  else if (!square[1] &&  XorO && mouseX > width/3 && mouseX < width*2/3 && mouseY > 0 && mouseY < height/3){
    stroke(0,255,0)
    strokeWeight(5)
    line(width/3,0,width*2/3,height/3)
    line(width*2/3,0,width/3,height/3)
    XorO = !XorO
    square[1] = true
    squareCount[1] = "x"
    wincheck()
  }
  else if (!square[1] && !XorO && mouseX > width/3 && mouseX < width*2/3 && mouseY > 0 && mouseY < height/3){
    fill(255,255,255)
    ellipse(width/2,height/6,175,175)
    XorO = !XorO
    square[1] = true
    squareCount[1] = "o"
    wincheck()
  }

  //Box3
  else if (!square[2] && XorO &&mouseX > width*2/3 && mouseX < width && mouseY > 0 && mouseY < height/3){
    stroke(0,255,0)
    strokeWeight(5)
    line(width*2/3,0,width,height/3)
    line(width,0,width*2/3,height/3)
    XorO = !XorO
    square[2] = true
    squareCount[2] = "x"
    wincheck()
  }
  else if (!square[2] && !XorO &&mouseX > width*2/3 && mouseX < width && mouseY > 0 && mouseY < height/3){
    fill(255,255,255)
    ellipse(width*5/6,height/6,175,175)
    XorO = !XorO
    square[2] = true
    squareCount[2] = "o"
    wincheck()
  }

  //Box 4
  else if (!square[3] && XorO && mouseX > 0 && mouseX < width/3 && mouseY > height/3 && mouseY < height*2/3){
    stroke(0,255,0)
    strokeWeight(5)
    line(0,height/3,width/3,height*2/3)
    line(width/3,height/3,0,height*2/3)
    XorO = !XorO
    square[3] = true
    squareCount[3] = "x"
    wincheck()
  }
  else if (!square[3] && !XorO && mouseX > 0 && mouseX < width/3 && mouseY > height/3 && mouseY < height*2/3){
    fill(255,255,255)
    ellipse(width/6,height/2,175,175)
    XorO = !XorO
    square[3] = true
    squareCount[3] = "o"
    wincheck()
  }

  //Box 5
  else if (!square[4] && XorO && mouseX > width/3 && mouseX < width*2/3 && mouseY > height/3 && mouseY < height*2/3){
    stroke(0,255,0)
    strokeWeight(5)
    line(width/3,height/3,width*2/3,height*2/3)
    line(width*2/3,height/3,width/3,height*2/3)
    XorO = !XorO
    square[4] = true
    squareCount[4] = "x"
    wincheck()
  }
  else if (!square[4] && !XorO && mouseX > width/3 && mouseX < width*2/3 && mouseY > height/3 && mouseY < height*2/3){
    fill(255,255,255)
    ellipse(width/2,height/2,175,175)
    XorO = !XorO
    square[4] = true
    squareCount[4] = "o"
    wincheck()
  }

  //Box 6
  else if (!square[5] && XorO && mouseX > width*2/3 && mouseX < width && mouseY > height/3 && mouseY < height*2/3){
    stroke(0,255,0)
    strokeWeight(5)
    line(width*2/3,height/3,width,height*2/3)
    line(width,height/3,width*2/3,height*2/3)
    XorO = !XorO
    square[5] = true
    squareCount[5] = "x"
    wincheck()
  }
  else if (!square[5] && !XorO && mouseX > width*2/3 && mouseX < width && mouseY > height/3 && mouseY < height*2/3){
    fill(255,255,255)
    ellipse(width*5/6,height/2,175,175)
    XorO = !XorO
    square[5] = true
    squareCount[5] = "o"
    wincheck()
  }

  //Box 7
  else if (!square[6] && XorO && mouseX > 0 && mouseX < width/3 && mouseY > height*2/3 && mouseY < height){
    stroke(0,255,0)
    strokeWeight(5)
    line(0,height*2/3,width/3,height)
    line(width/3,height*2/3,0,height)
    XorO = !XorO
    square[6] = true
    squareCount[6] = "x"
    wincheck()
  }
  else if (!square[6] && !XorO && mouseX > 0 && mouseX < width/3 && mouseY > height*2/3 && mouseY < height){
    fill(255,255,255)
    ellipse(width/6,height*5/6,175,175)
    XorO = !XorO
    square[6] = true
    squareCount[6] = "o"
    wincheck()
  }

  //Box 8
  else if (!square[7] && XorO && mouseX > width/3 && mouseX < width*2/3 && mouseY > height*2/3 && mouseY < height){
    stroke(0,255,0)
    strokeWeight(5)
    line(width*2/3,height*2/3,width/3,height)
    line(width*2/3,height,width/3,height*2/3)
    XorO = !XorO
    square[7] = true
    squareCount[7] = "x"
    wincheck()
  }
  else if (!square[7] && !XorO && mouseX > width/3 && mouseX < width*2/3 && mouseY > height*2/3 && mouseY < height){
    fill(255,255,255)
    ellipse(width/2,height*5/6,175,175)
    XorO = !XorO
    square[7] = true
    squareCount[7] = "o"
    wincheck()
  }

  //Box 9
  else if (!square[8] && XorO && mouseX > width*2/3 && mouseX < width && mouseY > height*2/3 && mouseY < height){
    stroke(0,255,0)
    strokeWeight(5)
    line(width*2/3,height*2/3,width,height)
    line(width,height*2/3,width*2/3,height)
    XorO = !XorO
    square[8] = true
    squareCount[8] = "x"
    wincheck()
  }
  else if (!square[8] && !XorO && mouseX > width*2/3 && mouseX < width && mouseY > height*2/3 && mouseY < height){
    fill(255,255,255)
    ellipse(width*5/6,height*5/6,175,175)
    XorO = !XorO
    square[8] = true
    squareCount[8] = "o"
    wincheck()
  }
}

function setup(){
  createCanvas(800,600)
}

function draw(){
  stroke(0,0,255)
  strokeWeight(5)
  line(width/3,0,width/3,height)

  stroke(0,0,255)
  strokeWeight(5)
  line(width*2/3,0,width*2/3,height)

  stroke(0,0,255)
  strokeWeight(5)
  line(0,height/3,width,height/3)

  stroke(0,0,255)
  strokeWeight(5)
  line(0,height*2/3,width,height*2/3)
}

