let choice = Cookies.get(`selection`);
let header = document.getElementById(`selectionHeader`);
let main = document.getElementById(`selectionMain`);
let selectionImg = document.getElementsByClassName(`selectionImg`);

if ((choice = `chooseCabin`)) {
  header.insertAdjacentHTML(
    "afterbegin",
    `<h2>You have selected the Cabbin! What a cozy choice!</h2>`
  );
  main[
    `innerHTML`
  ] = `<img id="cabinImg" class="selectionImg" src="https://images.unsplash.com/photo-1506974210756-8e1b8985d348?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80" alt="A cabin in fron of mountains">`;
  selectionImg[`style`][`height`] = `250px`;
  selectionImg[`style`][`width`] = `250px`;
} else if (choice === `Houseboat`) {
  header.insertAdjacentHTML(
    "afterbegin",
    `<h2>You have selected the Houseboat!Adventure awaits!</h2>`
  );
  main[
    `innerHTML`
  ] = `<img id="chouseboatImg" class="selectionImg" src="https://images.unsplash.com/photo-1528034342377-c406327f14b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2232&q=80)"alt="2 houseboats floating in the water">`;
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

let checkoutMain = document.getElementById(`checkoutMain`);
checkoutMain[`innerHTML`] = `<div id="blueBox"></div>`;
let redBox = document.getElementById(`blueBox`);
redBox[`style`][`height`] = `100px`;
redBox[`style`][`width`] = `100px`;
