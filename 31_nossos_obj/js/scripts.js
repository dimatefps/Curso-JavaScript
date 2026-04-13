let pessoa = {
    nome: "Matheus",
    idade: 22, 
    falar: function() {
        console.log("Olá! Tudo bem?")
    },
    soma: function(a, b) {
        return a + b
    }
}

console.log(pessoa.falar())

console.log("Meu nome é " + pessoa.nome + "e tenho " + pessoa.idade + " anos.")

console.log(pessoa.soma(2, 4))