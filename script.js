var resultado = document.querySelector('.hidden')

let simulador = () => {

    console.log('fui clicado')
    let jurosAnual = document.getElementById('tax')
    let anosFinanciado = document.getElementById('periodYears')

    
    calcula(anosFinanciado.valueAsNumber, jurosAnual.valueAsNumber)
    resultado.classList.remove('hidden')
    resultado.classList.add('show')



}



let calcula = (anos, jurosAnual) => {
    let inputMeses = document.getElementById('prestacoes')
    var calculoMeses = anos * 12;
    inputMeses.valueAsNumber = calculoMeses

    let inputJurosMensal = document.getElementById('jurosam')
    let calculoJurosMes = Math.pow((1 + jurosAnual), (1/12)) - 1;
    inputJurosMensal.valueAsNumber = calculoJurosMes;


    let tbody = document.querySelector("#tabela-prestacoes");
    let inputJurosAcumulado = document.getElementById('jurostotal')
    let calculoJurosAcumulado = 0;
    let valorFinanciado = document.getElementById('value').valueAsNumber
    let amortizacao = valorFinanciado / calculoMeses;
    for (var index = 0; index < calculoMeses; index++) {
        var saldoDevedor = valorFinanciado - index * amortizacao;
        var jurosPrestacao = saldoDevedor * calculoJurosMes;
       calculoJurosAcumulado += jurosPrestacao

       if (index < 5) {
        var totalPrestacao = jurosPrestacao + amortizacao;
        var tr = tbody.children[index];
        tr.children[1].textContent = amortizacao.toFixed(2);
        tr.children[2].textContent = jurosPrestacao.toFixed(2);
        tr.children[3].textContent = totalPrestacao.toFixed(2);
       }
        
    }
    inputJurosAcumulado.valueAsNumber = calculoJurosAcumulado.toFixed(2);


}

const botaoSimula = document.querySelector('[data-button]')
botaoSimula.addEventListener('click', simulador)


