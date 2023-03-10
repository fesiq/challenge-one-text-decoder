var inputTexto = document.querySelector("#entrada-texto");
var outputTexto = document.querySelector("#saida-texto");

function trocaDiamantePorOutput() {
    let telaOutputTexto = document.querySelector(".saida-estado-ativo");
    let telaDiamante = document.querySelector(".saida-estado-espera");
    let btnCopiar = document.querySelector(".btn-copiar");

    telaOutputTexto.setAttribute('style', '');
    telaDiamante.setAttribute('style', 'display: none');
    //re-corrigir a formatação do botão de copiar e do textarea da saída.
    btnCopiar.setAttribute('style', 'background-color: #0A3871;');
}

function cifrar(textoBase, boolEncripta) {

    let arrayCifra = [['e', 'enter'], ['i', 'imes'], ['a', 'ai'], ['o', 'ober'], ['u', 'ufat']];
    textoBase = textoBase.toLowerCase();
    
    if(boolEncripta){
        for(let i = 0; i < arrayCifra.length; i++) {
            if(textoBase.includes(arrayCifra[i][0])) {
                textoBase = textoBase.replaceAll(arrayCifra[i][0], arrayCifra[i][1]);
            }
        }
    } else {
        for(let i = 0; i < arrayCifra.length; i++) {
            if(textoBase.includes(arrayCifra[i][1])) {
                textoBase = textoBase.replaceAll(arrayCifra[i][1], arrayCifra[i][0]);
            }
        }
    }
    return textoBase;
}

function encriptar() {
    outputTexto.value = cifrar(inputTexto.value, true);
    trocaDiamantePorOutput();
    inputTexto.value = "";
}

function desencriptar() {
    outputTexto.value = cifrar(inputTexto.value, false);
    trocaDiamantePorOutput();
    inputTexto.value = "";
}

function copiar() {
    let textoCopiado = outputTexto;
    textoCopiado.select();
    document.execCommand("copy");
}