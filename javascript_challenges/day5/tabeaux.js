/*
let input= require("prompt-sync")()

//challenge 1:
let tableau =[];
let taille = input("enter la taille de tableau")
 for(let index=0; index < taille ; index++){
        tableau[index] = input(`enter l'element ${index +1} tableau `)
  
 }
 console.log(tableau)

console.log(tableau.length)
//let tableau = [10, 20, 30];
function afficherElement(tab){
    for(let index=0; index < tableau.length ; index++){
        console.log(` l'elemnet de tableau ${index + 1} est ${tableau[index]}`)
    }

}
afficherElement(tableau)

//challenge 2:
function calculerSomme(tab){
    let somme = 0;
    for(let index = 0; index < tableau.length; index++){
        somme += Number(tableau[index]);
    }
     return somme;

}
console.log(`la somme est ${calculerSomme(tableau)}`)

// challenge 3:
function troverMax(tab){
    let max = tableau[0];
    console.log(max);
        for(let i =1; i< tableau.length ; i++){
            if(max <tableau[i]){
                max = tableau[i];
                console.log()
            }          
         
        }
    return max;
 }
 let A = troverMax(tableau)
 console.log(A);

let tableau =[ 12, 45, 7, 89, 23]
function troverMax(tab){
    let max= tableau[0];
    for(let i=0; 
}
 */
function troverMax(tab){
    let max = tableau[0];
    console.log(max);
        for(let i =1; i< tableau.length ; i++){
            if(max <tableau[i]){
                max = tableau[i];
                console.log()
            }          
         
        }
    return max;
 }
 