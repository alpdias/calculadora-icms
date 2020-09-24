/*
Criado em 07/2020
@Autor: Paulo https://github.com/alpdias
*/

function carregarOrigem() { // funçao para mostrar no elemento 'input' o valor selecionado e definir o valor

    var carregar = origemSelect.value;
    origem.value = carregar;

    var aliquotaOrigem = 0;

    var origemText = origemSelect.options[origemSelect.selectedIndex].text; // obter o valor dentro do elemento 'option' no html

    if (origemText === 'AC') {
        aliquotaOrigem = 17;
    } else if (origemText === 'AL') {
        aliquotaOrigem = 18;
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

function calculoSimples() { // funçao para calcular o valor do ICMS

    var origemText = origemSelect.options[origemSelect.selectedIndex].text; // obter o valor dentro do elemento 'option'no html

    var base = document.querySelector('#base').value; // valor do elemento 'input' com id '#base' (valor para base de calculo)

    var valorOrigem = carregarOrigem(); // valor da aliquota de origem

    var calculo = parseInt(base) * (parseInt(valorOrigem) / 100); // calculo do valor devido do ICMS simples

    if (base === '' && origemText === 'UF') {

        window.alert('Preencha todos os campos!');

    } else if (base === '') {

        window.alert('Preencha o "Valor do Produto"!');

    } else if (origemText === 'UF') {

        window.alert('Selecione uma UF!');

    } else {

        document.querySelector('#resultado').innerHTML = `\
            <div id="tabelaResultadoSimples" class="tabelas">\
                <table>\
                    <tr>\
                        <td>Valor do Produto:</td>\
                        <td>R$ ${base}</td>\
                    </tr>\
                    <tr>\
                        <td>Alíquota ${origemText}:</td>\
                        <td>${valorOrigem}%</td>\
                    </tr>\
                    <tr>\
                        <td>Valor do ICMS:</td>\
                        <td>R$ ${calculo}</td>\
                    </tr>\
                </table>\
                <button name="novo" id="novo" onclick="simples()">Recalcular</button>\
            </div>\
            <div id="memoriaSimples" class="memoria">\
                <h2>Memória de Cálculo:</h2>\
                <p>Valor do ICMS = ${base} x ${valorOrigem}%</p>\
                <p>Valor do ICMS = ${calculo}</p>\
            </div>`; // elemento 'table' e 'p' do html com os resultados

    };
    
};

function complemento() { // funçao para verificar se o elemento 'radio' no html esta preenchido e inserir o novo html

    document.querySelector('#interestadual').checked = true; // verificar 'radio' checked

    document.querySelector('#app').innerHTML = '\
        <div class="corpo-entrada">\
            <div class="container-entrada"><span class="titulos-entrada">R$<input type="number" name="base" id="base" placeholder="Valor do Produto" autocomplete="off" inputmode="numeric"/></span></div></br>\
            <div class="container-entrada"><span class="titulos-entrada">R$<input type="number" name="ipi" id="ipi" placeholder="Valor do IPI" autocomplete="off" inputmode="numeric"/></span></div></br>\
            <div class="container-entrada"><span class="titulos-entrada">R$<input type="number" name="frete" id="frete" placeholder="Valor do Frete" autocomplete="off" inputmode="numeric"/></span></div></br>\
            <div class="container-entrada"><span class="titulos-entrada">R$<input type="number" name="seguro" id="seguro" placeholder="Valor do Seguro" autocomplete="off" inputmode="numeric"/></span></div></br>\
            <div class="container-entrada"><span class="titulos-entrada">R$<input type="number" name="despesa" id="despesa" placeholder="Outras Despesas" autocomplete="off" inputmode="numeric"/></span></div></br>\
            <div class="container-entrada"><span class="titulos-entrada">R$<input type="number" name="desconto" id="desconto" placeholder="Descontos" autocomplete="off" inputmode="numeric"/></span></div></br>\
            <div class="container-entrada"><span class="titulos-entrada"><strong>%</strong><input type="number" name="mva" id="mva" placeholder="MVA %" autocomplete="off" inputmode="numeric"/></span></div></br>\
            <div class="container-entrada"><span class="titulos-entrada">UF<input type="text" name="origem" id="origem" placeholder="Estado Origem" autocomplete="off"/>\
            <select name="origemSelect" id="origemSelect" onclick="carregarOrigem()">\
                <option value="">UF</option>\
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
            </select></span></div></br>\
            <div class="container-entrada"><span class="titulos-entrada">UF<input type="text" name="destino" id="destino" placeholder="Estado Destino" autocomplete="off"/>\
            <select name="destinoSelect" id="destinoSelect" onclick="carregarDestino()">\
                <option value="">UF</option>\
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
            </select></span></div></br>\
            <input type="radio" name="Inter" id="simples" onclick="simples()"/><label for="simples"><span class="opcao">&nbsp;ICMS</span></label>\
            <input type="radio" name="Inter" id="interestadual" checked onclick="complemento()"/><label for="interestadual"><span class="opcao">&nbsp;ICMS-ST</span></label></br>\
            <button name="calcular" id="calcular" onclick="calculoComplemento()">Calcular</button>\
        </div>'; // inserir html 
    
    document.querySelector('#resultado').innerHTML = '';

};

function simples() { // funçao para verificar se o elemento 'radio' no html esta preenchido e inserir um novo html

    if (document.querySelector('#simples').checked = true) { // verificar 'radio' checked

        document.querySelector('#app').innerHTML = '\
        <div class="corpo-entrada">\
            <div class="container-entrada"><span class="titulos-entrada">R$<input type="number" name="base" id="base" placeholder="Valor do Produto" autocomplete="off" inputmode="numeric"/></span></div></br>\
            <div class="container-entrada"><span class="titulos-entrada">UF<input type="text" name="origem" id="origem" placeholder="Estado" autocomplete="off"/>\
            <select name="origemSelect" id="origemSelect" onclick="carregarOrigem()">\
                <option value="">UF</option>\
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
            </select></span></div></br>\
            <input type="radio" name="Inter" id="simples" checked onclick="simples()"/><label for="simples"><span class="opcao">&nbsp;ICMS</span></label>\
            <input type="radio" name="Inter" id="interestadual" onclick="complemento()"/><label for="interestadual"><span class="opcao">&nbsp;ICMS-ST</span></label></br>\
            <button name="calcular" id="calcular" onclick="calculoSimples()">Calcular</button>\
        </div>'; // inserir html 
        
        document.querySelector('#resultado').innerHTML = '';

    } else if (document.querySelector('#interestadual').checked = true) {

        document.querySelector('#app').innerHTML = '\
        <div class="corpo-entrada">\
            <div class="container-entrada"><span class="titulos-entrada">R$<input type="number" name="base" id="base" placeholder="Valor do Produto" autocomplete="off" inputmode="numeric"/></span></div></br>\
            <div class="container-entrada"><span class="titulos-entrada">UF<input type="text" name="origem" id="origem" placeholder="Estado" autocomplete="off"/>\
            <select name="origemSelect" id="origemSelect" onclick="carregarOrigem()">\
                <option value="">UF</option>\
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
            </select></span></div></br>\
            <input type="radio" name="Inter" id="simples" checked onclick="simples()"/><label for="simples"><span class="opcao">&nbsp;ICMS</span></label>\
            <input type="radio" name="Inter" id="interestadual" onclick="complemento()"/><label for="interestadual"><span class="opcao">&nbsp;ICMS-ST</span></label></br>\
            <button name="calcular" id="calcular" onclick="calculoSimples()">Calcular</button>\
        </div>'; // inserir html 

        document.querySelector('#resultado').innerHTML = '';
            
    };

};

function carregarDestino() { // funçao para mostrar no elemento 'input' o valor selecionado

    var destino = document.querySelector('#destino');
    var destinoSelect = document.querySelector('#destinoSelect'); //console.log(origemSelect[2].text); tag 'select' pode ser usada com index

    var carregar = destinoSelect.value;
    destino.value = carregar;

    var aliquotaDestino = 0;

    var destinoText = destinoSelect.options[destinoSelect.selectedIndex].text; // obter o valor dentro do elemento 'option' no html

    if (destinoText === 'AC') {
        aliquotaDestino = 17;
    } else if (destinoText === 'AL') {
        aliquotaDestino = 18;
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

function interestadual() {

    var origemSelect = document.querySelector('#origemSelect'); //console.log(origemSelect[2].text); tag 'select' pode ser usada com index
    var origemText = origemSelect.options[origemSelect.selectedIndex].text; // obter o valor dentro do elemento 'option' no html

    var destinoSelect = document.querySelector('#destinoSelect'); //console.log(origemSelect[2].text); tag 'select' pode ser usada com index
    var destinoText = destinoSelect.options[destinoSelect.selectedIndex].text; // obter o valor dentro do elemento 'option' no html

    var aliquotaInter = 0;
    
    if (origemText === 'AC' && destinoText === 'AC') {
        aliquotaInter =  17;
    } else if (origemText === 'AC' && destinoText === 'AL') {
        aliquotaInter = 12; 
    } else if (origemText === 'AC' && destinoText === 'AM') {
        aliquotaInter = 12; 
    } else if (origemText === 'AC' && destinoText === 'AP') {
        aliquotaInter = 12; 
    } else if (origemText === 'AC' && destinoText === 'BA') {
        aliquotaInter = 12; 
    } else if (origemText === 'AC' && destinoText === 'CE') {
        aliquotaInter = 12; 
    } else if (origemText === 'AC' && destinoText === 'DF') {
        aliquotaInter = 12; 
    } else if (origemText === 'AC' && destinoText === 'ES') {
        aliquotaInter = 12; 
    } else if (origemText === 'AC' && destinoText === 'GO') {
        aliquotaInter = 12; 
    } else if (origemText === 'AC' && destinoText === 'MA') {
        aliquotaInter = 12; 
    } else if (origemText === 'AC' && destinoText === 'MT') {
        aliquotaInter = 12; 
    } else if (origemText === 'AC' && destinoText === 'MS') {
        aliquotaInter = 12; 
    } else if (origemText === 'AC' && destinoText === 'MG') {
        aliquotaInter = 12; 
    } else if (origemText === 'AC' && destinoText === 'PA') {
        aliquotaInter = 12; 
    } else if (origemText === 'AC' && destinoText === 'PB') {
        aliquotaInter = 12; 
    } else if (origemText === 'AC' && destinoText === 'PR') {
        aliquotaInter = 12; 
    } else if (origemText === 'AC' && destinoText === 'PE') {
        aliquotaInter = 12; 
    } else if (origemText === 'AC' && destinoText === 'PI') {
        aliquotaInter = 12; 
    } else if (origemText === 'AC' && destinoText === 'RN') {
        aliquotaInter = 12; 
    } else if (origemText === 'AC' && destinoText === 'RS') {
        aliquotaInter = 12; 
    } else if (origemText === 'AC' && destinoText === 'RJ') {
        aliquotaInter = 12; 
    } else if (origemText === 'AC' && destinoText === 'RO') {
        aliquotaInter = 12; 
    } else if (origemText === 'AC' && destinoText === 'RR') {
        aliquotaInter = 12; 
    } else if (origemText === 'AC' && destinoText === 'SC') {
        aliquotaInter = 12; 
    } else if (origemText === 'AC' && destinoText === 'SP') {
        aliquotaInter = 12; 
    } else if (origemText === 'AC' && destinoText === 'SE') {
        aliquotaInter = 12; 
    } else if (origemText === 'AC' && destinoText === 'TO') {
        aliquotaInter = 12; 
    } else if (origemText === 'AL' && destinoText === 'AC') {
        aliquotaInter = 12; 
    } else if (origemText === 'AL' && destinoText === 'AL') {
        aliquotaInter = 18; 
    } else if (origemText === 'AL' && destinoText === 'AM') {
        aliquotaInter = 12; 
    } else if (origemText === 'AL' && destinoText === 'AP') {
        aliquotaInter = 12; 
    } else if (origemText === 'AL' && destinoText === 'BA') {
        aliquotaInter = 12; 
    } else if (origemText === 'AL' && destinoText === 'CE') {
        aliquotaInter = 12; 
    } else if (origemText === 'AL' && destinoText === 'DF') {
        aliquotaInter = 12; 
    } else if (origemText === 'AL' && destinoText === 'ES') {
        aliquotaInter = 12; 
    } else if (origemText === 'AL' && destinoText === 'GO') {
        aliquotaInter = 12; 
    } else if (origemText === 'AL' && destinoText === 'MA') {
        aliquotaInter = 12; 
    } else if (origemText === 'AL' && destinoText === 'MT') {
        aliquotaInter = 12; 
    } else if (origemText === 'AL' && destinoText === 'MS') {
        aliquotaInter = 12; 
    } else if (origemText === 'AL' && destinoText === 'MG') {
        aliquotaInter = 12; 
    } else if (origemText === 'AL' && destinoText === 'PA') {
        aliquotaInter = 12; 
    } else if (origemText === 'AL' && destinoText === 'PB') {
        aliquotaInter = 12; 
    } else if (origemText === 'AL' && destinoText === 'PR') {
        aliquotaInter = 12; 
    } else if (origemText === 'AL' && destinoText === 'PE') {
        aliquotaInter = 12; 
    } else if (origemText === 'AL' && destinoText === 'PI') {
        aliquotaInter = 12; 
    } else if (origemText === 'AL' && destinoText === 'RN') {
        aliquotaInter = 12; 
    } else if (origemText === 'AL' && destinoText === 'RS') {
        aliquotaInter = 12; 
    } else if (origemText === 'AL' && destinoText === 'RJ') {
        aliquotaInter = 12; 
    } else if (origemText === 'AL' && destinoText === 'RO') {
        aliquotaInter = 12; 
    } else if (origemText === 'AL' && destinoText === 'RR') {
        aliquotaInter = 12; 
    } else if (origemText === 'AL' && destinoText === 'SC') {
        aliquotaInter = 12; 
    } else if (origemText === 'AL' && destinoText === 'SP') {
        aliquotaInter = 12; 
    } else if (origemText === 'AL' && destinoText === 'SE') {
        aliquotaInter = 12; 
    } else if (origemText === 'AL' && destinoText === 'TO') {
        aliquotaInter = 12; 
    } else if (origemText === 'AM' && destinoText === 'AC') {
        aliquotaInter = 12; 
    } else if (origemText === 'AM' && destinoText === 'AL') {
        aliquotaInter = 12; 
    } else if (origemText === 'AM' && destinoText === 'AM') {
        aliquotaInter = 18; 
    } else if (origemText === 'AM' && destinoText === 'AP') {
        aliquotaInter = 12; 
    } else if (origemText === 'AM' && destinoText === 'BA') {
        aliquotaInter = 12; 
    } else if (origemText === 'AM' && destinoText === 'CE') {
        aliquotaInter = 12; 
    } else if (origemText === 'AM' && destinoText === 'DF') {
        aliquotaInter = 12; 
    } else if (origemText === 'AM' && destinoText === 'ES') {
        aliquotaInter = 12; 
    } else if (origemText === 'AM' && destinoText === 'GO') {
        aliquotaInter = 12; 
    } else if (origemText === 'AM' && destinoText === 'MA') {
        aliquotaInter = 12; 
    } else if (origemText === 'AM' && destinoText === 'MT') {
        aliquotaInter = 12; 
    } else if (origemText === 'AM' && destinoText === 'MS') {
        aliquotaInter = 12; 
    } else if (origemText === 'AM' && destinoText === 'MG') {
        aliquotaInter = 12; 
    } else if (origemText === 'AM' && destinoText === 'PA') {
        aliquotaInter = 12; 
    } else if (origemText === 'AM' && destinoText === 'PB') {
        aliquotaInter = 12; 
    } else if (origemText === 'AM' && destinoText === 'PR') {
        aliquotaInter = 12; 
    } else if (origemText === 'AM' && destinoText === 'PE') {
        aliquotaInter = 12; 
    } else if (origemText === 'AM' && destinoText === 'PI') {
        aliquotaInter = 12; 
    } else if (origemText === 'AM' && destinoText === 'RN') {
        aliquotaInter = 12; 
    } else if (origemText === 'AM' && destinoText === 'RS') {
        aliquotaInter = 12; 
    } else if (origemText === 'AM' && destinoText === 'RJ') {
        aliquotaInter = 12; 
    } else if (origemText === 'AM' && destinoText === 'RO') {
        aliquotaInter = 12; 
    } else if (origemText === 'AM' && destinoText === 'RR') {
        aliquotaInter = 12; 
    } else if (origemText === 'AM' && destinoText === 'SC') {
        aliquotaInter = 12; 
    } else if (origemText === 'AM' && destinoText === 'SP') {
        aliquotaInter = 12; 
    } else if (origemText === 'AM' && destinoText === 'SE') {
        aliquotaInter = 12; 
    } else if (origemText === 'AM' && destinoText === 'TO') {
        aliquotaInter = 12; 
    } else if (origemText === 'AP' && destinoText === 'AC') {
        aliquotaInter = 12; 
    } else if (origemText === 'AP' && destinoText === 'AL') {
        aliquotaInter = 12; 
    } else if (origemText === 'AP' && destinoText === 'AM') {
        aliquotaInter = 12; 
    } else if (origemText === 'AP' && destinoText === 'AP') {
        aliquotaInter = 18; 
    } else if (origemText === 'AP' && destinoText === 'BA') {
        aliquotaInter = 12; 
    } else if (origemText === 'AP' && destinoText === 'CE') {
        aliquotaInter = 12; 
    } else if (origemText === 'AP' && destinoText === 'DF') {
        aliquotaInter = 12; 
    } else if (origemText === 'AP' && destinoText === 'ES') {
        aliquotaInter = 12; 
    } else if (origemText === 'AP' && destinoText === 'GO') {
        aliquotaInter = 12; 
    } else if (origemText === 'AP' && destinoText === 'MA') {
        aliquotaInter = 12; 
    } else if (origemText === 'AP' && destinoText === 'MT') {
        aliquotaInter = 12; 
    } else if (origemText === 'AP' && destinoText === 'MS') {
        aliquotaInter = 12; 
    } else if (origemText === 'AP' && destinoText === 'MG') {
        aliquotaInter = 12; 
    } else if (origemText === 'AP' && destinoText === 'PA') {
        aliquotaInter = 12; 
    } else if (origemText === 'AP' && destinoText === 'PB') {
        aliquotaInter = 12; 
    } else if (origemText === 'AP' && destinoText === 'PR') {
        aliquotaInter = 12; 
    } else if (origemText === 'AP' && destinoText === 'PE') {
        aliquotaInter = 12; 
    } else if (origemText === 'AP' && destinoText === 'PI') {
        aliquotaInter = 12; 
    } else if (origemText === 'AP' && destinoText === 'RN') {
        aliquotaInter = 12; 
    } else if (origemText === 'AP' && destinoText === 'RS') {
        aliquotaInter = 12; 
    } else if (origemText === 'AP' && destinoText === 'RJ') {
        aliquotaInter = 12; 
    } else if (origemText === 'AP' && destinoText === 'RO') {
        aliquotaInter = 12; 
    } else if (origemText === 'AP' && destinoText === 'RR') {
        aliquotaInter = 12; 
    } else if (origemText === 'AP' && destinoText === 'SC') {
        aliquotaInter = 12; 
    } else if (origemText === 'AP' && destinoText === 'SP') {
        aliquotaInter = 12; 
    } else if (origemText === 'AP' && destinoText === 'SE') {
        aliquotaInter = 12; 
    } else if (origemText === 'AP' && destinoText === 'TO') {
        aliquotaInter = 12; 
    } else if (origemText === 'BA' && destinoText === 'AC') {
        aliquotaInter = 12; 
    } else if (origemText === 'BA' && destinoText === 'AL') {
        aliquotaInter = 12; 
    } else if (origemText === 'BA' && destinoText === 'AM') {
        aliquotaInter = 12; 
    } else if (origemText === 'BA' && destinoText === 'AP') {
        aliquotaInter = 12; 
    } else if (origemText === 'BA' && destinoText === 'BA') {
        aliquotaInter = 18; 
    } else if (origemText === 'BA' && destinoText === 'CE') {
        aliquotaInter = 12; 
    } else if (origemText === 'BA' && destinoText === 'DF') {
        aliquotaInter = 12; 
    } else if (origemText === 'BA' && destinoText === 'ES') {
        aliquotaInter = 12; 
    } else if (origemText === 'BA' && destinoText === 'GO') {
        aliquotaInter = 12; 
    } else if (origemText === 'BA' && destinoText === 'MA') {
        aliquotaInter = 12; 
    } else if (origemText === 'BA' && destinoText === 'MT') {
        aliquotaInter = 12; 
    } else if (origemText === 'BA' && destinoText === 'MS') {
        aliquotaInter = 12; 
    } else if (origemText === 'BA' && destinoText === 'MG') {
        aliquotaInter = 12; 
    } else if (origemText === 'BA' && destinoText === 'PA') {
        aliquotaInter = 12; 
    } else if (origemText === 'BA' && destinoText === 'PB') {
        aliquotaInter = 12; 
    } else if (origemText === 'BA' && destinoText === 'PR') {
        aliquotaInter = 12; 
    } else if (origemText === 'BA' && destinoText === 'PE') {
        aliquotaInter = 12; 
    } else if (origemText === 'BA' && destinoText === 'PI') {
        aliquotaInter = 12; 
    } else if (origemText === 'BA' && destinoText === 'RN') {
        aliquotaInter = 12; 
    } else if (origemText === 'BA' && destinoText === 'RS') {
        aliquotaInter = 12; 
    } else if (origemText === 'BA' && destinoText === 'RJ') {
        aliquotaInter = 12; 
    } else if (origemText === 'BA' && destinoText === 'RO') {
        aliquotaInter = 12; 
    } else if (origemText === 'BA' && destinoText === 'RR') {
        aliquotaInter = 12; 
    } else if (origemText === 'BA' && destinoText === 'SC') {
        aliquotaInter = 12; 
    } else if (origemText === 'BA' && destinoText === 'SP') {
        aliquotaInter = 12; 
    } else if (origemText === 'BA' && destinoText === 'SE') {
        aliquotaInter = 12; 
    } else if (origemText === 'BA' && destinoText === 'TO') {
        aliquotaInter = 12; 
    } else if (origemText === 'CE' && destinoText === 'AC') {
        aliquotaInter = 12; 
    } else if (origemText === 'CE' && destinoText === 'AL') {
        aliquotaInter = 12; 
    } else if (origemText === 'CE' && destinoText === 'AM') {
        aliquotaInter = 12; 
    } else if (origemText === 'CE' && destinoText === 'AP') {
        aliquotaInter = 12; 
    } else if (origemText === 'CE' && destinoText === 'BA') {
        aliquotaInter = 12; 
    } else if (origemText === 'CE' && destinoText === 'CE') {
        aliquotaInter = 18; 
    } else if (origemText === 'CE' && destinoText === 'DF') {
        aliquotaInter = 12; 
    } else if (origemText === 'CE' && destinoText === 'ES') {
        aliquotaInter = 12; 
    } else if (origemText === 'CE' && destinoText === 'GO') {
        aliquotaInter = 12; 
    } else if (origemText === 'CE' && destinoText === 'MA') {
        aliquotaInter = 12; 
    } else if (origemText === 'CE' && destinoText === 'MT') {
        aliquotaInter = 12; 
    } else if (origemText === 'CE' && destinoText === 'MS') {
        aliquotaInter = 12; 
    } else if (origemText === 'CE' && destinoText === 'MG') {
        aliquotaInter = 12; 
    } else if (origemText === 'CE' && destinoText === 'PA') {
        aliquotaInter = 12; 
    } else if (origemText === 'CE' && destinoText === 'PB') {
        aliquotaInter = 12; 
    } else if (origemText === 'CE' && destinoText === 'PR') {
        aliquotaInter = 12; 
    } else if (origemText === 'CE' && destinoText === 'PE') {
        aliquotaInter = 12; 
    } else if (origemText === 'CE' && destinoText === 'PI') {
        aliquotaInter = 12; 
    } else if (origemText === 'CE' && destinoText === 'RN') {
        aliquotaInter = 12; 
    } else if (origemText === 'CE' && destinoText === 'RS') {
        aliquotaInter = 12; 
    } else if (origemText === 'CE' && destinoText === 'RJ') {
        aliquotaInter = 12; 
    } else if (origemText === 'CE' && destinoText === 'RO') {
        aliquotaInter = 12; 
    } else if (origemText === 'CE' && destinoText === 'RR') {
        aliquotaInter = 12; 
    } else if (origemText === 'CE' && destinoText === 'SC') {
        aliquotaInter = 12; 
    } else if (origemText === 'CE' && destinoText === 'SP') {
        aliquotaInter = 12; 
    } else if (origemText === 'CE' && destinoText === 'SE') {
        aliquotaInter = 12; 
    } else if (origemText === 'CE' && destinoText === 'TO') {
        aliquotaInter = 12; 
    } else if (origemText === 'DF' && destinoText === 'AC') {
        aliquotaInter = 12; 
    } else if (origemText === 'DF' && destinoText === 'AL') {
        aliquotaInter = 12; 
    } else if (origemText === 'DF' && destinoText === 'AM') {
        aliquotaInter = 12; 
    } else if (origemText === 'DF' && destinoText === 'AP') {
        aliquotaInter = 12; 
    } else if (origemText === 'DF' && destinoText === 'BA') {
        aliquotaInter = 12; 
    } else if (origemText === 'DF' && destinoText === 'CE') {
        aliquotaInter = 12; 
    } else if (origemText === 'DF' && destinoText === 'DF') {
        aliquotaInter = 18; 
    } else if (origemText === 'DF' && destinoText === 'ES') {
        aliquotaInter = 12; 
    } else if (origemText === 'DF' && destinoText === 'GO') {
        aliquotaInter = 12; 
    } else if (origemText === 'DF' && destinoText === 'MA') {
        aliquotaInter = 12; 
    } else if (origemText === 'DF' && destinoText === 'MT') {
        aliquotaInter = 12; 
    } else if (origemText === 'DF' && destinoText === 'MS') {
        aliquotaInter = 12; 
    } else if (origemText === 'DF' && destinoText === 'MG') {
        aliquotaInter = 12; 
    } else if (origemText === 'DF' && destinoText === 'PA') {
        aliquotaInter = 12; 
    } else if (origemText === 'DF' && destinoText === 'PB') {
        aliquotaInter = 12; 
    } else if (origemText === 'DF' && destinoText === 'PR') {
        aliquotaInter = 12; 
    } else if (origemText === 'DF' && destinoText === 'PE') {
        aliquotaInter = 12; 
    } else if (origemText === 'DF' && destinoText === 'PI') {
        aliquotaInter = 12; 
    } else if (origemText === 'DF' && destinoText === 'RN') {
        aliquotaInter = 12; 
    } else if (origemText === 'DF' && destinoText === 'RS') {
        aliquotaInter = 12; 
    } else if (origemText === 'DF' && destinoText === 'RJ') {
        aliquotaInter = 12; 
    } else if (origemText === 'DF' && destinoText === 'RO') {
        aliquotaInter = 12; 
    } else if (origemText === 'DF' && destinoText === 'RR') {
        aliquotaInter = 12; 
    } else if (origemText === 'DF' && destinoText === 'SC') {
        aliquotaInter = 12; 
    } else if (origemText === 'DF' && destinoText === 'SP') {
        aliquotaInter = 12; 
    } else if (origemText === 'DF' && destinoText === 'SE') {
        aliquotaInter = 12; 
    } else if (origemText === 'DF' && destinoText === 'TO') {
        aliquotaInter = 12; 
    } else if (origemText === 'ES' && destinoText === 'AC') {
        aliquotaInter = 12; 
    } else if (origemText === 'ES' && destinoText === 'AL') {
        aliquotaInter = 12; 
    } else if (origemText === 'ES' && destinoText === 'AM') {
        aliquotaInter = 12; 
    } else if (origemText === 'ES' && destinoText === 'AP') {
        aliquotaInter = 12; 
    } else if (origemText === 'ES' && destinoText === 'BA') {
        aliquotaInter = 12; 
    } else if (origemText === 'ES' && destinoText === 'CE') {
        aliquotaInter = 12; 
    } else if (origemText === 'ES' && destinoText === 'DF') {
        aliquotaInter = 12; 
    } else if (origemText === 'ES' && destinoText === 'ES') {
        aliquotaInter = 17; 
    } else if (origemText === 'ES' && destinoText === 'GO') {
        aliquotaInter = 12; 
    } else if (origemText === 'ES' && destinoText === 'MA') {
        aliquotaInter = 12; 
    } else if (origemText === 'ES' && destinoText === 'MT') {
        aliquotaInter = 12; 
    } else if (origemText === 'ES' && destinoText === 'MS') {
        aliquotaInter = 12; 
    } else if (origemText === 'ES' && destinoText === 'MG') {
        aliquotaInter = 12; 
    } else if (origemText === 'ES' && destinoText === 'PA') {
        aliquotaInter = 12; 
    } else if (origemText === 'ES' && destinoText === 'PB') {
        aliquotaInter = 12; 
    } else if (origemText === 'ES' && destinoText === 'PR') {
        aliquotaInter = 12; 
    } else if (origemText === 'ES' && destinoText === 'PE') {
        aliquotaInter = 12; 
    } else if (origemText === 'ES' && destinoText === 'PI') {
        aliquotaInter = 12; 
    } else if (origemText === 'ES' && destinoText === 'RN') {
        aliquotaInter = 12; 
    } else if (origemText === 'ES' && destinoText === 'RS') {
        aliquotaInter = 12; 
    } else if (origemText === 'ES' && destinoText === 'RJ') {
        aliquotaInter = 12; 
    } else if (origemText === 'ES' && destinoText === 'RO') {
        aliquotaInter = 12; 
    } else if (origemText === 'ES' && destinoText === 'RR') {
        aliquotaInter = 12; 
    } else if (origemText === 'ES' && destinoText === 'SC') {
        aliquotaInter = 12; 
    } else if (origemText === 'ES' && destinoText === 'SP') {
        aliquotaInter = 12; 
    } else if (origemText === 'ES' && destinoText === 'SE') {
        aliquotaInter = 12; 
    } else if (origemText === 'ES' && destinoText === 'TO') {
        aliquotaInter = 12; 
    } else if (origemText === 'GO' && destinoText === 'AC') {
        aliquotaInter = 12; 
    } else if (origemText === 'GO' && destinoText === 'AL') {
        aliquotaInter = 12; 
    } else if (origemText === 'GO' && destinoText === 'AM') {
        aliquotaInter = 12; 
    } else if (origemText === 'GO' && destinoText === 'AP') {
        aliquotaInter = 12; 
    } else if (origemText === 'GO' && destinoText === 'BA') {
        aliquotaInter = 12; 
    } else if (origemText === 'GO' && destinoText === 'CE') {
        aliquotaInter = 12; 
    } else if (origemText === 'GO' && destinoText === 'DF') {
        aliquotaInter = 12; 
    } else if (origemText === 'GO' && destinoText === 'ES') {
        aliquotaInter = 12; 
    } else if (origemText === 'GO' && destinoText === 'GO') {
        aliquotaInter = 17; 
    } else if (origemText === 'GO' && destinoText === 'MA') {
        aliquotaInter = 12; 
    } else if (origemText === 'GO' && destinoText === 'MT') {
        aliquotaInter = 12; 
    } else if (origemText === 'GO' && destinoText === 'MS') {
        aliquotaInter = 12; 
    } else if (origemText === 'GO' && destinoText === 'MG') {
        aliquotaInter = 12; 
    } else if (origemText === 'GO' && destinoText === 'PA') {
        aliquotaInter = 12; 
    } else if (origemText === 'GO' && destinoText === 'PB') {
        aliquotaInter = 12; 
    } else if (origemText === 'GO' && destinoText === 'PR') {
        aliquotaInter = 12; 
    } else if (origemText === 'GO' && destinoText === 'PE') {
        aliquotaInter = 12; 
    } else if (origemText === 'GO' && destinoText === 'PI') {
        aliquotaInter = 12; 
    } else if (origemText === 'GO' && destinoText === 'RN') {
        aliquotaInter = 12; 
    } else if (origemText === 'GO' && destinoText === 'RS') {
        aliquotaInter = 12; 
    } else if (origemText === 'GO' && destinoText === 'RJ') {
        aliquotaInter = 12; 
    } else if (origemText === 'GO' && destinoText === 'RO') {
        aliquotaInter = 12; 
    } else if (origemText === 'GO' && destinoText === 'RR') {
        aliquotaInter = 12; 
    } else if (origemText === 'GO' && destinoText === 'SC') {
        aliquotaInter = 12; 
    } else if (origemText === 'GO' && destinoText === 'SP') {
        aliquotaInter = 12; 
    } else if (origemText === 'GO' && destinoText === 'SE') {
        aliquotaInter = 12; 
    } else if (origemText === 'GO' && destinoText === 'TO') {
        aliquotaInter = 12; 
    } else if (origemText === 'MA' && destinoText === 'AC') {
        aliquotaInter = 12; 
    } else if (origemText === 'MA' && destinoText === 'AL') {
        aliquotaInter = 12; 
    } else if (origemText === 'MA' && destinoText === 'AM') {
        aliquotaInter = 12; 
    } else if (origemText === 'MA' && destinoText === 'AP') {
        aliquotaInter = 12; 
    } else if (origemText === 'MA' && destinoText === 'BA') {
        aliquotaInter = 12; 
    } else if (origemText === 'MA' && destinoText === 'CE') {
        aliquotaInter = 12; 
    } else if (origemText === 'MA' && destinoText === 'DF') {
        aliquotaInter = 12; 
    } else if (origemText === 'MA' && destinoText === 'ES') {
        aliquotaInter = 12; 
    } else if (origemText === 'MA' && destinoText === 'GO') {
        aliquotaInter = 12; 
    } else if (origemText === 'MA' && destinoText === 'MA') {
        aliquotaInter = 18; 
    } else if (origemText === 'MA' && destinoText === 'MT') {
        aliquotaInter = 12; 
    } else if (origemText === 'MA' && destinoText === 'MS') {
        aliquotaInter = 12; 
    } else if (origemText === 'MA' && destinoText === 'MG') {
        aliquotaInter = 12; 
    } else if (origemText === 'MA' && destinoText === 'PA') {
        aliquotaInter = 12; 
    } else if (origemText === 'MA' && destinoText === 'PB') {
        aliquotaInter = 12; 
    } else if (origemText === 'MA' && destinoText === 'PR') {
        aliquotaInter = 12; 
    } else if (origemText === 'MA' && destinoText === 'PE') {
        aliquotaInter = 12; 
    } else if (origemText === 'MA' && destinoText === 'PI') {
        aliquotaInter = 12; 
    } else if (origemText === 'MA' && destinoText === 'RN') {
        aliquotaInter = 12; 
    } else if (origemText === 'MA' && destinoText === 'RS') {
        aliquotaInter = 12; 
    } else if (origemText === 'MA' && destinoText === 'RJ') {
        aliquotaInter = 12; 
    } else if (origemText === 'MA' && destinoText === 'RO') {
        aliquotaInter = 12; 
    } else if (origemText === 'MA' && destinoText === 'RR') {
        aliquotaInter = 12; 
    } else if (origemText === 'MA' && destinoText === 'SC') {
        aliquotaInter = 12; 
    } else if (origemText === 'MA' && destinoText === 'SP') {
        aliquotaInter = 12; 
    } else if (origemText === 'MA' && destinoText === 'SE') {
        aliquotaInter = 12; 
    } else if (origemText === 'MA' && destinoText === 'TO') {
        aliquotaInter = 12; 
    } else if (origemText === 'MT' && destinoText === 'AC') {
        aliquotaInter = 12; 
    } else if (origemText === 'MT' && destinoText === 'AL') {
        aliquotaInter = 12; 
    } else if (origemText === 'MT' && destinoText === 'AM') {
        aliquotaInter = 12; 
    } else if (origemText === 'MT' && destinoText === 'AP') {
        aliquotaInter = 12; 
    } else if (origemText === 'MT' && destinoText === 'BA') {
        aliquotaInter = 12; 
    } else if (origemText === 'MT' && destinoText === 'CE') {
        aliquotaInter = 12; 
    } else if (origemText === 'MT' && destinoText === 'DF') {
        aliquotaInter = 12; 
    } else if (origemText === 'MT' && destinoText === 'ES') {
        aliquotaInter = 12; 
    } else if (origemText === 'MT' && destinoText === 'GO') {
        aliquotaInter = 12; 
    } else if (origemText === 'MT' && destinoText === 'MA') {
        aliquotaInter = 12; 
    } else if (origemText === 'MT' && destinoText === 'MT') {
        aliquotaInter = 17; 
    } else if (origemText === 'MT' && destinoText === 'MS') {
        aliquotaInter = 12; 
    } else if (origemText === 'MT' && destinoText === 'MG') {
        aliquotaInter = 12; 
    } else if (origemText === 'MT' && destinoText === 'PA') {
        aliquotaInter = 12; 
    } else if (origemText === 'MT' && destinoText === 'PB') {
        aliquotaInter = 12; 
    } else if (origemText === 'MT' && destinoText === 'PR') {
        aliquotaInter = 12; 
    } else if (origemText === 'MT' && destinoText === 'PE') {
        aliquotaInter = 12; 
    } else if (origemText === 'MT' && destinoText === 'PI') {
        aliquotaInter = 12; 
    } else if (origemText === 'MT' && destinoText === 'RN') {
        aliquotaInter = 12; 
    } else if (origemText === 'MT' && destinoText === 'RS') {
        aliquotaInter = 12; 
    } else if (origemText === 'MT' && destinoText === 'RJ') {
        aliquotaInter = 12; 
    } else if (origemText === 'MT' && destinoText === 'RO') {
        aliquotaInter = 12; 
    } else if (origemText === 'MT' && destinoText === 'RR') {
        aliquotaInter = 12; 
    } else if (origemText === 'MT' && destinoText === 'SC') {
        aliquotaInter = 12; 
    } else if (origemText === 'MT' && destinoText === 'SP') {
        aliquotaInter = 12; 
    } else if (origemText === 'MT' && destinoText === 'SE') {
        aliquotaInter = 12; 
    } else if (origemText === 'MT' && destinoText === 'TO') {
        aliquotaInter = 12; 
    } else if (origemText === 'MS' && destinoText === 'AC') {
        aliquotaInter = 12; 
    } else if (origemText === 'MS' && destinoText === 'AL') {
        aliquotaInter = 12; 
    } else if (origemText === 'MS' && destinoText === 'AM') {
        aliquotaInter = 12; 
    } else if (origemText === 'MS' && destinoText === 'AP') {
        aliquotaInter = 12; 
    } else if (origemText === 'MS' && destinoText === 'BA') {
        aliquotaInter = 12; 
    } else if (origemText === 'MS' && destinoText === 'CE') {
        aliquotaInter = 12; 
    } else if (origemText === 'MS' && destinoText === 'DF') {
        aliquotaInter = 12; 
    } else if (origemText === 'MS' && destinoText === 'ES') {
        aliquotaInter = 12; 
    } else if (origemText === 'MS' && destinoText === 'GO') {
        aliquotaInter = 12; 
    } else if (origemText === 'MS' && destinoText === 'MA') {
        aliquotaInter = 12; 
    } else if (origemText === 'MS' && destinoText === 'MT') {
        aliquotaInter = 12; 
    } else if (origemText === 'MS' && destinoText === 'MS') {
        aliquotaInter = 17; 
    } else if (origemText === 'MS' && destinoText === 'MG') {
        aliquotaInter = 12; 
    } else if (origemText === 'MS' && destinoText === 'PA') {
        aliquotaInter = 12; 
    } else if (origemText === 'MS' && destinoText === 'PB') {
        aliquotaInter = 12; 
    } else if (origemText === 'MS' && destinoText === 'PR') {
        aliquotaInter = 12; 
    } else if (origemText === 'MS' && destinoText === 'PE') {
        aliquotaInter = 12; 
    } else if (origemText === 'MS' && destinoText === 'PI') {
        aliquotaInter = 12; 
    } else if (origemText === 'MS' && destinoText === 'RN') {
        aliquotaInter = 12; 
    } else if (origemText === 'MS' && destinoText === 'RS') {
        aliquotaInter = 12; 
    } else if (origemText === 'MS' && destinoText === 'RJ') {
        aliquotaInter = 12; 
    } else if (origemText === 'MS' && destinoText === 'RO') {
        aliquotaInter = 12; 
    } else if (origemText === 'MS' && destinoText === 'RR') {
        aliquotaInter = 12; 
    } else if (origemText === 'MS' && destinoText === 'SC') {
        aliquotaInter = 12; 
    } else if (origemText === 'MS' && destinoText === 'SP') {
        aliquotaInter = 12; 
    } else if (origemText === 'MS' && destinoText === 'SE') {
        aliquotaInter = 12; 
    } else if (origemText === 'MS' && destinoText === 'TO') {
        aliquotaInter = 12; 
    } else if (origemText === 'MG' && destinoText === 'AC') {
        aliquotaInter = 7;
    } else if (origemText === 'MG' && destinoText === 'AL') {
        aliquotaInter = 7;
    } else if (origemText === 'MG' && destinoText === 'AM') {
        aliquotaInter = 7;
    } else if (origemText === 'MG' && destinoText === 'AP') {
        aliquotaInter = 7;
    } else if (origemText === 'MG' && destinoText === 'BA') {
        aliquotaInter = 7;
    } else if (origemText === 'MG' && destinoText === 'CE') {
        aliquotaInter = 7;
    } else if (origemText === 'MG' && destinoText === 'DF') {
        aliquotaInter = 7;
    } else if (origemText === 'MG' && destinoText === 'ES') {
        aliquotaInter = 7;
    } else if (origemText === 'MG' && destinoText === 'GO') {
        aliquotaInter = 7;
    } else if (origemText === 'MG' && destinoText === 'MA') {
        aliquotaInter = 7;
    } else if (origemText === 'MG' && destinoText === 'MT') {
        aliquotaInter = 7;
    } else if (origemText === 'MG' && destinoText === 'MS') {
        aliquotaInter = 7;
    } else if (origemText === 'MG' && destinoText === 'MG') {
        aliquotaInter = 18; 
    } else if (origemText === 'MG' && destinoText === 'PA') {
        aliquotaInter = 7;
    } else if (origemText === 'MG' && destinoText === 'PB') {
        aliquotaInter = 7;
    } else if (origemText === 'MG' && destinoText === 'PR') {
        aliquotaInter = 12; 
    } else if (origemText === 'MG' && destinoText === 'PE') {
        aliquotaInter = 7;
    } else if (origemText === 'MG' && destinoText === 'PI') {
        aliquotaInter = 7;
    } else if (origemText === 'MG' && destinoText === 'RN') {
        aliquotaInter = 7;
    } else if (origemText === 'MG' && destinoText === 'RS') {
        aliquotaInter = 12; 
    } else if (origemText === 'MG' && destinoText === 'RJ') {
        aliquotaInter = 12; 
    } else if (origemText === 'MG' && destinoText === 'RO') {
        aliquotaInter = 7;
    } else if (origemText === 'MG' && destinoText === 'RR') {
        aliquotaInter = 7;
    } else if (origemText === 'MG' && destinoText === 'SC') {
        aliquotaInter = 12; 
    } else if (origemText === 'MG' && destinoText === 'SP') {
        aliquotaInter = 12; 
    } else if (origemText === 'MG' && destinoText === 'SE') {
        aliquotaInter = 7;
    } else if (origemText === 'MG' && destinoText === 'TO') {
        aliquotaInter = 7;
    } else if (origemText === 'PA' && destinoText === 'AC') {
        aliquotaInter = 12; 
    } else if (origemText === 'PA' && destinoText === 'AL') {
        aliquotaInter = 12; 
    } else if (origemText === 'PA' && destinoText === 'AM') {
        aliquotaInter = 12; 
    } else if (origemText === 'PA' && destinoText === 'AP') {
        aliquotaInter = 12; 
    } else if (origemText === 'PA' && destinoText === 'BA') {
        aliquotaInter = 12; 
    } else if (origemText === 'PA' && destinoText === 'CE') {
        aliquotaInter = 12; 
    } else if (origemText === 'PA' && destinoText === 'DF') {
        aliquotaInter = 12; 
    } else if (origemText === 'PA' && destinoText === 'ES') {
        aliquotaInter = 12; 
    } else if (origemText === 'PA' && destinoText === 'GO') {
        aliquotaInter = 12; 
    } else if (origemText === 'PA' && destinoText === 'MA') {
        aliquotaInter = 12; 
    } else if (origemText === 'PA' && destinoText === 'MT') {
        aliquotaInter = 12; 
    } else if (origemText === 'PA' && destinoText === 'MS') {
        aliquotaInter = 12; 
    } else if (origemText === 'PA' && destinoText === 'MG') {
        aliquotaInter = 12; 
    } else if (origemText === 'PA' && destinoText === 'PA') {
        aliquotaInter = 17; 
    } else if (origemText === 'PA' && destinoText === 'PB') {
        aliquotaInter = 12; 
    } else if (origemText === 'PA' && destinoText === 'PR') {
        aliquotaInter = 12; 
    } else if (origemText === 'PA' && destinoText === 'PE') {
        aliquotaInter = 12; 
    } else if (origemText === 'PA' && destinoText === 'PI') {
        aliquotaInter = 12; 
    } else if (origemText === 'PA' && destinoText === 'RN') {
        aliquotaInter = 12; 
    } else if (origemText === 'PA' && destinoText === 'RS') {
        aliquotaInter = 12; 
    } else if (origemText === 'PA' && destinoText === 'RJ') {
        aliquotaInter = 12; 
    } else if (origemText === 'PA' && destinoText === 'RO') {
        aliquotaInter = 12; 
    } else if (origemText === 'PA' && destinoText === 'RR') {
        aliquotaInter = 12; 
    } else if (origemText === 'PA' && destinoText === 'SC') {
        aliquotaInter = 12; 
    } else if (origemText === 'PA' && destinoText === 'SP') {
        aliquotaInter = 12; 
    } else if (origemText === 'PA' && destinoText === 'SE') {
        aliquotaInter = 12; 
    } else if (origemText === 'PA' && destinoText === 'TO') {
        aliquotaInter = 12; 
    } else if (origemText === 'PB' && destinoText === 'AC') {
        aliquotaInter = 12; 
    } else if (origemText === 'PB' && destinoText === 'AL') {
        aliquotaInter = 12; 
    } else if (origemText === 'PB' && destinoText === 'AM') {
        aliquotaInter = 12; 
    } else if (origemText === 'PB' && destinoText === 'AP') {
        aliquotaInter = 12; 
    } else if (origemText === 'PB' && destinoText === 'BA') {
        aliquotaInter = 12; 
    } else if (origemText === 'PB' && destinoText === 'CE') {
        aliquotaInter = 12; 
    } else if (origemText === 'PB' && destinoText === 'DF') {
        aliquotaInter = 12; 
    } else if (origemText === 'PB' && destinoText === 'ES') {
        aliquotaInter = 12; 
    } else if (origemText === 'PB' && destinoText === 'GO') {
        aliquotaInter = 12; 
    } else if (origemText === 'PB' && destinoText === 'MA') {
        aliquotaInter = 12; 
    } else if (origemText === 'PB' && destinoText === 'MT') {
        aliquotaInter = 12; 
    } else if (origemText === 'PB' && destinoText === 'MS') {
        aliquotaInter = 12; 
    } else if (origemText === 'PB' && destinoText === 'MG') {
        aliquotaInter = 12; 
    } else if (origemText === 'PB' && destinoText === 'PA') {
        aliquotaInter = 12; 
    } else if (origemText === 'PB' && destinoText === 'PB') {
        aliquotaInter = 18; 
    } else if (origemText === 'PB' && destinoText === 'PR') {
        aliquotaInter = 12; 
    } else if (origemText === 'PB' && destinoText === 'PE') {
        aliquotaInter = 12; 
    } else if (origemText === 'PB' && destinoText === 'PI') {
        aliquotaInter = 12; 
    } else if (origemText === 'PB' && destinoText === 'RN') {
        aliquotaInter = 12; 
    } else if (origemText === 'PB' && destinoText === 'RS') {
        aliquotaInter = 12; 
    } else if (origemText === 'PB' && destinoText === 'RJ') {
        aliquotaInter = 12; 
    } else if (origemText === 'PB' && destinoText === 'RO') {
        aliquotaInter = 12; 
    } else if (origemText === 'PB' && destinoText === 'RR') {
        aliquotaInter = 12; 
    } else if (origemText === 'PB' && destinoText === 'SC') {
        aliquotaInter = 12; 
    } else if (origemText === 'PB' && destinoText === 'SP') {
        aliquotaInter = 12; 
    } else if (origemText === 'PB' && destinoText === 'SE') {
        aliquotaInter = 12; 
    } else if (origemText === 'PB' && destinoText === 'TO') {
        aliquotaInter = 12; 
    } else if (origemText === 'PR' && destinoText === 'AC') {
        aliquotaInter = 7;
    } else if (origemText === 'PR' && destinoText === 'AL') {
        aliquotaInter = 7;
    } else if (origemText === 'PR' && destinoText === 'AM') {
        aliquotaInter = 7;
    } else if (origemText === 'PR' && destinoText === 'AP') {
        aliquotaInter = 7;
    } else if (origemText === 'PR' && destinoText === 'BA') {
        aliquotaInter = 7;
    } else if (origemText === 'PR' && destinoText === 'CE') {
        aliquotaInter = 7;
    } else if (origemText === 'PR' && destinoText === 'DF') {
        aliquotaInter = 7;
    } else if (origemText === 'PR' && destinoText === 'ES') {
        aliquotaInter = 7;
    } else if (origemText === 'PR' && destinoText === 'GO') {
        aliquotaInter = 7;
    } else if (origemText === 'PR' && destinoText === 'MA') {
        aliquotaInter = 7;
    } else if (origemText === 'PR' && destinoText === 'MT') {
        aliquotaInter = 7;
    } else if (origemText === 'PR' && destinoText === 'MS') {
        aliquotaInter = 7;
    } else if (origemText === 'PR' && destinoText === 'MG') {
        aliquotaInter = 12; 
    } else if (origemText === 'PR' && destinoText === 'PA') {
        aliquotaInter = 7;
    } else if (origemText === 'PR' && destinoText === 'PB') {
        aliquotaInter = 7;
    } else if (origemText === 'PR' && destinoText === 'PR') {
        aliquotaInter = 18; 
    } else if (origemText === 'PR' && destinoText === 'PE') {
        aliquotaInter = 7;
    } else if (origemText === 'PR' && destinoText === 'PI') {
        aliquotaInter = 7;
    } else if (origemText === 'PR' && destinoText === 'RN') {
        aliquotaInter = 7;
    } else if (origemText === 'PR' && destinoText === 'RS') {
        aliquotaInter = 12; 
    } else if (origemText === 'PR' && destinoText === 'RJ') {
        aliquotaInter = 12; 
    } else if (origemText === 'PR' && destinoText === 'RO') {
        aliquotaInter = 7;
    } else if (origemText === 'PR' && destinoText === 'RR') {
        aliquotaInter = 7;
    } else if (origemText === 'PR' && destinoText === 'SC') {
        aliquotaInter = 12; 
    } else if (origemText === 'PR' && destinoText === 'SP') {
        aliquotaInter = 12; 
    } else if (origemText === 'PR' && destinoText === 'SE') {
        aliquotaInter = 7;
    } else if (origemText === 'PR' && destinoText === 'TO') {
        aliquotaInter = 7;
    } else if (origemText === 'PE' && destinoText === 'AC') {
        aliquotaInter = 12; 
    } else if (origemText === 'PE' && destinoText === 'AL') {
        aliquotaInter = 12; 
    } else if (origemText === 'PE' && destinoText === 'AM') {
        aliquotaInter = 12; 
    } else if (origemText === 'PE' && destinoText === 'AP') {
        aliquotaInter = 12; 
    } else if (origemText === 'PE' && destinoText === 'BA') {
        aliquotaInter = 12; 
    } else if (origemText === 'PE' && destinoText === 'CE') {
        aliquotaInter = 12; 
    } else if (origemText === 'PE' && destinoText === 'DF') {
        aliquotaInter = 12; 
    } else if (origemText === 'PE' && destinoText === 'ES') {
        aliquotaInter = 12; 
    } else if (origemText === 'PE' && destinoText === 'GO') {
        aliquotaInter = 12; 
    } else if (origemText === 'PE' && destinoText === 'MA') {
        aliquotaInter = 12; 
    } else if (origemText === 'PE' && destinoText === 'MT') {
        aliquotaInter = 12; 
    } else if (origemText === 'PE' && destinoText === 'MS') {
        aliquotaInter = 12; 
    } else if (origemText === 'PE' && destinoText === 'MG') {
        aliquotaInter = 12; 
    } else if (origemText === 'PE' && destinoText === 'PA') {
        aliquotaInter = 12; 
    } else if (origemText === 'PE' && destinoText === 'PB') {
        aliquotaInter = 12; 
    } else if (origemText === 'PE' && destinoText === 'PR') {
        aliquotaInter = 12; 
    } else if (origemText === 'PE' && destinoText === 'PE') {
        aliquotaInter = 18; 
    } else if (origemText === 'PE' && destinoText === 'PI') {
        aliquotaInter = 12; 
    } else if (origemText === 'PE' && destinoText === 'RN') {
        aliquotaInter = 12; 
    } else if (origemText === 'PE' && destinoText === 'RS') {
        aliquotaInter = 12; 
    } else if (origemText === 'PE' && destinoText === 'RJ') {
        aliquotaInter = 12; 
    } else if (origemText === 'PE' && destinoText === 'RO') {
        aliquotaInter = 12; 
    } else if (origemText === 'PE' && destinoText === 'RR') {
        aliquotaInter = 12; 
    } else if (origemText === 'PE' && destinoText === 'SC') {
        aliquotaInter = 12; 
    } else if (origemText === 'PE' && destinoText === 'SP') {
        aliquotaInter = 12; 
    } else if (origemText === 'PE' && destinoText === 'SE') {
        aliquotaInter = 12; 
    } else if (origemText === 'PE' && destinoText === 'TO') {
        aliquotaInter = 12; 
    } else if (origemText === 'PI' && destinoText === 'AC') {
        aliquotaInter = 12; 
    } else if (origemText === 'PI' && destinoText === 'AL') {
        aliquotaInter = 12; 
    } else if (origemText === 'PI' && destinoText === 'AM') {
        aliquotaInter = 12; 
    } else if (origemText === 'PI' && destinoText === 'AP') {
        aliquotaInter = 12; 
    } else if (origemText === 'PI' && destinoText === 'BA') {
        aliquotaInter = 12; 
    } else if (origemText === 'PI' && destinoText === 'CE') {
        aliquotaInter = 12; 
    } else if (origemText === 'PI' && destinoText === 'DF') {
        aliquotaInter = 12; 
    } else if (origemText === 'PI' && destinoText === 'ES') {
        aliquotaInter = 12; 
    } else if (origemText === 'PI' && destinoText === 'GO') {
        aliquotaInter = 12; 
    } else if (origemText === 'PI' && destinoText === 'MA') {
        aliquotaInter = 12; 
    } else if (origemText === 'PI' && destinoText === 'MT') {
        aliquotaInter = 12; 
    } else if (origemText === 'PI' && destinoText === 'MS') {
        aliquotaInter = 12; 
    } else if (origemText === 'PI' && destinoText === 'MG') {
        aliquotaInter = 12; 
    } else if (origemText === 'PI' && destinoText === 'PA') {
        aliquotaInter = 12; 
    } else if (origemText === 'PI' && destinoText === 'PB') {
        aliquotaInter = 12; 
    } else if (origemText === 'PI' && destinoText === 'PR') {
        aliquotaInter = 12; 
    } else if (origemText === 'PI' && destinoText === 'PE') {
        aliquotaInter = 12; 
    } else if (origemText === 'PI' && destinoText === 'PI') {
        aliquotaInter = 18; 
    } else if (origemText === 'PI' && destinoText === 'RN') {
        aliquotaInter = 12; 
    } else if (origemText === 'PI' && destinoText === 'RS') {
        aliquotaInter = 12; 
    } else if (origemText === 'PI' && destinoText === 'RJ') {
        aliquotaInter = 12; 
    } else if (origemText === 'PI' && destinoText === 'RO') {
        aliquotaInter = 12; 
    } else if (origemText === 'PI' && destinoText === 'RR') {
        aliquotaInter = 12; 
    } else if (origemText === 'PI' && destinoText === 'SC') {
        aliquotaInter = 12; 
    } else if (origemText === 'PI' && destinoText === 'SP') {
        aliquotaInter = 12; 
    } else if (origemText === 'PI' && destinoText === 'SE') {
        aliquotaInter = 12; 
    } else if (origemText === 'PI' && destinoText === 'TO') {
        aliquotaInter = 12; 
    } else if (origemText === 'RN' && destinoText === 'AC') {
        aliquotaInter = 12; 
    } else if (origemText === 'RN' && destinoText === 'AL') {
        aliquotaInter = 12; 
    } else if (origemText === 'RN' && destinoText === 'AM') {
        aliquotaInter = 12; 
    } else if (origemText === 'RN' && destinoText === 'AP') {
        aliquotaInter = 12; 
    } else if (origemText === 'RN' && destinoText === 'BA') {
        aliquotaInter = 12; 
    } else if (origemText === 'RN' && destinoText === 'CE') {
        aliquotaInter = 12; 
    } else if (origemText === 'RN' && destinoText === 'DF') {
        aliquotaInter = 12; 
    } else if (origemText === 'RN' && destinoText === 'ES') {
        aliquotaInter = 12; 
    } else if (origemText === 'RN' && destinoText === 'GO') {
        aliquotaInter = 12; 
    } else if (origemText === 'RN' && destinoText === 'MA') {
        aliquotaInter = 12; 
    } else if (origemText === 'RN' && destinoText === 'MT') {
        aliquotaInter = 12; 
    } else if (origemText === 'RN' && destinoText === 'MS') {
        aliquotaInter = 12; 
    } else if (origemText === 'RN' && destinoText === 'MG') {
        aliquotaInter = 12; 
    } else if (origemText === 'RN' && destinoText === 'PA') {
        aliquotaInter = 12; 
    } else if (origemText === 'RN' && destinoText === 'PB') {
        aliquotaInter = 12; 
    } else if (origemText === 'RN' && destinoText === 'PR') {
        aliquotaInter = 12; 
    } else if (origemText === 'RN' && destinoText === 'PE') {
        aliquotaInter = 12; 
    } else if (origemText === 'RN' && destinoText === 'PI') {
        aliquotaInter = 12; 
    } else if (origemText === 'RN' && destinoText === 'RN') {
        aliquotaInter = 18; 
    } else if (origemText === 'RN' && destinoText === 'RS') {
        aliquotaInter = 12; 
    } else if (origemText === 'RN' && destinoText === 'RJ') {
        aliquotaInter = 12; 
    } else if (origemText === 'RN' && destinoText === 'RO') {
        aliquotaInter = 12; 
    } else if (origemText === 'RN' && destinoText === 'RR') {
        aliquotaInter = 12; 
    } else if (origemText === 'RN' && destinoText === 'SC') {
        aliquotaInter = 12; 
    } else if (origemText === 'RN' && destinoText === 'SP') {
        aliquotaInter = 12; 
    } else if (origemText === 'RN' && destinoText === 'SE') {
        aliquotaInter = 12; 
    } else if (origemText === 'RN' && destinoText === 'TO') {
        aliquotaInter = 12; 
    } else if (origemText === 'RS' && destinoText === 'AC') {
        aliquotaInter = 7;
    } else if (origemText === 'RS' && destinoText === 'AL') {
        aliquotaInter = 7;
    } else if (origemText === 'RS' && destinoText === 'AM') {
        aliquotaInter = 7;
    } else if (origemText === 'RS' && destinoText === 'AP') {
        aliquotaInter = 7;
    } else if (origemText === 'RS' && destinoText === 'BA') {
        aliquotaInter = 7;
    } else if (origemText === 'RS' && destinoText === 'CE') {
        aliquotaInter = 7;
    } else if (origemText === 'RS' && destinoText === 'DF') {
        aliquotaInter = 7;
    } else if (origemText === 'RS' && destinoText === 'ES') {
        aliquotaInter = 7;
    } else if (origemText === 'RS' && destinoText === 'GO') {
        aliquotaInter = 7;
    } else if (origemText === 'RS' && destinoText === 'MA') {
        aliquotaInter = 7;
    } else if (origemText === 'RS' && destinoText === 'MT') {
        aliquotaInter = 7;
    } else if (origemText === 'RS' && destinoText === 'MS') {
        aliquotaInter = 7;
    } else if (origemText === 'RS' && destinoText === 'MG') {
        aliquotaInter = 12; 
    } else if (origemText === 'RS' && destinoText === 'PA') {
        aliquotaInter = 7;
    } else if (origemText === 'RS' && destinoText === 'PB') {
        aliquotaInter = 7;
    } else if (origemText === 'RS' && destinoText === 'PR') {
        aliquotaInter = 12; 
    } else if (origemText === 'RS' && destinoText === 'PE') {
        aliquotaInter = 7;
    } else if (origemText === 'RS' && destinoText === 'PI') {
        aliquotaInter = 7;
    } else if (origemText === 'RS' && destinoText === 'RN') {
        aliquotaInter = 7;
    } else if (origemText === 'RS' && destinoText === 'RS') {
        aliquotaInter = 18; 
    } else if (origemText === 'RS' && destinoText === 'RJ') {
        aliquotaInter = 12; 
    } else if (origemText === 'RS' && destinoText === 'RO') {
        aliquotaInter = 7;
    } else if (origemText === 'RS' && destinoText === 'RR') {
        aliquotaInter = 7;
    } else if (origemText === 'RS' && destinoText === 'SC') {
        aliquotaInter = 12; 
    } else if (origemText === 'RS' && destinoText === 'SP') {
        aliquotaInter = 12; 
    } else if (origemText === 'RS' && destinoText === 'SE') {
        aliquotaInter = 7;
    } else if (origemText === 'RS' && destinoText === 'TO') {
        aliquotaInter = 7;
    } else if (origemText === 'RJ' && destinoText === 'AC') {
        aliquotaInter = 7;
    } else if (origemText === 'RJ' && destinoText === 'AL') {
        aliquotaInter = 7;
    } else if (origemText === 'RJ' && destinoText === 'AM') {
        aliquotaInter = 7;
    } else if (origemText === 'RJ' && destinoText === 'AP') {
        aliquotaInter = 7;
    } else if (origemText === 'RJ' && destinoText === 'BA') {
        aliquotaInter = 7;
    } else if (origemText === 'RJ' && destinoText === 'CE') {
        aliquotaInter = 7;
    } else if (origemText === 'RJ' && destinoText === 'DF') {
        aliquotaInter = 7;
    } else if (origemText === 'RJ' && destinoText === 'ES') {
        aliquotaInter = 7;
    } else if (origemText === 'RJ' && destinoText === 'GO') {
        aliquotaInter = 7;
    } else if (origemText === 'RJ' && destinoText === 'MA') {
        aliquotaInter = 7;
    } else if (origemText === 'RJ' && destinoText === 'MT') {
        aliquotaInter = 7;
    } else if (origemText === 'RJ' && destinoText === 'MS') {
        aliquotaInter = 7;
    } else if (origemText === 'RJ' && destinoText === 'MG') {
        aliquotaInter = 12; 
    } else if (origemText === 'RJ' && destinoText === 'PA') {
        aliquotaInter = 7;
    } else if (origemText === 'RJ' && destinoText === 'PB') {
        aliquotaInter = 7;
    } else if (origemText === 'RJ' && destinoText === 'PR') {
        aliquotaInter = 12; 
    } else if (origemText === 'RJ' && destinoText === 'PE') {
        aliquotaInter = 7;
    } else if (origemText === 'RJ' && destinoText === 'PI') {
        aliquotaInter = 7;
    } else if (origemText === 'RJ' && destinoText === 'RN') {
        aliquotaInter = 7;
    } else if (origemText === 'RJ' && destinoText === 'RS') {
        aliquotaInter = 12; 
    } else if (origemText === 'RJ' && destinoText === 'RJ') {
        aliquotaInter = 20; 
    } else if (origemText === 'RJ' && destinoText === 'RO') {
        aliquotaInter = 7;
    } else if (origemText === 'RJ' && destinoText === 'RR') {
        aliquotaInter = 7;
    } else if (origemText === 'RJ' && destinoText === 'SC') {
        aliquotaInter = 12; 
    } else if (origemText === 'RJ' && destinoText === 'SP') {
        aliquotaInter = 12; 
    } else if (origemText === 'RJ' && destinoText === 'SE') {
        aliquotaInter = 7;
    } else if (origemText === 'RJ' && destinoText === 'TO') {
        aliquotaInter = 7;
    } else if (origemText === 'RO' && destinoText === 'AC') {
        aliquotaInter = 12; 
    } else if (origemText === 'RO' && destinoText === 'AL') {
        aliquotaInter = 12; 
    } else if (origemText === 'RO' && destinoText === 'AM') {
        aliquotaInter = 12; 
    } else if (origemText === 'RO' && destinoText === 'AP') {
        aliquotaInter = 12; 
    } else if (origemText === 'RO' && destinoText === 'BA') {
        aliquotaInter = 12; 
    } else if (origemText === 'RO' && destinoText === 'CE') {
        aliquotaInter = 12; 
    } else if (origemText === 'RO' && destinoText === 'DF') {
        aliquotaInter = 12; 
    } else if (origemText === 'RO' && destinoText === 'ES') {
        aliquotaInter = 12; 
    } else if (origemText === 'RO' && destinoText === 'GO') {
        aliquotaInter = 12; 
    } else if (origemText === 'RO' && destinoText === 'MA') {
        aliquotaInter = 12; 
    } else if (origemText === 'RO' && destinoText === 'MT') {
        aliquotaInter = 12; 
    } else if (origemText === 'RO' && destinoText === 'MS') {
        aliquotaInter = 12; 
    } else if (origemText === 'RO' && destinoText === 'MG') {
        aliquotaInter = 12; 
    } else if (origemText === 'RO' && destinoText === 'PA') {
        aliquotaInter = 12; 
    } else if (origemText === 'RO' && destinoText === 'PB') {
        aliquotaInter = 12; 
    } else if (origemText === 'RO' && destinoText === 'PR') {
        aliquotaInter = 12; 
    } else if (origemText === 'RO' && destinoText === 'PE') {
        aliquotaInter = 12; 
    } else if (origemText === 'RO' && destinoText === 'PI') {
        aliquotaInter = 12; 
    } else if (origemText === 'RO' && destinoText === 'RN') {
        aliquotaInter = 12; 
    } else if (origemText === 'RO' && destinoText === 'RS') {
        aliquotaInter = 12; 
    } else if (origemText === 'RO' && destinoText === 'RJ') {
        aliquotaInter = 12; 
    } else if (origemText === 'RO' && destinoText === 'RO') {
        aliquotaInter = 17.5;
    } else if (origemText === 'RO' && destinoText === 'RR') {
        aliquotaInter = 12; 
    } else if (origemText === 'RO' && destinoText === 'SC') {
        aliquotaInter = 12; 
    } else if (origemText === 'RO' && destinoText === 'SP') {
        aliquotaInter = 12; 
    } else if (origemText === 'RO' && destinoText === 'SE') {
        aliquotaInter = 12; 
    } else if (origemText === 'RO' && destinoText === 'TO') {
        aliquotaInter = 12; 
    } else if (origemText === 'RR' && destinoText === 'AC') {
        aliquotaInter = 12; 
    } else if (origemText === 'RR' && destinoText === 'AL') {
        aliquotaInter = 12; 
    } else if (origemText === 'RR' && destinoText === 'AM') {
        aliquotaInter = 12; 
    } else if (origemText === 'RR' && destinoText === 'AP') {
        aliquotaInter = 12; 
    } else if (origemText === 'RR' && destinoText === 'BA') {
        aliquotaInter = 12; 
    } else if (origemText === 'RR' && destinoText === 'CE') {
        aliquotaInter = 12; 
    } else if (origemText === 'RR' && destinoText === 'DF') {
        aliquotaInter = 12; 
    } else if (origemText === 'RR' && destinoText === 'ES') {
        aliquotaInter = 12; 
    } else if (origemText === 'RR' && destinoText === 'GO') {
        aliquotaInter = 12; 
    } else if (origemText === 'RR' && destinoText === 'MA') {
        aliquotaInter = 12; 
    } else if (origemText === 'RR' && destinoText === 'MT') {
        aliquotaInter = 12; 
    } else if (origemText === 'RR' && destinoText === 'MS') {
        aliquotaInter = 12; 
    } else if (origemText === 'RR' && destinoText === 'MG') {
        aliquotaInter = 12; 
    } else if (origemText === 'RR' && destinoText === 'PA') {
        aliquotaInter = 12; 
    } else if (origemText === 'RR' && destinoText === 'PB') {
        aliquotaInter = 12; 
    } else if (origemText === 'RR' && destinoText === 'PR') {
        aliquotaInter = 12; 
    } else if (origemText === 'RR' && destinoText === 'PE') {
        aliquotaInter = 12; 
    } else if (origemText === 'RR' && destinoText === 'PI') {
        aliquotaInter = 12; 
    } else if (origemText === 'RR' && destinoText === 'RN') {
        aliquotaInter = 12; 
    } else if (origemText === 'RR' && destinoText === 'RS') {
        aliquotaInter = 12; 
    } else if (origemText === 'RR' && destinoText === 'RJ') {
        aliquotaInter = 12; 
    } else if (origemText === 'RR' && destinoText === 'RO') {
        aliquotaInter = 12; 
    } else if (origemText === 'RR' && destinoText === 'RR') {
        aliquotaInter = 17; 
    } else if (origemText === 'RR' && destinoText === 'SC') {
        aliquotaInter = 12; 
    } else if (origemText === 'RR' && destinoText === 'SP') {
        aliquotaInter = 12; 
    } else if (origemText === 'RR' && destinoText === 'SE') {
        aliquotaInter = 12; 
    } else if (origemText === 'RR' && destinoText === 'TO') {
        aliquotaInter = 12; 
    } else if (origemText === 'SC' && destinoText === 'AC') {
        aliquotaInter = 7;
    } else if (origemText === 'SC' && destinoText === 'AL') {
        aliquotaInter = 7;
    } else if (origemText === 'SC' && destinoText === 'AM') {
        aliquotaInter = 7;
    } else if (origemText === 'SC' && destinoText === 'AP') {
        aliquotaInter = 7;
    } else if (origemText === 'SC' && destinoText === 'BA') {
        aliquotaInter = 7;
    } else if (origemText === 'SC' && destinoText === 'CE') {
        aliquotaInter = 7;
    } else if (origemText === 'SC' && destinoText === 'DF') {
        aliquotaInter = 7;
    } else if (origemText === 'SC' && destinoText === 'ES') {
        aliquotaInter = 7;
    } else if (origemText === 'SC' && destinoText === 'GO') {
        aliquotaInter = 7;
    } else if (origemText === 'SC' && destinoText === 'MA') {
        aliquotaInter = 7;
    } else if (origemText === 'SC' && destinoText === 'MT') {
        aliquotaInter = 7;
    } else if (origemText === 'SC' && destinoText === 'MS') {
        aliquotaInter = 7;
    } else if (origemText === 'SC' && destinoText === 'MG') {
        aliquotaInter = 12; 
    } else if (origemText === 'SC' && destinoText === 'PA') {
        aliquotaInter = 7;
    } else if (origemText === 'SC' && destinoText === 'PB') {
        aliquotaInter = 7;
    } else if (origemText === 'SC' && destinoText === 'PR') {
        aliquotaInter = 12; 
    } else if (origemText === 'SC' && destinoText === 'PE') {
        aliquotaInter = 7;
    } else if (origemText === 'SC' && destinoText === 'PI') {
        aliquotaInter = 7;
    } else if (origemText === 'SC' && destinoText === 'RN') {
        aliquotaInter = 7;
    } else if (origemText === 'SC' && destinoText === 'RS') {
        aliquotaInter = 12; 
    } else if (origemText === 'SC' && destinoText === 'RJ') {
        aliquotaInter = 12; 
    } else if (origemText === 'SC' && destinoText === 'RO') {
        aliquotaInter = 7;
    } else if (origemText === 'SC' && destinoText === 'RR') {
        aliquotaInter = 7;
    } else if (origemText === 'SC' && destinoText === 'SC') {
        aliquotaInter = 17; 
    } else if (origemText === 'SC' && destinoText === 'SP') {
        aliquotaInter = 12; 
    } else if (origemText === 'SC' && destinoText === 'SE') {
        aliquotaInter = 7;
    } else if (origemText === 'SC' && destinoText === 'TO') {
        aliquotaInter = 7;
    } else if (origemText === 'SP' && destinoText === 'AC') {
        aliquotaInter = 7;
    } else if (origemText === 'SP' && destinoText === 'AL') {
        aliquotaInter = 7;
    } else if (origemText === 'SP' && destinoText === 'AM') {
        aliquotaInter = 7;
    } else if (origemText === 'SP' && destinoText === 'AP') {
        aliquotaInter = 7;
    } else if (origemText === 'SP' && destinoText === 'BA') {
        aliquotaInter = 7;
    } else if (origemText === 'SP' && destinoText === 'CE') {
        aliquotaInter = 7;
    } else if (origemText === 'SP' && destinoText === 'DF') {
        aliquotaInter = 7;
    } else if (origemText === 'SP' && destinoText === 'ES') {
        aliquotaInter = 7;
    } else if (origemText === 'SP' && destinoText === 'GO') {
        aliquotaInter = 7;
    } else if (origemText === 'SP' && destinoText === 'MA') {
        aliquotaInter = 7;
    } else if (origemText === 'SP' && destinoText === 'MT') {
        aliquotaInter = 7;
    } else if (origemText === 'SP' && destinoText === 'MS') {
        aliquotaInter = 7;
    } else if (origemText === 'SP' && destinoText === 'MG') {
        aliquotaInter = 12; 
    } else if (origemText === 'SP' && destinoText === 'PA') {
        aliquotaInter = 7;
    } else if (origemText === 'SP' && destinoText === 'PB') {
        aliquotaInter = 7;
    } else if (origemText === 'SP' && destinoText === 'PR') {
        aliquotaInter = 12; 
    } else if (origemText === 'SP' && destinoText === 'PE') {
        aliquotaInter = 7;
    } else if (origemText === 'SP' && destinoText === 'PI') {
        aliquotaInter = 7;
    } else if (origemText === 'SP' && destinoText === 'RN') {
        aliquotaInter = 7;
    } else if (origemText === 'SP' && destinoText === 'RS') {
        aliquotaInter = 12; 
    } else if (origemText === 'SP' && destinoText === 'RJ') {
        aliquotaInter = 12; 
    } else if (origemText === 'SP' && destinoText === 'RO') {
        aliquotaInter = 7;
    } else if (origemText === 'SP' && destinoText === 'RR') {
        aliquotaInter = 7;
    } else if (origemText === 'SP' && destinoText === 'SC') {
        aliquotaInter = 12; 
    } else if (origemText === 'SP' && destinoText === 'SP') {
        aliquotaInter = 18; 
    } else if (origemText === 'SP' && destinoText === 'SE') {
        aliquotaInter = 7;
    } else if (origemText === 'SP' && destinoText === 'TO') {
        aliquotaInter = 7;
    } else if (origemText === 'SE' && destinoText === 'AC') {
        aliquotaInter = 12; 
    } else if (origemText === 'SE' && destinoText === 'AL') {
        aliquotaInter = 12; 
    } else if (origemText === 'SE' && destinoText === 'AM') {
        aliquotaInter = 12; 
    } else if (origemText === 'SE' && destinoText === 'AP') {
        aliquotaInter = 12; 
    } else if (origemText === 'SE' && destinoText === 'BA') {
        aliquotaInter = 12; 
    } else if (origemText === 'SE' && destinoText === 'CE') {
        aliquotaInter = 12; 
    } else if (origemText === 'SE' && destinoText === 'DF') {
        aliquotaInter = 12; 
    } else if (origemText === 'SE' && destinoText === 'ES') {
        aliquotaInter = 12; 
    } else if (origemText === 'SE' && destinoText === 'GO') {
        aliquotaInter = 12; 
    } else if (origemText === 'SE' && destinoText === 'MA') {
        aliquotaInter = 12; 
    } else if (origemText === 'SE' && destinoText === 'MT') {
        aliquotaInter = 12; 
    } else if (origemText === 'SE' && destinoText === 'MS') {
        aliquotaInter = 12; 
    } else if (origemText === 'SE' && destinoText === 'MG') {
        aliquotaInter = 12; 
    } else if (origemText === 'SE' && destinoText === 'PA') {
        aliquotaInter = 12; 
    } else if (origemText === 'SE' && destinoText === 'PB') {
        aliquotaInter = 12; 
    } else if (origemText === 'SE' && destinoText === 'PR') {
        aliquotaInter = 12; 
    } else if (origemText === 'SE' && destinoText === 'PE') {
        aliquotaInter = 12; 
    } else if (origemText === 'SE' && destinoText === 'PI') {
        aliquotaInter = 12; 
    } else if (origemText === 'SE' && destinoText === 'RN') {
        aliquotaInter = 12; 
    } else if (origemText === 'SE' && destinoText === 'RS') {
        aliquotaInter = 12; 
    } else if (origemText === 'SE' && destinoText === 'RJ') {
        aliquotaInter = 12; 
    } else if (origemText === 'SE' && destinoText === 'RO') {
        aliquotaInter = 12; 
    } else if (origemText === 'SE' && destinoText === 'RR') {
        aliquotaInter = 12; 
    } else if (origemText === 'SE' && destinoText === 'SC') {
        aliquotaInter = 12; 
    } else if (origemText === 'SE' && destinoText === 'SP') {
        aliquotaInter = 12; 
    } else if (origemText === 'SE' && destinoText === 'SE') {
        aliquotaInter = 18; 
    } else if (origemText === 'SE' && destinoText === 'TO') {
        aliquotaInter = 12; 
    } else if (origemText === 'TO' && destinoText === 'AC') {
        aliquotaInter = 12; 
    } else if (origemText === 'TO' && destinoText === 'AL') {
        aliquotaInter = 12; 
    } else if (origemText === 'TO' && destinoText === 'AM') {
        aliquotaInter = 12; 
    } else if (origemText === 'TO' && destinoText === 'AP') {
        aliquotaInter = 12; 
    } else if (origemText === 'TO' && destinoText === 'BA') {
        aliquotaInter = 12; 
    } else if (origemText === 'TO' && destinoText === 'CE') {
        aliquotaInter = 12; 
    } else if (origemText === 'TO' && destinoText === 'DF') {
        aliquotaInter = 12; 
    } else if (origemText === 'TO' && destinoText === 'ES') {
        aliquotaInter = 12; 
    } else if (origemText === 'TO' && destinoText === 'GO') {
        aliquotaInter = 12; 
    } else if (origemText === 'TO' && destinoText === 'MA') {
        aliquotaInter = 12; 
    } else if (origemText === 'TO' && destinoText === 'MT') {
        aliquotaInter = 12; 
    } else if (origemText === 'TO' && destinoText === 'MS') {
        aliquotaInter = 12; 
    } else if (origemText === 'TO' && destinoText === 'MG') {
        aliquotaInter = 12; 
    } else if (origemText === 'TO' && destinoText === 'PA') {
        aliquotaInter = 12; 
    } else if (origemText === 'TO' && destinoText === 'PB') {
        aliquotaInter = 12; 
    } else if (origemText === 'TO' && destinoText === 'PR') {
        aliquotaInter = 12; 
    } else if (origemText === 'TO' && destinoText === 'PE') {
        aliquotaInter = 12; 
    } else if (origemText === 'TO' && destinoText === 'PI') {
        aliquotaInter = 12; 
    } else if (origemText === 'TO' && destinoText === 'RN') {
        aliquotaInter = 12; 
    } else if (origemText === 'TO' && destinoText === 'RS') {
        aliquotaInter = 12; 
    } else if (origemText === 'TO' && destinoText === 'RJ') {
        aliquotaInter = 12; 
    } else if (origemText === 'TO' && destinoText === 'RO') {
        aliquotaInter = 12; 
    } else if (origemText === 'TO' && destinoText === 'RR') {
        aliquotaInter = 12; 
    } else if (origemText === 'TO' && destinoText === 'SC') {
        aliquotaInter = 12; 
    } else if (origemText === 'TO' && destinoText === 'SP') {
        aliquotaInter = 12; 
    } else if (origemText === 'TO' && destinoText === 'SE') {
        aliquotaInter = 12; 
    } else if (origemText === 'TO' && destinoText === 'TO') {
        aliquotaInter = 18; 
    } else {
        aliquotaInter = 0;
    };

    return aliquotaInter;

};

function calculoComplemento() { // funçao para calcular o valor do ICMS ST

    var origemText = origemSelect.options[origemSelect.selectedIndex].text; // obter o valor dentro do elemento 'option' no html

    var destinoText = destinoSelect.options[destinoSelect.selectedIndex].text; // obter o valor dentro do elemento 'option' no html

    var base = document.querySelector('#base').value; // valor do elemento 'input' com id '#base' (valor para base de calculo)
    
    var ipi = document.querySelector('#ipi').value; // valor do elemento 'input' com id '#ipi' (valor do ipi)

    if (ipi === '') {
        ipi = 0;
    } else {
        ipi = ipi;
    };
    
    var frete = document.querySelector('#frete').value; // valor do elemento 'input' com id '#frete' (valor do frete)

    if (frete === '') {
        frete = 0;
    } else {
        frete = frete;
    };
    
    var seguro = document.querySelector('#seguro').value; // valor do elemento 'input' com id '#seguro' (valor do seguro)

    if (seguro === '') {
        seguro = 0;
    } else {
        seguro = seguro;
    };
    
    var despesa = document.querySelector('#despesa').value; // valor do elemento 'input' com id '#despesa' (valor das despesas)

    if (despesa === '') {
        despesa = 0;
    } else {
        despesa = despesa;
    };
    
    var desconto = document.querySelector('#desconto').value; // valor do elemento 'input' com id '#desconto' (valor dos descontos)

    if (desconto === '') {
        desconto = 0;
    } else {
        desconto = desconto;
    };
    
    var mva = document.querySelector('#mva').value; // valor do elemento 'input' com id '#mva' (valor da aliquota de MVA)

    if (mva === '') {
        mva = -0;
    } else {
        mva = mva;
    };

    var valorOrigem = carregarOrigem(); // valor da aliquota de origem

    var valorDestino = carregarDestino(); // valor da aliquota de destino

    var valorInter = interestadual(); // valor da aliquota interestadual

    if (base === '' && origemText === 'UF' && destinoText === 'UF') {

        window.alert('Preencha pelo menos o "Valor do Produto" e selecione a UF de origem e destino!');

    } else if (base === '') {

        window.alert('Preencha o "Valor do Produto"!');

    } else if (origemText === 'UF' && destinoText === 'UF') {

        window.alert('Selecione a UF de origem e destino!');

    } else if (origemText === 'UF') {

        window.alert('Selecione a UF de origem!');

    } else if (destinoText === 'UF') {

        window.alert('Selecione a UF de destino!');

    } else {

        var calculoBaseInter = (parseInt(base) + parseInt(frete) + parseInt(seguro) + parseInt(despesa) - parseInt(desconto)); // base de calculo para o valor do ICMS
    
        var valorICMS = calculoBaseInter * (parseInt(valorInter) / 100); // valor do ICMS
        
        var calculoBaseST = (parseInt(base) + parseInt(ipi) + parseInt(frete) + parseInt(seguro) + parseInt(despesa) - parseInt(desconto)) * (1 + (parseInt(mva) / 100)); // base de calculo para o valor do ICMS ST
        
        var valorST = (calculoBaseST * (parseInt(valorDestino) / 100)) - valorICMS; // valor do ICMS ST

        document.querySelector('#resultado').innerHTML = `\
            <div id="tabelaResultadoCompleto" class="tabelas">\
                <table>\
                    <tr>\
                        <td>Valor do Produto:</td>\
                        <td>R$ ${base}</td>\
                    </tr>\
                    <tr>\
                        <td>Valor do IPI:</td>\
                        <td>R$ ${ipi}</td>\
                    </tr>\
                    <tr>\
                        <td>Valor do Frete:</td>\
                        <td>R$ ${frete}</td>\
                    </tr>\
                    <tr>\
                        <td>Valor das Despesas:</td>\
                        <td>R$ ${despesa}</td>\
                    </tr>\
                    <tr>\
                        <td>Valor dos Descontos:</td>\
                        <td>R$ ${desconto}</td>\
                    </tr>\
                    <tr>\
                        <td>Alíquota MVA:</td>\
                        <td>${mva}%</td>\
                    </tr>\
                    <tr>\
                        <td>Alíquota ${origemText}:</td>\
                        <td>${valorOrigem}%</td>\
                    </tr>\
                    <tr>\
                        <td>Alíquota ${destinoText}:</td>\
                        <td>${valorDestino}%</td>\
                    </tr>\
                    <tr>\
                        <td>Alíquota InterEstadual:</td>\
                        <td>${valorInter}%</td>\
                    </tr>\
                    <tr>\
                        <td>Base de Cálculo:</td>\
                        <td>R$ ${calculoBaseST}</td>\
                    </tr>\
                    <tr>\
                        <td>Valor do ICMS ST:</td>\
                        <td>R$ ${valorST}</td>\
                     </tr>\
                </table>\
                <button name="novo" id="novo" onclick="complemento()">Recalcular</button>\
            </div>\
            <div id="memoriaCompleta" class="memoria">\
                <h2>Memória de Cálculo:</strong></h2>\
                <p>Base do ICMS Interestadual = (${base} + ${frete} + ${seguro} + ${despesa} - ${desconto})</p>\
                <p>Valor do ICMS Interestadual = ${calculoBaseInter} x (${valorInter}% / 100)</p>\
                <p>Base do ICMS-ST = (${base} + ${ipi} + ${frete} + ${seguro} + ${despesa} - ${desconto}) x (1 + (${mva}% / 100))</p>\
                <p>Valor do ICMS-ST = (${calculoBaseST} x (${valorDestino}% / 100)) - ${valorICMS}</p>\
                <p>Valor do ICMS-ST = ${valorST}</p>\
            </div>`; // elemento 'table' e 'p' do html com os resultados

    };
    
};
