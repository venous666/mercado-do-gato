
let produtos = document.querySelector( '#produtos' )
let botao = document.querySelector( '#comprar')

botao.addEventListener( 'click', comprar)
function comprar (){
    compra = "produto comprado\n"
    if (produtos.value == "whiskas"){
        compra += "produto: " + produtos.value + " , valor: R$ 15,00"
    }
   else if (produtos.value == "friskies"){
        compra += "produto: " + produtos.value + " , valor: R$ 13,00"
    }
  else  if (produtos.value == "sopa salgada"){
        compra += "produto: " + produtos.value + " , valor: R$ 11,00"
    }
   else  if (produtos.value == "sopinha boa"){
        compra += "produto: " + produtos.value + " , valor: R$ 20,00"
    }
    alert (compra)    }
