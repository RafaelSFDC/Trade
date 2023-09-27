// const url = "https://api.redetrade.com.br/"
const url = "http://localhost:3000/"

// ------------------------------ CONSTANTES ------------------------------
const categoriaSelect = document.getElementById("categoria");
const form = document.getElementById("cadastroForm");
const imageInput = document.getElementById("img_path");
const cardsContainer = document.getElementById('cardsContainer');
const ofertas = document.getElementById('ofertas');
const minhasOfertas = document.getElementById('minhasOfertas');
const categoriasPage = document.getElementById('categoriasPage');
const subCategoriasPage = document.getElementById('subCategoriasPage');
const agenciasLista = document.getElementById('agenciasLista');
// ---------- PLANOS
const associados = document.getElementById('associados');
const agencias = document.getElementById('agencias');
const gerentes = document.getElementById('gerentes');
const btnCadastrar = document.querySelector(".btn-cadastrar");

// ------------------------------ CADASTRAR OFERTAS ------------------------------
if (form) {
  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    // Obtén el valor del cookie
    var cookies = document.cookie.split(";");
    var usuarioId = null;

    for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i].trim();
      if (cookie.indexOf("usuarioId=") === 0) {
        usuarioId = cookie.substring("usuarioId=".length, cookie.length);
        break;
      }
    }

    const formData = new FormData(form);
    formData.append("idAgencia", usuarioId);

    const method = "POST";
    const page = "ofertas";
    apiHandler(method, page, formData);
    for (const pair of formData.entries()) {
      console.log(`${pair[0]}: ${pair[1]}`);
    }
  });
}

// ---------- PEGAR A IMAGEM ----------
if (imageInput) {
  imageInput.addEventListener("change", function (event) {
    // Obtém o elemento da imagem selecionada
    var imgElement = document.getElementById("imagem-selecionada");

    // Verifica se o usuário selecionou um arquivo
    if (event.target.files.length > 0) {

      // Obtém o arquivo selecionado pelo usuário
      var file = event.target.files[0];
      console.log(file)

      // Cria um URL temporário para a imagem selecionada
      var imageURL = URL.createObjectURL(file);
      console.log("img_url", imageURL)

      // Define o URL temporário como o atributo src da tag img
      imgElement.src = imageURL;

    } else {
      // Caso o usuário não tenha selecionado um arquivo, exibe a imagem padrão
      imgElement.src = "/assets/img/default_img.png";
    }
  });
}

// ---------- CARREGAR CATEGORIAS ----------
if (categoriaSelect) {
  const apiUrl = `${url}categorias/`;
  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      // Processa os dados JSON recebidos

      data.forEach((categoria) => {
        // Obtém a referência para o elemento <select>
        const categoriaSelect = document.getElementById("categoria");
        // Cria um elemento de opção
        const optionCategoria = document.createElement("option");
        // Define o texto da opção como o nome do plano
        optionCategoria.textContent = categoria.nome;
        // Define o valor da opção como o ID do plano
        optionCategoria.value = categoria.nome;
        // Adiciona a opção ao elemento <select>
        categoriaSelect.appendChild(optionCategoria);
      });
    })
    .catch((error) => console.error("Erro:", error));
}

//-------------------- REQUISIÇÃO API --------------------
async function apiHandler(method, page, body) {
  const destination = `${url}${page}`
  // Fazer uma requisição à sua API para obter os dados
  if (method === "GET") {
    fetch(destination)
      .then(response => response.json())
      .then(data => {
        // Chamar a função para gerar os cards com os dados obtidos
        gerarCards(data.ofertas);
      })
      .catch(error => console.error('Erro ao obter dados da API:', error));
  }

  if (method === "POST") {
    fetch(destination, {
      method: "POST",
      headers: {},
      body: body,
    })
      .then((response) => {
        if (!response.ok) {
          return response.json();
        }
      })
      .then((data) => {
        if (data && data.error) {
          console.log("Error from server:", data.error);
        } else {
          setTimeout(() => {
            location.reload();
          }, 5000);
        }
      })
      .catch((error) => {
        console.error("Erro ao enviar requisição:", error);
        // Realizar tratamento de erro, se necessário...
      });

  }

}

// Função para gerar as divs para cada objeto
function gerarCards(ofertas) {
  for (const oferta of ofertas) {
    const cardDiv = document.createElement('div');
    cardDiv.innerHTML = `
    <div class="container p-0 d-flex flex-column justify-content-center align-items-center" style="width: 352px;height: auto;border: 1px solid #dddddd;background-color:#fff;margin-top:20px;!important">
    <div class="row  m-0 p-0" style="width:100%;">
      <div class="col p-0 m-0 d-flex justify-content-center align-items-center">
          <img src="${url}/${oferta.imagem}" class="img-fluid" style="width:100%;height: 250px;">
      </div>
    </div>
    <div class="row w-100 p-0 m-0 produto">
      <div class="col-7 p-0  d-flex justify-content-start align-items-start">
        <span class="text-center" style="background-color: #550389;color: #efefef;margin-top: -25px;font-size: 18px;padding-top: 10px; font-weight: 400">
          <strong>${oferta.tipo}</strong> 
        </span>
      </div>
      <div class="col-5 p-0 m-0 d-flex justify-content-end align-items-center" style="margin-top:3px;">
          <p class=" m-0" style="color: #747474;font-size:0.9rem; padding-top: 5px; padding-right: 15px";>
              ${oferta.estado}
          <img src="./imagens/flagofBrazil_6577.png" class="img-fluid" style=" width: 17px; height: 17px;">
          </p>
      </div>
    </div>
    <div class="row w-100 oferta" style="margin-top: 18px;">
      <p class="h6">Expira em</p>
    </div>
    <div class="row w-100 oferta d-flex justify-content-center align-items-center">
      <div class="col-3 text-center d-flex justify-content-center align-items-center" style="background-color: #6EC1E4;">
        <div>
          <p class="p-0 m-0" id="dia" style="margin-right: 5px;color: #efefef;">00</p>
          <p class="p-0 m-0" id="textoDias" style="margin-right: 5px;font-size: 15px;color: #efefef;">Dias</p>
        </div>
      </div>
      <div class="col-3 text-center d-flex justify-content-center align-items-center" style="background-color: #6EC1E4;">
        <div>
          <p class="p-0 m-0" id="horas" style="margin-right: 5px;color: #efefef;">00</p>
          <p class="p-0 m-0" id="textoHoras" style="margin-right: 5px;font-size: 15px;color: #efefef;">Horas</p>
        </div>
      </div>
      <div class="col-3 text-center d-flex justify-content-center align-items-center" style="background-color: #6EC1E4;">
        <div>
          <p class="p-0 m-0" id="minutos" style="margin-right: 5px;color: #efefef;">00</p>
          <p class="p-0 m-0" id="textoMinutos" style="margin-right: 5px;font-size: 15px;color: #efefef;">Minutos</p>
        </div>
      </div>
      <div class="col-3 text-center d-flex justify-content-center align-items-center" style="background-color: #6EC1E4;">
        <div>
          <p class="p-0 m-0" id="segundos" style="margin-right: 5px;color: #efefef;">00</p>
          <p class="p-0 m-0" id="textoSegundos" style="margin-right: 5px;font-size: 15px;color: #efefef;">Segundos</p>
        </div>
      </div>
      
    </div>
    <div class="row p-0 m-0 w-100 oferta" style="margin-top:15px!important;">
      <div class="col p-0 m-0">
          <p class="text-sm" style="color: #747474;font-size: 1rem;font-weight: 700;margin-left:10px;">
            ${oferta.titulo}
          </p>
      </div>
    </div>
    <div class="row p-0 m-0 w-100 oferta" style="margin-top:11px!important;">
      <div class="col p-0 m-0">
          <p class="text-sm" style="color: #747474;font-size: 1rem;margin-left:10px;">
            ${oferta.descricao}
          </p>
      </div>
    </div>
    <div class="row p-0 m-0 w-100 text-center" style="margin-top:25px!important;">
      <div class="col">
          <p class="text-sm p-0 m-0 h1" style="color: #747474;font-size: 2rem;">
            ${oferta.valor}
          </p>
      </div>
    </div>
    <div class="row w-100" style="margin-top:20px;margin-bottom:20px;">
      <div class="col m-0 p-0 d-flex flex-row justify-content-center align-items-center">
          <a type="button" href="/agencias/matriz/ofertas/info/" class="btn text-white fw-bold" style="width: 278px;height: 40px;line-height: 0.1;background-color: #FF6600;border-radius: 5px;padding: 10px 0px 10px 0px;font-size: 15px; margin-bottom: 11px">Ver Mais</a>
      </div>
    </div>
  </div>
    `;

    // Adicione a estrutura do card no contêiner
    cardsContainer.appendChild(cardDiv);

    // Chame a função para calcular a contagem regressiva para esta oferta
    calcularContagemRegressiva(oferta.vencimento, cardDiv);
  }

}

// ---------- Calcular Contagem Regressiva ----------
function calcularContagemRegressiva(dataDeEntrega, cardDiv) {
  setInterval(() => {
    const dataAtual = new Date();
    const diferencaEmMilissegundos = Math.max(new Date(dataDeEntrega) - dataAtual, 0);
    const dias = Math.floor(diferencaEmMilissegundos / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferencaEmMilissegundos % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferencaEmMilissegundos % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferencaEmMilissegundos % (1000 * 60)) / 1000);
    cardDiv.querySelector('#dia').textContent = padLeft(dias, 2);
    cardDiv.querySelector('#horas').textContent = padLeft(horas, 2);
    cardDiv.querySelector('#minutos').textContent = padLeft(minutos, 2);
    cardDiv.querySelector('#segundos').textContent = padLeft(segundos, 2);
  }, 1000);
}
function padLeft(value, length) {
  return String(value).padStart(length, '0');
}
// ---------- Calcular Contagem Regressiva ----------



// ------------------------------ FUNÇÕES DOS CONTROLADORES ------------------------------
// ----- Open the edit popup
function openPopupEdit(plano, page) {
  const modal = $("#myModal");
  modal.modal("show");

  const salvarAlteracoesBtn = document.getElementById("salvar-alteracoes-btn");

  if (page === "categorias") {
    const categoria = document.getElementById("nomeDaCategoriaModal");
    categoria.value = plano.nome;

    salvarAlteracoesBtn.addEventListener("click", () => {
      const data = {
        nome: categoria.value,
      };
      updateRow(plano, page, data);
    });
  } else if (page === "planos") {
    const nome = document.getElementById("nomeDoPlanoModal");
    const porcentagem = document.getElementById("porcentagemModal");
    nome.value = plano.nome;
    porcentagem.value = plano.porcentagem;

    salvarAlteracoesBtn.addEventListener("click", () => {
      const data = {
        nome: nome.value,
        porcentagem: porcentagem.value,
      };
      updateRow(plano, page, data);
    });
  } else if (page === "ofertas") {
    const titulo = document.getElementById("tituloModal");
    const tipo = document.getElementById("tipoModal");
    const valor = document.getElementById("valorModal");
    titulo.value = plano.titulo
    tipo.value = plano.tipo
    valor.value = plano.valor

    salvarAlteracoesBtn.addEventListener("click", () => {
      const data = {
        titulo: titulo.value,
        tipo: tipo.value,
        valor: valor.value,
      };
      updateRow(plano, page, data);
    });
  }

  function updateRow(plano, page, data) {
    const { id } = plano;
    const apiUrl = `${url}${page}/${id}`;

    fetch(apiUrl, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then(() => {
        showAlert("Update successful!", "success");
        setTimeout(() => {
          location.reload();
        }, 4000);
      })
      .catch((error) => {
        console.error("Error sending request:", error);
      });
  }
}
// ----- Alerta no popup de editar
function showAlert(message, type) {
  var alert = document.createElement("div");
  alert.classList.add("alert", "alert-" + type);
  alert.innerHTML = message;

  var container = document.querySelector(".alert");
  container.insertBefore(alert, container.firstChild);

  setTimeout(function () {
    alert.remove();
  }, 3000);
}
// ----- Alerta no cadastro
function showAlertCadastro(message, type) {
  var alert = document.createElement("div");
  alert.classList.add("alert", "alert-" + type);
  alert.innerHTML = message;

  var container = document.querySelector(".alerta");
  container.insertBefore(alert, container.firstChild);

  setTimeout(function () {
    alert.remove();
  }, 3000);
}
//----- Cria a data atual do cadastro
function formatDate() {
  const currentDate = new Date();
  const formattedDate = `${currentDate.getDate().toString().padStart(2, "0")}/${(currentDate.getMonth() + 1).toString().padStart(2, "0")}/${currentDate.getFullYear()}`;
  const dataDeCriacao = document.getElementById("dataDeCriacao");
  dataDeCriacao.value = formattedDate;
  return formattedDate
}
// ----- Cria a tabela
function createTableRow(categoria, page) {
  const row = document.createElement("tr");

  if (page === "ofertas") {

    // const dataCell = document.createElement("td");
    // const formattedData = formatData(categoria.createdAt);
    // dataCell.textContent = formattedData;
    // row.appendChild(dataCell);

    const tituloCell = document.createElement("td");
    tituloCell.textContent = categoria.titulo;
    row.appendChild(tituloCell);

    const tipoCell = document.createElement("td");
    tipoCell.textContent = categoria.tipo;
    row.appendChild(tipoCell);

    const agenciaCell = document.createElement("td");
    agenciaCell.textContent = categoria.valor;
    row.appendChild(agenciaCell);

    const operationsCell = document.createElement("td");
    operationsCell.className = "text-right align-middle d-flex justify-content-end";
    operationsCell.style.gap = "0.1rem";

    const editButton = createButton("bi-pencil", "btn-purple");
    editButton.addEventListener("click", function () {
      openPopupEdit(categoria, page);
    });
    operationsCell.appendChild(editButton);

    const deleteButton = createButton("bi-trash3", "btn-danger");
    deleteButton.addEventListener("click", function () {
      deleteTableRow(categoria, page);
    });
    operationsCell.appendChild(deleteButton);

    row.appendChild(operationsCell);

    return row;
  } else {
    const dataCell = document.createElement("td");
    const formattedData = formatData(categoria.createdAt);
    dataCell.textContent = formattedData;
    row.appendChild(dataCell);

    const nomeDaCategoriaCell = document.createElement("td");
    nomeDaCategoriaCell.textContent = categoria.nome;
    row.appendChild(nomeDaCategoriaCell);

    if (categoria.porcentagem) {
      const porcentagemCell = document.createElement("td");
      porcentagemCell.textContent = categoria.porcentagem;
      row.appendChild(porcentagemCell);
    }

    const operationsCell = document.createElement("td");
    operationsCell.className = "text-right align-middle d-flex justify-content-end";
    operationsCell.style.gap = "0.1rem";

    const editButton = createButton("bi-pencil", "btn-purple");
    editButton.addEventListener("click", function () {
      openPopupEdit(categoria, page);
    });
    operationsCell.appendChild(editButton);

    const deleteButton = createButton("bi-trash3", "btn-danger");
    deleteButton.addEventListener("click", function () {
      deleteTableRow(categoria, page);
    });
    operationsCell.appendChild(deleteButton);

    row.appendChild(operationsCell);

    return row;
  }

}
//----- Diz quando a tabela foi criada
function formatData(date) {
  const formattedDate = new Date(date);
  return formattedDate.toLocaleDateString();
}
//----- Cria os Botões
function createButton(iconClass, buttonClass) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = `btn ${buttonClass} btn-sm`;
  button.innerHTML = `<i class="bi ${iconClass}"></i>`;
  button.style.color = "#fff";
  return button;
}
//----- Deleta a tabela selecionada
async function deleteTableRow(categoria, page) {
  const id = categoria.id;
  const apiUrl = `${url}${page}/${id}`;
  try {
    fetch(apiUrl, {
      method: 'DELETE'
    })
      .then(response => {
        if (response.ok) {
          console.log('Data deleted successfully.');
        } else {
          console.error('Error deleting data.');
        }
      })
    location.reload();
  } catch (error) {
    console.error("Erro ao enviar requisição:", error);
  }
}


// ------------------------------ CONTROLADOR DAS LISTAS DE OFERTAS ------------------------------
// --------- CONDIÇÕES
if (ofertas) {
  ofertasHandler("ofertas")
} else if (minhasOfertas) {
  ofertasHandler("ofertas/minhas/5")
}
// --------- FUNÇÕES
async function ofertasHandler(page) {
  const apiUrl = `${url}${page}`;

  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };


  const response = await fetch(apiUrl, options);
  const responseData = await response.json();

  const tableBody = document.querySelector("tbody");
  tableBody.innerHTML = "";
  responseData.ofertas.forEach((categoria) => {
    const row = createTableRow(categoria, "ofertas");
    tableBody.appendChild(row);
  });
}


// ------------------------------ CONTROLADOR DOS PLANOS ------------------------------
// --------- CONDIÇÕES
if (associados) {
  const plan = "Associado"
  const page = "planos/tipo"
  plansHandler(plan)
  createPlans(plan)
} else if (agencias) {
  const plan = "Agencia"
  plansHandler(plan)
  createPlans(plan)
} else if (gerentes) {
  const plan = "Gerente"
  plansHandler(plan)
  createPlans(plan)
}
// --------- FUNÇÕES
async function createPlans(plan) {
  btnCadastrar.addEventListener("click", async () => {
    const nome = document.querySelector("#nomeDoPlano").value;
    const porcentagem = document.querySelector("#porcentagem").value;
    const dataDeCriacao = document.querySelector("#dataDeCriacao").value;
    const tipo = plan;
    const data = {
      nome,
      porcentagem,
      dataDeCriacao,
      tipo,
    };
    const apiUrl = `${url}planos`;
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    try {
      const response = await fetch(apiUrl, options);
      if (response.ok) {
        showAlertCadastro("Plano cadastrado com sucesso!", "success");
        setTimeout(() => {
          location.reload();
        }, 4000);
      } else {
        console.log("Erro na requisição.");
      }
    } catch (error) {
      console.log("Erro na requisição:", error);
    }
  });
}
async function plansHandler(plans) {
  formatDate();
  const apiUrl = `${url}planos/tipo`;
  const data = {
    tipo: plans,
  };
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };


  const response = await fetch(apiUrl, options);
  const responseData = await response.json();

  const tableBody = document.querySelector("tbody");
  tableBody.innerHTML = "";

  responseData.forEach((categoria) => {
    const row = createTableRow(categoria, "planos");
    tableBody.appendChild(row);
  });

}

// ------------------------------ CONTROLADOR DAS CATEGORIAS ------------------------------
// --------- CONDIÇÕES
if (categoriasPage) {
  categoriasHandler("categorias")
    .catch((error) => console.error("Erro:", error));
} else if (subCategoriasPage) {

}
// --------- FUNÇÕES
async function categoriasHandler(category) {
  formatDate();
  const apiUrl = `${url}${category}`;
  const response = await fetch(apiUrl);
  const data = await response.json();

  const tableBody = document.querySelector("tbody");
  tableBody.innerHTML = "";

  data.forEach((categoria) => {
    const row = createTableRow(categoria, "categorias");
    tableBody.appendChild(row);
  });
}

// ------------------------------ CONTROLADOR DAS AGÊNCIAS ------------------------------
// --------- CONDIÇÕES
if (agenciasLista) {
  agenciasHandler("agencias")
}

// --------- FUNÇÕES
async function agenciasHandler(page) {
  // const apiUrl = `${url}${page}`;

  // const options = {
  //   method: "GET",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  // };


  // const response = await fetch(apiUrl, options);
  // const responseData = await response.json();

  // const tableBody = document.querySelector("tbody");
  // tableBody.innerHTML = "";
  // responseData.ofertas.forEach((categoria) => {
  //   const row = createTableRow(categoria, "ofertas");
  //   tableBody.appendChild(row);
  // });

  const url = 'http://localhost:3000/usuarios/tipo/meus/1';

  const dadosParaEnviar = {
    tipos: ["Comum", "Matriz", "Master"],
    pagina: 0,
    tamanho: 4
  };

  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(dadosParaEnviar)
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Erro ao fazer a solicitação.');
      }
      return response.json();
    })
    .then(data => {
      console.log(data.itensPaginados);
    })
    .catch(error => {
      console.error('Erro:', error);
    });

}