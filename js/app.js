function cabinChoice(details) {
    Cookies.set(`selection`, `Cabin`);
  }
  function houseboatChoice(details) {
    Cookies.set(`selection`, `Houseboat`);
  }
  function treehouseChoice(details) {
    Cookies.set(`selection`, `Treehouse`);
  }
  
  // these are setting the tags into a variable by its id, and attaching an eventListener to call the above functions
  let cabin = document.getElementById(`cabin`);
  cabin.addEventListener(`click`, cabinChoice);
  
  let houseboat = document.getElementById(`hb`);
  houseboat.addEventListener(`click`, houseboatChoice);
  
  let treehouse = document.getElementById(`th`);
  treehouse.addEventListener(`click`, treehouseChoice);
  