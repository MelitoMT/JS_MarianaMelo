let message="Simón está triste, te has equivocado";
let ask = "El numerito es....chan...chan..chan...";
let alert1 = "Repite el número";
let alert2 = "Repite el que iba antes de ese";
let alert3 = "¿Cuál iba antes?";
let alert4 = "¿Y antes?";
let alert5 = "Dime el primer numerito";
let alert6 = "Enhorabuena, ganaste helado gratis para los dinos del mundo";
function rand(){
    return Math.round(Math.random()*(99))+1;
}
setTimeout(()=>{
  let num1 = rand();
    alert(ask+num1);
  let numA = prompt(alert1)
  if (numA == num1) {
    setTimeout(()=>{
      let num2 = rand();
        alert(ask+num2);
      let numB = prompt(alert1)
      if (numB == num2) {
        numA = prompt(alert2)
        if(numA == num1){
          setTimeout(()=>{
            let num3 = rand();
            alert(ask+num3);
            let numC = prompt(alert1)
            if (numC == num3) {
              numB = prompt(alert2)
              if (numB == num2) {
                numA = prompt(alert3)
                if (numA == num1) {
                  setTimeout(()=>{
                    let num4 = rand();
                    alert(ask+num4);
                    let numD = prompt (alert1)
                    if (numD == num4) {
                      numC = prompt(alert2)
                      if (numC == num3) {
                        numB = prompt(alert3)
                        if (numB == num2) {
                          numA = prompt(alert4)
                          if (numA == num1) {
                            setTimeout(()=>{
                              let num5 = rand();
                            alert(ask+num5);
                              let numE = prompt(alert1)
                              if (numE == num5) {
                                numD = prompt(alert2)
                                if (numD == num4) {
                                  numC = prompt(alert3)
                                  if (numC == num3) {
                                    numB = prompt(alert4)
                                    if (numB == num2) {
                                      numA = prompt(alert5)
                                      if (numA == num1) {
                                        alert(alert6)
                                      }
                                      else{
                                        alert(message);
                                      }
                                    }else {
                                      alert(message);
                                    }
                                  }else {
                                    alert(message);
                                  }
                                }else {
                                  alert(message);
                                }
                              }else {
                                alert(message);
                              }
                            },1000)
                          }else {
                            alert(message);
                          }
                        }else {
                          alert(message);
                        }
                      }else {
                        alert(message);
                      }
                    }else {
                      alert(message);
                    }
                  },1000)
                }else {
                  alert(message);
                }
              }else {
                alert(message);
              }
            }else {
              alert(message);
            }
          },1000)
        }else {
          alert(message);
        }
      }else {
        alert(message);
      }
    },1000)
  }else {
    alert(message);
  }
},1000)