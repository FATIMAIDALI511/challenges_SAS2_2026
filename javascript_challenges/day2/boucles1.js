//challenge 1:
let prompt= require('prompt-sync')()
let N = prompt("enter le nonmbre N: ");

nbr= prompt("Entez un nombre : ")
for(let i=1;i<= nbr;i++){console.log(`Participant ${i}`)};

//challenge 2:

for (let i =1; i<=N; i++){
    if(i%2==0){console.log(i)} 
}

// challenge 3 et le principe de challenge 4:
let somme=0;
for (let i =1; i<=N; i++){
    somme+=i;
    console.log(` produit ${i}*${N}= ${i* N}`);

}
console.log(`la somme est de 1 à ${N} = ${somme}`)
//challenge 5: 
let Somme=0;
let X = prompt(`enter le nombre pour afficher  leur multiple entre 1 et ${N} : `);
for(let i= 1; i<=N; i++){
    console.log(i*X);
    Somme++;
    if(i*X==N) break;
}
console.log(`le nombre total de multiple trouver est: ${Somme}`)

// challenge 6:
let depart= prompt("enter le nombre de depart: ");
while(depart>=0){
    console.log(depart);
    depart--;
}
console.log("DEcollage!");

// challenge 7:
nombre =1;
while(nombre**2<=100){
    nombre++;}
console.log(nombre)

//challenge 8:
let nbrMission = prompt("enter le nombre de mission: ");
let n=1;
let score=0;
while(n<=nbrMission){
    score+=100;
    n++;
 console.log(`Mission ${n} -> score : ${score}`)
}

//challenge 9:
let base = Number(prompt("enter la base : "))
let exposant = Number(prompt("enter l'exposnt: "))
let n=1;
let resultat=1;
while(n<= exposant){
    resultat *= base;
    n++;
}
console.log(resultat);

//challenge 10:
//let nombre;
let nbretentative=-1;
let sommenbr =0 ;
do{
 var nombre = prompt("enter un nombre: ")
 nbretentative++;
 sommenbr+=Number(nombre)
}while( nombre != 0)
    console.log(`nombre de valeur : ${nbretentative} 
    la somme des nombre : ${sommenbr}`)

// challenge 11:
let NOMBRE= prompt("enter la valeur: ")
let N=1;
for(let i= 1; i<=NOMBRE; i++){
    N=N*i;
}
console.log(`${NOMBRE}! = ${N}`);

