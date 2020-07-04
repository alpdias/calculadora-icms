/*
Criado em 07/2020
@Autor: Paulo https://github.com/alpdias
*/

// variaveis para os elementos html
var origem = document.querySelector('#origem');
var origemSelect = document.querySelector('#origemSelect'); //console.log(origemSelect[2].text); tag 'select' pode ser usada com index
var destino = document.querySelector('#destino');
var destinoSelect = document.querySelector('#destinoSelect');
var origemText = origemSelect.options[origemSelect.selectedIndex].text; // opbter o valor dentro do elemento 'option'no html
var destinoText = destinoSelect.options[destinoSelect.selectedIndex].text;

function carregarOrigem() { // funçao para mostrar no elemento 'input' o valor selecionado

    var carregar = origemSelect.value;
    origem.value = carregar;

};

function carregarDestino() { // funçao para mostrar no elemento 'input' o valor selecionado

    var carregar = destinoSelect.value;
    destino.value = carregar;

};

