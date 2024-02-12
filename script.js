// Escreva um programa que receba a idade de uma pessoa e 
// imprima se ela é maior de idade ou menor de idade
function idadeMaior(){
    const idade = document.getElementById("idade")
    if(idade.value < 18){
        alert(idade.value+" é menor idade")
    }
    else{
        alert(idade.value+" é maior Idade")
    }
}
// Crie um programa que classifique
// um número como positivo, negativo ou zero
function classificaNum(){
    const num = document.getElementById("num")
    if(num.value>0){
        alert("Número positivo")
    }
    else if(num.value<0){
        alert("Número negativo")
    }
    else{
        alert("Número é 0")
    }
}
// Faça um programa que determine se um ano é bissexto ou não
function anoBissexto(){
    const ano = document.getElementById("ano")
    if ((ano.value % 4 == 0 && ano.value % 100 != 0) || ano.value % 400 == 0) {
          alert("O ano é bissexto.");
        } else {
          alert("O ano não é bissexto.");
    }
}
// Crie um programa que verifique se um número é par ou ímpar.
function numParImpar(){
    const num1 = document.getElementById("num1")
    if (num1.value%2==0) {
          alert("O número é par")
        } else {
          alert("O número é impar")
        }
}
// Escreva um programa que determine se um aluno foi aprovado, reprovado 
//         ou está em recuperação, considerando que a nota 
//         mínima para aprovação é 7, e para recuperação é 5
function alunoApRepRec(){
    const nota = document.getElementById("nota")
    if(nota.value<5){
        alert("Aluno reprovado")
    }else if(nota.value>=5 && nota.value<7){
        alert("Aluno em recuperação")
    }else if(nota.value>=7 && nota.value<=10){
        alert("Aluno aprovado")
    }else{
        alert("Nota inválida")
    }
}
// Faça um programa que determine o maior de três números informados.
function maiorNum(){
    const num1 = document.getElementById("num1").value
    const num2 = document.getElementById("num2").value
    const num3 = document.getElementById("num3").value
    if(num1>num2 && num1>num3){
        alert("O maior número é o "+num1)
    }else if(num2>num1 && num2>num3){
        alert("O maior número é o "+num2)
    }else if(num3>num1 && num3>num2){
        alert("O maior número é o "+num3)
    }else{
        alert("Os números são iguais")
    }
}

//Crie um programa que verifique se um ano é par ou ímpar
function anoParImpar(){
    const ano1 = document.getElementById("ano1")
    if(ano1.value%2===0){
       alert("O ano é par.");
    } else {
        alert("O ano é ímpar.");
    }
}
// Escreva um programa que leia um número de 1 a 7 e imprima o dia 
// da semana correspondente.

function diaSemana(){
    const dia = document.getElementById("dia").value;
     
    switch(dia){
        case "1":
            alert("Dia da semana é Domingo");
            break;
        case "2":
            alert("Dia da semana é Segunda-feira");
            break;
        case "3":
            alert("Dia da semana é Terça-feira");
            break;
        case "4":
            alert("Dia da semana é Quarta-feira");
            break;
        case "5":
            alert("Dia da semana é Quinta-feira");
            break;
        case "6":
            alert("Dia da semana é Sexta-feira");
            break;
        case "7":
            alert("Dia da semana é Sábado");
            break;
        default:
            alert("Número inválido");
    }
}
// Crie um programa que verifique se uma letra é vogal ou consoante.

function vogalConsoante(){
    const vg = document.getElementById("letra").value;
    switch(vg){
        case 'a':
        case 'e':
        case "i":
        case "o":
        case "u":
            alert(vg+" é vogal");
            break;
        default:
            alert(vg+" é consoante");
    }
}
// Faça um programa que converta um número em um mês do ano.

function numMes(){
    const mes = document.getElementById("num").value;
    switch(mes){
        case '1':
            alert("janeiro");
            break;
        case '2':
            alert("fevereiro");
            break;
        case '3':
            alert("março");
            break;
        case '4':
            alert("abril");
            break;
        case '5':
            alert("maio");
            break;
        case '6':
            alert("junho");
            break;
        case '7':
            alert("julho");
            break;
        case '8':
            alert("agosto");
            break;
        case '9':
            alert("setembro");
            break;
        case '10':
            alert("outubro");
            break;
        case '11':
            alert("novembro");
            break;
        case '12':
            alert("dezembro");
            break;
        default:
            alert("Número invalido");
    }
}

// Crie um programa que classifique um dia como útil ou final de semana

function classificaDia(){
    const s = document.getElementById("s");
    // retorna o index da opção selecionada
    const i = s.selectedIndex
    switch(i){
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
           alert("Dia útil");
            break;
        default:
            alert("Fim de semana");
    }
}
// Escreva um programa que determine o nome de um polígono a partir 
// do número de lados.

function numLados(){
    const n = document.getElementById("n").value;
    switch(n){
        case "3":
            alert("Triângulo");
            break;
        case "4":
            alert("Quadrilátero ");
            break;
        case "5":
            alert("Pentágono");
            break;
        case "6":
            alert("Hexágono");
            break;
        case "7":
            alert("Heptágono");
            break;
        case "8":
            alert("Octógono");
            break;
        default:
            alert("Polígono não identificado");
    }
}
// Faça um programa que verifique se um número é positivo, negativo 
// ou zero.

function numPosnegzero(){
    const n = parseFloat(document.getElementById("n").value);
    switch(true) {
        case n > 0:
            alert("O número é positivo.");
            break;
        case n < 0:
            alert("O número é negativo.");
            break;
        case n == 0:
            alert("O número é zero.");
            break;
        default:
            alert("Não é número");
    }
}
// Crie um programa que determine a estação do ano a partir do mês

function estacaoAno(){
    const m = document.getElementById("m");
    const s = m.selectedIndex
    switch(s){
        case 0:
        case 1:
        case 2:
            alert("Verão");
            break;
        case 3:
        case 4:
        case 5:
            alert("Outono");
            break;
        case 6:
        case 7:
        case 8:
            alert("Inverno");
            break;
        case 9:
        case 10:
        case 11:
            alert("Primavera");
            break;
    }
}