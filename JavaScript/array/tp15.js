let monTableau1 = [];
let monTableau2 = [];
const nombre1 = prompt("Entrez le nombre des elements dans le tableau ");
for (let i = 0; i < nombre1; i++) {
  monTableau1[i] = parseFloat(prompt("Entrez les elements du tableau 1"));
}
for (let i = 0; i < nombre1; i++) {
  monTableau2[i] = parseFloat(prompt("Entrez les elements du tableau 2"));
}

let monTableausum = [];
for (let i = 0; i < nombre1; i++) {
  monTableausum[i] = monTableau1[i] + monTableau2[i];
  console.log(monTableausum[i]);
}
