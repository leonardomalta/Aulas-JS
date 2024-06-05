class Pessoa{
    nome;
    peso;
    altura;

    constructor (nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularImc () {
        return this.peso / (this.altura * this.altura);
        return this.nome;
    }

    classificaImc () {
        const imc = this.calcularImc ();
        if (imc < 18.5) {
            return ('Abaixo do Peso');
        } else if (imc >= 18.5 && imc < 25) {
            return ('Peso Normal');
        } else if (imc >= 25 && imc < 30) {
            return ('Peso Normal');
        }  else if (imc >= 30 && imc < 40) {
            return ('Obeso');
        } else {
            return ('Obesidade Morbida');
        }
    }
}

const leonardo = new Pessoa ('Leonardo', 115, 1.74)
console.log (`Meu nome é ${this.nome} e meu IMC é ${leonardo.calcularImc()} e eu estou ${leonardo.classificaImc()}`);
