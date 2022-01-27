let monTableau = [
  [2, 3, 4],
  [5, 9, 8],
  [2, 4, 1],
];
//const nombre1 = prompt("Entrez le nombre des elements dans la matrice");
//for (let i = 0; i < nombre1; i++) {
 // for (let j =0 ;j < nombre1;j++) {
      
    //  monTableau[i] [j]=prompt("Entrez les elements dans le matrice")
 // }
   
    
//}

let sumdiagonale=0;
for (let i = 0; i < monTableau.length; i++) {
  sumdiagonale += monTableau[i][i];
}
console.log("la somme des éléments de la diagonale:" + sumdiagonale);
