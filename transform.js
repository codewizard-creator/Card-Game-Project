var transformscout = document.querySelector(".transform-scout");
var yourhands = document.querySelector(".yourhands");

export function transformlegislation() {
    for (let i = 0; i < yourhands.children.length; i++) {
      if(yourhands.children[i].children[1].textContent === "legislation") {
        yourhands.children[i].children[1].textContent = "scout";
        transformscout.disabled = true;
        break;
      }
        
    }

}






