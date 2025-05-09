class produto{
    constructor(nome,preco,quantidade){
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
    }
    mostrarDados(){
        console.log(`Produto ${this.nome}, preco R$ ${this.preco}, quantidade; ${this.quantidade}`)

    }
    vender(qtd){
        if(qtd <= this.quantidade){
            console.log(`Vend realiada, Quantidade atual ${this.quantidade}`)
        
        } else{
            console.log("Estoque insuficiente para venda");
        }
    }
    repor(qtd){
        this.quantidade += qtd;
        console.log(`Reposição Feita. quantidade atual: ${this.quantidade}`);

    }
}
let produto = new Produto("Lapis",2.5,100);
//produto.mostrarDados();
//proutor.vender(15);
produto.repor(20);