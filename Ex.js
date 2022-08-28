var a, altura, sexo = 0;
var altMaior, altMenor = 0;
var Hom, Mulh = 0;
var mediahom, contahom, contamulh = 0;


for(a = 1 ;a <= 15; a++) {        
    altura = parseInt(prompt("Informe sua altura["+a+"]:"));
    sexo = prompt("Sexo: M ou F:");
}

if(a == 1){
    altMenor = altura
}
if( altura > altMaior){
    altMaior = altura;
}
if(altura < altMenor){
    altMenor = altura;
}
if (sexo =='M'){
    Hom += altura;
    contahom++;
} else if (sexo =='F'){
    Mulh += altura;
    contamulh++;
}

mediahom = Hom/contahom;


alert("A maior altura entre todos é: "+altMaior); 
alert("A menor altura entre todos é: "+altMenor);
alert("A média da altura dos homens é: "+mediahom);
alert("O número de mulheres é: "+contamulh);