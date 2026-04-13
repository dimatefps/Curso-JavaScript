var teste = 5

let pessoa = {
    nome: "Matheus",
    idade: 22, 
    falar: function() {
        console.log("Olá, Tudo bem?")
    },
    dizerNome: function() {
        console.log("O meu nome é " + this.nome)
    },
    aniversario: function() {
        this.idade += 1
    },
    saudacao: function() {
        "Sr. " + this.nome
        
    }

}

pessoa.dizerNome()

console.log(pessoa.idade)

pessoa.aniversario()

console.log(pessoa.idade)

console.log(pessoa.saudacao())