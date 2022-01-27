let monTableau = [];
const nombre1 = prompt("Entrez le nombre des elements dqns le tableau");
for (let i = 0; i < nombre1; i++) {
  monTableau[i] = parseFloat(prompt("Entrez les elements du tableau"));
  console.log(monTableau[i]);
}

let sum = 0;
for (let i = 0; i < monTableau.length; i++) {
  sum += monTableau[i];
}

console.log("la moyenne :" + sum/nombre1);
