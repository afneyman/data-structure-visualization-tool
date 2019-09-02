// var space = document.createElement("div")
// space.setAttribute("id", "ds")
// space.setAttribute("style", "text-align: center")
// document.body.appendChild(space)
// var elem = document.getElementById("ds")

// var two = new Two({width: 800, height: 200}).appendTo(elem)

// var rectangle = two.makeRectangle(two.width/2,two.height/2,100,100)
// rectangle.id = 'rect'
// two.update()

// anime({
//   targets: '#rect',
//   translateX: 250,
//   translateY: 250
// })

// let i = 1;

// function squareLoop() {
//   setTimeout(function () {
//     let rect = two.makeRectangle(two.width/2,two.height/2,100,100)
//     rect.id = "rect" + i
//     two.update()

//     anime({
//       targets: '#rect' + i,
//       translateX: i*110,
//       translateY: 100
//     })
//     i++
//     if (i < 7) squareLoop();  
//   }, 50)
// }

// // function fillSquares(rect) {
// //   setTimeout(() => {
// //     rect.fill = 'rgba(0, 200, 255, 0.75)'    
// //   }, 50);
// // }

// squareLoop();

let button = document.getElementById("add-value")
let newValue = document.getElementById("new-value")
let arrayValue = document.getElementById("array-size")
let sizeDiv = document.getElementById("array-size-div")
let setElementDiv = document.getElementById("value-div")
let index = document.getElementById("index")

let setSize = () => {
  let size = document.getElementById("array-size").value
  let arrayDiv = document.getElementById("array-div")
  for (i = 0; i < size; i++) {
    let p = document.createElement("p")
    p.className += "boxed"
    p.innerText = "__"
    arrayDiv.appendChild(p)
    p.id = "element" + i;
  }
  sizeDiv.className += " hidden";
  setElementDiv.className = "input-box"
  document.getElementById("new-value").focus()
}

let addValue = () => {
  let value = document.getElementById("new-value").value
  let index = document.getElementById("index").value
  if (value !== "") {
    let p = document.getElementById("element" + index)
    p.innerText = value
    document.getElementById("new-value").value = null
    document.getElementById("new-value").focus()
    document.getElementById("index").value = null
  } else {
    
  }
}

newValue.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    addValue()
  }
})

index.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    addValue()
  }
})

arrayValue.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    setSize()
  }
})