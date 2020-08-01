const s = (sketch) => {

  let pos, img, blfButton, offButton, c, closeButton, open, turnOn,tintOn,timerOn;
  var timeoutID;

   sketch.setup = () => {
     open = true;
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
   };


   sketch.draw = () => {
     c = sketch.createCanvas(sketch.windowWidth, sketch.windowHeight);
     c.position(0, 0);
     c.style('position', 'fixed');
     c.style('pointer-events', 'none');
     if (open){
       sketch.image(img, 0, 0, sketch.windowWidth*2, sketch.windowHeight*2);
       if(tintOn){
         sketch.tint(204, 31, 0, 100);
       } else {
         sketch.tint(255, 12);
       }
     }


   };




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
    alert("Look at an object 20 feet away for at least 20 seconds!");
    if (timerOn){
    sketch.delayedAlert();
  }
  }


// reminds user every 20 minutes
  sketch.delayedAlert = () => {
      timeoutID = window.setTimeout(sketch.takeBreak, 1200*1000);


  }


   sketch.close = () => {
     open = false;
   }

   sketch.open = () => {
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
       timerOn = true;
       sketch.delayedAlert();
     }

     if (message.txt === "loopOff"){
       timerOn = false;
     }
   }
 };

let myp5 = new p5(s);
