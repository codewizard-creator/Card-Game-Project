var yoursumval = 0;
var yoursumrival = 0;
var yourval = document.querySelector(".your");
var yourhands = document.querySelector(".yourhands");
var yoursside = document.querySelector(".yourside");
var next = document.querySelector(".next");
var computerside = document.querySelector(".computerside");
var computerhands = document.querySelector(".computerhands");
var comp = document.querySelector(".comp");
var turninfo = document.querySelector(".alert");
var count = 0;
var cardsrival;
var anewarr = [];
var countforready = 0;

class Cards {
    constructor(id, value, property, onboard) {
        this.id = id;
        this.value = value;
        this.property = property;
        this.onboard = false;
    }
  

}
// Shuffle
function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// Create
function Createcards() {
  
  var cardarr = [];
  for (let i = 1; i <= 20; i++) {
    var randomval = Math.floor(Math.random()*4) + 1;
    var randompropkey = Math.floor(Math.random()*4) + 1;
    switch (randompropkey) {
      case 1:
        var newcard = new Cards(i,randomval,"legislation");
        cardarr.push(newcard);
        break;
        case 2:
          var newcard = new Cards(i,randomval,"scout");
          cardarr.push(newcard);
        break;
        case 3:
          var newcard = new Cards(i,randomval,"risk");
          cardarr.push(newcard);
        break;
        case 4:
          var newcard = new Cards(i,randomval,"companion");
          cardarr.push(newcard);
        break;

    }

    
  }
return cardarr;
}




// DOMS

document.querySelector(".init").addEventListener("click",init);

document.querySelector(".yourhands").addEventListener("click",play);

document.querySelector(".next").addEventListener("click", nextturn);





// init function

function init() {
  var randomkeyscomputer = [0,1,2,3,4];
  var randomkeysyours = [0,1,2,3,4];
  shuffle(randomkeyscomputer);
  shuffle(randomkeysyours);
  yoursumval = 0;
  yoursumrival = 0;
  // preparation
  next.disabled = true;
  var yourside = document.querySelector(".yourside");
  var computerside = document.querySelector(".computerside");
  yourside.innerHTML = "";
  computerside.innerHTML = "";
  var yourval = document.querySelector(".your");
  yourval.textContent = "";
  var comp = document.querySelector(".comp");
  comp.textContent = "";
  computerhands.innerHTML = "";
  yourhands.innerHTML = "";
  var cards = Createcards();
  var cardsrival = Createcards();
  turninfo.textContent = "your turn";
  window.newrandom = 0;
  window.newrandom2 = 0;
  // your cards
  for (let i = 0; i < 5; i++) {
    cards[randomkeysyours[0]].property = "risk";
    window.riskoriginal = cards[randomkeysyours[0]].value;
    cards[randomkeysyours[1]].property = "scout";
    cards[randomkeysyours[2]].property = "companion";
    cards[randomkeysyours[3]].property = "legislation";
    cards[randomkeysyours[4]].property = "legislation";
  var div = document.createElement("div");
  div.classList.add("card-sample");
  div.classList.add("card");
  div.innerHTML += `<div>${cards[i].value}</div><div>${cards[i].property}</div>`;
  div.innerHTML += `<button class='card-play'>Play</button>`;
  div.style.backgroundColor = "rgb(66, 186, 226)";
  yourhands.appendChild(div);
  }
  // computer cards
  for (let j = 0; j < 5; j++) {
    cardsrival[randomkeyscomputer[0]].property = "risk";
    window.riskoriginalrival = cardsrival[randomkeyscomputer[0]].value;
    cardsrival[randomkeyscomputer[1]].property = "scout";
    cardsrival[randomkeyscomputer[2]].property = "companion";
    cardsrival[randomkeyscomputer[3]].property = "legislation";
    cardsrival[randomkeyscomputer[4]].property = "legislation";
  var div2 = document.createElement("div");
  div2.classList.add("card-computer");
  div2.classList.add("card");
  div2.innerHTML += `<div class='invisible'>${cardsrival[j].value}</div><div class='invisible'>${cardsrival[j].property}</div>`;
  div2.innerHTML+="<button disabled class='card-play'>Play</button>";
  computerhands.appendChild(div2);
  }

}

function play(e) {
  var yourssum = 0;
  var compsum = 0;
  for (let a = 0; a < yourhands.children.length; a++) {
    yourssum += parseInt(yourhands.children[a].children[0].textContent);
    
  }

  for (let b = 0; b < computerhands.children.length; b++) {
    compsum += parseInt(computerhands.children[b].children[0].textContent);
  }
  // var yourval = document.querySelector(".your");
  // when you click play
  if (e.target.classList.contains("card-play")) {
    e.target.style.display = "none";
    e.target.disabled = true;
    var chosenone = e.target.parentElement;
    var value = parseInt(e.target.previousSibling.previousSibling.textContent);
    var property = e.target.previousSibling.textContent;
    // when you use scout card
    if(property === "scout") {
      countforready = 0;
      var randomone = Math.floor(Math.random()*computerhands.children.length);
      // while(!computerhands.children[randomone].children[0].classList.contains("invisible")) 
      // var randomone = Math.floor(Math.random()*computerhands.children.length);

    
    computerhands.children[randomone].children[0].classList.remove("invisible");
    computerhands.children[randomone].children[1].classList.remove("invisible");
    computerhands.children[randomone].children[1].classList.add("notready");
    computerhands.children[randomone].style.color = "red";
    
    
    }
    if(property === "companion" && compsum >= yourssum) {
    console.log("companion ready");
    setTimeout(() => {
    var div = document.createElement("div");
    div.classList.add("card-sample");
    div.classList.add("card");
    div.innerHTML += `<div>${value+1}</div><div>${property}</div>`;
    div.innerHTML += `<button disabled class='card-play invisible'>Play</button>`;
    div.style.backgroundColor = "rgb(66, 186, 226)";
    yoursside.appendChild(div);

  },500);
  yoursumval+=value+1;
  }

    yoursumval+=value;
    yourhands.removeChild(chosenone);
    document.querySelector(".yourside").appendChild(chosenone);
    yourval.textContent = yoursumval;
    for (let i = 0; i < this.children.length; i++) {
      var remainbuttons = this.children[i].children[2];
      remainbuttons.disabled = true;
    }
  next.disabled = false;
 }


}


// Next Turn NextClick Event
function nextturn() {
  // Rival's turn
  var yourhands = document.querySelector(".yourhands");
  window.newrandom = Math.floor(Math.random()*4) + 1;
  console.log(newrandom);
  window.newrandom2 = Math.floor(Math.random()*4) + 1;
   // For increasing the risk card
  next.disabled = true;
  var random = Math.floor(Math.random() * computerhands.children.length);
  while(computerhands.children[random].children[1].classList.contains("notready") && countforready === 0) {
    var random = Math.floor(Math.random() * computerhands.children.length);
  }
  
  
setTimeout(() => {
  var yourssum = 0;
  var compsum = 0;
  for (let a = 0; a < yourhands.children.length; a++) {
    yourssum += parseInt(yourhands.children[a].children[0].textContent);
    
  }
  for (let b = 0; b < computerhands.children.length; b++) {
    compsum += parseInt(computerhands.children[b].children[0].textContent);
  }
  for (let k = 0; k < computerhands.children.length; k++) {
    computerhands.children[k].style.color = "black"; 
}

// Risk card for you ******** From YourHand to Computer *************

for (let i = 0; i < yourhands.children.length; i++) {
  var yourcard = yourhands.children[i];
  console.log(yourcard);
  //yourcard.style.color = "black";
  if(yourcard.children[1].textContent === "risk") {
    var prevyourval = parseInt(yourcard.children[0].textContent);
    prevyourval += newrandom;
    yourcard.style.color = "royalblue";
    yourcard.children[0].textContent = prevyourval;
    if(yourcard.children[0].textContent > 8) {
      yourcard.children[0].textContent = riskoriginal - newrandom2;
      yourcard.children[2].disabled = true;
      yourhands.removeChild(yourcard);
      computerhands.appendChild(yourcard);
   
  
    }

  }
  
}

 // For Rival's Risk cards ******** From Computer to Your Hand *************
 
for (let j = 0; j < computerhands.children.length; j++) {
  var computercard = computerhands.children[j];
  if(computercard.children[1].textContent === "risk") {
    var prevcompval = parseInt(computercard.children[0].textContent);
    prevcompval += newrandom2;
    computercard.style.color = "royalblue";
    computercard.children[0].textContent = prevcompval;
    if(computercard.children[0].textContent > 8) {
     computercard.children[0].textContent = riskoriginalrival;
    computerhands.removeChild(computercard);
    yourhands.appendChild(computercard);
    computercard.children[1].classList.remove("invisible");
    computercard.children[0].classList.remove("invisible");
    computercard.children[2].disabled = false;
    
    }
    
  }

  
  
}


var card = computerhands.children[random];
computerhands.children[random].children[0].classList.remove("invisible");
computerhands.children[random].children[1].classList.remove("invisible");
computerhands.removeChild(card);
computerside.appendChild(card);
yoursumrival += parseInt(card.children[0].textContent);
comp.textContent = yoursumrival;
if(card.children[1].textContent === "scout") {
    var rand = Math.floor(Math.random() * yourhands.children.length);
    yourhands.children[rand].style.color = "red";
    var remainbutton = yourhands.children[rand].children[2];
    remainbutton.disabled = true;
  }
  if(card.children[1].textContent === "companion" && yourssum > compsum) {
    var div2 = document.createElement("div");
    div2.classList.add("card-computer");
    div2.classList.add("card");
    div2.innerHTML += `<div>${parseInt(card.children[0].textContent) + 1}</div><div>companion</div>`;
    div2.innerHTML+="<button disabled class='card-play'>Play</button>";
    computerside.appendChild(div2);
    yoursumrival += parseInt(card.children[0].textContent) + 1;
    comp.textContent = yoursumrival;

  }
//count = 0;

},1000);

  
setTimeout(() => {
  for (let i = 0; i < yourhands.children.length; i++) {
    var remainbuttons = yourhands.children[i].children[2];
    remainbuttons.disabled = false;
  }
    for (let j = 0; j < computerhands.children.length; j++) {
      computerhands.children[j].style.color = "black"; 
  }
  
  
  },799);
  




  countforready = 1;

}
