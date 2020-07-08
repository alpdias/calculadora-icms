/*
Criado em 07/2020
@Autor: Paulo https://github.com/alpdias
*/

function carregarOrigem() { // funçao para mostrar no elemento 'input' o valor selecionado e definir o valor

    var origem = document.querySelector('#origem');
    var origemSelect = document.querySelector('#origemSelect'); //console.log(origemSelect[2].text); tag 'select' pode ser usada com index

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

    return aliquotaOrigem;

};

function calculoSimples() { // funçao para calcular o valor do ICMS simples

    var base = document.querySelector('#base').value; // valor do elemento 'input' com id '#base' (valor para base de calculo)

    valorOrigem = carregarOrigem(); // valor da aliquota de origem

};

function verificarCompleto() { // funçao para verificar se o elemento 'radio' no html esta preenchido e inserir html

    document.querySelector('#interestadual').checked = true; // verificar 'radio' checked

    document.querySelector('#completo').innerHTML = '<input type="text" name="destino" id="destino" placeholder="Estado Destino">\
        <select name="destinoSelect" id="destinoSelect" onclick="carregarDestino()">\
        <option value=""></option>\
        <option value="Acre">AC</option>\
        <option value="Alagoas">AL</option>\
        <option value="Amapá">AP</option>\
        <option value="Amazonas">AM</option>\
        <option value="Bahia">BA</option>\
        <option value="Ceará">CE</option>\
        <option value="Distrito Federal">DF</option>\
        <option value="Espírito Santo">ES</option>\
        <option value="Goiás">GO</option>\
        <option value="Maranhão">MA</option>\
        <option value="Mato Grosso">MT</option>\
        <option value="Mato Grosso do Sul">MS</option>\
        <option value="Minas Gerais">MG</option>\
        <option value="Pará">PA</option>\
        <option value="Paraíba">PB</option>\
        <option value="Paraná">PR</option>\
        <option value="Pernambuco">PE</option>\
        <option value="Piauí">PI</option>\
        <option value="Rio de Janeiro">RJ</option>\
        <option value="Rio Grande do Norte">RN</option>\
        <option value="Rio Grande do Sul">RS</option>\
        <option value="Rondônia">RO</option>\
        <option value="Roraima">RR</option>\
        <option value="Santa Catarina">SC</option>\
        <option value="São Paulo">SP</option>\
        <option value="Sergipe">SE</option>\
        <option value="Tocantins">TO</option>\
        </select>';

};

function verificarSimples() { // funçao para verificar se o elemento 'radio' no html esta preenchido e inserir um html novo

    document.querySelector('#simples').checked = true; // verificar 'radio' checked

    document.querySelector('#completo').innerHTML = ''; // inserir html 
    
};

function carregarDestino() { // funçao para mostrar no elemento 'input' o valor selecionado

    var destino = document.querySelector('#destino');
    var destinoSelect = document.querySelector('#destinoSelect'); //console.log(origemSelect[2].text); tag 'select' pode ser usada com index

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

    return aliquotaDestino;

};

function calculoCompleto() {

    var base = document.querySelector('#base').value; // valor do elemento 'input' com id '#base' (valor para base de calculo)

    valorOrigem = carregarOrigem(); // valor da aliquota de origem

    valorDestino = carregarDestino(); // valor da aliquota de destino

};
