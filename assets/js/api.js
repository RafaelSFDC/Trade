// const url = "http://147.135.72.49:3000/"
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
const cardsAssociados = document.getElementById('cardsAssociados');
// ---------- LISTAS
const agenciasLista = document.getElementById('agenciasLista');
const associadosLista = document.getElementById('associadosLista');
const gerentesLista = document.getElementById('gerentesLista');
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
    var usuarioId = 5;

    for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i].trim();
      if (cookie.indexOf("usuarioId=") === 0) {
        usuarioId = cookie.substring("usuarioId=".length, cookie.length);
        break;
      }
    }

    const formData = new FormData(form);
    formData.append("idAgencia", 3);
    formData.append("usuarioId", "5");

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
          <img src="${url}${oferta.imagem.replace(/\\/g, '/')}" class="img-fluid" style="width:100%;height: 250px;">
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
  function createOperators(row, categoria, page) {

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
  }
  function createCell(value) {
    const cell = document.createElement("td");
    cell.textContent = value
    row.appendChild(cell)
  }

  if (page === "ofertas") {
    createCell(categoria.titulo)
    createCell(categoria.tipo)
    createCell(categoria.valor)
    createOperators(row, categoria, page)
    return row;
  }
  else if (page === "agencias") {
    createCell(categoria.nome)
    createCell(categoria.dadosEnderecos.estado)
    createCell(categoria.conta)
    createCell(categoria.email)
    createCell(categoria.statusConta)
    createCell(categoria.dadosAgencias.nomeAgencia)
    createOperators(row, categoria, page)
    return row;
  }
  else {
    const dataCell = document.createElement("td");
    const formattedData = formatData(categoria.createdAt);
    dataCell.textContent = formattedData;

    row.appendChild(dataCell);
    createCell(categoria.nome)
    if (categoria.porcentagem) {
      createCell(categoria.porcentagem)
    }
    createOperators(row, categoria, page)
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

// ------------------------------ CONTROLADOR DE ASSOCIADOS E AGÊNCIA ------------------------------
// --------- CONDIÇÕES
if (agenciasLista) {
  usuariosHandler("Agencias")
} else if (associadosLista) {
  usuariosHandler("Associados")
} else if (gerentesLista) {
  usuariosHandler("Gerente")
}
// --------- FUNÇÕES
async function usuariosHandler(page) {
  var request = []
  if (page === "Agencias") {
    request = ["Comum", "Matriz", "Master"]
  } else if (page === "Associados") {
    request = ["Associado"]
  } else if (page === "Gerente") {
    request = ["Gerente"]
  }

  const data = {
    tipos: request,
    pagina: 0,
    tamanho: 4
  };

  const apiUrl = `${url}usuarios/tipo/meus/1`;

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

  responseData.itensPaginados.forEach((agencia) => {
    console.log("Logando a Agencia", agencia)
    const row = createTableRow(agencia, "agencias");
    tableBody.appendChild(row);
  });

}


// ------------------------------ CARDS ASSOCIADOS ------------------------------
// --------- CONDIÇÕES
if (cardsAssociados) {
  // Chama a função para carregar os cards iniciais quando a página carregar
  carregarCardsIniciais();
}
// ----- Carrega as páginas
async function carregarCardsIniciais() {
  const apiUrl = `${url}usuarios/tipo/meus/1`;
  const tiposParaFiltrar = ["Associado"];

  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ tipos: tiposParaFiltrar, pagina: 0, tamanho: 50 }),
    });

    const data = await response.json();

    const container = document.querySelector(".cards .row");
    container.innerHTML = ""; // Remove os cards existentes do container

    if (data.hasOwnProperty("message")) {
      const h1 = document.createElement("h5");
      h1.textContent = "Sem associados cadastrados";
      container.appendChild(h1);
    } else {
      data.itensPaginados.forEach((agencia) => {
        adicionarCard(agencia); // Usa a função para adicionar o card
      });
    }
  } catch (error) {
    console.error("Erro ao obter os dados da API:", error);
  }
}
function adicionarCard(agencia) {
  console.log("agencia", agencia);
  const imagemUrl = agencia.imagem
    ? `${url}${agencia.imagem.replace(/\\/g, "/")}`
    : "/assets/img/default_img.png";
  const container = document.querySelector(".cards .row");
  // Criação do novo componente
  const newComponent = document.createElement("div");
  newComponent.innerHTML = `
    <div class="container p-0 d-flex flex-column justify-content-center align-items-center" style="width: 357px;height: 100%;border: 1px solid #dddddd;background-color:#fff;margin-top:20px;">
      <div class="row m-0 p-0" style="width:100%;">
        <div class="col p-0 m-0 d-flex justify-content-center align-items-center">
            <img src="${imagemUrl}" class="img-fluid" style="width:80S%;height: 200px;">
        </div>
      </div>
      <div class="row w-100" style="margin-top:15px;">
        <div class="col-7 d-flex justify-content-start align-items-start">
            <i class="fa fa-tags" aria-hidden="true" style="color: #550389;font-size:0.9rem;margin-top:5px;"></i>
            <p class="text-sm m-0 p-0" style="color: #747474;margin-left:5px!important;">
                ${agencia.dadosGerais.categoria}
            </p>
        </div>
        <div class="col-5 d-flex justify-content-end align-items-center">
            <p class="text-sm" style="color: #747474;">
                ${agencia.dadosEnderecos.estado}
            <img src="imagens/flagofBrazil_6577.png" class="img-fluid" style="width: 17px;height: 17px;">
            </p>
        </div>
      </div>
      <div class="row p-0 m-0 w-100" style="margin-top:11px!important;">
        <div class="col">
            <p class="text-sm p-0 m-0" style="color: #747474;font-size: 1rem;font-weight: 500;">
              ${agencia.dadosGerais.nomeFantasia}
            </p>
        </div>
      </div>
      <div class="row container p-0" style="margin-top:16px!important;">
        <div class="col w-100 d-flex justify-content-center align-items-center ">
            <button class="btn btn-sm text-white" style="width:100%; height: 30px;line-height: 0.2;background-color: #6EC1E4;text-align:start;padding-left:15px;">Atendendo</button>
        </div>
      </div>
      <div class="row container p-0" style="margin-top:20px!important;">
        <div class="col">
            <p class="text-sm" style="color: #747474;font-size: 1rem;">
              ${agencia.dadosGerais.descricao}
            </p>
        </div>
      </div>
      <div class="row w-100 pr-3 pl-3">
        <div class=" p-0 m-0 d-flex flex-column justify-content-center align-items-center" style="background-color:#efefef;">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#550389" class="bi bi-globe matriz" viewBox="0 0 16 16" style="color:#550389;">
              <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4H4.09zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5h2.49zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5H4.847zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5H4.51zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12H5.145zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5H3.82zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068H8.5zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5h2.49zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4h2.355z"/>
            </svg>
            <p class="text-sm mt-2 fw-bold p-0 m-0" style="font-size: 0.7rem;color: #550389;">
              ${agencia.dadosAgencias.nomeAgencia}
            </p>
        </div>
        
        <div class="  d-flex flex-column  align-items-center name" style="background-color:#efefef;">
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#550389" class=" person bi bi-universal-access-circle" viewBox="0 0 16 16" style="margin-top:17px;">
              <path d="M8 4.143A1.071 1.071 0 1 0 8 2a1.071 1.071 0 0 0 0 2.143Zm-4.668 1.47 3.24.316v2.5l-.323 4.585A.383.383 0 0 0 7 13.14l.826-4.017c.045-.18.301-.18.346 0L9 13.139a.383.383 0 0 0 .752-.125L9.43 8.43v-2.5l3.239-.316a.38.38 0 0 0-.047-.756H3.379a.38.38 0 0 0-.047.756Z"/>
              <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0ZM1 8a7 7 0 1 1 14 0A7 7 0 0 1 1 8Z"/>
            </svg>
            <p class="text-sm mt-2 fw-bold" style="font-size: 0.7rem;color: #550389;">Adriano Garcia</p>
        </div>
        <div class=" p-0 m-0 d-flex flex-column justify-content-center align-items-center" style="background-color:#efefef;">
          <i aria-hidden="true" class="fab fa-whatsapp contato" style="font-size: 1.8rem;margin-top:15px;color:#550389;"></i>
          <a href="#" class="link-unstyled">
                <p class="text-sm mt-1 fw-bold change-color" style="font-size: 0.7rem;color: #550389;">Contato</p>
            </a>
        </div>
        <div class=" p-0 m-0 d-flex flex-column justify-content-center align-items-center" style="background-color:#efefef;">
          <i aria-hidden="true" class="fab fa-edge web" style="font-size: 1.8rem;margin-top:15px;color:#550389;"></i>
          <a href="#" class="link-unstyled">
                <p class="text-sm mt-1 fw-bold change-color" style="font-size: 0.7rem;color: #550389;">Site</p>
            </a>
        </div>
      </div>
      <div class="row w-100" style="margin-top:20px;margin-bottom:20px;">
        <div class="col m-0 p-0 d-flex flex-row justify-content-end align-items-center">
            <a href="./info/index.html?id=${agencia.id}" type="button" class="btn text-white fw-bold" style="width: 65px;height: 20px;line-height: 0.1;background-color: #FF6600;border-radius: 3px;padding: 10px 0px 15px 0px;margin-right: 15px;font-size: 0.8rem;">Ver +</a>
        </div>
      </div>
    </div>
    `;
  container.appendChild(newComponent);
}

// ------------------------------ ASSOCIADOS INFO ------------------------------
// Obtém a URL atual
const infoUrl = window.location.href;

// Extrai o parâmetro 'id' da URL
const urlParams = new URLSearchParams(new URL(infoUrl).search);
const associadoId = urlParams.get('id');
// Agora, 'associadoId' contém o ID do associado obtido da URL
console.log('ID do Associado:', associadoId);
if (associadoId) {
  console.log("fetching")
  associadosInfo(associadoId)
}

async function associadosInfo(associadoId) {


  const apiUrl = `http://localhost:3000/usuarios/meus-dados/${associadoId}`;

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error('Erro ao obter dados da API');
    }

    const data = await response.json();
    function putValue(id, value) {
      // Garante que a primeira letra do ID seja maiúscula
      const idMaiusculo = id.charAt(0).toUpperCase() + id.slice(1);

      // Concatena o ID e o valor no formato desejado
      const fusao = `${idMaiusculo}: ${value}`;

      document.getElementById(id).innerText = fusao
    }

    // Atualizar os elementos HTML com os dados obtidos
    putValue('site', data.dadosContatos.site)
    putValue('telefone', data.telefone)
    putValue('email', data.email)
    putValue('telefone', data.dadosContatos.celular)
    putValue('endereço', data.dadosEnderecos.logradouro)
    putValue('bairro', data.dadosEnderecos.bairro)
    putValue('cidade', data.dadosEnderecos.cidade)

    // Mudar 


    document.getElementById("categoria").innerText = data.dadosGerais.categoria
    document.getElementById("restricao").innerText = data.dadosGerais.restricao
    document.getElementById("atendimento").innerText = data.dadosOperacoes.tipoOperacao
    document.getElementById("descricao").innerText = data.dadosGerais.descricao
    document.getElementById("nome").innerText = data.nome

    // Substituir o src da imagem
    const imagemElement = document.getElementById('imagem');
    const imagemUrl = `${url}${data.imagem}`;
    imagemElement.src = imagemUrl;  // Supondo que 'data.imagem' seja a URL da imagem

    console.log('Dados obtidos:', data);
  } catch (error) {
    console.error('Erro ao obter dados da API:', error);
  }
}

// //  Script para carregar categorias
// document.addEventListener("DOMContentLoaded", function () {
//   // Monta a URL da requisição GET com o parâmetro idAgencia incluindo o usuarioId
//   const apiUrl = `${url}categorias`;

//   fetch(apiUrl)
//     .then((response) => response.json())
//     .then((data) => {
//       // Processa os dados JSON recebidos

//       data.forEach((categoria) => {
//         // Cria uma linha na tabela para cada transação
//         //console.log('Categoria', categoria);
//         // Obtém a referência para o elemento <select>
//         const categoriaSelect =
//           document.getElementById("selectCategoria");
//         // Cria um elemento de opção
//         const optionCategoria = document.createElement("option");
//         // Define o texto da opção como o nome do plano
//         optionCategoria.textContent = categoria.nome;
//         // Define o valor da opção como o ID do plano
//         optionCategoria.value = categoria.nome;
//         // Adiciona a opção ao elemento <select>
//         categoriaSelect.appendChild(optionCategoria);
//       });
//     })
//     .catch((error) => console.error("Erro:", error));
// });
// // Script carregar estados
// // Array com as siglas dos estados brasileiros (UF)
// const estadosBrasileirosUF = [
//   "AC",
//   "AL",
//   "AP",
//   "AM",
//   "BA",
//   "CE",
//   "DF",
//   "ES",
//   "GO",
//   "MA",
//   "MT",
//   "MS",
//   "MG",
//   "PA",
//   "PB",
//   "PR",
//   "PE",
//   "PI",
//   "RJ",
//   "RN",
//   "RS",
//   "RO",
//   "RR",
//   "SC",
//   "SP",
//   "SE",
//   "TO",
// ];
// estadosBrasileirosUF.forEach((estado) => {
//   // Obtém a referência para o elemento <select>
//   const estadoSelect = document.getElementById("selectEstado");
//   // Cria um elemento de opção
//   const optionEstado = document.createElement("option");
//   // Define o texto da opção como o nome do plano
//   optionEstado.textContent = estado;
//   // Define o valor da opção como o ID do plano
//   optionEstado.value = estado;
//   // Adiciona a opção ao elemento <select>
//   estadoSelect.appendChild(optionEstado);
// });
// // Script para carregar Agencias
// document.addEventListener("DOMContentLoaded", function () {
//   // Monta a URL da requisição GET com o parâmetro idAgencia incluindo o usuarioId
//   const apiUrl = `${url}usuarios/tipo`;
//   const tiposParaFiltrar = ["Master", "Comum", "Matriz", "Filial"];
//   fetch(apiUrl, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({ tipos: tiposParaFiltrar }),
//   })
//     .then((response) => response.json())
//     .then((data) => {
//       // Processa os dados JSON recebidos
//       //console.log(data);
//       data.usuarios.forEach((agencia) => {
//         // Obtém a referência para o elemento <select>
//         const agenciaSelect = document.getElementById("selectAgencia");
//         // Cria um elemento de opção
//         const optionAgencia = document.createElement("option");
//         // Define o texto da opção como o nome do plano
//         optionAgencia.textContent = agencia.dadosAgencias.nomeFranquia;
//         // Define o valor da opção como o ID do plano
//         optionAgencia.value = agencia.id;
//         // Adiciona a opção ao elemento <select>
//         agenciaSelect.appendChild(optionAgencia);
//       });
//     })
//     .catch((error) => console.error("Erro:", error));
// });
// Função para adicionar um único card ao container


// //  Script para filtrar e substituir os cards
// document.addEventListener("DOMContentLoaded", function () {
//   const btnLocalizar = document.getElementById("btnLocalizar");

//   btnLocalizar.addEventListener("click", function () {
//     const agencia = document.getElementById("selectAgencia").value;
//     const categoria = document.getElementById("selectCategoria").value;
//     const estado = document.getElementById("selectEstado").value;
//     const cidade = document.getElementById("selectCidade").value;
//     const dadosFiltro = {
//       agencia: agencia,
//       categoria: categoria,
//       estado: estado,
//       cidade: cidade,
//     };
//     const apiUrl = `${url}usuarios/filtro-associado`;

//     fetch(apiUrl, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(dadosFiltro),
//     })
//       .then((response) => response.json())
//       .then((resultado) => {
//         const container = document.querySelector(".cards .row");
//         container.innerHTML = ""; // Remove os cards existentes do container

//         if (resultado.hasOwnProperty("message")) {
//           const h1 = document.createElement("h3");
//           h1.textContent = "Sem associados encontrados";
//           container.appendChild(h1);
//         } else {
//           resultado.forEach((agencia) => {
//             adicionarCard(agencia); // Usa a função para adicionar o card filtrado
//           });
//         }
//       })
//       .catch((error) => {
//         console.error("Erro ao enviar requisição:", error);
//       });
//   });
// });