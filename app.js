var space = document.createElement("div")
space.setAttribute("id", "ds")
space.setAttribute("style", "text-align: center")
document.body.appendChild(space)
var elem = document.getElementById("ds")

var two = new Two({width: 800, height: 200}).appendTo(elem)

// var rectangle = two.makeRectangle(two.width/2,two.height/2,100,100)
// rectangle.id = 'rect'
// two.update()

// anime({
//   targets: '#rect',
//   translateX: 250,
//   translateY: 250
// })

let i = 1;

function squareLoop() {
  setTimeout(function () {
    let rect = two.makeRectangle(two.width/2,two.height/2,100,100)
    rect.id = "rect" + i;
    two.update();

    anime({
      targets: '#rect' + i,
      translateX: i*110,
      translateY: 100
    })
    i++
    if (i < 7) squareLoop();  
  }, 50)
}

// function fillSquares(rect) {
//   setTimeout(() => {
//     rect.fill = 'rgba(0, 200, 255, 0.75)'    
//   }, 50);
// }

squareLoop();