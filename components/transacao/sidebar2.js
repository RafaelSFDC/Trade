class SideBar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <aside class="sidebar fixed-left  top-0 left-0 overflow-auto h-100 float-left" id="show-side-navigation1">
    <i class="uil-bars close-aside d-md-none d-lg-none" data-close="show-side-navigation1"></i>
    <div class="sidebar-header d-flex justify-content-center align-items-center px-3 py-4">
      <img class="rounded-pill img-fluid p-2" width="65" src="../assets/img/mini-logo.jpeg" alt="">
      <div class="ms-2">
        <h5 class="fs-6 mb-0">
          <a class="text-decoration-none" href="#">Rede Trade</a>
        </h5>
        <p class="mt-1 mb-0">Informações da empresa/usuário.</p>
      </div>
    </div>
  
    <div class="search position-relative text-center px-4 py-3 mt-2">
      <input type="text" class="form-control w-100 border-0 bg-transparent" placeholder="Search here">
      <i class="fa fa-search position-absolute d-block fs-6"></i>
    </div>
  
    <ul class="categories list-unstyled">
      <li class="">
        <i class="fas fa-home"></i><a href="../../agencias/matriz/dashboard-matriz.html"> Inícioss</a>
      </li>
      <li class="has-dropdown">
        <i class="fas fa-users"></i><a href="#"> Associados</a>
        <ul class="sidebar-dropdown list-unstyled">
          <li><a href="../../agencias/associados/">Associados</a></li>
          <li><a href="../../agencias/associados/lista/">Lista de associados</a></li>
          <li><a href="../../agencias/associados/cadastrar/">Novos associados</a></li>
        </ul>
      </li>
      <li class="has-dropdown">
        <i class="fa fa-building"></i><a href="#"> Agencias</a>
        <ul class="sidebar-dropdown list-unstyled">
          <li><a href="/agencias/matriz/cadastrar/">Nova unidade</a></li>
          <li><a href="/agencias/matriz/lista/">Listar unidades</a></li>
        </ul>
      </li>
      <li class="has-dropdown">
        <i class="fas fa-handshake "></i><a href="#"> Transações</a>
        <ul class="sidebar-dropdown list-unstyled">
          <li><a href="/transacoes/">Transações</a></li>
          <li><a href="/transacoes/minhas/">Minhas transações</a></li>
          <li><a href="/transacoes/cadastrar/">Nova transação</a></li>
          <li><a href="/transacoes/estornar/">Estornar transação</a></li>
        </ul>
      </li>
      <li class="has-dropdown">
        <i class="fas fa-tags"></i><a href="#"> Ofertas</a>
        <ul class="sidebar-dropdown list-unstyled">
          <li><a href="/ofertas/">Ofertas</a></li>
          <li><a href="/ofertas/minhas">Minhas ofertas</a></li>
          <li><a href="/ofertas/excluir/">Excluir ofertas</a></li>
          <li><a href="/ofertas/cadastrar/">Nova tarefa</a></li>
        </ul>
      </li>
      <li class="has-dropdown">
        <i class="fas fa-percentage"></i><a href="#"> Voucher</a>
        <ul class="sidebar-dropdown list-unstyled">
          <li><a href="/vouchers/">Vouchers</a></li>
          <li><a href="/vouchers/solicitacao/">Solicitar voucher</a></li>
          <li><a href="/vouchers/cancelar/">Cancelar voucher</a></li>
        </ul>
      </li>
      <li class="has-dropdown">
        <i class="fas fa-receipt"></i><a href="#"> Extrato</a>
        <ul class="sidebar-dropdown list-unstyled">
          <li><a href="/extratos/">Extratos</a></li>
          <li><a href="/extratos/meu/">Meus extrato</a></li>
        </ul>
      </li>
      <li class="has-dropdown">
        <i class="fas fa-hand-holding-usd"></i><a href="#"> Financeiro</a>
        <ul class="sidebar-dropdown list-unstyled">
          <li><a href="/financeiro/pagar/">Contas a pagar</a></li>
          <li><a href="/financeiro/receber/">Contas a receber</a></li>
        </ul>
      </li>
      <li class="has-dropdown">
        <i class="fas fa-users uil-panel-add"></i><a href="#"> Usuários</a>
        <ul class="sidebar-dropdown list-unstyled">
          <li><a href="/conta/dados/">Meus dados</a></li>
          <li><a href="/conta/usuarios/">Usuários</a></li>
          <li><a href="/conta/editarUsuario/">Editar usuário</a></li>
          <li><a href="/conta/cadastrarUsuario/">Cadastrar usuário</a></li>
        </ul>
      </li>
      <li class="">
        <i class="fas fa-cog"></i><a href="/" > Sair</a>
      </li>
    </ul>
  </aside>
  
  
      `;
  }
}
customElements.define("side-bar", SideBar);

function selectElement(selector) {
  return document.querySelector(selector);
}

function find(el, selector) {
  let finded;
  return (finded = el.querySelector(selector)) ? finded : null;
}

function siblings(el) {
  const siblings = [];
  for (let sibling of el.parentNode.children) {
    if (sibling !== el) {
      siblings.push(sibling);
    }
  }
  return siblings;
}

const showAsideBtn = selectElement(".show-side-btn");
const sidebar = selectElement(".sidebar");

var slideNavDropdown = $(".sidebar-dropdown");

selectElement(".sidebar .categories").addEventListener(
  "click",
  function (event) {
    const item = event.target.closest(".has-dropdown");

    if (!item) {
      return;
    }

    item.classList.toggle("opened");

    siblings(item).forEach((sibling) => {
      sibling.classList.remove("opened");
    });

    if (item.classList.contains("opened")) {
      const toOpen = find(item, ".sidebar-dropdown");

      event.preventDefault();

      if (toOpen) {
        toOpen.classList.add("active");
      }

      siblings(item).forEach((sibling) => {
        const toClose = find(sibling, ".sidebar-dropdown");

        if (toClose) {
          toClose.classList.remove("active");
        }
      });
    } else {
      find(item, ".sidebar-dropdown").classList.toggle("active");
    }
  }
);

showAsideBtn.addEventListener("click", function () {
  sidebar.classList.toggle("closed");
});

// if (window.innerWidth < 767) {
//   sidebar.classList.add('show-sidebar');
// }

// window.addEventListener('resize', function () {
//   if (window.innerWidth > 767) {
//     sidebar.classList.remove('show-sidebar')
//   }
// })

