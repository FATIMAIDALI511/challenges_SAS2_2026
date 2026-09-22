// inverser tableau original :
let tableau=[1,2,3,4];
console.log(tableau)
function reversetTableau(){
    let j=tableau.length -1;
    for(let i=0; i<tableau.length/2; i++){
    
           let temp=0;
            temp=tableau[j];
            tableau[j]=tableau[i];
            tableau[i]=temp;
            j--;  
       
    }
    console.log(tableau)
}
reversetTableau();