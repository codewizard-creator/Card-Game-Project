
import Createcards  from "./card-createcards.js";
import { transformlegislation } from "./transform.js";

var yoursumval = 0;
var yoursumrival = 0;
var isbeginning = true;
var yourval = document.querySelector(".your");
var yourhands = document.querySelector(".yourhands");
var yoursside = document.querySelector(".yourside");
var next = document.querySelector(".next");
var computerside = document.querySelector(".computerside");
var computerhands = document.querySelector(".computerhands");
var comp = document.querySelector(".comp");
var alert = document.querySelector(".alert");
var alertforgame = document.querySelector(".alert-middle");
var transformscout = document.querySelector(".transform-scout");
var skip = document.querySelector(".skip");
var skiptutorials = document.querySelector(".skip-tutorials");
var alertanimation = document.querySelector(".alertanimation");
var tutorialend = document.querySelector(".tutorial-end");
var tutorialagain1 = document.querySelector(".tutorial-again-1");
var tutorialagain2 = document.querySelector(".tutorial-again-2");
var tutorialagain3 = document.querySelector(".tutorial-again-3");
var nextsection1 = document.querySelector(".next-section-1");
var nextsection2 = document.querySelector(".next-section-2");
var endheading = document.querySelector(".end-heading");
var featurelearned1 = document.querySelector(".feature-learned-1");
var featurelearned2 = document.querySelector(".feature-learned-2");
var countforlegis = 0;
var countforlegisrival = 0;
var countthree = 0;
var countforreduce = 0;
var cardsrival;
var anewarr = [];
var count = 0;
var countfortutorial1 = 1;
var countforready = 0;
var tutorialonemode = false;
var tutorialtwomode = false;
var tutorialthreemode = false;
var secondnext = false;
var secondplay = false;
var riskagain0 = false;
var riskagain1 = false;
var riskagain2 = false;
var whoisfirst;
alert.style.display = "none";
skip.disabled = true;
alertforgame.textContent = "Click Start to Play the Game";
// var riskoriginalrival = 8;
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






// CLICK EVENTS
// FOR TUTORIALS TEMPORARY USED TUTORIAL1... 
document.querySelector(".init").addEventListener("click",tutorial1);
 
document.querySelector(".yourhands").addEventListener("click",play);

document.querySelector(".next").addEventListener("click", nextturn);

skip.addEventListener("click", init);

skiptutorials.addEventListener("click", init);

tutorialagain1.addEventListener("click", tutorial1);

tutorialagain3.addEventListener("click", tutorial3);

nextsection1.addEventListener("click", tutorial2);

nextsection2.addEventListener("click", tutorial3);

tutorialagain2.addEventListener("click", tutorial2);

// For transform-scout 

transformscout.addEventListener("click", transformlegislation);

// For showtips
document.querySelector(".yourhands").addEventListener("mouseover", showtip);


// **************** SHOW TIPS FUNCTİON ***************
function showtip(e) {
  if(e.target.classList.contains("card-sample")) {
    for (let p = 0; p < yourhands.children.length; p++) {
      if(yourhands.children[p].children[1].textContent === "scout")
      yourhands.children[p].children[3].textContent = "The Scout Card makes one of the cards in the opponent's hand visible. The rival cannot play that card for one turn";
      if(yourhands.children[p].children[1].textContent === "companion")
      yourhands.children[p].children[3].textContent = "if the sum of the values in the opponent's hand is greater than in your hand, that card a companion card with an +1 value is formed next to it."
      if(yourhands.children[p].children[1].textContent === "risk") {
        yourhands.children[p].children[3].textContent = "At the end of the turn, the value of the risk card increases from 3 to 6.If the value is greater than 8, it returns to its original state and it falls into the hands of the opponent."
      }
      if(yourhands.children[p].children[1].textContent === "legislation") {
        yourhands.children[p].children[3].textContent = "if the effect does not occur after playing the companion card, you can turn it into a scout at the end of the round.";
      }
      if(yourhands.children[p].children[1].textContent === "reducer") {
        yourhands.children[p].children[3].textContent = "as long as you play this card or there is a 'reducer card' on the table, the value of other enemy cards on the ground is reduced by one. The effect ends when one of the enemy cards is destroyed";
      }


    }
  }
  
}
// tutorial1 init function
function tutorial1() {
  var id = window.setTimeout(function() {}, 0);

  while (id--) {
      window.clearTimeout(id); // will do nothing if no timeout with id is present
  }
  comp.textContent = "";
  yourval.textContent = "";
  yoursumval = 0;
  secondnext = false;
  tutorialonemode = true;
  tutorialagain3.style.display = "none";
  tutorialend.style.display = "none";
  comp.textContent = 6;
  skip.disabled = false;
  tutorialonemode = true;
  
  document.querySelector(".init").disabled = true;
  next.disabled = true;
  var str = "Hello, I'll accompany you when you start the game!";
  alertblink(str,3000);
  yourhands.classList.add("yourhandsborder");
  setTimeout(() => {
    var str = "The red-framed area is where your cards are.";
  alertblink(str,3000);
  }, 3200);
  setTimeout(() => {
    yourhands.classList.remove("yourhandsborder");
    var str = "You have a 'scout' card. This is great! Use it to see a random card of your opponent. Move with 'Play'.";
  alertblink(str,4000);
  }, 6400);
  setTimeout(() => {
    for (let i = 0; i < yourhands.children.length; i++) {
      yourhands.children[i].children[2].disabled = false;
      
    }
  },10400);

   // Added your scout card
  var div = document.createElement("div");
  div.classList.add("card-sample");
  div.classList.add("card");
  div.innerHTML += `<div>${3}</div><div>scout</div>`;
  div.innerHTML += `<button class='card-play'>Play</button>`;
  div.innerHTML += '<span class="tooltiptext"></span>';
  div.style.backgroundColor = "rgb(100, 196, 228)";
  yourhands.appendChild(div);
  // 
  for (let i = 0; i < yourhands.children.length; i++) {
    yourhands.children[i].children[2].disabled = true;
    
  }
  
  var div2 = document.createElement("div");
  div2.classList.add("card-computer");
  div2.classList.add("card");
  div2.innerHTML += `<div class='invisible'>8</div><div class='invisible'>risk</div>`;
  div2.innerHTML+="<button disabled class='card-play'>Play</button>";
  computerhands.appendChild(div2);

  var div3 = document.createElement("div");
  div3.classList.add("card-computer");
  div3.classList.add("card");
  div3.innerHTML += `<div>6</div><div>legislation</div>`;
  div3.innerHTML+="<button disabled class='card-play'>Play</button>";
  computerside.appendChild(div3);


  
}
// Tutorial2
function tutorial2() {
  var id = window.setTimeout(function() {}, 0);

  while (id--) {
      window.clearTimeout(id); // will do nothing if no timeout with id is present
  }
  tutorialtwomode = true;
  comp.textContent = "";
  yourval.textContent = "";
  yoursumval = 0;
  secondnext = false;
  tutorialonemode = false;
  tutorialend.style.display = "none";
  comp.textContent = "";
  skip.disabled = false;
  tutorialonemode = true;
  document.querySelector(".init").disabled = true;
  next.disabled = true;
  var str = "You need luck to win this game.";
  alertblink(str,3000);
  setTimeout(() => {
    var str = "Fortunately, you have more than luck. This is a 'companion' card!";
  alertblink(str,3000);
  }, 3200);
  setTimeout(() => {
    var str = "If the sum of the values of all the cards in your hand exceeds rival's cards in his hand, the companion card calls another card next to him. It has +1 value";
  alertblink(str,6000);
  }, 6400);
  setTimeout(() => {
    for (let i = 0; i < yourhands.children.length; i++) {
      yourhands.children[i].children[2].disabled = false;
      
    }
  },12400);

   // Added your scout card
  var div = document.createElement("div");
  div.classList.add("card-sample");
  div.classList.add("card");
  div.innerHTML += `<div>${2}</div><div>companion</div>`;
  div.innerHTML += `<button class='card-play'>Play</button>`;
  div.innerHTML += '<span class="tooltiptext"></span>';
  div.style.backgroundColor = "rgb(100, 196, 228)";
  yourhands.appendChild(div);
  // 
  for (let i = 0; i < yourhands.children.length; i++) {
    yourhands.children[i].children[2].disabled = true;
    
  }
  
  var div2 = document.createElement("div");
  div2.classList.add("card-computer");
  div2.classList.add("card");
  div2.innerHTML += `<div class='invisible'>2</div><div class='invisible'>scout</div>`;
  div2.innerHTML+="<button disabled class='card-play'>Play</button>";
  computerhands.appendChild(div2);

  var div3 = document.createElement("div");
  div3.classList.add("card-computer");
  div3.classList.add("card");
  div3.innerHTML += `<div class='invisible'>2</div><div class='invisible'>scout</div>`;
  div3.innerHTML+="<button disabled class='card-play'>Play</button>";
  computerhands.appendChild(div3);


  
}

function tutorial3() {
  var id = window.setTimeout(function() {}, 0);

  while (id--) {
      window.clearTimeout(id); // will do nothing if no timeout with id is present
  }

 
next.disabled = true;
  tutorialonemode = false;
  tutorialtwomode = false;
  tutorialthreemode = true;
  comp.textContent = 4;
  yourval.textContent = "";
  yoursumval = 0;
  yoursumrival = 4;
  secondnext = false;
  tutorialonemode = false;
  tutorialend.style.display = "none";
  skip.disabled = false;
  document.querySelector(".init").disabled = true;
  // Some dialogs
  var str = "Risk rule: randomly increase from 3 to 6";
  alertblink(str,1800);
  setTimeout(() => {
    var str = "It would be unwise to play risk card in this situation. Let's wait for the next turn.";
  alertblink(str,3000);
  }, 2100);
  setTimeout(() => {
    var str = "In addition, as long as you play 'reducer card' or there is a 'reducer card' on the table...";
  alertblink(str,5000);
  }, 7000);
  setTimeout(() => {
    var str = "the value of other enemy cards on the ground is reduced by one. The effect ends when one of the enemy cards is destroyed";
  alertblink(str,5000);
  }, 12500);

  setTimeout(() => {
    for (let i = 0; i < yourhands.children.length; i++) {
      if(yourhands.children[i].children[1].textContent !== "risk")
      yourhands.children[i].children[2].disabled = false;
    }
  },17000);

  // added to yourhand a risk card
  var div = document.createElement("div");
  div.classList.add("card-sample");
  div.classList.add("card");
  div.innerHTML += `<div>${2}</div><div>risk</div>`;
  div.innerHTML += `<button class='card-play'>Play</button>`;
  div.innerHTML += '<span class="tooltiptext"></span>';
  div.style.backgroundColor = "rgb(100, 196, 228)";
  yourhands.appendChild(div);
  // added to your hand a legislation card
  var div = document.createElement("div");
  div.classList.add("card-sample");
  div.classList.add("card");
  div.innerHTML += `<div>${1}</div><div>legislation</div>`;
  div.innerHTML += `<button class='card-play'>Play</button>`;
  div.innerHTML += '<span class="tooltiptext"></span>';
  div.style.backgroundColor = "rgb(100, 196, 228)";
  yourhands.appendChild(div);

  var div2 = document.createElement("div");
  div2.classList.add("card-computer");
  div2.classList.add("card");
  div2.innerHTML += `<div class='invisible'>3</div><div class='invisible'>legislation</div>`;
  div2.innerHTML+="<button disabled class='card-play'>Play</button>";
  computerhands.appendChild(div2);

  var div3 = document.createElement("div");
  div3.classList.add("card-computer");
  div3.classList.add("card");
  div3.innerHTML += `<div>4</div><div>reducer</div>`;
  div3.innerHTML+="<button disabled class='card-play'>Play</button>";
  computerside.appendChild(div3);
  for (let k = 0; k < yourhands.children.length; k++) {
    yourhands.children[k].children[2].disabled = true;
  }


}

function alertblink(str,time) {
  alert.style.display = "block";
  alert.textContent = str;
  alert.classList.add("alertanimation");
  setTimeout(() => {
    alert.classList.remove("alertanimation");
    alert.style.display = "none";
  }, time);
}

function init() {
  window.nextrisk = false;
  count = 0;
  isbeginning = false;
  tutorialonemode = false;
  tutorialtwomode = false;
  tutorialthreemode = false;
  secondnext = false;
  secondplay = false;
  skip.disabled = false;
  skip.textContent = "New Game";
  yourhands.classList.remove("yourhandsborder");
  // clear all settimeouts
  var id = window.setTimeout(function() {}, 0);

while (id--) {
    window.clearTimeout(id); // will do nothing if no timeout with id is present
}
  tutorialend.style.display = "none";
  alert.style.display = "none";
  countforreduce = 0;
  countforlegis = 0;
  countforlegisrival = 0;
  transformscout.style.display = "none";
  transformscout.disabled = false;
  alertforgame.classList.add("alert-animate");
  alertforgame.textContent = "YOUR TURN";
  setTimeout(() => {
    alertforgame.classList.remove("alert-animate");
  },1000)
  var randomkeyscomputer = [0,1,2,3,4];
  var randomkeysyours = [1,2,3,4];
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
  var nextrisk = false;
  window.newrandom0 = 0;
  window.newrandom1 = 0;
  window.newrandom2 = 0;
  var countforrisks = 0;
  // your cards
    cards[0].property = "risk";
    var div = document.createElement("div");
    div.classList.add("card-sample");
    div.classList.add("card");
    div.innerHTML += `<div>${cards[0].value}</div><div>${cards[0].property}</div>`;
    
    div.classList.add("risk"+countforrisks.toString());
    countforrisks += 2; // reason about it risk2 for your rival
  div.innerHTML += `<button class='card-play'>Play</button>`;
  div.innerHTML += '<span class="tooltiptext"></span>';
  div.style.backgroundColor = "rgb(100, 196, 228)";
  yourhands.appendChild(div);
    window.riskoriginal = cards[0].value;
  for (let i = 0; i < 4; i++) {
    cards[randomkeysyours[0]].property = "scout";
    window.riskoriginal2 = cards[randomkeysyours[1]].value;
    cards[randomkeysyours[1]].property = "companion";
    cards[randomkeysyours[2]].property = "legislation";
    cards[randomkeysyours[3]].property = "reducer";
  var div = document.createElement("div");
  div.classList.add("card-sample");
  div.classList.add("card");
  div.innerHTML += `<div>${cards[i+1].value}</div><div>${cards[i+1].property}</div>`;
  /*if(cards[i].property === "risk") {
  div.classList.add("risk"+countforrisks.toString());
  countforrisks += 2; // reason about it risk2 for your rival
  }*/
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
    cardsrival[randomkeyscomputer[4]].property = "reducer";
  var div2 = document.createElement("div");
  div2.classList.add("card-computer");
  div2.classList.add("card");
  div2.innerHTML += `<div class='invisible'>${cardsrival[j].value}</div><div class='invisible'>${cardsrival[j].property}</div>`;
  if(cardsrival[j].property === "risk") {
    div2.classList.add("risk"+countforrisks.toString());
  }
  div2.innerHTML+="<button disabled class='card-play'>Play</button>";
  computerhands.appendChild(div2);
  }
  whoisfirst = Math.floor(Math.random()*2) + 1;
  if(whoisfirst === 2) {
    isbeginning = true;
    nextturn();
    for (let b = 0; b < yourhands.children.length; b++) {
      yourhands.children[b].children[2].disabled = true;
    }
  }
   
      
    
    
}




// Play function

function play(e) {
  var id = window.setTimeout(function() {}, 0);

  while (id--) {
    window.clearTimeout(id); // will do nothing if no timeout with id is present
  }
  if(tutorialonemode === true && e.target.previousSibling.textContent === "scout") {
    next.disabled = true;
  var str = "The opponent has a 'risk' card. The value of the Risk card rises randomly at the end of each round. A card exceeding the limit of 8 changes sides.";
  alertblink(str,7000);
  }

  if(tutorialonemode === true && tutorialtwomode === false) {
  setTimeout(() => {
    next.disabled = false;
  }, 7000);
}

if(tutorialonemode === true && tutorialtwomode === true) {
  setTimeout(() => {
    next.disabled = false;
  }, 1000);
}

  if(tutorialonemode === true && e.target.previousSibling.textContent === "risk") {
  var str = "Another feature of the Scout Card is to immobilize the target card in one turn. So the opponent couldn't play, and we got the card."
  alertblink(str,7000);
  }
  // ******* NEED THIS CALCULATION FOR COMPANION CARD ***********
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

    // ************ 'REDUCER' REDUCES YOUR RIVAL CARDS VALUE **************
    setTimeout(() => {
      if(countforlegis === 0) {
        var count = 0;
        for (let m = 0; m < yoursside.children.length; m++) {
          if(yoursside.children[m].children[1].textContent === "reducer" && yoursside.children[m].style.display !== "none") {
            for (let t = 0; t < computerside.children.length; t++) {
              if(computerside.children[t].children[0].textContent <= 0)
              count+=1;
              computerside.children[t].children[0].textContent -= 1;
              if(t === computerside.children.length - 1) {
                comp.textContent -= computerside.children.length - count;
                yoursumrival -= computerside.children.length - count;
              }
              if(parseInt(computerside.children[t].children[0].textContent) <= 0) {
                computerside.children[t].classList.add("reducenow");
                setTimeout(() => {
                  computerside.children[t].style.display = "none";
                }, 1000);
                
                countforlegis = 1;
              }
            }
  
          }
          
        }
      }
    }, 300);
    
    // when you use scout card
    if(property === "scout" && computerhands.children.length > 0) {
      countforready = 0;
      var randomone = Math.floor(Math.random()*computerhands.children.length);
      // ************ Select From Invisible **************
      while(!computerhands.children[randomone].children[0].classList.contains("invisible")) { 
        if(computerhands.children.length === 1) {
          randomone = 0;
          break;
        }
        
        randomone = Math.floor(Math.random()*computerhands.children.length);
        if(computerhands.children.length  >  1) {
        for (let h = 0; h < computerhands.children.length; h++) {
          if(computerhands.children[h].children[0].classList.contains("invisible"))
          break;
          if(h === computerhands.children.length - 1) {
            randomone = Math.floor(Math.random()*computerhands.children.length);
          }
        }
        }

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
    div.style.backgroundColor = "rgb(66, 186, 226)";
    yoursside.appendChild(div);

  },500);
  yoursumval+=value+1;
  }


/*  if (property === "reducer" && countforlegis === 0) {
    for (let j = 0; j < computerside.children.length; j++) {
      computerside.children[j].children[0].textContent -= 1;
      if(j === computerside.children.length - 1) {
      comp.textContent -= computerside.children.length;
      yoursumrival -= computerside.children.length;
    }
      if(computerside.children[j].children[0].textContent == 0) {
      computerside.removeChild(computerside.children[j]);
      countforlegis=1;
    }
    }
    
}
*/

    yoursumval+=value;
    yourhands.removeChild(chosenone);
    document.querySelector(".yourside").appendChild(chosenone);
    yourval.textContent = yoursumval;
    for (let i = 0; i < this.children.length; i++) {
      var remainbuttons = this.children[i].children[2];
      remainbuttons.disabled = true;
    }
    if(tutorialonemode === false && tutorialtwomode === false)
    next.disabled = false; // at the end of the play
 }


}


//********** Next Turn nextclick Event***************
function nextturn() {
  
  window.riskcount = 0;
  window.nextrisk = false;
 
  


    
  
  
  

  

  if(riskagain0 === true) {
    for (let i = 0; i < yourhands.children.length; i++) {
      if(yourhands.children[i].classList.contains("risk0")) // && yourhands.children[i].backgroundColor === "bisque")
      window.riskoriginal = yourhands.children[i].children[0].textContent;
     /* if(yourhands.children[i].children[1].textContent === "risk" && yourhands.children[i].backgroundColor === "rgb(100, 196, 228)")
      window.riskoriginalrival = yourhands.children[i].children[0].textContent; */
    }
    riskagain0 = false;
  }

  if(riskagain1 === true) {
    for (let i = 0; i < yourhands.children.length; i++) {
      if(yourhands.children[i].classList.contains("risk1")) // && yourhands.children[i].backgroundColor === "bisque")
      window.riskoriginal2 = yourhands.children[i].children[0].textContent;
     /* if(yourhands.children[i].children[1].textContent === "risk" && yourhands.children[i].backgroundColor === "rgb(100, 196, 228)")
      window.riskoriginalrival = yourhands.children[i].children[0].textContent; */
    }
    riskagain1 = false;
  }

  if(riskagain2 === true) {
    for (let j = 0; j < computerhands.children.length; j++) {
      if(computerhands.children[j].classList.contains("risk2"))
      window.riskoriginalrival = computerhands.children[j].children[0].textContent;
   
    }

    for (let j = 0; j < yourhands.children.length; j++) {
      if(yourhands.children[j].classList.contains("risk2"))
      window.riskoriginalrival = yourhands.children[j].children[0].textContent;
   
    }

    riskagain2 = false;
  }

  
  var id = window.setTimeout(function() {}, 0);

while (id--) {
    window.clearTimeout(id); // will do nothing if no timeout with id is present
}

if(tutorialonemode === true && computerhands.children.length > 0 && computerhands.children[0].children[1].textContent === "risk") {
  setTimeout(() => {
   
    var temp = computerhands.children[0];
    computerhands.removeChild(computerhands.children[0]);
    yourhands.appendChild(temp);
    yourhands.children[0].children[0].textContent = "8";
    yourhands.children[0].children[2].disabled = false;
    secondnext = true;
  },1200)
}
  // tutorial1 nextturn
  setTimeout(() => {
    if(tutorialonemode === true && secondnext === false && tutorialtwomode === false && yourhands.children.length > 0) {
      yourhands.children[0].children[2].disabled = true;
      var str = "Great. The risk card is yours now. Let's play that card and finish this.";
      secondnext = true;
    alertblink(str,7000);
    }

  }, 1100);
  if(tutorialonemode === true && tutorialtwomode === false && yourhands.children.length > 0) {
  setTimeout(() => {
    yourhands.children[0].children[2].disabled = false;
  }, 8200);
}
  if(tutorialonemode === true && secondnext === true && tutorialtwomode === false && yourhands.children.length === 0) {
    setTimeout(() => {

      tutorialend.style.display = "block";
      yoursside.innerHTML = "";
      computerside.innerHTML = "";
      skip.style.display = "block";
      tutorialagain2.style.display = "none";
      nextsection2.style.display = "none";
      nextsection1.style.display = "inline-block";
      tutorialagain1.style.display = "inline-block";
    }, 1500);
   
  }

  setTimeout(() => {
    if(tutorialonemode === true && secondnext === false && tutorialtwomode === true) {
      var str = "He played the opponent's 'scout' Card. You don't have any other cards, the Scout Card feature hasn't been activated.";
      secondnext = true;
    alertblink(str,7000);
    }

  }, 1100);
  if(tutorialonemode === true && secondnext === true && tutorialtwomode === true) {
    setTimeout(() => {
      tutorialend.style.display = "block";
      yoursside.innerHTML = "";
      computerside.innerHTML = "";
      skip.style.display = "block";
      featurelearned1.textContent = "scout";
      featurelearned2.textContent = "companion";
      endheading.textContent = "Second section is completed";
      nextsection1.style.display = "none";
      tutorialagain1.style.display = "none";
      tutorialagain2.style.display = "inline-block";
      nextsection2.style.display = "inline-block";
      
    }, 3000);
   
  }

  if(countthree > 0 && tutorialthreemode === true) {
    setTimeout(() => {
      
      tutorialend.style.display = "block";
      yoursside.innerHTML = "";
      computerside.innerHTML = "";
      skip.style.display = "block";
      featurelearned1.textContent = "risk";
      featurelearned2.textContent = "reducer";
      endheading.textContent = "Congratulations! Tutorials completed";
      skiptutorials.textContent = "Start the game";
      tutorialagain2.style.display = "none";
      nextsection2.style.display = "none";
      nextsection1.style.display = "none";
      tutorialagain1.style.display = "none";
      tutorialagain3.style.display = "inline-block";
      
    }, 1500);
  }

  if(tutorialthreemode === true && yourhands.children.length > 0) {
    yourhands.children[0].children[0].textContent = "8";
    countthree+=1;
  }

  
  var sumonhands = 3;
  //******** GAME OVER **********
  sumonhands = computerhands.children.length + yourhands.children.length;
  if(sumonhands < 1) {
    next.disabled = true; // sumon hands condition not any card
      setTimeout(() => {
        alertforgame.classList.add("alert-animate");
        if(yoursumval === yoursumrival)
        alertforgame.textContent = "DRAW";
        if(yoursumval > yoursumrival)
        alertforgame.textContent = "VICTORY";
        if(yoursumrival > yoursumval)
        alertforgame.textContent = "DEFEAT";
      }, 1500);
      
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
 
  window.newrandom0 =  Math.floor(Math.random()*4) + 3;
  window.newrandom1 = Math.floor(Math.random()*4) + 3;
  window.newrandom2 = Math.floor(Math.random()*4) + 3;
   // Rival's turn
  next.disabled = true; // after click next disabled = true
  
  var random = Math.floor(Math.random() * computerhands.children.length);
  while(computerhands.children.length > 0 && computerhands.children[random].children[1].classList.contains("notready") && countforready === 0) {
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



 // For Rival's Risk cards ******** From Computer to Your Hand *************
 setTimeout(() => {
   
 
for (let j = 0; j < computerhands.children.length; j++) {
  var computercard = computerhands.children[j];
  if(computercard.classList.contains("risk2")) {
    var prevcompval2 = parseInt(computercard.children[0].textContent);
    prevcompval2 += newrandom2;
    computercard.style.color = "black";
    computercard.children[0].textContent = prevcompval2;
    if(computercard.children[0].textContent > 8) {
     riskagain2 = true;
     computercard.children[0].textContent = riskoriginalrival;
    computerhands.removeChild(computercard);
    yourhands.appendChild(computercard);
    computercard.children[1].classList.remove("invisible");
    computercard.children[0].classList.remove("invisible");
    computercard.children[2].disabled = false;

    
    }
  }

  if(computercard.classList.contains("risk0")) {
    var prevcompval = parseInt(computercard.children[0].textContent);
    prevcompval += newrandom0;
    computercard.style.color = "royalblue";
      computercard.children[0].classList.add("your-risk-card");
      computercard.children[0].textContent = prevcompval;
    if(computercard.children[0].textContent > 8) {
      riskagain0 = true;
      computercard.children[0].textContent = riskoriginal;
      computerhands.removeChild(computercard);
      yourhands.appendChild(computercard);
      computercard.children[1].classList.remove("invisible");
      computercard.children[0].classList.remove("invisible");
      computercard.children[2].disabled = false;
    }
  }

  if(computercard.classList.contains("risk1")) {
    var prevcompval = parseInt(computercard.children[0].textContent);
    // if(isbeginning === false) // isbeginning means your rival plays first
    prevcompval += newrandom1;
    computercard.style.color = "royalblue";
      computercard.children[0].classList.add("your-risk-card");
      computercard.children[0].textContent = prevcompval;
    if(computercard.children[0].textContent > 8) {
      riskagain1 = true;
      computercard.children[0].textContent = riskoriginal2; // newrandom2 means last random
      computerhands.removeChild(computercard);
      yourhands.appendChild(computercard);
      computercard.children[1].classList.remove("invisible");
      computercard.children[0].classList.remove("invisible");
      computercard.children[2].disabled = false;
  
    }
  }

  
}
}, 200);
var computerhandssum = 0;
for (let l = 0; l < computerhands.children.length; l++) {
    computerhandssum += parseInt(computerhands.children[l].children[0].textContent);
}
console.log(computerhandssum);
if(random !== -1) {
  // *********** COMPUTER'S TURN POSSIBILITIES MANAGEMENT **********
for (let t = 0; t < computerhands.children.length; t++) {
  if(computerhands.children[t].children[1].textContent === "risk" && parseInt(computerhands.children[t].children[0].textContent) >= 5 && !(computerhands.children[t].children[1].classList.contains("notready"))) {
    random = t;
  }
  //if(computerhands.children[t].children[1].textContent === "companion" && computerhandssum < 15 && !(computerhands.children[t].children[1].classList.contains("notready"))) {
  //random = t;
  
//}
}
var card = computerhands.children[random];
computerhands.children[random].children[0].classList.remove("invisible");
computerhands.children[random].children[1].classList.remove("invisible");
computerhands.removeChild(card);
computerside.appendChild(card);
yoursumrival += parseInt(card.children[0].textContent);
comp.textContent = yoursumrival;

// var sumonscreen2 = computerside.children.length + yoursside.children.length;


} else
return;
if(card.children[1].textContent === "scout") {
  if(yourhands.children.length === 1)
    next.disabled = false;
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

  //if(card.children[1].textContent === "reducer" && computerhands.children.length > 0)
    //countforreduce +=1;
  

  
//count = 0;


//*********** 'REDUCER' REDUCES YOUR CARD VALUES *************
},1000);
 // if(countforreduce > 0)
setTimeout(() => {
  if(countforlegisrival === 0) {
    var count2 = 0;
    for (let m = 0; m < computerside.children.length; m++) {
      if(computerside.children[m].children[1].textContent === "reducer" && computerside.children[m].style.display !== "none") {
        for (let t = 0; t < yoursside.children.length; t++) {
          if(yoursside.children[t].children[0].textContent <= 0)
          count2+=1;
          yoursside.children[t].children[0].textContent -= 1;
          if(t === yoursside.children.length - 1) {
            yourval.textContent -= yoursside.children.length + count2;
            yoursumval -= yoursside.children.length + count2;
          }
          if(yoursside.children[t].children[0].textContent <= 0) {
            yoursside.children[t].classList.add("reducenow");
            setTimeout(() => {
              yoursside.children[t].style.display = "none";
            }, 1000);
            countforlegisrival = 1;
          }
        }
  
      }
      
    }
  }
}, 1200);

  
setTimeout(() => {
  for (let i = 0; i < yourhands.children.length; i++) {
    var remainbuttons = yourhands.children[i].children[2];
    if(tutorialonemode === false && tutorialtwomode === false)
      remainbuttons.disabled = false;
  }
    for (let j = 0; j < computerhands.children.length; j++) {
      computerhands.children[j].style.color = "royalblue"; 
  }

  // Risk card for you ******** From Your Hand to Computer *************

for (let i = 0; i < yourhands.children.length; i++) {
  var yourcard = yourhands.children[i];
  //yourcard.style.color = "black";
  if(yourcard.classList.contains("risk0")) {
    var prevyourval = parseInt(yourcard.children[0].textContent);
    if(isbeginning === false) {
    prevyourval += newrandom0;
    yourcard.style.color = "royalblue";
    yourcard.children[0].classList.add("your-risk-card");
    }
    if(isbeginning === true) {
    prevyourval += 0;
    isbeginning=false;
    }
    
      yourcard.children[0].textContent = prevyourval;
    if(yourcard.children[0].textContent > 8) {
      riskagain0 = true;
      yourcard.children[0].textContent = riskoriginal - newrandom0;
      yourcard.children[2].disabled = true;
      yourhands.removeChild(yourcard);
      computerhands.appendChild(yourcard);
    }
  }

  if(yourcard.classList.contains("risk1")) {
    var prevyourval1 = parseInt(yourcard.children[0].textContent);
    // if(isbeginning === false) // isbeginning means your rival plays first
    prevyourval1 += newrandom1;
    yourcard.style.color = "royalblue";
      yourcard.children[0].classList.add("your-risk-card");
      yourcard.children[0].textContent = prevyourval1;
    if(yourcard.children[0].textContent > 8) {
      riskagain1 = true;
      yourcard.children[0].textContent = riskoriginal2 - newrandom1; // newrandom2 means last random
      yourcard.children[2].disabled = true;
      yourhands.removeChild(yourcard);
      computerhands.appendChild(yourcard);
  
    }
  }

  if(yourcard.classList.contains("risk2")) {
    var prevyourval2 = parseInt(yourcard.children[0].textContent);
    // if(isbeginning === false) // isbeginning means your rival plays first
      prevyourval2 += newrandom2;
      yourcard.style.color = "royalblue";
      yourcard.children[0].classList.add("your-risk-card");
      yourcard.children[0].textContent = prevyourval2;
    if(yourcard.children[0].textContent > 8) {
      riskagain2 = true;
      yourcard.children[0].textContent = riskoriginalrival - newrandom2; // newrandom2 means last random
      yourcard.children[2].disabled = true;
      yourhands.removeChild(yourcard);
      computerhands.appendChild(yourcard);
  
    }
  }

  


  
}
  
  
  },100);

  setTimeout(() => {
    for (let i = 0; i < yourhands.children.length; i++) {
      if(yourhands.children[i].children[0].classList.contains("your-risk-card")) {
      yourhands.children[i].children[0].classList.remove("your-risk-card");
      }
    }

  }, 2600);

  for (let j = 0; j < computerhands.children.length; j++) {
    if(computerhands.children[j].children[0].classList.contains("your-risk-card")) {
    computerhands.children[j].children[0].classList.remove("your-risk-card");
    }
  }


  



  countforready = 1;
 if(countforready === 1) {
   setTimeout(() => {
    for (let k = 0; k < computerhands.children.length; k++) {
      computerhands.children[k].children[1].classList.remove("notready");
    }
   },1000)
   

 }


 setTimeout(() => {
  if(yourhands.children.length === 0)
    next.disabled = false;
 },1500)
}
