let divright = document.getElementById("div-right");
let trigger = document.getElementById("trigger");
let form = document.getElementById("form");
let signup = document.getElementById("signup");
/*MODAL*/
const modalButton = document.getElementById("modalButton");
const pageButton = document.getElementById("pageButton");
const popup = document.getElementById("popup");

trigger.addEventListener("click", () => {
  oppenPopup(popup);
});

window.addEventListener("resize", () => {
  checkWindow();
});

window.addEventListener("load", () => {
  checkWindow();
});

function getWidth() {
  return Math.max(
    document.body.scrollWidth,
    document.documentElement.scrollWidth,
    document.body.offsetWidth,
    document.documentElement.offsetWidth,
    document.documentElement.clientWidth
  );
}

// function checkWindow() {
//   windowSize = getWidth();
//   if (windowSize < 600) {
//     trigger.addEventListener("click", function (event) {
//       event.preventDefault();
//     });
//   } else {
//   }
//   console.log(windowSize);
// }

modalButton.addEventListener("click", () => {
  closePopup(popup);
});

function oppenPopup(popup) {
  if (popup == null) return;
  popup.classList.add("active");
  form.classList.add("disable");
  signup.classList.add("disable");
}

function closePopup(popup) {
  if (popup == null) return;
  popup.classList.remove("active");
  form.classList.remove("disable");
  signup.classList.remove("disable");
}

// Fetch

document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault(); // Evita o comportamento padrão do formulário

  var emailouconta = document.getElementById("emailouconta").value;
  var senha = document.getElementById("senha").value;

  var data = {
    emailouconta: emailouconta,
    senha: senha,
  };
  // Use a variável global apiBaseUrl definida no arquivo config.js
  const apiUrl = `${window.apiBaseUrl}/usuarios/login`;

  fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then(function (response) {
      //console.log('response', response);
      if (response.ok) {
        return response.json();
      } else {
        showAlertLogin(
          "Dados incorretos, Verifique espaços em branco ou Conta Bloqueada Entre em Contato com o Suporte.",
          "danger"
        );
        return;
      }
    })
    .then(function (data) {
      var tipoUsuario = data.tipo;
      var usuarioId = data.usuario.id; // ID do usuário retornado pela API
      // Criar o cookie com o ID do usuário
      document.cookie = "usuarioId=" + usuarioId;
      //console.log('data', data.usuario.id);
      //return;

      // Faça o que for necessário com o tipo de usuário retornado
      if (tipoUsuario == "Matriz") {
        // Redirecione para a página de administrador
        setTimeout(() => {
          window.location.href = "./agencias/matriz/dashboard-matriz.html"; // Redireciona para o URL especificado após o tempo de espera
        }, 3000);
      } else if (tipoUsuario == "Master") {
        // Redirecione para a página de cliente
        setTimeout(() => {
          window.location.href = "./agencias/master/dashboard-master.html"; // Redireciona para o URL especificado após o tempo de espera
        }, 3000);
      } else if (tipoUsuario == "Comum") {
        // Redirecione para a página de cliente
        setTimeout(() => {
          window.location.href = "./agencias/comum/dashboard-comum.html"; // Redireciona para o URL especificado após o tempo de espera
        }, 3000);
      } else if (tipoUsuario == "Gerente") {
        // Redirecione para a página de cliente
        setTimeout(() => {
          window.location.href = "./agencias/gerente/dashboard-gerente.html"; // Redireciona para o URL especificado após o tempo de espera
        }, 3000);
      } else if (tipoUsuario == "Associado") {
        // Redirecione para a página de cliente
        setTimeout(() => {
          window.location.href =
            "./agencias/associado/dashboard-associado.html"; // Redireciona para o URL especificado após o tempo de espera
        }, 3000);
      } else {
        // Tipo de usuário desconhecido
      }
    });
});
function showAlertLogin(message, type) {
  var alert = document.createElement("div");
  alert.classList.add("alert", "alert-" + type);
  alert.innerHTML = message;

  var container = document.querySelector("#form");
  container.insertBefore(alert, container.firstChild);

  setTimeout(function () {
    alert.remove();
  }, 3000);
}
