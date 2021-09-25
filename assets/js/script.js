function tabelaIMC() {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    function troca(string) {
        return string.replace(',', '.');
    }

    function calculoIMC(peso, altura) {
        return peso / (altura**2);
    }

    function resultadoIMC(imc){
        if(imc < 18.5) return 'Abaixo do Peso';
        else if (imc >= 18.5 && imc < 25) return 'Peso Normal';
        else if (imc >= 25 && imc < 30) return 'Sobrepeso';
        else if (imc >= 30 && imc < 35) return 'Obesidade grau 1';
        else if (imc >= 35 && imc < 40) return 'Obesidade grau 2';
        else if (imc >= 40) return 'Obesidade grau 3';
    }

    function recebeEventoForm(evento) {
        evento.preventDefault();

        let peso = form.querySelector('.input-peso');
        let altura = form.querySelector('.input-altura');
        peso = parseFloat(troca(peso.value));
        altura = parseFloat(troca(altura.value));

        if (!peso) {
            resultado.innerHTML = `<label class="invalido">Peso inválido.</label>`;
        } else if (!altura) {
            resultado.innerHTML = `<label class="invalido">Altura inválida.</label>`;
        } else {
            let imc = calculoIMC(peso, altura);
            let tipo_resultado = resultadoIMC(imc);

            resultado.innerHTML = `<label class="valido">Seu IMC é ${imc.toFixed(2)} (${tipo_resultado})</label>`;
        }

    }

    form.addEventListener('submit', recebeEventoForm);
}

tabelaIMC();