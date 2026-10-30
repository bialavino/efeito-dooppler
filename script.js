
function calcularDoppler() {

    // Receber os valores informados
    const vo = parseFloat(document.getElementById("observador").value);
    const vf = parseFloat(document.getElementById("fonte").value);
    const v = parseFloat(document.getElementById("som").value);
    const f = parseFloat(document.getElementById("frequencia").value);

    const movObservador = document.getElementById("movObservador").value;
    const movFonte = document.getElementById("movFonte").value;

    const resultado = document.getElementById("resultado");

    // Validar os dados
    if (
        !Number.isFinite(vo) ||
        !Number.isFinite(vf) ||
        !Number.isFinite(v) ||
        !Number.isFinite(f) ||
        vo < 0 || vf < 0 || v <= 0 || f <= 0
    ) {
        resultado.innerHTML = "Preencha todos os campos com valores válidos.";
        return;
    }

    // Definir os sinais conforme o movimento
    let velocidadeObservador =
        movObservador === "aproximando" ? vo : -vo;

    let velocidadeFonte =
        movFonte === "aproximando" ? -vf : vf;

    // Calcular o efeito Doppler
    const denominador = v + velocidadeFonte;

    if (denominador <= 0) {
        resultado.innerHTML = "Erro: velocidade da fonte inválida.";
        return;
    }

    const frequenciaPercebida =
        f * (v + velocidadeObservador) / denominador;

    // Exibir resultado
    resultado.innerHTML =
        "Frequência percebida:<br><br>" +
        frequenciaPercebida.toFixed(2) + " Hz";
}

