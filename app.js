
import Createcards  from "./card-createcards.js";
import { transformlegislation } from "./transform.js";

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
var alertforgame = document.querySelector(".alert-middle");
var transformscout = document.querySelector(".transform-scout");
var countforlegis = 0;
var cardsrival;
var anewarr = [];
var count = 0;
var countforready = 0;
alertforgame.textContent = "Click Start to Play the Game";
setTimeout(() => {
  alertforgame.classList.remove("alert-animate");
},1000)


// Shuffle
function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// Create





// CLICK EVENTS

document.querySelector(".init").addEventListener("click",init);

document.querySelector(".yourhands").addEventListener("click",play);

document.querySelector(".next").addEventListener("click", nextturn);

// For transform-scout 

transformscout.addEventListener("click", transformlegislation);


document.querySelector(".yourhands").addEventListener("mouseover", showtip);

function showtip(e) {
  if(e.target.classList.contains("card-sample")) {
    for (let p = 0; p < yourhands.children.length; p++) {
      if(yourhands.children[p].children[1].textContent === "scout")
      yourhands.children[p].children[3].textContent = "The Scout Card makes one of the cards in the opponent's hand visible. The rival cannot play that card for one turn";
      if(yourhands.children[p].children[1].textContent === "companion")
      yourhands.children[p].children[3].textContent = "if the sum of the values in the opponent's hand is greater than in your hand, that card a companion card with an +1 value is formed next to it."
      if(yourhands.children[p].children[1].textContent === "risk") {
        yourhands.children[p].children[3].textContent = "At the end of the hand, the value of the risk card increases from 1 to 5.If the value is greater than 8, it returns to its original state and it falls into the hands of the opponent."
      }
      if(yourhands.children[p].children[1].textContent === "legislation") {
        yourhands.children[p].children[3].textContent = "if the effect does not occur after playing the companion card, you can turn it into a scout at the end of the round.";
      }


    }
  }
  
}

function init() {
  transformscout.style.display = "none";
  transformscout.disabled = false;
  alertforgame.classList.add("alert-animate");
  alertforgame.textContent = "YOUR TURN";
  setTimeout(() => {
    alertforgame.classList.remove("alert-animate");
  },1000)
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
  div.innerHTML += '<span class="tooltiptext"></span>';
  div.style.backgroundColor = "rgb(100, 196, 228)";
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




// Play function

function play(e) {
  // *******NEED THIS CALCULATION FOR COMPANION ADDITION************
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
      // ************ Select From Invisible **************
      while(!computerhands.children[randomone].children[0].classList.contains("invisible")) { 
      var randomone = Math.floor(Math.random()*computerhands.children.length);
      }

      
    computerhands.children[randomone].children[0].classList.remove("invisible");
    computerhands.children[randomone].children[1].classList.remove("invisible");
    computerhands.children[randomone].children[1].classList.add("notready");
    computerhands.children[randomone].style.color = "red";
    computerhands.children[randomone].classList.add("animatescouted");
    setTimeout(()=> {
      computerhands.children[randomone].classList.remove("animatescouted");
    },1300);
    
    }
    
    if(property === "companion" && compsum >= yourssum) {
    console.log("companion ready");
    setTimeout(() => {
    var div = document.createElement("div");
    div.classList.add("card-sample");
    div.classList.add("card");
    div.classList.add("card-extra");
    div.innerHTML += `<div>${value+1}</div><div>${property}</div>`;
    div.innerHTML += `<button disabled class='card-play invisible'>Play</button>`;
    div.style.backgroundColor = "rgb(66, 186, 226)"; // yeni companion bir tık açık veya koyu olmalı
    yoursside.appendChild(div);

  },500);
  yoursumval+=value+1;
  }

//  if(property === "legislation") {
    
    
//  }

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


//********** Next Turn NextClick Event***************
function nextturn() {

  //******** GAME OVER **********
  var sumonscreen = computerside.children.length + yoursside.children.length;
  console.log(sumonscreen);
  if(sumonscreen >= 9) { 
    next.disabled = true;
      setTimeout(() => {
        alertforgame.classList.add("alert-animate");
        alertforgame.textContent = yoursumval > yoursumrival ? "VICTORY" : "DEFEAT";
      }, 400);
      
    return;
}
  setTimeout(() => {

    // Legislation company bridge
    for (let h = 0; h < yoursside.children.length; h++) {
     if(yoursside.children[h].classList.contains("card-extra")) {
       break;
     } else if(h === yoursside.children.length - 1) {
       for (let k = 0; k < yoursside.children.length; k++) {
        if(yoursside.children[k].children[1].textContent === "companion")
        transformscout.style.display = "block";
        
       }
     }
      
    }
  },200)


  // Turn Message Toggle
  alertforgame.classList.add("alert-animate");
  alertforgame.textContent = "RIVALS TURN";
  setTimeout(() => {
    alertforgame.classList.remove("alert-animate");
  },1000)

  setTimeout(() => {
    alertforgame.classList.add("alert-animate");
    alertforgame.textContent = "YOUR TURN";
  },1900)
  setTimeout(() => {
    alertforgame.classList.remove("alert-animate");
  },2900)
   // For increasing the risk card
 // var yourhands = document.querySelector(".yourhands");
  window.newrandom = Math.floor(Math.random()*5) + 1;
  window.newrandom2 = Math.floor(Math.random()*5) + 1;
   // Rival's turn
  next.disabled = true;
  
  var random = Math.floor(Math.random() * computerhands.children.length);
  while(computerhands.children[random].children[1].classList.contains("notready") && countforready === 0) {
    var random = Math.floor(Math.random() * computerhands.children.length);
    if(computerhands.children.length === 1 && computerhands.children[random].children[1].classList.contains("notready")) {
      random = -1;
      break;
    }
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
    computercard.style.color = "black";
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
var computerhandssum = 0;
for (let l = 0; l < computerhands.children.length; l++) {
    computerhandssum += parseInt(computerhands.children[l].children[0].textContent);
}
console.log(computerhandssum);
if(random !== -1) {
  // *********** COMPUTER'S TURN POSSIBILITIES MANAGEMENT **********
for (let t = 0; t < computerhands.children.length; t++) {
  if(computerhands.children[t].children[1].textContent === "risk" && parseInt(computerhands.children[t].children[0].textContent) >= 6 && !(computerhands.children[t].children[1].classList.contains("notready"))) {
    random = t;
    break;
  }
  if(computerhands.children[t].children[1].textContent === "companion" && computerhandssum < 15 && !(computerhands.children[t].children[1].classList.contains("notready"))) {
  random = t;
  break;
}
}
var card = computerhands.children[random];
computerhands.children[random].children[0].classList.remove("invisible");
computerhands.children[random].children[1].classList.remove("invisible");
computerhands.removeChild(card);
computerside.appendChild(card);
yoursumrival += parseInt(card.children[0].textContent);
comp.textContent = yoursumrival;
} else
return;
if(card.children[1].textContent === "scout" ) {
    var rand = Math.floor(Math.random() * yourhands.children.length);
    yourhands.children[rand].style.color = "red";
    var remainbutton = yourhands.children[rand].children[2];
    remainbutton.disabled = true;
    yourhands.children[rand].classList.add("animatescouted");
    setTimeout(()=> {
      yourhands.children[rand].classList.remove("animatescouted");
    },1300);
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
      computerhands.children[j].style.color = "royalblue"; 
  }
  
  
  },799);
  



  countforready = 1;

}
