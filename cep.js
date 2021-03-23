function endereco() {
    var cep = document.getElementById("cep");
    var url = "https://viacep.com.br/ws/" + cep.value + "/json/";
    


    var rua = document.getElementById("rua");
    var bairro = document.getElementById("bairro");
    var cidade = document.getElementById("cidade");
    var uf = document.getElementById("uf");
    var ibge = document.getElementById("ibge");

    fetch(url, { method: 'GET' })
        .then(response => {
            response.json()
                .then(data => {

                    rua.value = data.rua;
                    bairro.value = data.bairro;
                    cidade.value = data.cidade;
                    uf.value = data.uf;
                    ibge.value = data.ibge;
                })
        })
        .catch(err => {
            rua.value = "";
            bairro.value = "";
            cidade.value = "";
            uf.value = "";
            ibge.value = "";
            alert("CEP não encontrado");

        })
}


function limpa_formulario_cep() {
    //Limpa valores do formulário de cep.
    document.getElementById('cep').value = ("");
    document.getElementById('rua').value = ("");
    document.getElementById('bairro').value = ("");
    document.getElementById('cidade').value = ("");
    document.getElementById('uf').value = ("");
    document.getElementById('ibge').value = ("");
}


