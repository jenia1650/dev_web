function nouveautableau(tableau,nombrerotation,sensrotation){
    
    for (let i = 0; i < nombrerotation; i++) {
       if (sensrotation =="right") {
          
          tableau.unshift(tableau.pop());//droit
       } 
       else if (sensrotation == "left") {
         tableau.push(tableau.shift()); //gauche
       }
    }   
     console.log(tableau);

    return tableau;
    
}

nouveautableau([2,3,4,5],2,"right");
nouveautableau([2,3,5,8],2,"left");
