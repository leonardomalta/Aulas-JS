

/* sem estrutura de repetição*/
const notas = [];

notas.push(9);
notas.push(7);
notas.push(8);


/*const soma = notas[0] + notas[1] + notas[2] + notas[3] + notas[4];
const media = soma / notas.length;

console.log('Quantidade de provas = ' + notas.length);
console.log('A média do aluno é ' + media);

/* com estrutura de repetição*/

/*for (let i = 0; i < notas.length; i++) {
    console.log(i);
}

const nome = 'Leonardo Ninomiya Malta' /* contagem da quantidade das letras do nome
for (let ii = 0; ii < nome.length; ii++) {
    console.log(nome[ii]);
    
}*/

let soma = 0;

for (let i = 0; i < notas.length; i++) {
    
    const nota = notas[i];
    soma = soma + nota;
   
}

const media = soma / notas.length;
console.log(media);

const numero = 5;
for (let i = 1; i <= 10; i++) {

       console.log(i * numero);
    
}