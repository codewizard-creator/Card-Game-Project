


export default function Createcards() {
  
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


 export class Cards {
    constructor(id, value, property, onboard) {
        this.id = id;
        this.value = value;
        this.property = property;
        this.onboard = false;
    }
  

}
  