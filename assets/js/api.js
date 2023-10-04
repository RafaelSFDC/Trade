// const url = "http://147.135.72.49:3000/"
const url = "http://localhost:3000/"

function getId(id) { return document.getElementById(id) }
// ---------------------------------------------------------------------------------------------------------
// ---------------------------------------------- CONSTANTES -----------------------------------------------
// ---------------------------------------------------------------------------------------------------------
const imageInput = getId("img_path");
const cardsContainer = getId('cardsContainer');
const categoriaSelect = getId('categoria');
const planosSelect = getId('planosSelect');
const planosAssociadoSelect = getId('planosAssociadoSelect');
const subCategoriaSelect = getId('subCategoriaSelect')
const porcentagemPlano = getId('porcentagemPlano')
const gerentesSelect = getId('gerentesSelect')
const urlParams = new URLSearchParams(window.location.search);

// ---------- FORMULÁRIOS
const ofertasForm = getId("ofertasForm");
const transacoesForm = getId("transacoesForm");
const associadosForm = getId("associadosForm");
const gerenteForm = getId("gerenteForm");
const agenciaForm = getId("agenciaForm");
// ---------- CARDS
const ofertasCards = getId('ofertasCards');
const cardsAssociados = getId('cardsAssociados');
// ---------- CATEGORIAS
const categoriasForm = getId('categoriasForm');
// ---------- LISTAS
const agenciasLista = getId('agenciasLista');
const associadosLista = getId('associadosLista');
const gerentesLista = getId('gerentesLista');
const minhasOfertas = getId('minhasOfertas');
const excluirOfertas = getId('excluirOfertas');
const categoriasPage = getId('categoriasPage');
const subCategoriasPage = getId('subCategoriasPage');
const voucherList = getId('voucherList');
const meusVoucherList = getId('meusVoucherList');
// ---------- PLANOS
const associados = getId('associados');
const agencias = getId('agencias');
const gerentes = getId('gerentes');
const btnCadastrar = getId("cadastro");
// ---------- USUÁRIOS
const usuariosList = getId('usuariosLista');
const usuariosEdit = getId('usuariosEdit');
// ---------- TRANSAÇÃO
const transacoes = getId("transacoes")


// ---------------------------------------------------------------------------------------------------------
// ------------------------------------------------- LOGIN -------------------------------------------------
// ---------------------------------------------------------------------------------------------------------
// getId(login).addEventListener("click", () => {
//   const emailOuConta = getId(emailOuConta)
//   const password = getId(password)
//   const apiUrl = `${url}usuarios/login`
//   const data = {
//     emailouconta: emailOuConta,
//     senha: password
//   }
//   fetch(apiUrl, {
//     method: "PUT",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(data),
//   })
//     .then((response) => {
//       if (response.ok) {
//         // A resposta é bem-sucedida, redirecione o usuário para a outra página
//         window.location.href = `./agencias\matriz\dashboard-matriz.html`;
//       } else {
//         // Handle errors, se necessário
//         console.error("Erro na requisição:", response.statusText);
//       }
//     })
//     .catch((error) => {
//       console.error("Erro ao processar a requisição:", error);
//     });
// })


// ---------------------------------------------------------------------------------------------------------
// ------------------------------------------ FUNÇÕES UNIVERSAIS -------------------------------------------
// ---------------------------------------------------------------------------------------------------------
// ---------- PEGAR A IMAGEM ----------
if (imageInput) {
  imageInput.addEventListener("change", function (event) {
    // Obtém o elemento da imagem selecionada
    var imgElement = document.getElementById("imagem-selecionada");

    // Verifica se o usuário selecionou um arquivo
    if (event.target.files.length > 0) {

      // Obtém o arquivo selecionado pelo usuário
      var file = event.target.files[0];

      // Cria um URL temporário para a imagem selecionada
      var imageURL = URL.createObjectURL(file);

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
      data.forEach((categoria) => {
        const optionCategoria = document.createElement("option");
        optionCategoria.textContent = categoria.nome;
        optionCategoria.value = categoria.nome;
        optionCategoria.id = categoria.id;
        categoriaSelect.appendChild(optionCategoria);
      });
    })
    .catch((error) => console.error("Erro:", error));
}
// ---------- CARREGAR SUBCATEGORIAS ----------
if (subCategoriaSelect) {
  const apiUrl = `${url}subCategorias/`;

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      console.log("sub")
      data.forEach((categoria) => {
        const optionCategoria = document.createElement("option");
        optionCategoria.textContent = categoria.nome;
        optionCategoria.value = categoria.nome;
        optionCategoria.id = categoria.id;
        subCategoriaSelect.appendChild(optionCategoria);
      });
    })
    .catch((error) => console.error("Erro:", error));
}
// ---------- CARREGAR PLANOS ----------
if (planosSelect) {
  const apiUrl = `${url}planos`;
  console.log("working")
  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      data.forEach((categoria) => {
        const optionCategoria = document.createElement("option");
        optionCategoria.textContent = categoria.nome;
        optionCategoria.value = categoria.nome;
        optionCategoria.id = categoria.id;
        optionCategoria.name = categoria.porcentagem;
        planosSelect.appendChild(optionCategoria);
      });
    })
    .catch((error) => console.error("Erro:", error));
  if (porcentagemPlano) {
    planosSelect.addEventListener('change', (event) => {
      const idOpcaoSelecionada = event.target.options[event.target.selectedIndex].name;
      porcentagemPlano.value = idOpcaoSelecionada;
    });
  }
}
// ---------- CARREGAR PLANOS ASSOCIADO ----------
if (planosAssociadoSelect) {
  const apiUrl = `${url}planos/tipo`;
  console.log("working")
  body = {
    "tipo": "Associado"
  }

  fetch(apiUrl, {
    method: "POST",
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  })
    .then((response) => response.json())
    .then((data) => {
      data.forEach((categoria) => {
        const optionCategoria = document.createElement("option");
        optionCategoria.textContent = categoria.nome;
        optionCategoria.value = categoria.nome;
        optionCategoria.id = categoria.id;
        optionCategoria.name = categoria.porcentagem;
        planosAssociadoSelect.appendChild(optionCategoria);
      });
      console.log(data)
    })
    .catch((error) => {
      console.error("Erro ao enviar requisição:", error);
      // Realizar tratamento de erro, se necessário...
    });

  if (porcentagemPlano) {
    planosAssociadoSelect.addEventListener('change', (event) => {
      const idOpcaoSelecionada = event.target.options[event.target.selectedIndex].name;
      porcentagemPlano.value = idOpcaoSelecionada;
    });
  }

}
// ---------- CARREGAR GERENTES ----------
if (gerentesSelect) {
  const apiUrl = `${url}usuarios/tipo/meus/1`;
  console.log("working")
  body = {
    "tipos": ["Gerente"],
    "pagina": 0,
    "tamanho": 50
  }

  fetch(apiUrl, {
    method: "POST",
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  })
    .then((response) => response.json())
    .then((data) => {
      data.itensPaginados.forEach((categoria) => {
        const optionCategoria = document.createElement("option");
        optionCategoria.textContent = categoria.nome;
        optionCategoria.value = categoria.nome;
        optionCategoria.id = categoria.id;
        optionCategoria.name = categoria.porcentagem;
        gerentesSelect.appendChild(optionCategoria);
      });
      console.log(data)
    })
    .catch((error) => {
      console.error("Erro ao enviar requisição:", error);
      // Realizar tratamento de erro, se necessário...
    })
}

// FORMATA PRA JSON
function formDataToJson(formData) {
  const jsonObject = {};
  formData.forEach((value, key) => {
    jsonObject[key] = value;
  });
  return JSON.stringify(jsonObject);
}
// ---------------------------------------------------------------------------------------------------------
// --------------------------------------------- FORMULÁRIOS -----------------------------------------------
// ---------------------------------------------------------------------------------------------------------
// -------------------- REQUISIÇÃO API 
async function apiHandler(method, page, body) {
  var header = {}
  console.log(body)
  if (page === "transacoes" || page === "categorias" || page === "subCategorias") {
    header = { 'Content-Type': 'application/json' }
  }
  const destination = `${url}${page}`
  // Fazer uma requisição à sua API para obter os dados
  if (method === "GET") {
    fetch(destination)
      .then(response => response.json())
      .then(data => {
        // Chamar a função para gerar os cards com os dados obtidos
        gerarCards(data.itensPaginados);
        console.log(data)
      })
      .catch(error => console.error('Erro ao obter dados da API:', error));
  }

  if (method === "POST") {
    fetch(destination, {
      method: "POST",
      headers: header,
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
// ---------- CADASTRAR OFERTAS ----------
if (ofertasForm) {
  ofertasForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const formData = new FormData(ofertasForm);
    formData.append("id", "2");

    const method = "POST";
    const page = "ofertas";
    apiHandler(method, page, formData);
    for (const pair of formData.entries()) {
      console.log(`${pair[0]}: ${pair[1]}`);
    }
  });
}
// ---------- CADASTRAR TRANSAÇÕES 
if (transacoesForm) {
  transacoesForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const method = "POST";
    const page = "transacoes";
    const formTrasacao = new FormData(transacoesForm);
    formTrasacao.append("idComprador", 1);
    formTrasacao.append("idVendedor", 4);
    formTrasacao.append("voucher", 0);

    const formData = formDataToJson(formTrasacao);

    console.log(formData);
    apiHandler(method, page, formData);
  });
}
// ---------- CADASTRAR GERENTE
if (gerenteForm) {
  gerenteForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const method = "POST"
    const page = "usuarios/gerente"
    const formGerente = new FormData(gerenteForm);
    formGerente.append("statusConta", "1");
    formGerente.append("limiteCredito", "0");
    formGerente.append("saldoPermuta", "0");
    formGerente.append("tipoOperacao", "tipoOperacao");
    formGerente.append("tipoOperacaoTaxa", "tipoOperacaoTaxa");
    formGerente.append("idUsuario", "1");
    formGerente.append("dataDeAfiliacao", new Date());
    apiHandler(method, page, formGerente);
    // for (const pair of formGerente.entries()) {
    //   console.log(`${pair[0]}: ${pair[1]}`);
    // }
  });
}
// ---------- CADASTRAR AGENCIA
if (agenciaForm) {
  agenciaForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const method = "POST"
    const page = "usuarios/agencia"
    const formAgencia = new FormData(agenciaForm);
    formAgencia.append("statusConta", "1");
    formAgencia.append("saldoPermuta", "0");
    formAgencia.append("tipoOperacaoTaxa", "tipoOperacaoTaxa");
    formAgencia.append("idUsuario", "1");
    formAgencia.append("gerenteConta", 0);
    formAgencia.append("taxaGerenteConta", null);
    formAgencia.append("dataDeAfiliacao", new Date());
    apiHandler(method, page, formAgencia);
    for (const pair of formAgencia.entries()) {
      console.log(`${pair[0]}: ${pair[1]}`);
    }
  });
}
// ---------- CADASTRAR ASSOCIADO
if (associadosForm) {
  associadosForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const method = "POST"
    const page = "usuarios/associado"
    const formAssociados = new FormData(associadosForm);
    formAssociados.append("idUsuario", "1");

    console.log(formAssociados)

    apiHandler(method, page, formAssociados);
    for (const pair of formAssociados.entries()) {
      console.log(`${pair[0]}: ${pair[1]}`);
    }
  });
}
// ---------------------------------------------------------------------------------------------------------
// --------------------------------------- FUNÇÕES DOS CONTROLADORES ---------------------------------------
// ---------------------------------------------------------------------------------------------------------
// ----- Open the edit popup
function openPopupEdit(plano, page) {
  const modal = $("#myModal");
  modal.modal("show");
  console.log(plano)
  const salvarAlteracoesBtn = document.getElementById("salvar-alteracoes-btn");

  function setupEventListener(page, fields, plano, editUserId) {
    const data = {};


    const updateData = () => {
      fields.forEach((field) => {
        const element = document.getElementById(field.id);
        let value;

        // Verifica se é um input
        if (field.type === 'input') {
          value = element.value; // Obtém o valor do input
        }
        // Verifica se é um select
        else if (field.type === 'select') {
          value = element.options[element.selectedIndex].value; // Obtém o valor selecionado do select
        }

        data[field.dataKey] = value; // Armazena o valor no objeto de dados
      });
    };

    // Configura os valores dos inputs ou selects
    fields.forEach((field) => {
      const element = document.getElementById(field.id);

      // Configura o valor para um input ou select
      if (field.type === 'input' || field.type === 'select') {
        element.value = field.value(plano); // Define o valor do input ou select baseado no plano
      }
    });

    // Adiciona um event listener para o botão "Salvar Alterações"
    salvarAlteracoesBtn.addEventListener("click", () => {
      updateData(); // Atualiza os dados com os valores atuais dos inputs ou selects
      updateRow(plano, page, data, editUserId); // Chama a função para atualizar a linha
    });
  }

  // Exemplo para a página "categorias"
  if (page === "categorias") {
    const fields = [
      { id: "nomeDaCategoriaModal", dataKey: "nome", type: 'input', value: (plano) => plano.nome }
    ];
    setupEventListener(page, fields, plano);
  }
  // Exemplo para a página "planos"
  else if (page === "planos") {
    const fields = [
      { id: "nomeDoPlanoModal", dataKey: "nome", type: 'input', value: (plano) => plano.nome },
      { id: "porcentagemModal", dataKey: "porcentagem", type: 'input', value: (plano) => plano.porcentagem }
    ];
    setupEventListener(page, fields, plano);
  }
  // Exemplo para a página "ofertas"
  else if (page === "ofertas") {
    const fields = [
      { id: "tituloModal", dataKey: "titulo", type: 'input', value: (plano) => plano.titulo },
      { id: "tipoModal", dataKey: "tipo", type: 'input', value: (plano) => plano.tipo },
      { id: "valorModal", dataKey: "valor", type: 'input', value: (plano) => plano.valor }
    ];
    setupEventListener(page, fields, plano);
  }
  // Exemplo para a página "usuario"
  else if (page === "usuario") {
    const fields = [
      { id: "nomeModal", dataKey: "nome", type: 'input', value: (plano) => plano.nome },
      { id: "tipoModal", dataKey: "tipo", type: 'input', value: (plano) => plano.dadosGerais.tipo },
      { id: "emailModal", dataKey: "email", type: 'input', value: (plano) => plano.email },
      { id: "status", dataKey: "statusConta", type: 'select', value: (plano) => plano.statusConta }

    ];
    setupEventListener(page, fields, plano);
  }
  else if (page === "transacoes") {
    const fields = [
      { id: "vendedorModal", dataKey: "nomeVendedor", type: 'input', value: (plano) => plano.nomeVendedor },
      { id: "compradorModal", dataKey: "nomeComprador", type: 'input', value: (plano) => plano.nomeComprador },
      { id: "descricaoModal", dataKey: "descricao", type: 'input', value: (plano) => plano.descricao },
      { id: "statusModal", dataKey: "status", type: 'select', value: (plano) => plano.status },
      { id: "valorModal", dataKey: "valorRt", type: 'input', value: (plano) => plano.valorRt },

    ];
    setupEventListener(page, fields, plano);
  }
  // Exemplo para a página "usuario"
  else if (page === "agencias") {
    const fields = [
      { id: "razaoSocial", dataKey: "razaoSocial", type: 'input', value: (plano) => plano.dadosGerais.razaoSocial },
      { id: "nomeFantasia", dataKey: "tipo", type: 'input', value: (plano) => plano.dadosGerais.nomeFantasia },
      { id: "cnpj", dataKey: "cnpj", type: 'input', value: (plano) => plano.dadosGerais.cnpj },

      { id: "inscEstadual", dataKey: "inscEstadual", type: 'input', value: (plano) => plano.dadosGerais.inscEstadual },
      { id: "inscMunicipal", dataKey: "inscMunicipal", type: 'input', value: (plano) => plano.dadosGerais.inscMunicipal },
      { id: "mostrarNoSite", dataKey: "mostrarNoSite", type: 'select', value: (plano) => plano.dadosGerais.mostrarNoSite },
      { id: "tipo", dataKey: "tipo", type: 'input', value: (plano) => plano.dadosGerais.tipo },
      { id: "nomeContato", dataKey: "nomeContato", type: 'input', value: (plano) => plano.dadosContatos.nomeContato },
      { id: "telefone", dataKey: "telefone", type: 'input', value: (plano) => plano.dadosContatos.telefone },
      { id: "celular", dataKey: "celular", type: 'input', value: (plano) => plano.dadosContatos.celular },
      { id: "emailContato", dataKey: "emailContato", type: 'input', value: (plano) => plano.dadosContatos.emailContato },
      { id: "emailSecundario", dataKey: "emailSecundario", type: 'input', value: (plano) => plano.dadosContatos.emailSecundario },
      { id: "logradouro", dataKey: "logradouro", type: 'input', value: (plano) => plano.dadosEnderecos.logradouro },
      { id: "numero", dataKey: "numero", type: 'input', value: (plano) => plano.dadosEnderecos.numero },
      { id: "cep", dataKey: "cep", type: 'input', value: (plano) => plano.dadosEnderecos.cep },
      { id: "complemento", dataKey: "complemento", type: 'input', value: (plano) => plano.dadosEnderecos.complemento },
      { id: "bairro", dataKey: "bairro", type: 'input', value: (plano) => plano.dadosEnderecos.bairro },
      { id: "cidade", dataKey: "cidade", type: 'input', value: (plano) => plano.dadosEnderecos.cidade },
      { id: "regiao", dataKey: "regiao", type: 'input', value: (plano) => plano.dadosEnderecos.regiao },
      { id: "estado", dataKey: "estado", type: 'input', value: (plano) => plano.dadosEnderecos.estado },

      // AQUII
      { id: "planosSelect", dataKey: "planoDeInscricao", type: 'select', value: (plano) => plano.dadosAgencias.planoDeInscricao },
      { id: "porcentagemPlano", dataKey: "porcentagemPlanoDeInscricao", type: 'input', value: (plano) => plano.dadosAgencias.porcentagemPlanoDeInscricao },
      { id: "nomeFranquia", dataKey: "nomeFranquia", type: 'input', value: (plano) => plano.dadosAgencias.nomeFranquia },
      { id: "dataVencimentoFatura", dataKey: "statudataVencimentoFaturasConta", type: 'select', value: (plano) => plano.dadosOperacoes.dataVencimentoFatura },
      { id: "limiteCredito", dataKey: "limiteCredito", type: 'input', value: (plano) => plano.dadosOperacoes.limiteCredito },
      { id: "taxaRepasseMatriz", dataKey: "taxaRepasseMatriz", type: 'input', value: (plano) => plano.dadosOperacoes.taxaRepasseMatriz },

      { id: "tipoOperacao", dataKey: "tipoOperacao", type: 'input', value: (plano) => plano.dadosOperacoes.tipoOperacao },
      { id: "limiteCredito", dataKey: "limiteCredito", type: 'input', value: (plano) => plano.dadosOperacoes.limiteCredito },

      { id: "nome", dataKey: "nome", type: 'input', value: (plano) => plano.nome },
      { id: "cpf", dataKey: "cpf", type: 'input', value: (plano) => plano.cpf },
      { id: "email", dataKey: "email", type: 'input', value: (plano) => plano.email },
      { id: "imagem-selecionada", dataKey: "imagem", type: 'input', value: (plano) => plano.imagem },
    ];
    const newPage = `usuarios/agencia`
    const editUserId = 1
    setupEventListener(newPage, fields, plano, editUserId);
  }
  // Exemplo para a página "usuario"
  else if (page === "associados") {
    const fields = [
      { id: "razaoSocial", dataKey: "razaoSocial", type: 'input', value: (plano) => plano.dadosGerais.razaoSocial },
      { id: "nomeFantasia", dataKey: "tipo", type: 'input', value: (plano) => plano.dadosGerais.nomeFantasia },
      { id: "descricao", dataKey: "email", type: 'input', value: (plano) => plano.dadosGerais.descricao },
      { id: "restricoes", dataKey: "email", type: 'input', value: (plano) => plano.dadosGerais.restricao },
      { id: "statusConta", dataKey: "statusConta", type: 'select', value: (plano) => plano.statusConta },
      { id: "cnpj", dataKey: "cnpj", type: 'input', value: (plano) => plano.dadosGerais.cnpj },
      { id: "inscEstadual", dataKey: "inscEstadual", type: 'input', value: (plano) => plano.dadosGerais.inscEstadual },
      { id: "inscMunicipal", dataKey: "inscMunicipal", type: 'input', value: (plano) => plano.dadosGerais.inscMunicipal },
      { id: "mostrarNoSite", dataKey: "mostrarNoSite", type: 'select', value: (plano) => plano.dadosGerais.mostrarNoSite },
      // // // mexer aqui
      { id: "tipo", dataKey: "tipo", type: 'input', value: (plano) => plano.dadosGerais.tipo },
      { id: "nomeContato", dataKey: "nomeContato", type: 'input', value: (plano) => plano.dadosContatos.nomeContato },
      { id: "telefone", dataKey: "telefone", type: 'input', value: (plano) => plano.dadosContatos.telefone },
      { id: "celular", dataKey: "celular", type: 'input', value: (plano) => plano.dadosContatos.celular },
      { id: "emailContato", dataKey: "emailContato", type: 'input', value: (plano) => plano.dadosContatos.emailContato },
      { id: "emailSecundario", dataKey: "emailSecundario", type: 'input', value: (plano) => plano.dadosContatos.emailSecundario },
      { id: "site", dataKey: "site", type: 'input', value: (plano) => plano.dadosContatos.site },
      { id: "logradouro", dataKey: "logradouro", type: 'input', value: (plano) => plano.dadosEnderecos.logradouro },
      { id: "numero", dataKey: "numero", type: 'input', value: (plano) => plano.dadosEnderecos.numero },
      { id: "cep", dataKey: "cep", type: 'input', value: (plano) => plano.dadosEnderecos.cep },
      { id: "complemento", dataKey: "complemento", type: 'input', value: (plano) => plano.dadosEnderecos.complemento },
      { id: "bairro", dataKey: "bairro", type: 'input', value: (plano) => plano.dadosEnderecos.bairro },
      { id: "cidade", dataKey: "cidade", type: 'input', value: (plano) => plano.dadosEnderecos.cidade },
      { id: "regiao", dataKey: "regiao", type: 'input', value: (plano) => plano.dadosEnderecos.regiao },
      { id: "estado", dataKey: "estado", type: 'input', value: (plano) => plano.dadosEnderecos.estado },
      { id: "planosSelect", dataKey: "planoDeInscricao", type: 'select', value: (plano) => plano.dadosAgencias.planoDeInscricao },
      { id: "porcentagemPlano", dataKey: "porcentagemPlanoDeInscricao", type: 'input', value: (plano) => plano.dadosAgencias.porcentagemPlanoDeInscricao },
      { id: "dataVencimentoFatura", dataKey: "statudataVencimentoFaturasConta", type: 'select', value: (plano) => plano.dadosOperacoes.dataVencimentoFatura },
      { id: "limiteCredito", dataKey: "limiteCredito", type: 'input', value: (plano) => plano.dadosOperacoes.limiteCredito },
      { id: "gerenteConta", dataKey: "gerenteConta", type: 'select', value: (plano) => plano.dadosOperacoes.gerenteConta },
      { id: "taxaGerenteConta", dataKey: "taxaGerenteConta", type: 'input', value: (plano) => plano.dadosOperacoes.taxaGerenteConta },
      { id: "tipoOperacao", dataKey: "tipoOperacao", type: 'input', value: (plano) => plano.dadosOperacoes.tipoOperacao },
      { id: "limiteCredito", dataKey: "limiteCredito", type: 'input', value: (plano) => plano.dadosOperacoes.limiteCredito },
      { id: "limiteVendaMensal", dataKey: "limiteVendaMensal", type: 'input', value: (plano) => plano.dadosOperacoes.limiteVendaMensal },
      { id: "limiteVendaTotal", dataKey: "limiteVendaTotal", type: 'input', value: (plano) => plano.dadosOperacoes.limiteVendaTotal },
      { id: "aceitaOrcamento", dataKey: "aceitaOrcamento", type: 'select', value: (plano) => plano.dadosOperacoes.aceitaOrcamento },
      { id: "aceitaVoucher", dataKey: "aceitaVoucher", type: 'select', value: (plano) => plano.dadosOperacoes.aceitaVoucher },
      { id: "nome", dataKey: "nome", type: 'input', value: (plano) => plano.nome },
      { id: "cpf", dataKey: "cpf", type: 'input', value: (plano) => plano.cpf },
      { id: "email", dataKey: "email", type: 'input', value: (plano) => plano.email },
      { id: "imagem-selecionada", dataKey: "imagem", type: 'input', value: (plano) => plano.imagem },
    ];
    const newPage = `usuarios/associado`
    const editUserId = 1
    setupEventListener(newPage, fields, plano, editUserId);
  }
  else if (page === "gerente") {
    const fields = [
      { id: "razaoSocial", dataKey: "razaoSocial", type: 'input', value: (plano) => plano.dadosGerais.razaoSocial },
      { id: "nomeFantasia", dataKey: "tipo", type: 'input', value: (plano) => plano.dadosGerais.nomeFantasia },
      { id: "cnpj", dataKey: "cnpj", type: 'input', value: (plano) => plano.dadosGerais.cnpj },
      { id: "inscEstadual", dataKey: "inscEstadual", type: 'input', value: (plano) => plano.dadosGerais.inscEstadual },
      { id: "inscMunicipal", dataKey: "inscMunicipal", type: 'input', value: (plano) => plano.dadosGerais.inscMunicipal },
      { id: "nomeContato", dataKey: "nomeContato", type: 'input', value: (plano) => plano.dadosContatos.nomeContato },
      { id: "telefone", dataKey: "telefone", type: 'input', value: (plano) => plano.dadosContatos.telefone },
      { id: "celular", dataKey: "celular", type: 'input', value: (plano) => plano.dadosContatos.celular },
      { id: "emailContato", dataKey: "emailContato", type: 'input', value: (plano) => plano.dadosContatos.emailContato },
      { id: "emailSecundario", dataKey: "emailSecundario", type: 'input', value: (plano) => plano.dadosContatos.emailSecundario },
      { id: "logradouro", dataKey: "logradouro", type: 'input', value: (plano) => plano.dadosEnderecos.logradouro },
      { id: "numero", dataKey: "numero", type: 'input', value: (plano) => plano.dadosEnderecos.numero },
      { id: "cep", dataKey: "cep", type: 'input', value: (plano) => plano.dadosEnderecos.cep },
      { id: "complemento", dataKey: "complemento", type: 'input', value: (plano) => plano.dadosEnderecos.complemento },
      { id: "bairro", dataKey: "bairro", type: 'input', value: (plano) => plano.dadosEnderecos.bairro },
      { id: "cidade", dataKey: "cidade", type: 'input', value: (plano) => plano.dadosEnderecos.cidade },
      { id: "regiao", dataKey: "regiao", type: 'input', value: (plano) => plano.dadosEnderecos.regiao },
      { id: "estado", dataKey: "estado", type: 'input', value: (plano) => plano.dadosEnderecos.estado },
      { id: "planosSelect", dataKey: "planoDeInscricao", type: 'select', value: (plano) => plano.dadosAgencias.planoDeInscricao },
      { id: "porcentagemPlano", dataKey: "porcentagemPlanoDeInscricao", type: 'input', value: (plano) => plano.dadosAgencias.porcentagemPlanoDeInscricao },
      { id: "dataVencimentoFatura", dataKey: "statudataVencimentoFaturasConta", type: 'select', value: (plano) => plano.dadosOperacoes.dataVencimentoFatura },
      { id: "nome", dataKey: "nome", type: 'input', value: (plano) => plano.nome },
      { id: "cpf", dataKey: "cpf", type: 'input', value: (plano) => plano.cpf },
      { id: "email", dataKey: "email", type: 'input', value: (plano) => plano.email },
      { id: "imagem-selecionada", dataKey: "imagem", type: 'input', value: (plano) => plano.imagem },
    ];
    const newPage = `usuarios/gerente`
    const editUserId = 1
    setupEventListener(newPage, fields, plano, editUserId);
  }

  // Exemplo para uma página com um select
  if (page === "alguma_pagina_com_select") {
    const fields = [
      { id: "seuSelectModal", dataKey: "valorSelecionado", type: 'input', value: (plano) => plano.valorSelecionado }
    ];
    setupEventListener(page, fields, plano);
  }



  function updateRow(plano, page, data, editUserId) {
    const { id } = plano;
    var apiUrl = ""
    if (editUserId) {
      apiUrl = `${url}${page}/${id}/${editUserId}`;
    } else {
      apiUrl = `${url}${page}/${id}`;
    }
    console.log("dados enviados", data)
    console.log("Url Usada", apiUrl)

    fetch(apiUrl, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((response) => console.log("resposta do servidor", response))
      .then(() => {
        showAlert("Atualizado com sucesso!", "success");
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
  const alertElement = document.createElement("div");
  alertElement.classList.add("alert", "alert-" + type);
  alertElement.innerHTML = message;
  const container = document.querySelector(".alert");
  container.insertBefore(alertElement, container.firstChild);
  setTimeout(function () {
    alertElement.remove();
  }, 3000);
}
function showAlertCadastro(message, type) {
  // Create alert element
  let alertElement = document.createElement("div");
  alertElement.classList.add("alert", "alert-" + type);
  alertElement.innerHTML = message;

  // Get container element
  let container = document.querySelector(".alerta");

  // Insert alert as the first child of the container
  container.insertBefore(alertElement, container.firstChild);

  // Remove alert after 3 seconds
  setTimeout(function () {
    alertElement.remove();
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
  console.log(page)
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
    createCell(categoria.idAgencia)
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
  else if (page === "gerente") {
    createCell(categoria.nome)
    createCell(categoria.dadosEnderecos.estado)
    createCell(categoria.conta)
    createCell(categoria.email)
    createCell(categoria.statusConta)
    createCell(categoria.dadosAgencias.nomeAgencia)
    createOperators(row, categoria, page)
    return row;
  }
  else if (page === "associados") {
    createCell(categoria.nome)
    createCell(categoria.dadosEnderecos.estado)
    createCell(categoria.conta)
    createCell(categoria.email)
    createCell(categoria.statusConta)
    createCell(categoria.dadosAgencias.nomeAgencia)
    createOperators(row, categoria, page)
    return row;
  }
  else if (page === "usuario") {
    createCell(categoria.nome)
    createCell(categoria.dadosGerais.tipo)
    createCell(categoria.email)
    createCell(categoria.statusConta)
    createOperators(row, categoria, page)
    return row;
  }
  else if (page === "transacoes") {
    createCell(categoria.nomeVendedor)
    createCell(categoria.nomeComprador)
    createCell(categoria.descricao)
    createCell(formatCreatedAt(categoria.createdAt))
    createCell(categoria.valorRt)
    createCell(getStatusString(categoria.status))
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
  console.log(apiUrl)
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
function formatCreatedAt(dateString) {
  const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
  return new Date(dateString).toLocaleDateString('pt-BR', options);
}
function getStatusString(status) { return status ? 'Ativo' : 'Desativado' }

// ---------------------------------------------------------------------------------------------------------
// -------------------------------------------- CONTROLADORES ----------------------------------------------
// ---------------------------------------------------------------------------------------------------------
// ------------------------------ CONTROLADOR DAS LISTAS DE OFERTAS ------------------------------
// --------- CONDIÇÕES
if (excluirOfertas) ofertasHandler("ofertas/0/50")
if (minhasOfertas) ofertasHandler("ofertas/minhas/5/0/2")
// --------- FUNÇÕES
async function ofertasHandler(page) {
  const apiUrl = `${url}${page}`;
  const response = await fetch(apiUrl);
  const data = await response.json();
  console.log(data)

  const tableBody = document.querySelector("tbody");
  tableBody.innerHTML = "";

  data.itensPaginados.forEach((categoria) => {
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

// ------------------------------ CONTROLADOR DAS CATEGORIAS ------------------------------
// --------- CONDIÇÕES
if (categoriasPage) categoriasHandler("categorias")
else if (subCategoriasPage) categoriasHandler("subCategorias")
// --------- FUNÇÕES
async function categoriasHandler(category) {
  formatDate();
  const apiUrl = `${url}${category}`;
  const response = await fetch(apiUrl);
  const data = await response.json();

  const tableBody = document.querySelector("tbody");
  tableBody.innerHTML = "";

  data.forEach((categoria) => {
    console.log(data)
    const row = createTableRow(categoria, category);
    tableBody.appendChild(row);
  });

  categoriasForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const formData = new FormData(categoriasForm);
    var opcaoSelecionada = formData.get('idCategoria');
    if (opcaoSelecionada) {
      var idOpcaoSelecionada = document.querySelector(`option[value="${opcaoSelecionada}"]`).id;
      formData.set("idCategoria", idOpcaoSelecionada)
    }
    function formDataToJson(formData) {
      const jsonObject = {};
      formData.forEach((value, key) => {
        jsonObject[key] = value;
      });
      return JSON.stringify(jsonObject);
    }

    const jsonData = formDataToJson(formData);
    const method = "POST";
    const page = category
    apiHandler(method, page, jsonData);
    showAlertCadastro("Plano cadastrado com sucesso!", "success");
    for (const pair of formData.entries()) {
      console.log(`${pair[0]}: ${pair[1]}`);
    }
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
} else if (usuariosList) {
  usuariosHandler("Usuarios")
} else if (usuariosEdit) {
  usuariosHandler("Usuarios")
}
// --------- FUNÇÕES
async function usuariosHandler(page) {
  var request = []
  var actualPage = ""
  if (page === "Agencias") {
    request = ["Comum", "Matriz", "Master"]
    actualPage = "agencias"
  } else if (page === "Associados") {
    request = ["Associado"]
    actualPage = "associados"
  } else if (page === "Gerente") {
    request = ["Gerente"]
    actualPage = "gerente"
  } else if (page === "Usuarios") {
    request = ["Associado", "Matriz", "Comum", "Master", "Gerente"]
    actualPage = "usuario"
  }
  const data = {
    tipos: request,
    pagina: 0,
    tamanho: 50
  };

  const apiUrl = `${url}usuarios/tipo/todos/1`;

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
    const row = createTableRow(agencia, actualPage);
    tableBody.appendChild(row);
  });

}

// ------------------------------ CONTROLADOR TRANSAÇÕES ------------------------------
// --------- CONDIÇÕES
if (transacoes) transacoesHandler("transacoes/0")
// --------- FUNÇÕES
async function transacoesHandler(transacoes) {

  const apiUrl = `${url}${transacoes}`;
  const response = await fetch(apiUrl);
  const data = await response.json();
  console.log(data)

  const tableBody = document.querySelector("tbody");
  tableBody.innerHTML = "";

  data.transacoes.forEach((categoria) => {
    console.log(categoria)
    const row = createTableRow(categoria, "transacoes");
    tableBody.appendChild(row);
  });
}

// ------------------------------ CONTROLADOR VOUCHER ------------------------------
// --------- CONDIÇÕES
if (voucherList) voucherHandler("transacoes/1")
else if (meusVoucherList) voucherHandler("transacoes/minhas/1/1")
// --------- FUNÇÕES
async function voucherHandler(transacoes) {

  const apiUrl = `${url}${transacoes}`;
  const response = await fetch(apiUrl);
  const data = await response.json();
  console.log(data)

  const tableBody = document.querySelector("tbody");
  tableBody.innerHTML = "";

  data.transacoes.forEach((categoria) => {
    console.log(categoria)
    const row = createTableRow(categoria, "transacoes");
    tableBody.appendChild(row);
  });
}

// ---------------------------------------------------------------------------------------------------------
// ------------------------------------------------ CARDS --------------------------------------------------
// ---------------------------------------------------------------------------------------------------------

// ------------------------------ OFERTAS CARDS ------------------------------
// --------- CONDIÇÕES
if (ofertasCards) createOfertasCards("ofertas/0/10")
else if (minhasOfertas) createOfertasCards("ofertas/minhas/5/0/2")
else if (excluirOfertas) createOfertasCards("ofertas/0/10")
// --------- FUNÇÕES
async function createOfertasCards(page) {
  const apiUrl = `${url}ofertas/0/6`;
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    const container = document.querySelector(".cards .row");
    container.innerHTML = "";
    if (data.hasOwnProperty("message")) {
      const h1 = document.createElement("h5");
      h1.textContent = "Sem ofertas cadastradas";
      container.appendChild(h1);
    } else {
      data.itensPaginados.forEach((oferta) => {
        createOfertasCard(oferta);
      });
    }
  } catch (error) {
    console.error("Erro ao obter os dados da API:", error);
  }
}
function createOfertasCard(oferta) {
  // ---------- CALCULAR CONTAGEM REGRESSIVA 
  function calcularContagemRegressiva(dataDeEntrega, cardDiv) {
    function padLeft(value, length) { return String(value).padStart(length, '0') }
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
  if (!oferta) {
    console.log("sem ofertas");
  }
  console.log(oferta)
  const ofertaId = oferta.id
  const container = document.querySelector(".cards .row");
  // Criação do novo componente
  const newComponent = document.createElement("div");
  calcularContagemRegressiva(oferta.vencimento, newComponent)

  newComponent.innerHTML = `
        <div class="container p-0 d-flex flex-column justify-content-center align-items-center" style="width: 352px;height: auto;border: 1px solid #dddddd;background-color:#fff;margin-top:20px;!important">
        <div class="row  m-0 p-0" style="width:100%;">
          <div class="col p-0 m-0 d-flex justify-content-center align-items-center">
              <img src=${url}${oferta.imagem} class="img-fluid" style="width:100%;height: 250px;">
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
              <a type="button" href="/agencias/matriz/ofertas/info/?oferta=${ofertaId}" class="btn text-white fw-bold" style="width: 278px;height: 40px;line-height: 0.1;background-color: #FF6600;border-radius: 5px;padding: 10px 0px 10px 0px;font-size: 15px; margin-bottom: 11px">Ver Mais</a>
          </div>
        </div>
      </div>
        `;
  container.appendChild(newComponent);
}
// ------------------------------ ASSOCIADOS CARDS ------------------------------
// --------- CONDIÇÕES
if (cardsAssociados) createAssociadoCard()
// --------- FUNÇÕES
async function createAssociadoCard() {
  const apiUrl = `${url}usuarios/tipo/meus/1`;
  const tiposParaFiltrar = {
    "tipos": ["Associado"],
    "pagina": 0,
    "tamanho": 50
  }
  fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(tiposParaFiltrar),
  })
    .then((response) => response.json())
    .then((data) => {
      const container = document.querySelector(".cards .row");
      container.innerHTML = ""; // Remove os cards existentes do container
      console.log("THE DATA: ", data.itensPaginados)
      if (data.hasOwnProperty("message")) {
        const h1 = document.createElement("h5");
        h1.textContent = "Sem associados cadastrados";
        container.appendChild(h1);
      } else {
        data.itensPaginados.forEach((associado) => {
          associadoCard(associado); // Usa a função para adicionar o card
        });
      }
    })
    .catch((error) =>
      console.error("Erro ao obter os dados da API:", error)
    );
}
function associadoCard(associado) {
  console.log("associado", associado);
  const userID = associado.id
  const container = document.querySelector(".cards .row");
  // Criação do novo componente
  const newComponent = document.createElement("div");
  newComponent.innerHTML = `
    <div class="container p-0 d-flex flex-column justify-content-center align-items-center" style="width: 357px;height: 100%;border: 1px solid #dddddd;background-color:#fff;margin-top:20px;">
      <div class="row m-0 p-0" style="width:100%;">
        <div class="col p-0 m-0 d-flex justify-content-center align-items-center">
            <img src="${url}${associado.imagem}" class="img-fluid" style="width:80S%;height: 200px;">
        </div>
      </div>
      <div class="row w-100" style="margin-top:15px;">
        <div class="col-7 d-flex justify-content-start align-items-start">
            <i class="fa fa-tags" aria-hidden="true" style="color: #550389;font-size:0.9rem;margin-top:5px;"></i>
            <p class="text-sm m-0 p-0" style="color: #747474;margin-left:5px!important;">
                ${associado.dadosGerais.categoria}
            </p>
        </div>
        <div class="col-5 d-flex justify-content-end align-items-center">
            <p class="text-sm" style="color: #747474;">
                ${associado.dadosEnderecos.estado}
            <img src="imagens/flagofBrazil_6577.png" class="img-fluid" style="width: 17px;height: 17px;">
            </p>
        </div>
      </div>
      <div class="row p-0 m-0 w-100" style="margin-top:11px!important;">
        <div class="col">
            <p class="text-sm p-0 m-0" style="color: #747474;font-size: 1rem;font-weight: 500;">
              ${associado.dadosGerais.nomeFantasia}
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
              ${associado.dadosGerais.descricao}
            </p>
        </div>
      </div>
      <div class="row w-100 pr-3 pl-3">
        <div class=" p-0 m-0 d-flex flex-column justify-content-center align-items-center" style="background-color:#efefef;">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#550389" class="bi bi-globe matriz" viewBox="0 0 16 16" style="color:#550389;">
              <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4H4.09zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5h2.49zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5H4.847zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5H4.51zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12H5.145zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5H3.82zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068H8.5zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5h2.49zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4h2.355z"/>
            </svg>
            <p class="text-sm mt-2 fw-bold p-0 m-0" style="font-size: 0.7rem;color: #550389;">
              ${associado.dadosAgencias.nomeAgencia}
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
            <a href="./info/index.html?id=${userID}" type="button" class="btn text-white fw-bold" style="width: 65px;height: 20px;line-height: 0.1;background-color: #FF6600;border-radius: 3px;padding: 10px 0px 15px 0px;margin-right: 15px;font-size: 0.8rem;">Ver +</a>
        </div>
      </div>
    </div>
    `;
  container.appendChild(newComponent);
}

// ------------------------------ ASSOCIADOS INFO CARD ------------------------------
// --------- CONDIÇÕES
const associadoId = urlParams.get('id');
if (associadoId) associadosInfo(associadoId)
// --------- FUNÇÕES
async function associadosInfo(associadoId) {
  const apiUrl = `${url}usuarios/meus-dados/${associadoId}`;

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

    // Gera o conteudo com :
    putValue('site', data.dadosContatos.site)
    putValue('telefone', data.telefone)
    putValue('email', data.email)
    putValue('telefone', data.dadosContatos.celular)
    putValue('endereço', data.dadosEnderecos.logradouro)
    putValue('bairro', data.dadosEnderecos.bairro)
    putValue('cidade', data.dadosEnderecos.cidade)

    // Gera os conteudos que não precisam de :
    document.getElementById("categoria").innerText = data.dadosGerais.categoria
    document.getElementById("restricao").innerText = data.dadosGerais.restricao
    document.getElementById("atendimento").innerText = data.dadosOperacoes.tipoOperacao
    document.getElementById("descricao").innerText = data.dadosGerais.descricao
    document.getElementById("nome").innerText = data.nome

    // Substituir o src da imagem
    const imagemElement = document.getElementById('imagem');
    const imagemUrl = `${url}${data.imagem}`;
    imagemElement.src = imagemUrl;

    console.log('Dados obtidos:', data);
  } catch (error) {
    console.error('Erro ao obter dados da API:', error);
  }
}

// ------------------------------ OFERTAS INFO CARD ------------------------------
// --------- CONDIÇÕES
const ofertaId = urlParams.get('oferta');
if (ofertaId) ofertasInfo(ofertaId)
// --------- FUNÇÕES
async function ofertasInfo(ofertaId) {
  const apiUrl = `${url}ofertas/${ofertaId}`;

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error('Erro ao obter dados da API');
    }

    const result = await response.json();
    const data = result.ofertaComNomeAgencia
    console.log(data)
    function putValue(id, value) {
      // Garante que a primeira letra do ID seja maiúscula
      const idMaiusculo = id.charAt(0).toUpperCase() + id.slice(1);

      // Concatena o ID e o valor no formato desejado
      const fusao = `${idMaiusculo}: ${value}`;

      document.getElementById(id).innerText = fusao
    }

    // Gera o conteudo com :
    putValue('cidade', data.cidade)
    putValue('tipo', data.tipo)

    // // Gera os conteudos que não precisam de :
    document.getElementById("titulo").innerText = data.titulo
    function converterData(data) {
      const vencimento = new Date(data);
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return vencimento.toLocaleDateString('pt-BR', options);
    }

    const dataVencimento = converterData(data.vencimento);
    document.getElementById("data_encerramento").innerText = dataVencimento
    document.getElementById("valor").innerText = data.valor
    document.getElementById("descricao").innerText = data.descricao
    document.getElementById("observacao").innerText = data.obs
    document.getElementById("vendedor").innerText = data.nomeVendedor
    document.getElementById("agencia").innerText = data.nomeAgencia

    // Substituir o src da imagem
    const imagemElement = document.getElementById('imagem');
    const imagemUrl = `${url}${data.imagem}`;
    imagemElement.src = imagemUrl;

    console.log('Dados obtidos:', data);
  } catch (error) {
    console.error('Erro ao obter dados da API:', error);
  }
}






