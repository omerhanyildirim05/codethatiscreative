let sound
//adding a global slider
let slider

async function setup() {
  // set the size of the canvas to the available space
  createCanvas(windowWidth, windowHeight);

  // use p5 DOM to create another paragraph
  //this is added to the webpage and can be highlighted 
  //has css styling applied
  let p = createP('added this paragrapg html with p5')
  p.center()
  p.style('background-color', 'red')

  sound = await loadSound('Sound.mp3')
  sound.play()
  sound.loop()

  slider = createSlider(-2, 10, 6, 0.5)
  slider.position(20,40)
  slider.changed(newSliderValue)
  
}

function draw() {
  background(220);
  // this is drawn on the canvas and cannot be highlighted
  // it also does not have the css styling on the <p>
  text('this is p5 text', 20,20)
}

//under the draw
function newSliderValue(){
  print(slider.value())
  sound.rate(slider.value())
}