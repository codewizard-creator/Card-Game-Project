var yoursumval = 0;
var yoursumrival = 0;
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
var nextsection1 = document.querySelector(".next-section-1");
var nextsection2 = document.querySelector(".next-section-2");
var endheading = document.querySelector(".end-heading");
var featurelearned1 = document.querySelector(".feature-learned-1");
var featurelearned2 = document.querySelector(".feature-learned-2");
var countforlegis = 0;
var countforlegisrival = 0;
var countforreduce = 0;
var cardsrival;
var anewarr = [];
var count = 0;
var countfortutorial1 = 1;
var riskoriginalrival = 8;
var countforready = 0;
var tutorialonemode = false;
var tutorialtwomode = false;
var secondnext = false;
var secondplay = false;
alert.style.display = "none";
skip.disabled = true;

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

  function alertblink(str,time) {
    alert.style.display = "block";
    alert.textContent = str;
    alert.classList.add("alertanimation");
    setTimeout(() => {
      alert.classList.remove("alertanimation");
      alert.style.display = "none";
    }, time);
  }