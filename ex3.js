const codigoProduto = 4
let nomeProduto
switch (codigoProduto) {
    case 1:
        nomeProduto = "Hambúrguer"
        break
    case 2:
        nomeProduto = "Batata Frita"
        break
    case 3:
        nomeProduto = "Refrigerante"  
        break  
    case 4:
        nomeProduto = "Milk-Shake"
        break
    default:
        nomeProduto =  "Produto não encontrado"         
}
console.log(nomeProduto)