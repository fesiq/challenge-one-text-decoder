var inputTexto = document.querySelector("#entrada-texto");
var outputTexto = document.querySelector("#saida-texto");

function trocaDiamantePorOutput() {
    var telaOutputTexto = document.querySelector(".saida-estado-ativo");
    var telaDiamante = document.querySelector(".saida-estado-espera");
    var btnCopiar = document.querySelector(".btn-copiar");

    telaOutputTexto.setAttribute('style', '');
    telaDiamante.setAttribute('style', 'display: none');
    //re-corrigir a formatação do botão de copiar e do textarea da saída.
    btnCopiar.setAttribute('style', 'background-color: #0A3871;');
}

function cifrar(textoBase, boolEncripta) {

    var arrayCifra = [['e', 'enter'], ['i', 'imes'], ['a', 'ai'], ['o', 'ober'], ['u', 'ufat']];
    textoBase = textoBase.toLowerCase();
    
    if(boolEncripta){
        for(var i = 0; i < arrayCifra.length; i++) {
            if(textoBase.includes(arrayCifra[i][0])) {
                textoBase = textoBase.replaceAll(arrayCifra[i][0], arrayCifra[i][1]);
            }
        }
    } else {
        for(var i = 0; i < arrayCifra.length; i++) {
            if(textoBase.includes(arrayCifra[i][1])) {
                textoBase = textoBase.replaceAll(arrayCifra[i][1], arrayCifra[i][0]);
            }
        }
    }
    return textoBase;
}