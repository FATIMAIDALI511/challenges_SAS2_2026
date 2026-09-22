
let lire= require("prompt-sync")()

//challenge 1:
// let tableau =[];
// let taille = lire("enter la taille de tableau")
//  for(let index=0; index < taille ; index++){
//         tableau[index] = +lire(`enter l'element ${index +1} tableau `)
  
//  }
// console.log(tableau)
/*
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
            }          
         
        }
    return max;
 }
 console.log(troverMax(tableau))


//recharge de max: without function :

let max = tableau[0];
for(let i =1; i<= tableau.length; i++){
    if(tableau[i]>max){
        max=tableau[i];
    }

}
console.log(`le nembre maximal est : ${max}`)


//challenge 4: Ajouter à la fin + (debut bonus):
function ajouterEllement(tab, element, position){
    if(position == 1){
        for(let i= tableau.length; i>=1; i--){
            console.log(i)
               tab[i]=tab[i-1]; 
        }
            
                tab[0]=element;
            
        }else if (position==2) {
        tab[tab.length]=element;
        

        }else{
            console.log("position invalide try again.")
        }
}
let position= Number(lire(`enter la position d'ajouter l'element: 1-> debut 2-> fin:`))   
let element = Number(lire(`entrez un element`))

ajouterEllement(tableau, element, position)
console.log(tableau);

//challenge 5: 

let valeur = lire(`Entez la valeur a chercher: `);
function contienElement(tab, valeur){
    for(let i = 0 ; i<tab.length; i++){
        if(tab[i]==valeur){
            return true;
            break;
        }
    }
    return false;
}
console.log(contienElement(tableau, valeur))
if(contienElement(tableau, valeur)){
    console.log(`${valeur} est existe dans le tableau`)
}else{console.log(`${valeur} n'existe pas dans le tableau`)}
// challenge 6:
//whit new array
function inverserTableau(tab){
    let tableauInverse =[];
    for(let i= 0; i< tab.length; i++){
        
        tableauInverse[i]=tab[tab.length -(i+1)];
    }
    return tableauInverse;

}
console.log(inverserTableau(tableau))
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


// premuter sans varaiable temp:
let a=2;
let b=3;
a = a+b;
b= a-b;
a=a-b;
console. log (a)
console. log (b)

// chllenge 7:
function filtrerPaire(tab){
    let Paire=[];
    for(let i = 0; i< tab.length; i++){
        if(tab[i]%2==0)
            //Paire.push(tab[i]);
        Paire[Paire.length]=tab[i];
    }
    return Paire;

}
console.log(filtrerPaire(tableau));

// challenge 8: supprimer les doublant:

let arr = [4,4,7,8,5,4,6,12,1,1]
let arr3 = [];
for (let i = 0; i < arr.length; i++) {
    let is_exest = false;
    for(let j = 0; j < arr3.length; j++) {
        if (arr[i] === arr3[j]) {
            is_exest =  true; 
        }
    }
    
    if (is_exest === false || arr3[0] === undefined) {
                arr3.push(arr[i]);
    }
    
}
console.log(arr3);

//Challenge 9 : Fusion de Deux Tableaux (Simulation de concat)
let tab1=[1,2,9];
let tab2=[3,4,9];
let fusionnerTableaux = (tab1, tab2) =>{

        for(let i =0; i< tab2.length; i++){
            tab1[tab1.length]=tab2[i];



        }    
    console.log(tab1)
}
fusionnerTableaux(tab1, tab2)
console.log(tab1)

//challenge 10: tri à bulles

let tab=[1,23,5,1,9,0]
function triABulle(){
    let temp=0;
    for(let j= 0; j<tab.length; j++){
    for(let i =0; i< tab.length; i++){
        while(tab[i]>tab[i+1]){
            temp=tab[i];
            tab[i]=tab[i+1];
        tab[i+1]=temp        }
    }
}
console.log(tab)
}
triABulle(tab)
//challenge 11:
// let tab=["debut", "js","php","fin"];
// // formaterchaine = () => {
    // tab.pop();
    // tab.shift();
    // console.log(tab)
    // let newtab =tab.join("-");
    // console.log(newtab)
   
//     tab.splice(0,1)
//     tab.splice(tab.length-1, 1)
//      let newtab =tab.join("-");
//     console.log(newtab)
// }
// formaterchaine()
//challenge 12;
let tableau = [1,2,3,4]
eleverAuCarre=()=>{

   let newtble= tableau.map((i)=>{
        return i**2;

    });
    console.log(newtble);
    }
eleverAuCarre()
*/