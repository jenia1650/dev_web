let monTableau = [];
const nombre1 = prompt("Entrez le nombre des elements dans le tableau");
for (let i = 0; i < nombre1; i++) {
  monTableau[i] = parseFloat(prompt("Entrez les elements du tableau"));
  console.log(monTableau[i]);
}
let min=monTableau[0];
let max=monTableau[0];
for (let i = 0; i < monTableau.length; i++) {
  if (monTableau[i]>=monTableau[0]) {
      max=monTableau[i];
      
  }
  else if (monTableau[i] <=monTableau[0]) {
      min = monTableau[i];
  }
}

console.log("minimum :" + min);
console.log("maximum :" +max);
