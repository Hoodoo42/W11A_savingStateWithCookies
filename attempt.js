// app.js
function cabinChoice(details) {
  let chooseCabin = {
    title: `Cabin`,
    price: 452,
    imageUrl: `https://images.unsplash.com/photo-1506974210756-8e1b8985d348?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80" alt="A cabin in fron of mountains"`,
    description: `A cabin in the woods to get away from it all.`,
  };
  // chooseJson is now the chooseCabin object in a string
  let chooseJson = JSON.stringify(chooseCabin);
  // now saving the chooseCabin string form in a cookie names selection and a value of chooseJson
  // (which is the stringd version of chooseCabin)
  Cookies.set(`selection`, chooseJson);
  // location.href line
  location.href = `selection.html`;
}

function houseboatChoice(details) {
  let chooseBoat = {
    title: `Houseboat`,
    price: 763,
    imageUrl: `https://images.unsplash.com/photo-1528034342377-c406327f14b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2232&q=80)" alt="two house boats in water"`,
    description: `A house boat so you can take your dreams with you.`,
  };
  let chooseBoatJson = JSON.stringify(chooseBoat);

  Cookies.set(`boatSelection`, chooseBoatJson);
  location.href = `selection.html`;
}

function treehouseChoice(details) {
  Cookies.set(`selection`, `Treehouse`);
  location.href = `selection.html`;
}

// these are setting the tags into a variable by its id, and attaching an eventListener to call the above functions
let cabin = document.getElementById(`cabin`);
cabin.addEventListener(`click`, cabinChoice);

let houseboat = document.getElementById(`hb`);
houseboat.addEventListener(`click`, houseboatChoice);

let treehouse = document.getElementById(`th`);
treehouse.addEventListener(`click`, treehouseChoice);

// selection.js

// new attempt grabChoice is storing the stringd object
let grabStringChoice = Cookies.get(`selection`);

// grabbing the string object and converting it back to object with JSON.parse
let convertChoice = JSON.parse(grabStringChoice);

let choice = convertChoice;

let header = document.getElementById(`selectionHeader`);
let main = document.getElementById(`selectionMain`);
let selectionImg = document.getElementsByClassName(`selectionImg`);

//I am actually not sure if this(!==undefined) was the right thing to do. But I came so far in my coding, and this was the
//the only thing that aloud my info on the page.
if ((choice = `chooseCabin`)) {
  header.insertAdjacentHTML(
    "afterbegin",
    `<h2>You have selected the Cabin! What a cozy choice!</h2>`
  );
  main[
    `innerHTML`
  ] = `<img id="cabinImg" class="selectionImg" src="https://images.unsplash.com/photo-1506974210756-8e1b8985d348?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80" alt="A cabin in fron of mountains">`;
  // selectionImg[`style`][`height`] = `250px`;
  // selectionImg[`style`][`width`] = `250px`;
} else if ((choice = `chooseboat`)) {
  header.insertAdjacentHTML(
    "afterbegin",
    `<h2>You have selected the Houseboat!Adventure awaits!</h2>`
  );
  main[
    `innerHTML`
  ] = `<img id="houseboatImg" class="selectionImg" src="https://images.unsplash.com/photo-1528034342377-c406327f14b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2232&q=80)"alt="2 houseboats floating in the water">`;
} else if (choice === `Treehouse`) {
  header.insertAdjacentHTML(
    "afterbegin",
    `<h2>You have selected the Treehouse!An absolute charmer!</h2>`
  );
  main[
    `innerHTML`
  ] = `<img id="treehouseImg" class="selectionImg" src="https://images.unsplash.com/photo-1550934482-7904d33d1b54?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"alt="A winding staricase u to a treehouse">`;
} else {
  header.insertAdjacentHTML(
    "afterbegin",
    `<h3>You have not made a selection. Please go back and make one</h3>`
  );
}
