//variavel pra pegar dados
const frm = document.querySelector("form");
//variaveis pra resposta
const resp = document.querySelector("#resp");
const respNome = document.querySelector("#respNome");
const respSobrenome = document.querySelector("#respSobrenome");
const respTitulo = document.querySelector("#respTitulo");
const respDescricao = document.querySelector("#respDescricao");
const respTelefone = document.querySelector("#respTelefone");
const respEmail = document.querySelector("#respEmail");

//evento enviar o formulario
frm.addEventListener("submit", (e) => {
  e.preventDefault(); //previnir o envio
  //variaveis inicias
  const nome = frm.elements["nome"].value;
  const sobrenome = frm.elements["sobrenome"].value;
  const titulo = frm.elements["titulo"].value;
  const email = frm.elements["email"].value;
  const telefone = frm.elements["telefone"].value;
  const descricao = frm.elements["descricao"].value;

  //variavel pra confirmação
  var erro = 0;

  //aviso caso falte alguma coisa
  if (nome == "") {
    respNome.style.display = "block";
    frm.elements["nome"].focus();
    erro += 1;
  } else {
    respNome.style.display = "none";
  }

  if (sobrenome == "") {
    respSobrenome.style.display = "block";
    frm.elements["sobrenome"].focus();
    erro += 1;
  } else {
    respSobrenome.style.display = "none";
  }

  if (titulo == "") {
    respTitulo.style.display = "block";
    frm.elements["titulo"].focus();
    erro += 1;
  } else {
    respTitulo.style.display = "none";
  }

  if (email == "") {
    respEmail.style.display = "block";
    frm.elements["email"].focus();
    erro += 1;
  } else {
    respEmail.style.display = "none";
  }

  if (telefone == "") {
    respTelefone.style.display = "block";
    frm.elements["nome"].focus();
    erro += 1;
  } else {
    respTelefone.style.display = "none";
  }

  if (descricao == "") {
    respDescricao.style.display = "block";
    frm.elements["descricao"].focus();
    erro += 1;
  } else {
    respDescricao.style.display = "none";
  }

  if (erro == 0) {
    //aviso de sucesso
    resp.style.display = "block";
    resp.style.margin = "5px";
    // Limpar os campos
    frm.reset();
  } else {
    resp.style.display = "none";
  }
});

//botao para diminuir a fonte

function diminuir() {
  var paragrafos = document.querySelectorAll("p, h1, h2, h3, h4, h5, li, a,  label, input, textarea");

  paragrafos.forEach(function (elemento) {
    var estilos = window.getComputedStyle(elemento, null);
    var tamanho = parseInt(estilos.getPropertyValue("font-size"));

    //limitar quanto cada um vai diminuir
    if (elemento.tagName === "H1") {
      const tamanhoMinimo = 39;
      if (tamanho > tamanhoMinimo) {
        tamanho -= 1;
        elemento.style.fontSize = tamanho + "px";
      }
    }
    if (elemento.tagName === "P") {
      const tamanhoMinimo = 14;
      if (tamanho > tamanhoMinimo) {
        tamanho -= 1;
        elemento.style.fontSize = tamanho + "px";
      }
    }
    if (elemento.tagName === "H2") {
      const tamanhoMinimo = 26;
      if (tamanho > tamanhoMinimo) {
        tamanho -= 1;
        elemento.style.fontSize = tamanho + "px";
      }
    }
    if (elemento.tagName === "H3") {
      const tamanhoMinimo = 19;
      if (tamanho > tamanhoMinimo) {
        tamanho -= 1;
        elemento.style.fontSize = tamanho + "px";
      }
    }
    if (elemento.tagName === "H4") {
      const tamanhoMinimo = 10;
      if (tamanho > tamanhoMinimo) {
        tamanho -= 1;
        elemento.style.fontSize = tamanho + "px";
      }
    }
    if (elemento.tagName === "H5") {
      const tamanhoMinimo = 10;
      if (tamanho > tamanhoMinimo) {
        tamanho -= 1;
        elemento.style.fontSize = tamanho + "px";
      }
    }
    if (elemento.tagName === "LI") {
      const tamanhoMinimo = 10;
      if (tamanho > tamanhoMinimo) {
        tamanho -= 1;
        elemento.style.fontSize = tamanho + "px";
      }
    }
    if (elemento.tagName === "A") {
      const tamanhoMinimo = 10;
      if (tamanho > tamanhoMinimo) {
        tamanho -= 1;
        elemento.style.fontSize = tamanho + "px";
      }
    }
    if (elemento.tagName === "LABEL") {
      const tamanhoMinimo = 10;
      if (tamanho > tamanhoMinimo) {
        tamanho -= 1;
        elemento.style.fontSize = tamanho + "px";
      }
    }
    if (elemento.tagName === "INPUT") {
      const tamanhoMinimo = 10;
      if (tamanho > tamanhoMinimo) {
        tamanho -= 1;
        elemento.style.fontSize = tamanho + "px";
      }
    }
    if (elemento.tagName === "TEXTAREA") {
      const tamanhoMinimo = 10;
      if (tamanho > tamanhoMinimo) {
        tamanho -= 1;
        elemento.style.fontSize = tamanho + "px";
      }
    }
  });
}

//botao para aumentar a fonte
function aumentar() {
  var paragrafos = document.querySelectorAll("p, h1, h2, h3, h5, li, a, input, label");

  paragrafos.forEach(function (elemento) {
    var estilos = window.getComputedStyle(elemento, null);
    var tamanho = parseInt(estilos.getPropertyValue("font-size"));

    //limitar quanto cada um vai aumentar
    if (elemento.tagName === "H1") {
      const tamanhoMaximo = 60;
      if (tamanho < tamanhoMaximo) {
        tamanho += 1;
        elemento.style.fontSize = tamanho + "px";
      }
    }
    if (elemento.tagName === "P") {
      const tamanhoMaximo = 35;
      if (tamanho < tamanhoMaximo) {
        tamanho += 1;
        elemento.style.fontSize = tamanho + "px";
      }
    }
    if (elemento.tagName === "H2") {
      const tamanhoMaximo = 47;
      if (tamanho < tamanhoMaximo) {
        tamanho += 1;
        elemento.style.fontSize = tamanho + "px";
      }
    }
    if (elemento.tagName === "H3") {
      const tamanhoMaximo = 40;
      if (tamanho < tamanhoMaximo) {
        tamanho += 1;
        elemento.style.fontSize = tamanho + "px";
      }
    }
    if (elemento.tagName === "H4") {
      const tamanhoMaximo = 40;
      if (tamanho < tamanhoMaximo) {
        tamanho += 1;
        elemento.style.fontSize = tamanho + "px";
      }
    }
    if (elemento.tagName === "H5") {
      const tamanhoMaximo = 40;
      if (tamanho < tamanhoMaximo) {
        tamanho += 1;
        elemento.style.fontSize = tamanho + "px";
      }
    }
    if (elemento.tagName === "LI") {
      const tamanhoMaximo = 31;
      if (tamanho < tamanhoMaximo) {
        tamanho += 1;
        elemento.style.fontSize = tamanho + "px";
      }
    }
    if (elemento.tagName === "A") {
      const tamanhoMaximo = 31;
      if (tamanho < tamanhoMaximo) {
        tamanho += 1;
        elemento.style.fontSize = tamanho + "px";
      }
    }
    if (elemento.tagName === "LABEL") {
      const tamanhoMaximo = 31;
      if (tamanho < tamanhoMaximo) {
        tamanho += 1;
        elemento.style.fontSize = tamanho + "px";
      }
    }
    if (elemento.tagName === "INPUT") {
      const tamanhoMaximo = 31;
      if (tamanho < tamanhoMaximo) {
        tamanho += 1;
        elemento.style.fontSize = tamanho + "px";
      }
    }
    if (elemento.tagName === "TEXTAREA") {
      const tamanhoMaximo = 31;
      if (tamanho < tamanhoMaximo) {
        tamanho += 1;
        elemento.style.fontSize = tamanho + "px";
      }
    }
  });
}

function funMenu() {
  var btnMenu = document.getElementById("btnMenu");
  var navBar = document.getElementById("navBar");
  var listNavBar = document.getElementById("listNavBar");

  if (btnMenu.innerHTML == "Menu") {
    btnMenu.innerHTML = "Fechar";
    btnMenu.style.marginBottom = "10px";

    navBar.style.display = "block";
    listNavBar.style.display = "block";
  } else {
    btnMenu.innerHTML = "Menu";
    btnMenu.style.marginBottom = "0px";

    navBar.style.display = "";
    listNavBar.style.display = "";
  }
}

window.onresize = function () {
  if (
    screen.width > 900 &&
    document.getElementById("btnMenu").innerHTML == "Fechar"
  ) {
    listNavBar.style.display = "flex";
  } else if (
    screen.width <= 900 &&
    document.getElementById("btnMenu").innerHTML == "Fechar"
  ) {
    listNavBar.style.display = "block";
  }
};
