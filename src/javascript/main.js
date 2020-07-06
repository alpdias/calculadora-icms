/*
Criado em 07/2020
@Autor: Paulo https://github.com/alpdias
*/

// variaveis para os elementos html
var origem = document.querySelector('#origem');
var origemSelect = document.querySelector('#origemSelect'); //console.log(origemSelect[2].text); tag 'select' pode ser usada com index
var destino = document.querySelector('#destino');
var destinoSelect = document.querySelector('#destinoSelect');

function carregarOrigem() { // funçao para mostrar no elemento 'input' o valor selecionado

    var carregar = origemSelect.value;
    origem.value = carregar;

    var aliquotaOrigem = 0;

    var origemText = origemSelect.options[origemSelect.selectedIndex].text; // obter o valor dentro do elemento 'option'no html

    if (origemText === 'AC') {
        aliquotaOrigem = 17;
    } else if (origemText === 'AL') {
        aliquotaOrigem = 17;
    } else if (origemText === 'AP') {
        aliquotaOrigem = 18;
    } else if (origemText === 'AM') {
        aliquotaOrigem = 18;
    } else if (origemText === 'BA') {
        aliquotaOrigem = 18;
    } else if (origemText === 'CE') {
        aliquotaOrigem = 18;
    } else if (origemText === 'DF') {
        aliquotaOrigem = 18;
    } else if (origemText === 'ES') {
        aliquotaOrigem = 17;
    } else if (origemText === 'GO') {
        aliquotaOrigem = 17;
    } else if (origemText === 'MA') {
        aliquotaOrigem = 18;
    } else if (origemText === 'MT') {
        aliquotaOrigem = 17;
    }else if (origemText === 'MS') {
        aliquotaOrigem = 17;
    } else if (origemText === 'MG') {
        aliquotaOrigem = 18;
    } else if (origemText === 'PA') {
        aliquotaOrigem = 17;
    } else if (origemText === 'PB') {
        aliquotaOrigem = 18;
    } else if (origemText === 'PR') {
        aliquotaOrigem = 18;
    } else if (origemText === 'PE') {
        aliquotaOrigem = 18;
    } else if (origemText === 'PI') {
        aliquotaOrigem = 18;
    } else if (origemText === 'RJ') {
        aliquotaOrigem = 18;
    } else if (origemText === 'RN') {
        aliquotaOrigem = 18;
    } else if (origemText === 'RS') {
        aliquotaOrigem = 18;
    } else if (origemText === 'RO') {
        aliquotaOrigem = 17.5;
    } else if (origemText === 'RR') {
        aliquotaOrigem = 17;
    } else if (origemText === 'SC') {
        aliquotaOrigem = 17;
    } else if (origemText === 'SP') {
        aliquotaOrigem = 18;
    } else if (origemText === 'SE') {
        aliquotaOrigem = 18;
    } else if (origemText === 'TO') {
        aliquotaOrigem = 18;
    } else {
        aliquotaOrigem = 0;
    };

};
 
function carregarDestino() { // funçao para mostrar no elemento 'input' o valor selecionado

    var carregar = destinoSelect.value;
    destino.value = carregar;

    var aliquotaDestino = 0;

    var destinoText = destinoSelect.options[destinoSelect.selectedIndex].text; // obter o valor dentro do elemento 'option'no html

    if (destinoText === 'AC') {
        aliquotaDestino = 17;
    } else if (destinoText === 'AL') {
        aliquotaDestino = 17;
    } else if (destinoText === 'AP') {
        aliquotaDestino = 18;
    } else if (destinoText === 'AM') {
        aliquotaDestino = 18;
    } else if (destinoText === 'BA') {
        aliquotaDestino = 18;
    } else if (destinoText === 'CE') {
        aliquotaDestino = 18;
    } else if (destinoText === 'DF') {
        aliquotaDestino = 18;
    } else if (destinoText === 'ES') {
        aliquotaDestino = 17;
    } else if (destinoText === 'GO') {
        aliquotaDestino = 17;
    } else if (destinoText === 'MA') {
        aliquotaDestino = 18;
    } else if (destinoText === 'MT') {
        aliquotaDestino = 17;
    }else if (destinoText === 'MS') {
        aliquotaDestino = 17;
    } else if (destinoText === 'MG') {
        aliquotaDestino = 18;
    } else if (destinoText === 'PA') {
        aliquotaDestino = 17;
    } else if (destinoText === 'PB') {
        aliquotaDestino = 18;
    } else if (destinoText === 'PR') {
        aliquotaDestino = 18;
    } else if (destinoText === 'PE') {
        aliquotaDestino = 18;
    } else if (destinoText === 'PI') {
        aliquotaDestino = 18;
    } else if (destinoText === 'RJ') {
        aliquotaDestino = 18;
    } else if (destinoText === 'RN') {
        aliquotaDestino = 18;
    } else if (destinoText === 'RS') {
        aliquotaDestino = 18;
    } else if (destinoText === 'RO') {
        aliquotaDestino = 17.5;
    } else if (destinoText === 'RR') {
        aliquotaDestino = 17;
    } else if (destinoText === 'SC') {
        aliquotaDestino = 17;
    } else if (destinoText === 'SP') { 
        aliquotaDestino = 18;
    } else if (destinoText === 'SE') {
        aliquotaDestino = 18;
    } else if (destinoText === 'TO') {
        aliquotaDestino = 18;
    } else {
        aliquotaDestino = 0;
    };

};
