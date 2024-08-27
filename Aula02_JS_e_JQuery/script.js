function validar(){}
    nome = document.getElementById("txtNome").value;
    pResult = document.getElementById("pResult");

    if (nome.length == 0){
        pResult.innerHTML = "O campo nome é obrigatório";
        pResult.style.backgroundColor = "#f00";
        return false;
    }else{
        pResult.innerHTML = "Formulario Validade";
        pResult.style.backgroundColor = "#0f0";
        return true;
    }

        function somar(){}
        nome = document.getElementById("txtNome").value;
        pResult = document.getElementById("pResult");

        if (nome.length == 0){
            pResult.innerHTML = "O campo nome é obrigatório";
            pResult.style.backgroundColor = "#f00";
            return false;
        }else{
            pResult.innerHTML = "Formulario Validade";
            pResult.style.backgroundColor = "#0f0";
            return true;
        }