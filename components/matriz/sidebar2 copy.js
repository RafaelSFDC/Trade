class SideBar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <aside class="sidebar fixed-left  top-0 left-0 overflow-auto h-100 float-left" id="show-side-navigation1">
    <div class="sidebar-header d-flex justify-content-center align-items-center px-3 py-4">
      <img class="rounded-pill img-fluid p-2" width="65" src="../../assets/img/mini-logo.jpeg" alt="">
      <div class="ms-2">
        <h5 class="fs-6 mb-0">
          <a class="text-decoration-none" href="#">Rede Trade</a>
        </h5>
        <p class="mt-1 mb-0">Informações da empresa/usuário.</p>
      </div>
      <div class="toggle-button">
        <i class="fas fa-bars" style="color:#fff;"></i>
      </div>

    </div>
  
    <div class="search position-relative text-center px-4 py-3 mt-2">
      <input type="text" class="form-control w-75 border-0 bg-light search-input" placeholder="Search here">
      <i class="fa fa-search position-absolute d-block fs-3 search-icon"></i>
    </div>
  
    <ul class="categories list-unstyled">
      <li class="menu-inicio">
        <i class="fas fa-home"></i><a href="../dashboard-matriz.html"> Início</a>
      </li>
      <li class="menu-associados" data-modal="associadosModal">
        <i class="fas fa-users"></i><a href="#"> Associados</a>
        <ul class="sidebar-dropdown list-unstyled">
          <li><a href="/associados/">Associados</a></li>
          <li><a href="/associados/lista/">Lista de associados</a></li>
          <li><a href="/associados/cadastrar/">Novos associados</a></li>
        </ul>
      </li>
      <li class="menu-agencias" data-modal="agenciasModal">
        <i class="fa fa-building"></i><a href="#"> Agencias</a>
        <ul class="sidebar-dropdown list-unstyled">
          <li><a href="/agencias/matriz/cadastrar/">Nova unidade</a></li>
          <li><a href="/agencias/matriz/lista/">Listar unidades</a></li>
        </ul>
      </li>
      <li class="menu-transacoes" data-modal="transacoesModal">
        <i class="fas fa-handshake "></i><a href="#"> Transações</a>
        <ul class="sidebar-dropdown list-unstyled">
          <li><a href="/transacoes/">Transações</a></li>
          <li><a href="/transacoes/cadastrar/">Nova transação</a></li>
        </ul>
      </li>
      <li class="menu-ofertas" data-modal="ofertasModal">
        <i class="fas fa-tags"></i><a href="#"> Ofertas</a>
        <ul class="sidebar-dropdown list-unstyled">
          <li><a href="/ofertas/">Ofertas</a></li>
          <li><a href="/ofertas/minhas">Minhas ofertas</a></li>
          <li><a href="/ofertas/excluir/">Excluir ofertas</a></li>
          <li><a href="/ofertas/cadastrar/">Nova tarefa</a></li>
        </ul>
      </li>
      <li class="menu-voucher">
        <i class="fas fa-percentage"></i><a href="#"> Voucher</a>
        <ul class="sidebar-dropdown list-unstyled">
          <li><a href="/vouchers/">Vouchers</a></li>
          <li><a href="/vouchers/solicitacao/">Solicitar voucher</a></li>
          <li><a href="/vouchers/cancelar/">Cancelar voucher</a></li>
        </ul>
      </li>
      <li class="menu-extrato">
        <i class="fas fa-receipt"></i><a href="#"> Extrato</a>
        <ul class="sidebar-dropdown list-unstyled">
          <li><a href="/extratos/">Extratos</a></li>
          <li><a href="/extratos/meu/">Meus extrato</a></li>
        </ul>
      </li>
      <li class="menu-financeiro">
        <i class="fas fa-hand-holding-usd"></i><a href="#"> Financeiro</a>
        <ul class="sidebar-dropdown list-unstyled">
          <li><a href="/financeiro/pagar/">Contas a pagar</a></li>
          <li><a href="/financeiro/receber/">Contas a receber</a></li>
        </ul>
      </li>
      <li class="menu-usuarios">
        <i class="fas fa-users uil-panel-add"></i><a href="#"> Usuários</a>
        <ul class="sidebar-dropdown list-unstyled">
          <li><a href="/conta/dados/">Meus dados</a></li>
          <li><a href="/conta/usuarios/">Usuários</a></li>
          <li><a href="/conta/editarUsuario/">Editar usuário</a></li>
          <li><a href="/conta/cadastrarUsuario/">Cadastrar usuário</a></li>
        </ul>
      </li>
      <li class="menu-sair">
        <i class="fas fa-cog"></i><a href="/" > Sair</a>
      </li>
    </ul>
  </aside>
  <!-- Bootstrap Modal Associados -->
    <div class="modal fade" id="associadosModal" tabindex="-1" aria-labelledby="associadosModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-xl" style="padding-top:250px;padding-left:140px;">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="associadosModalLabel">Navegação Rápida Associados</h5>
            <button type="button" class="btn-close" data-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <!-- Add your modal content here -->
            <div class="row" style="gap:5px;padding-left: 20px; padding-right: 20px;">
                <div class="col d-flex flex-column align-items-center justify-content-center flex-collum" style="height:100px;background-color: #ebebeb;border-radius:10px;">
                    <i class="fas fa-users" style="font-size:25px;color:#787878;"></i>
                    <a href="/associados/" style="color:#787878;">Associados</a>
                </div>
                <div class="col d-flex flex-column align-items-center justify-content-center flex-collum" style="height:100px;background-color: #ebebeb;border-radius:10px;">
                    <i class="bi bi-person-vcard" style="font-size:25px;color:#787878;"></i>
                    <a href="/associados/lista/" style="color:#787878;"">Lista Associados</a>
                </div>
                <div class="col d-flex flex-column align-items-center justify-content-center flex-collum" style="height:100px;background-color: #ebebeb;border-radius:10px;">
                    <i class="bi bi-file-lock" style="font-size:25px;color:#787878;"></i>
                    <a href="#" style="color:#787878;">Bloquear Associados</a>
                </div>
                <div class="col d-flex flex-column align-items-center justify-content-center flex-collum" style="height:100px;background-color: #ebebeb;border-radius:10px;">
                    <i class="bi bi-person-plus" style="font-size:25px;color:#787878;"></i>
                    <a href="/associados/cadastrar/" style="color:#787878;">Novo Associado</a>
                </div>
                
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Bootstrap Modal Agências -->
    <div class="modal fade" id="agenciasModal" tabindex="-1" aria-labelledby="associadosModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-xl" style="padding-top:250px;padding-left:140px;">
    <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="associadosModalLabel">Navegação Rápida Agências</h5>
            <button type="button" class="btn-close" data-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
          <!-- Add your modal content here -->
          <div class="row" style="gap:5px;padding-left: 20px; padding-right: 20px;">
              <div class="col d-flex flex-column align-items-center justify-content-center flex-collum" style="height:100px;background-color: #ebebeb;border-radius:10px;">
                  <i class="bi bi-buildings" style="font-size:25px;color:#787878;"></i>
                  <a href="/agencias/matriz/lista/" style="color:#787878;">Agências</a>
              </div>
              <div class="col d-flex flex-column align-items-center justify-content-center flex-collum" style="height:100px;background-color: #ebebeb;border-radius:10px;">
                  <i class="bi bi-building" style="font-size:25px;color:#787878;"></i>
                  <a href="#" style="color:#787878;"">Lista Agências</a>
              </div>
              <div class="col d-flex flex-column align-items-center justify-content-center flex-collum" style="height:100px;background-color: #ebebeb;border-radius:10px;">
                  <i class="bi bi-building-lock" style="font-size:25px;color:#787878;"></i>
                  <a href="#" style="color:#787878;">Bloquear Agências</a>
              </div>
              <div class="col d-flex flex-column align-items-center justify-content-center flex-collum" style="height:100px;background-color: #ebebeb;border-radius:10px;">
                  <i class="bi bi-building-add" style="font-size:25px;color:#787878;"></i>
                  <a href="/agencias/matriz/cadastrar/" style="color:#787878;">Nova Agências</a>
              </div> 
          </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Bootstrap Modal Transações -->
    <div class="modal fade" id="transacoesModal" tabindex="-1" aria-labelledby="transacoesModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-xl" style="padding-top:250px;padding-left:140px;">
    <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="transacoesModalLabel">Navegação Rápida Transações</h5>
            <button type="button" class="btn-close" data-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
          <!-- Add your modal content here -->
          <div class="row" style="gap:5px;padding-left: 20px; padding-right: 20px;">
              <div class="col d-flex flex-column align-items-center justify-content-center flex-collum" style="height:100px;background-color: #ebebeb;border-radius:10px;">
                  <i class="bi bi-coin" style="font-size:25px;color:#787878;"></i>
                  <a href="/transacoes/" style="color:#787878;">Transações</a>
              </div>
              <div class="col d-flex flex-column align-items-center justify-content-center flex-collum" style="height:100px;background-color: #ebebeb;border-radius:10px;">
                  <i class="bi bi-card-text" style="font-size:25px;color:#787878;"></i>
                  <a href="#" style="color:#787878;"">Minhas Transações</a>
              </div>
              <div class="col d-flex flex-column align-items-center justify-content-center flex-collum" style="height:100px;background-color: #ebebeb;border-radius:10px;">
                  <i class="bi bi-check2-all" style="font-size:25px;color:#787878;"></i>
                  <a href="/transacoes/cadastrar/" style="color:#787878;">Nova Transação</a>
              </div>
              <div class="col d-flex flex-column align-items-center justify-content-center flex-collum" style="height:100px;background-color: #ebebeb;border-radius:10px;">
                  <i class="bi bi-arrow-left-right" style="font-size:25px;color:#787878;"></i>
                  <a href="#" style="color:#787878;">Estornar Transação</a>
              </div> 
          </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Bootstrap Modal Ofertas -->
    <div class="modal fade" id="ofertasModal" tabindex="-1" aria-labelledby="ofertasModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-xl" style="padding-top:250px;padding-left:140px;">
    <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="ofertasModalLabel">Navegação Rápida Ofertas</h5>
            <button type="button" class="btn-close" data-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
          <!-- Add your modal content here -->
          <div class="row" style="gap:5px;padding-left: 20px; padding-right: 20px;">
              <div class="col d-flex flex-column align-items-center justify-content-center flex-collum" style="height:100px;background-color: #ebebeb;border-radius:10px;">
                  <i class="bi bi-tags" style="font-size:25px;color:#787878;"></i>
                  <a href="#" style="color:#787878;">Ofertas</a>
              </div>
              <div class="col d-flex flex-column align-items-center justify-content-center flex-collum" style="height:100px;background-color: #ebebeb;border-radius:10px;">
                  <i class="bi bi-megaphone" style="font-size:25px;color:#787878;"></i>
                  <a href="#" style="color:#787878;">Minhas Ofertas</a>
              </div>
              <div class="col d-flex flex-column align-items-center justify-content-center flex-collum" style="height:100px;background-color: #ebebeb;border-radius:10px;">
                  <i class="bi bi-trash3" style="font-size:25px;color:#787878;"></i>
                  <a href="#" style="color:#787878;">Excluir Ofertas</a>
              </div>
              <div class="col d-flex flex-column align-items-center justify-content-center flex-collum" style="height:100px;background-color: #ebebeb;border-radius:10px;">
                  <i class="bi bi-journal-plus" style="font-size:25px;color:#787878;"></i>
                  <a href="#" style="color:#787878;">Nova Oferta</a>
              </div> 
          </div>
          </div>
        </div>
      </div>
    </div>
  
  
      `;
      
  }
}
customElements.define("side-bar", SideBar);


const sidebar = document.querySelector('.sidebar');
const toggleButton = document.querySelector('.toggle-button');

toggleButton.addEventListener('click', () => {
  sidebar.classList.toggle('sidebar-collapsed');
});

function openPopup(event) {
  const menuItem = event.currentTarget;
  const modalId = menuItem.dataset.modal;
  
  // Verifica se o modalId está definido
  if (modalId) {
    const modal = document.getElementById(modalId);
    const bootstrapModal = new bootstrap.Modal(modal);
    bootstrapModal.show();
  }
}

// Adiciona um evento de clique aos itens de menu
const menuItems = document.querySelectorAll('.sidebar li');
menuItems.forEach((menuItem) => {
  menuItem.addEventListener('click', openPopup);
});

