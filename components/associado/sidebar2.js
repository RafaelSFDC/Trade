class SideBar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <aside class="sidebar fixed-left  top-0 left-0 overflow-auto h-100 float-left" id="show-side-navigation1">
    <div class="sidebar-header d-flex justify-content-between align-items-center px-3 pt-2">
      <img class="rounded-pill img-fluid p-2" width="65" src="../../assets/img/mini-logo.jpeg" alt="">
      <div class="toggle-button">
        <i class="fas fa-bars" style="color:#fff;"></i>
      </div>
    </div>
    <div class="row justify-content-start">
      <p class="mb-0 ml-5" style="color:#FFF;">MATRIZ</p>   
    </div>
    <div class="search position-relative text-center px-4 py-3 mt-2">
      <i class="fa fa-search position-absolute d-block fs-3 search-icon" style="color:#fff;margin-top:15px;margin-left:25px;"></i>
      <input type="text" class="form-control  border-0  search-input" style="width:98%;height:47px;border-radius:10px;background-color:#243459;padding-left: 58px;color: #FFF;" placeholder="Search...">
    </div>
  
    <ul class="categories list-unstyled">
      <li class="menu-inicio active mb-2">
        <i class="fas fa-home"></i><a href="../../agencias/matriz/dashboard-matriz.html">INÍCIO</a>
      </li>
      <li class="menu-associados mb-2" data-modal="associadosModal">
        <i class="fas fa-users"></i><a href="#"> Associados</a>
        <ul class="sidebar-dropdown list-unstyled">
          <li><a href="/associados/">Associados</a></li>
          <li><a href="/associados/lista/">Lista de associados</a></li>
          <li><a href="/associados/cadastrar/">Novos associados</a></li>
        </ul>
      </li>
      <li class="menu-agencias mb-2" data-modal="agenciasModal">
        <i class="fa fa-building"></i><a href="#">AGÊNCIAS</a>
        <ul class="sidebar-dropdown list-unstyled">
          <li><a href="/agencias/matriz/cadastrar/">Nova unidade</a></li>
          <li><a href="/agencias/matriz/lista/">Listar unidades</a></li>
        </ul>
      </li>
      <li class="menu-transacoes mb-2" data-modal="transacoesModal">
        <i class="fas fa-handshake "></i><a href="#">TRANSAÇÕES</a>
        <ul class="sidebar-dropdown list-unstyled">
          <li><a href="/transacoes/">Transações</a></li>
          <li><a href="/transacoes/cadastrar/">Nova transação</a></li>
        </ul>
      </li>
      <li class="menu-ofertas mb-2" data-modal="ofertasModal">
        <i class="fas fa-tags"></i><a href="#">OFERTAS</a>
        <ul class="sidebar-dropdown list-unstyled">
          <li><a href="/ofertas/">Ofertas</a></li>
          <li><a href="/ofertas/minhas">Minhas ofertas</a></li>
          <li><a href="/ofertas/excluir/">Excluir ofertas</a></li>
          <li><a href="/ofertas/cadastrar/">Nova tarefa</a></li>
        </ul>
      </li>
      <li class="menu-voucher mb-2 data-modal="voucherModal">
        <i class="fas fa-percentage"></i><a href="#">VOUCHER</a>
        <ul class="sidebar-dropdown list-unstyled">
          <li><a href="/vouchers/">Vouchers</a></li>
          <li><a href="/vouchers/solicitacao/">Solicitar voucher</a></li>
          <li><a href="/vouchers/cancelar/">Cancelar voucher</a></li>
        </ul>
      </li>
      <li class="menu-extrato mb-2">
        <i class="fas fa-receipt"></i><a href="#">EXTRATO</a>
        <ul class="sidebar-dropdown list-unstyled">
          <li><a href="/extratos/">Extratos</a></li>
          <li><a href="/extratos/meu/">Meus extrato</a></li>
        </ul>
      </li>
      <li class="menu-financeiro mb-2">
        <i class="fas fa-hand-holding-usd"></i><a href="#">FINANCEIRO</a>
        <ul class="sidebar-dropdown list-unstyled">
          <li><a href="/financeiro/pagar/">Contas a pagar</a></li>
          <li><a href="/financeiro/receber/">Contas a receber</a></li>
        </ul>
      </li>
      <li class="menu-usuarios mb-2">
        <i class="fas fa-users uil-panel-add"></i><a href="#">USUÁRIOS</a>
        <ul class="sidebar-dropdown list-unstyled">
          <li><a href="/conta/dados/">Meus dados</a></li>
          <li><a href="/conta/usuarios/">Usuários</a></li>
          <li><a href="/conta/editarUsuario/">Editar usuário</a></li>
          <li><a href="/conta/cadastrarUsuario/">Cadastrar usuário</a></li>
        </ul>
      </li>
      <li class="menu-sair">
        <i class="fas fa-cog"></i><a href="/" >SAIR</a>
      </li>
    </ul>
  </aside>
  <!-- Bootstrap Modal Associados -->
    <div class="modal fade" id="associadosModal" tabindex="-1" aria-labelledby="associadosModalLabel" aria-hidden="true" style="background-color:#0000009e;">
      <div class="modal-dialog modal-xl" style="padding-top:250px;padding-left:140px;width:100vw;height:100vh;background-color:#00000000;">
        <div class="modal-content w-100 h-100" style="background-color:#00000000;border:none;">
          <div class="modal-header" style="border-bottom: none;">
            <h5 class="modal-title" id="associadosModalLabel" style="color:#fff;">Navegação rápida</h5>
            <button type="button" class="btn-close" data-dismiss="modal" aria-label="Close" style="background: none; border: none; padding: 0;" onfocus="this.style.outline='none';" onblur="this.style.outline='';">
                <span aria-hidden="true" style="background: none;border: none;font-size: 25px;color: #fff;"><i class="fa fa-times"></i></span>
            </button>
          </div>
          <div class="modal-body">
            <!-- Add your modal content here -->
            <div class="row" style="gap:10px;padding-left: 20px; padding-right: 20px;">
                <div class="col d-flex flex-column align-items-center justify-content-center flex-collum" style="height:125px;background-color: #fff;border-radius:5px;">
                    <i class="fas fa-users mb-2" style="font-size:25px;color:#787878;"></i>
                    <a class="link" href="/associados/" style="color:#787878;text-decoration: none;">Associados</a>
                </div>
                <div class="col d-flex flex-column align-items-center justify-content-center flex-collum" style="height:125px;background-color: #fff;border-radius:5px;">
                    <i class="bi bi-person-vcard" style="font-size:25px;color:#787878;"></i>
                    <a class="link" href="/associados/lista/" style="color:#787878;text-decoration: none;">Lista Associados</a>
                </div>
                <div class="col d-flex flex-column align-items-center justify-content-center flex-collum" style="height:125px;background-color: #fff;border-radius:5px;">
                    <i class="bi bi-file-lock" style="font-size:25px;color:#787878;"></i>
                    <a class="link" href="#" style="color:#787878;text-decoration: none;">Bloquear Associados</a>
                </div>
                <div class="col d-flex flex-column align-items-center justify-content-center flex-collum" style="height:125px;background-color: #fff;border-radius:5px;">
                    <i class="bi bi-person-plus" style="font-size:25px;color:#787878;"></i>
                    <a class="link" href="/associados/cadastrar/" style="color:#787878;text-decoration: none;">Novo Associado</a>
                </div>
                
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Bootstrap Modal Voucher -->
    <div class="modal fade" id="voucherModal" tabindex="-1" aria-labelledby="voucherModalLabel" aria-hidden="true" style="background-color:#0000009e;">
    <div class="modal-dialog modal-xl" style="padding-top:250px;padding-left:140px;width:100vw;height:100vh;background-color:#00000000;">
        <div class="modal-content w-100 h-100" style="background-color:#00000000;border:none;">
          <div class="modal-header" style="border-bottom: none;">
            <h5 class="modal-title" id="voucherModalLabel" style="color:#fff;">Navegação rápida</h5>
            <button type="button" class="btn-close" data-dismiss="modal" aria-label="Close" style="background: none; border: none; padding: 0;" onfocus="this.style.outline='none';" onblur="this.style.outline='';">
                <span aria-hidden="true" style="background: none;border: none;font-size: 25px;color: #fff;"><i class="fa fa-times"></i></span>
            </button>
          </div>
          <div class="modal-body">
          <!-- Add your modal content here -->
          <div class="row" style="gap:10px;padding-left: 20px; padding-right: 20px;">
              <div class="col d-flex flex-column align-items-center justify-content-center flex-collum" style="height:125px;background-color: #ebebeb;border-radius:5px;">
                  <i class="bi bi-buildings" style="font-size:25px;color:#787878;"></i>
                  <a class="link" href="/voucher/" style="color:#787878;text-decoration: none;">Vouchers</a>
              </div>
              <div class="col d-flex flex-column align-items-center justify-content-center flex-collum" style="height:125px;background-color: #ebebeb;border-radius:5px;">
                  <i class="bi bi-building" style="font-size:25px;color:#787878;"></i>
                  <a class="link" href="#" style="color:#787878;text-decoration: none;">Lista Agências</a>
              </div>
              <div class="col d-flex flex-column align-items-center justify-content-center flex-collum" style="height:125px;background-color: #ebebeb;border-radius:5px;">
                  <i class="bi bi-building-lock" style="font-size:25px;color:#787878;"></i>
                  <a class="link" href="/vouchers/cancelar/" style="color:#787878;text-decoration: none;">Cancelar Voucher</a>
              </div>
              <div class="col d-flex flex-column align-items-center justify-content-center flex-collum" style="height:125px;background-color: #ebebeb;border-radius:5px;">
                  <i class="bi bi-building-add" style="font-size:25px;color:#787878;"></i>
                  <a class="link" href="/vouchers/solicitacao/" style="color:#787878;text-decoration: none;">Solitar Voucher</a>
              </div> 
          </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Bootstrap Modal Transações -->
    <div class="modal fade" id="transacoesModal" tabindex="-1" aria-labelledby="transacoesModalLabel" aria-hidden="true" style="background-color:#0000009e;">
    <div class="modal-dialog modal-xl" style="padding-top:250px;padding-left:140px;width:100vw;height:100vh;background-color:#00000000;">
        <div class="modal-content w-100 h-100" style="background-color:#00000000;border:none;">
          <div class="modal-header" style="border-bottom: none;">
            <h5 class="modal-title" id="associadosModalLabel" style="color:#fff;">Navegação rápida</h5>
            <button type="button" class="btn-close" data-dismiss="modal" aria-label="Close" style="background: none; border: none; padding: 0;" onfocus="this.style.outline='none';" onblur="this.style.outline='';">
                <span aria-hidden="true" style="background: none;border: none;font-size: 25px;color: #fff;"><i class="fa fa-times"></i></span>
            </button>
          </div>
          <div class="modal-body">
          <!-- Add your modal content here -->
          <div class="row" style="gap:10px;padding-left: 20px; padding-right: 20px;">
              <div class="col d-flex flex-column align-items-center justify-content-center flex-collum" style="height:125px;background-color: #ebebeb;border-radius:5px;">
                  <i class="bi bi-coin" style="font-size:25px;color:#787878;"></i>
                  <a class="link" href="/transacoes/" style="color:#787878;text-decoration: none;">Transações</a>
              </div>
              <div class="col d-flex flex-column align-items-center justify-content-center flex-collum" style="height:125px;background-color: #ebebeb;border-radius:5px;">
                  <i class="bi bi-card-text" style="font-size:25px;color:#787878;"></i>
                  <a class="link" href="#" style="color:#c36;color:#787878;text-decoration: none;">Minhas Transações</a>
              </div>
              <div class="col d-flex flex-column align-items-center justify-content-center flex-collum" style="height:125px;background-color: #ebebeb;border-radius:5px;">
                  <i class="bi bi-check2-all" style="font-size:25px;color:#787878;"></i>
                  <a class="link" href="/transacoes/cadastrar/" style="color:#787878;text-decoration: none;">Nova Transação</a>
              </div>
              <div class="col d-flex flex-column align-items-center justify-content-center flex-collum" style="height:125px;background-color: #ebebeb;border-radius:5px;">
                  <i class="bi bi-arrow-left-right" style="font-size:25px;color:#787878;"></i>
                  <a class="link" href="#" style="color:#c36;color:#787878;text-decoration: none;">Estornar Transação</a>
              </div> 
          </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Bootstrap Modal Ofertas -->
    <div class="modal fade" id="ofertasModal" tabindex="-1" aria-labelledby="ofertasModalLabel" aria-hidden="true" style="background-color:#0000009e;">
    <div class="modal-dialog modal-xl" style="padding-top:250px;padding-left:140px;width:100vw;height:100vh;background-color:#00000000;">
        <div class="modal-content w-100 h-100" style="background-color:#00000000;border:none;">
          <div class="modal-header" style="border-bottom: none;">
            <h5 class="modal-title" id="associadosModalLabel" style="color:#fff;">Navegação rápida</h5>
            <button type="button" class="btn-close" data-dismiss="modal" aria-label="Close" style="background: none; border: none; padding: 0;" onfocus="this.style.outline='none';" onblur="this.style.outline='';">
                <span aria-hidden="true" style="background: none;border: none;font-size: 25px;color: #fff;"><i class="fa fa-times"></i></span>
            </button>
          </div>
          <div class="modal-body">
          <!-- Add your modal content here -->
          <div class="row" style="gap:10px;padding-left: 20px; padding-right: 20px;">
              <div class="col d-flex flex-column align-items-center justify-content-center flex-collum" style="height:125px;background-color: #ebebeb;border-radius:5px;">
                  <i class="bi bi-tags" style="font-size:25px;color:#787878;"></i>
                  <a class="link" href="#" style="color:#787878;text-decoration: none;">Ofertas</a>
              </div>
              <div class="col d-flex flex-column align-items-center justify-content-center flex-collum" style="height:125px;background-color: #ebebeb;border-radius:5px;">
                  <i class="bi bi-megaphone" style="font-size:25px;color:#787878;"></i>
                  <a class="link" href="#" style="color:#787878;text-decoration: none;">Minhas Ofertas</a>
              </div>
              <div class="col d-flex flex-column align-items-center justify-content-center flex-collum" style="height:125px;background-color: #ebebeb;border-radius:5px;">
                  <i class="bi bi-trash3" style="font-size:25px;color:#787878;"></i>
                  <a class="link" href="#" style="color:#787878;text-decoration: none;">Excluir Ofertas</a>
              </div>
              <div class="col d-flex flex-column align-items-center justify-content-center flex-collum" style="height:125px;background-color: #ebebeb;border-radius:5px;">
                  <i class="bi bi-journal-plus" style="font-size:25px;color:#787878;"></i>
                  <a class="link" href="#" style="color:#787878;text-decoration: none;">Nova Oferta</a>
              </div> 
          </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Bootstrap Modal Ofertas -->
    <div class="modal fade" id="ofertasModal" tabindex="-1" aria-labelledby="ofertasModalLabel" aria-hidden="true" style="background-color:#0000009e;">
    <div class="modal-dialog modal-xl" style="padding-top:250px;padding-left:140px;width:100vw;height:100vh;background-color:#00000000;">
        <div class="modal-content w-100 h-100" style="background-color:#00000000;border:none;">
          <div class="modal-header" style="border-bottom: none;">
            <h5 class="modal-title" id="associadosModalLabel" style="color:#fff;">Navegação rápida</h5>
            <button type="button" class="btn-close" data-dismiss="modal" aria-label="Close" style="background: none; border: none; padding: 0;" onfocus="this.style.outline='none';" onblur="this.style.outline='';">
                <span aria-hidden="true" style="background: none;border: none;font-size: 25px;color: #fff;"><i class="fa fa-times"></i></span>
            </button>
          </div>
          <div class="modal-body">
          <!-- Add your modal content here -->
          <div class="row" style="gap:10px;padding-left: 20px; padding-right: 20px;">
              <div class="col d-flex flex-column align-items-center justify-content-center flex-collum" style="height:125px;background-color: #ebebeb;border-radius:5px;">
                  <i class="bi bi-tags" style="font-size:25px;color:#787878;"></i>
                  <a class="link" href="#" style="color:#787878;text-decoration: none;">Ofertas</a>
              </div>
              <div class="col d-flex flex-column align-items-center justify-content-center flex-collum" style="height:125px;background-color: #ebebeb;border-radius:5px;">
                  <i class="bi bi-megaphone" style="font-size:25px;color:#787878;"></i>
                  <a class="link" href="#" style="color:#787878;text-decoration: none;">Minhas Ofertas</a>
              </div>
              <div class="col d-flex flex-column align-items-center justify-content-center flex-collum" style="height:125px;background-color: #ebebeb;border-radius:5px;">
                  <i class="bi bi-trash3" style="font-size:25px;color:#787878;"></i>
                  <a class="link" href="#" style="color:#787878;text-decoration: none;">Excluir Ofertas</a>
              </div>
              <div class="col d-flex flex-column align-items-center justify-content-center flex-collum" style="height:125px;background-color: #ebebeb;border-radius:5px;">
                  <i class="bi bi-journal-plus" style="font-size:25px;color:#787878;"></i>
                  <a class="link" href="#" style="color:#787878;text-decoration: none;">Nova Oferta</a>
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

  // Remove a classe "active" de todos os itens de menu
  menuItems.forEach((item) => {
    item.classList.remove('active');
  });

  // Adiciona a classe "active" ao item de menu clicado
  menuItem.classList.add('active');
}


// Adiciona um evento de clique aos itens de menu
const menuItems = document.querySelectorAll('.sidebar li');
menuItems.forEach((menuItem) => {
  menuItem.addEventListener('click', openPopup);
});

