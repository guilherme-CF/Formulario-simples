function verificar() {
  var data = new Date();
  var ano = data.getFullYear();
  var fano = document.getElementById("txtano");
  let altura = document.getElementById("txtalt").value;
  res = document.querySelector("div#res");

  // Obter o valor da altura inserida pelo usuário
  var falt = altura;
  // Verificar se o valor é válido
  if (altura > 0 && altura <= 3.0) {
    // Exibir o resultado
    falt = altura;
  } else {
    // Se o valor for inválido, mostrar uma mensagem de erro
    window.alert("Por favor, insira uma altura válida (entre 1 cm e 3,00 m).");
  }

  if (fano.value.length == 0 || fano.value > ano) {
    window.alert("[ERRO] Verifique os dados!!");
  } else {
    var fsex = document.getElementsByName("radsex");
    var idade = ano - Number(fano.value);

    var genero = "";

    if (fsex[0].checked) {
      genero = "Masculino";
      if (idade >= 0 && idade < 10) {
        //criança
      } else if (idade < 21) {
        //jovem
      } else if (idade < 50) {
        //adulto
      } else {
        //idoso
      }
    } else if (fsex[1].checked) {
      genero = "Mulher";
      if (idade >= 0 && idade < 10) {
        //criança
      } else if (idade < 21) {
        //jovem
      } else if (idade < 50) {
        //adulto
      } else {
        //idoso
      }
    } else {
      genero = "Não Binario";
      if (idade >= 0 && idade < 10) {
        //criança
      } else if (idade < 21) {
        //jovem
      } else if (idade < 50) {
        //adulto
      } else {
        //idoso
      }
    }
    var fpais = document.getElementsByName("radpais");
    var nacionalidade = "";
    if (fpais[0].checked) {
      nacionalidade = "Brasileiro(a)";
    } else {
      nacionalidade = "Estrangeiro(a)";
    }

    res.innerHTML = `Detectamos uma pessoa de genero ${genero} com ${idade} anos, ${nacionalidade} de ${falt.replace(
      ".",
      ","
    )} m de altura`;
  }
}
