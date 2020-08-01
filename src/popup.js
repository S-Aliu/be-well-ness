function setup() {
  noCanvas();
  let turnOn = select('#filterOn');
  turnOn.mouseClicked(turnFilterOn);

  let turnOff = select('#filterOff');
  turnOff.mouseClicked(turnFilterOff);

  let loopOn = select('#loopOnID');
  loopOn.mouseClicked(turnLoopOn);

  let loopOff = select('#loopOffID');
  loopOff.mouseClicked(turnLoopOff);

  function turnFilterOn() {
    let params = {
      active: true,
      currentWindow: true
    }
    chrome.tabs.query(params, gotTabs);
    function gotTabs(tabs){
      let msg = {
        txt: "turnItOn"
      }
      chrome.tabs.sendMessage(tabs[0].id, msg);
    }
  }


  function turnFilterOff() {
    let params = {
      active: true,
      currentWindow: true
    }
    chrome.tabs.query(params, gotTabs);

    function gotTabs(tabs){
      let msg = {
        txt: "turnItOff"
      }
      chrome.tabs.sendMessage(tabs[0].id, msg);
    }

  }

  function turnLoopOn() {
    let params = {
      active: true,
      currentWindow: true
    }
    chrome.tabs.query(params, gotTabs);

    function gotTabs(tabs){
      let msg = {
        txt: "loopOn"
      }
      chrome.tabs.sendMessage(tabs[0].id, msg);
    }

  }

  function turnLoopOff() {
    let params = {
      active: true,
      currentWindow: true
    }
    chrome.tabs.query(params, gotTabs);

    function gotTabs(tabs){
      let msg = {
        txt: "loopOff"
      }
      chrome.tabs.sendMessage(tabs[0].id, msg);
    }

  }




}
