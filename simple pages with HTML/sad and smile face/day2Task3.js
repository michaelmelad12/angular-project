//task1
nvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var image = new Image(60, 45); // Using optional size for image
image.onload = drawImageActualSize; // Draw when image has loaded
// Load an image of intrinsic size 300x227 in CSS pixels
image.src = "sad.png";
function drawImageActualSize() {
  // Use the intrinsic size of image in CSS pixels for the canvas element
  canvas.width = this.naturalWidth;
  canvas.height = this.naturalHeight;
  ctx.drawImage(this, 0, 0);

}

function changeImage(){
    image.setAttribute("src","smiley.png");
       
    console.log("done");

}
function returnsad(){
  image.setAttribute("src","sad.png");
}