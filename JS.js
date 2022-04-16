function corrigir() {
    let ponto = 0;
    let porcentagem = 0;
    document.querySelector(".hide").style.display = "block";
    let camText = document.getElementById("texto").value;
    document.getElementById("nome").innerHTML = "Nome: " + camText;
    let camTextArea = document.getElementById("q2").value;

    let camSel = document.getElementById("q1").value;
    if (camSel == "Informática"){
        ponto = ponto + 1;
        porcentagem = porcentagem + 20;
    }

    let result = camTextArea.includes("Administração, Informática e Enfermagem")
    if(result){
        ponto = ponto+1;
        porcentagem = porcentagem + 20;
    }

    let camCheckBin = document.getElementById("check2");
    let camCheckHex = document.getElementById("check4");
  
    if (camCheckBin.checked && camCheckHex.checked) {
      ponto = ponto+1;
      porcentagem = porcentagem + 20;
    }
  
    if (document.getElementById("con").checked) {
      ponto = ponto + 1;
      porcentagem = porcentagem + 20;
    }

    if (document.getElementById("ver").checked) {
      ponto = ponto + 1;
      porcentagem = porcentagem + 20;
    }

    document.getElementById("corretas").innerHTML = "Acertou: " + ponto +" de 5";
    document.getElementById("percentual").innerHTML = "Percentual: " + porcentagem +"%";
  }