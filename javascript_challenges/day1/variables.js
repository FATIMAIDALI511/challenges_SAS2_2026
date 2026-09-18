const ps = require('prompt-sync');
const prompt = ps();
//challenge 1:
let joueur={
    Pseudo : "ShadowX",
Niveau : 12,
Age : 21,
Score : 4580,
Pays : "Maroc"
}
console.log(`
   pseudo: ${joueur.Pseudo},
   Niveau: ${joueur.Niveau},
   Age: ${joueur.Age},
   score: ${joueur.Score},
   pays : ${joueur.Pays}` )

let pseudo = "7October", Niveau = 1, age = 21, score = 80, pays = " Moroco";
console.log("pseudo:",pseudo);
console.log("Niveau:",Niveau);
console.log("age :", age);
console.log("score :", score);
console.log("pays :", pays);

//challenge 2:
let EUR;

const MAD = prompt(" enter votre badge:");
EUR = MAD / 11;
console.log("votre badget en EUR est: ", EUR.toFixed(3));

// challenge 3:
let storageGB , storageMB;
storageGB = prompt("enter la capacité en GB:");
storageMB = storageGB * 1024;
console.log("la capacité en MB est :", storageMB);

// challenge 4:
let distance, carburant;
distance = prompt("enter la distance en kilomètre:");
carburant = prompt("Enter la quantité de carburant en litre:");
let consomation = (carburant /distance) * 100;
console.log("la consomation en L/100 km est", consomation.toFixed(0));

// challenge 5:
let dure;
dure = +prompt("enter la duré en minute:");
console.log(typeof dure);
if(0 < dure && dure  < 60){
    console.log("court métrage");
} else if (dure < 120){
    console.log("Film standart");
}else if (dure > 120){
       console.log("Film long")
}else{
    console.log("la valeur entrener est invalide")
}

//challenge 6:
let scorePartie1, scorePartie2, scorePartie3, scorePartie4, scoreTotal, scoreMoyen;
scorePartie1 = +prompt("enter score da la partie 1 :");
scorePartie2 = +prompt("enter score da la partie 2 :");
scorePartie3 = +prompt("enter score da la partie 3 :");
scorePartie4 = +prompt("enter score da la partie 4 :");
scoreTotal = (scorePartie1 + scorePartie2 + scorePartie3 + scorePartie4);
scoreMoyen = scoreTotal / 4;
console.log("score total : ",scoreTotal);
console.log("score moyen :", scoreMoyen);

// challenge 7 :
let controlecontinu, projet, examenFinal;
controlecontinu = +prompt("enter la note de controle continu :");
projet= +prompt("enter la note de projet :");
examenFinal = +prompt(" enter le note d'Examen final :");
let noteFinal = ( controlecontinu * 2  + projet *3 + examenFinal * 5) / 10 ;
console.log("la note finale est: ", noteFinal);

// challenge 8 :
let tension, intensite, temps;
tension = +prompt("entez la tension en V : ");
intensite= +prompt("entrez l'intensité en A : ");
temps= +prompt("entrez le temps en h : ");
let energie= tension * intensite * temps;
console.log("l'énergie consommée en WH est :", energie);

// challenge 9 :
let A =[];
let B = [];
for (let i = 0 ; i <3 ; i++ ){
    A[i]= prompt(`enter les coordonées de A x${i+1} :`);
    A
}
for (let i = 0 ; i <3 ; i++ ){
    B[i]= prompt(`enter les coordonées de B y${i+1} :`);
}
let distance = ((B[0]-A[0])**2 + (B[1]-A[1])**2 + (B[2]-A[2])**2 )** (1/2);
console.log(`distance :  ${distance}`);