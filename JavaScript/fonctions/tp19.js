function sommediagonales(myArray) {
   
   let sumdiagonale = 0;
   let sumdiagonalinverse = 0;
   for (let i = 0; i < myArray.length; i++) {
     sumdiagonale += myArray[i][i];
     sumdiagonalinverse += myArray[i].reverse()[i];
    
   }
   
   console.log(myArray);
  return sumdiagonale + sumdiagonalinverse;
}
 
const myArray=[[1,2,3],[5,3,1],[7,2,4]];