/* global p5, createCanvas, colorMode, HSB, width, height, random, background, fill, noFill, color, random,
          rect, ellipse, stroke, image, loadImage, frameRate, collideRectRect, collideRectCircle, text, 
          mouseX, mouseY, strokeWeight, line, mouseIsPressed, windowWidth, windowHeight, noStroke, 
          keyCode, UP_ARROW, LEFT_ARROW, RIGHT_ARROW, DOWN_ARROW, textSize, noLoop, loop, tint, preLoad, createButton, noTint  */



// prints "hi" in the browser's dev tools console



//download the files in src (maniest.json, script.js, p5.min.js)
//put them in one folder
//go to chrome://extensions
//go to developer mode
//click load unpacked
//then select src folder




// console.log("hi");
// let img, blfButton, offButton;


// function setup() {
//   img = loadImage("https://cdn.glitch.com/29833027-82dc-4403-a61c-ceb34842f4d3%2Fwhite.jpg?v=1595964096242")
//   colorMode(HSB, 360, 100, 100);
//   //tint(40, 15, 204, 126);
//   blfButton = createButton("blue light filter")
//   offButton = createButton('turn off')
//   delayedAlert();
// }

// function draw() {
//   let c = createCanvas(windowWidth/2, windowHeight/2);
//   c.position(width/2, height/2);
//   background(237, 14, 93);
//   image(img, 0, 0, windowWidth, windowHeight); 
//   blfButton.position(windowWidth/2-(blfButton.width/2), windowHeight/2);
//   blfButton.mousePressed(blueLight);
//   offButton.position(windowWidth/2-(offButton.width/2), windowHeight/1.75);
//   offButton.mousePressed(off);
  
  
   
// }

// function blueLight() {
//   if (blfButton.mousePressed(blueLight)){
//     //turn on tint
//     tint(40, 15, 204, 126);
//   }
  
// }

// function off() {
//   if (offButton.mousePressed(off)) {
//     //turn off tint
//     noTint()
//   }
// }

// var timeoutID;

// function delayedAlert() {
//   timeoutID = window.setTimeout(window.alert, 5*1000, 'Take a break');  //after 5 sec show an alert box
// }




// instance mode


// const s = (sketch) => {

//   let pos, img, blfButton, offButton, c, closeButton, open;
//   var timeoutID;

//    sketch.setup = () => {
//      open = true;
//      pos = sketch.windowHeight*0.25;
//      img = sketch.loadImage("https://cdn.glitch.com/29833027-82dc-4403-a61c-ceb34842f4d3%2Fwhite.jpg?v=1595964096242");
//      if (open){
//        closeButton = sketch.createButton("X");
//        blfButton = sketch.createButton("blue light fliter");
//        offButton = sketch.createButton('turn off');
//      }
//      sketch.colorMode(sketch.HSB, 360, 100, 100);
//      sketch.delayedAlert();
//      // sketch.clear();
//    };

//    // drawing the timer pop up
//    sketch.draw = () => {
//      c = sketch.createCanvas(sketch.windowWidth/2, sketch.windowHeight/2);
//      c.position(sketch.width/2, pos);
//      c.style('position', 'fixed');
//      if (open){
//       // sketch.background(203,40,90);
//        sketch.image(img, 0, 0, sketch.windowWidth, sketch.windowHeight);
//        // TRANSFER BUTTONS TO OTHER POPUP 
//        sketch.textSize(22);
//        sketch.text('Take a break!',sketch.windowWidth/2-(sketch.windowWidth/2), sketch.windowHeight/7, sketch.windowWidth/2);
       
//        sketch.textAlign(sketch.CENTER);
       
//        closeButton.position(sketch.width/2, pos);
//        closeButton.mousePressed(sketch.close);
//        blfButton.position(sketch.windowWidth/2-(blfButton.width/2), sketch.windowHeight/2);
//        blfButton.mousePressed(sketch.blueFilter);
//        offButton.position(sketch.windowWidth/2-(offButton.width/2), sketch.windowHeight/1.75);
//        offButton.mousePressed(sketch.off);
//        closeButton.style('position', 'fixed');
//        blfButton.style('position', 'fixed');
//        offButton.style('position', 'fixed');
//      }


//    };


//   sketch.blueFilter = () => {
//     if (blfButton.mousePressed(sketch.blueLight)){
//       sketch.tint(40, 15, 204, 20);
//       // sketch.background(40, 15, 204, 20);

//     }

//   }


//   // pop up shows up after 5 seconds

//   sketch.delayedAlert = () => {
//     timeoutID = window.setTimeout(sketch.open, 2*1000);

//   }

//    sketch.off = () => {
//     if (offButton.mousePressed(sketch.off)) {
//       //turn off tint
//       sketch.noTint()
//     }
//   }

//    sketch.close = () => {
//      open = false;
//      closeButton.hide();
//      blfButton.hide();
//      offButton.hide();
//    }

//    sketch.open = () => {
//      closeButton.show();
//      blfButton.show();
//      offButton.show();
//      open = true;
//    }

// //    chrome.runtime.onMessage.addListener(gotMessage);

// //    function gotMessage(message, sender, sendResponse){
// //      if (message.txt === "open"){
// //        sketch.open();
// //      }
// //    }


//  };

// let myp5 = new p5(s);




const s = (sketch) => {

  let pos, img, blfButton, offButton, c, closeButton, open, turnOn,tintOn,timerOn;
  var timeoutID;

   sketch.setup = () => {
     open = true;
     // ALERTS ARE OFF FOR NOW
     timerOn = false;
     tintOn = false;
     pos = sketch.windowHeight*0.25;
     img = sketch.loadImage("https://cdn.glitch.com/29833027-82dc-4403-a61c-ceb34842f4d3%2Fwhite.jpg?v=1595964096242");
     if (open){
       // closeButton = sketch.createButton("X");
       blfButton = sketch.createButton("blue light fliter");
       offButton = sketch.createButton('turn off');
     }
     sketch.colorMode(sketch.RGB, 255);
     sketch.delayedAlert();

     // look for button element
     // turnOn = sketch.select('#filterOn');
     // turnOn.mouseClicked();
   };


   sketch.draw = () => {
     c = sketch.createCanvas(sketch.windowWidth, sketch.windowHeight);
     c.position(0, 0);
     c.style('position', 'fixed');
     c.style('pointer-events', 'none');
     if (open){
       // tint + buttons
       sketch.image(img, 0, 0, sketch.windowWidth*2, sketch.windowHeight*2);
       if(tintOn){
         sketch.tint(204, 31, 0, 100);
       } else {
         sketch.tint(255, 12);
       }
       // TRANSFER BUTTONS TO OTHER POPUP
       // closeButton.position(0, 0);
       // closeButton.mousePressed(sketch.close);
       // blfButton.position(0, closeButton.height);
       // blfButton.mousePressed(sketch.blueFilter);
       // offButton.position(0, (closeButton.height+blfButton.height));
       // offButton.mousePressed(sketch.off);
       // closeButton.style('position', 'fixed');
       // blfButton.style('position', 'fixed');
       // offButton.style('position', 'fixed');
     }


   };


// test
   // sketch.test = () =>{
   //   console.log("testing");
   //   let message = "turnOnFilter";
   // }

// turn filter on
  sketch.blueFilter = () => {
    if (blfButton.mousePressed(sketch.blueLight)){
      tintOn = true;
    }
  }


    sketch.off = () => {
     if (offButton.mousePressed(sketch.off)) {
       //turn off tint
       tintOn = false;
     }
   }


  sketch.takeBreak = () => {
    alert("Look at an Object 20 feet away for at least 20 seconds!");
    if (timerOn){
    sketch.delayedAlert();
  }
  }


  // pop up shows up after 5 seconds

  sketch.delayedAlert = () => {
    console.log("counting");

      timeoutID = window.setTimeout(sketch.takeBreak, 3*1000);


  }


   sketch.close = () => {
     open = false;
     // closeButton.hide();
     // blfButton.hide();
     // offButton.hide();
   }

   sketch.open = () => {
     // closeButton.show();
     // blfButton.show();
     // offButton.show();
     open = true;
   }

   chrome.runtime.onMessage.addListener(gotMessage);
   function gotMessage(message, sender, sendResponse){
     if (message.txt === "turnItOn"){
       sketch.open();
       sketch.blueFilter();
     }

     if (message.txt === "turnItOff"){
       sketch.close();
     }

     if (message.txt === "loopOn"){
       console.log("loop on");
       timerOn = true;
       sketch.delayedAlert();
     }

     if (message.txt === "loopOff"){
       console.log("loop off");
       timerOn = false;
     }
   }
 };

let myp5 = new p5(s);