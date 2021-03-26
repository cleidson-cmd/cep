function endereco() {
    var cep = document.getElementById("cep");
    var url = "https://viacep.com.br/ws/" + cep.value + "/json/";



    var logradouro = document.getElementById("logradouro");
    var bairro = document.getElementById("bairro");
    var localidade = document.getElementById("localidade");
    var uf = document.getElementById("uf");  
    var ibge = document.getElementById("ibge");
    var ddd = document.getElementById("ddd");

    fetch(url, { method: 'GET' })
        .then(response => {
            response.json()
                .then(data => {

                    logradouro.value = data.logradouro;
                    bairro.value = data.bairro;
                    localidade.value = data.localidade;
                    uf.value = data.uf;
                    ibge.value = data.ibge;
                    ddd.value = data.ddd;
                })
        })
        .catch(err => {
            logradouro.value = "";
            bairro.value = "";
            localidade.value = "";
            uf.value = "";
            ibge.value = "";
            ddd.value = "";
            alert("CEP não encontrado");

        })
}


function limpa_formulario_cep() {
    //Limpa valores do formulário de cep.
    document.getElementById('cep').value = ("");
    document.getElementById('logradouro').value = ("");
    document.getElementById('bairro').value = ("");
    document.getElementById('localidade').value = ("");
    document.getElementById('uf').value = ("");
    document.getElementById('ibge').value = ("");
    document.getElementById('ddd').value = ("");
}


