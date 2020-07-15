/***** Beginning of Starter Code ****/

const playerContainer = document.querySelector(".player-container")

// render one player to the DOM
function renderPlayer(player) {
  // create an element for the outer div
  const playerDiv = document.createElement("div")

  // set attributes on the outer div
  playerDiv.className = "player"
  playerDiv.dataset.number = player.number

  // use innerHTML to create any child elements of the div
  playerDiv.innerHTML = `
    <h3>${player.name} (<em>${player.nickname}</em>)</h3>
    <img src="${player.photo}" alt="${player.name}">
    <p class="likes">${player.likes} likes</p>
    <button class="like-button">❤️</button>
  `

  // append the element to the container
  playerContainer.append(playerDiv)
}

// for each player in the array, render to the DOM
PLAYERS.forEach(renderPlayer)

/***** End of Starter Code ****/


const header = document.querySelector("h1#header");

/***** Deliverable 1 *****/
function toggleColor(element) {
  if (element.style.color === "red") {
    element.style.color = "black"
  } else {
    element.style.color = "red"
  }
}

header.addEventListener("click", function(e){
  toggleColor(e.target);
})

/***** Deliverable 2 *****/
const form = document.getElementById('new-player-form');
form.addEventListener("submit", function(e){
  e.preventDefault();
  let newPlayer = {};
  newPlayer.number = form[0].value;
  newPlayer.name = form[1].value;
  newPlayer.nickname = form[2].value;
  newPlayer.photo = form[3].value;
  newPlayer.likes = 0;
  renderPlayer(newPlayer)
})
/***** Deliverable 3 *****/
document.addEventListener("click", function(e){
  if (e.target.className === 'like-button'){
    let likeElement = e.target.parentElement.getElementsByClassName('likes')[0];
    let likeCount = parseInt(likeElement.innerHTML.split(' likes')[0], 10) + 1;
    likeElement.innerText = likeCount + ' likes';
  }
})