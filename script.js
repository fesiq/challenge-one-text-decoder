var telaOutputTexto = document.querySelector(".saida-estado-ativo");
var telaDiamante = document.querySelector(".saida-estado-espera");
var btnCopiar = document.querySelector(".btn-copiar");
var textareaSaidaTexto = document.querySelector("#saida-texto");

function trocaDiamantePorOutput() {
    telaOutputTexto.setAttribute('style', '');
    telaDiamante.setAttribute('style', 'display: none');
    //re-corrigir a formatação do botão de copiar e do textarea da saída.
        btnCopiar.setAttribute('style', 'background-color: #0A3871; color: white;');
        textareaSaidaTexto.setAttribute('style', 'background-color: #fff;');
}