class SideBar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <aside class="sidebar fixed-left  top-0 left-0 overflow-hidden h-100 float-left" id="show-side-navigation1">
    <div class="sidebar-header d-flex justify-content-between align-items-center px-3 pt-2">
      <img class="rounded-pill img-fluid p-2" width="55" src="../../assets/img/mini-logo.jpeg" alt="" style="margin-top:10px;">
      <div class="toggle-button">
        <i class="fas fa-bars" style="color:#fff;margin-right:15px"></i>
      </div>
    </div>
    <div class="row justify-content-start">
      <p class="mb-0 fw-bold" style="color:#FFF;font-size:0.7rem;margin-left:40px;">MATRIZ</p>   
    </div>
    <div class="search position-relative text-center px-4 py-3 mt-2">
      <i class="fa fa-search position-absolute d-block fs-3 search-icon" style="color:#fff;margin-top:15px;margin-left:25px;"></i>
      <input type="text" class="form-control  border-0  search-input" style="width:98%;height:47px;border-radius:10px;background-color:#243459;padding-left: 58px;color: #FFF;" placeholder="Search...">
    </div>
  
    <ul class="categories list-unstyled">
      <li class="menu-inicio active mb-2">
        <i class="fas fa-home"></i><a href="/agencias/matriz/dashboard-matriz.html">INÍCIO</a>
      </li>
      <li class="menu-associados mb-2" data-modal="associadosModal">
        <i class="fas fa-users"></i><a href="#"> ASSOCIADOS</a>
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
      <li class="menu-credito mb-2" data-modal="creditoModal">
        <i class="bi bi-clipboard2-data-fill"></i><a href="#">CRÉDITOS</a>
        <ul class="sidebar-dropdown list-unstyled">
          <li><a href="/credito/">Credito</a></li>
          <li><a href="/credito/solicitacao/">Solicitar credito</a></li>
          <li><a href="/credito/cancelar/">Cancelar credito</a></li>
        </ul>
      </li>
      <li class="menu-voucher mb-2" data-modal="voucherModal">
        <i class="fas fa-percentage"></i><a href="#">VOUCHER</a>
        <ul class="sidebar-dropdown list-unstyled">
          <li><a href="/vouchers/">Vouchers</a></li>
          <li><a href="/vouchers/solicitacao/">Solicitar voucher</a></li>
          <li><a href="/vouchers/cancelar/">Cancelar voucher</a></li>
        </ul>
      </li>
      <li class="menu-extrato mb-2" data-modal="extratoModal">
        <i class="fas fa-receipt"></i><a href="#">EXTRATO</a>
        <ul class="sidebar-dropdown list-unstyled">
          <li><a href="/extratos/">Extratos</a></li>
          <li><a href="/extratos/meu/">Meus extrato</a></li>
        </ul>
      </li>
      <li class="menu-financeiro mb-2" data-modal="finaceiroModal">
        <i class="fas fa-hand-holding-usd"></i><a href="#">FINANCEIRO</a>
        <ul class="sidebar-dropdown list-unstyled">
          <li><a href="/financeiro/pagar/">Contas a pagar</a></li>
          <li><a href="/financeiro/receber/">Contas a receber</a></li>
        </ul>
      </li>
      <li class="menu-usuarios mb-2" data-modal="usuariosModal">
        <i class="fas fa-users uil-panel-add"></i><a href="#">USUÁRIOS</a>
        <ul class="sidebar-dropdown list-unstyled">
          <li><a href="/conta/dados/">Meus dados</a></li>
          <li><a href="/conta/usuarios/">Usuários</a></li>
          <li><a href="/conta/editarUsuario/">Editar usuário</a></li>
          <li><a href="/conta/cadastrarUsuario/">Cadastrar usuário</a></li>
        </ul>
      </li>
      <li class="menu-planos mt-5 mb-2" data-modal="planosModal">
        <i class="fa fa-bookmark" style="color:#FF6600"></i><a href="#">PLANOS</a>
        <ul class="sidebar-dropdown list-unstyled">
          <li><a href="/planos/associados/">Meus dados</a></li>
          <li><a href="/planos/agencias/">Usuários</a></li>
        </ul>
      </li>
      <li class="menu-categorias mt-1 mb-2" data-modal="categoriasModal">
        <i class="fa fa-adjust"></i><a href="#">CATEGORIAS</a>
        <ul class="sidebar-dropdown list-unstyled">
          <li><a href="/categorias/">Categorias</a></li>
          <li><a href="/categorias/subCategorias/">Sub Categorias</a></li>
        </ul>
      </li>
      <li class="menu-gerentes mt-1 mb-2" data-modal="gerentesModal">
        <i class="fa fa-user-plus"></i><a href="#">GERENTES</a>
        <ul class="sidebar-dropdown list-unstyled">
          <li><a href="/gerentes/cadastrar/">Criar Gerente</a></li>
          <li><a href="/gerentes/todos/">Todos Gerentes</a></li>
        </ul>
      </li>
      <li class="menu-sair">
        <i class="fa fa-sign-out"></i><a href="#" id="sair" >SAIR</a>
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
                    <a class="link" href="/agencias/matriz/associados/" style="color:#787878;text-decoration: none;">Associados</a>
                </div>
                <div class="col d-flex flex-column align-items-center justify-content-center flex-collum" style="height:125px;background-color: #fff;border-radius:5px;">
                    <i class="bi bi-person-vcard" style="font-size:25px;color:#787878;"></i>
                    <a class="link" href="/agencias/matriz/associados/lista/" style="color:#787878;text-decoration: none;">Lista Associados</a>
                </div>
                <div class="col d-flex flex-column align-items-center justify-content-center flex-collum" style="height:125px;background-color: #fff;border-radius:5px;">
                    <i class="bi bi-person-plus" style="font-size:25px;color:#787878;"></i>
                    <a class="link" href="/agencias/matriz/associados/cadastrar/" style="color:#787878;text-decoration: none;">Novo Associado</a>
                </div>
                <div class="col d-flex flex-column align-items-center justify-content-center flex-collum" style="height:125px;border-radius:5px;">
                    
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Bootstrap Modal Agências -->
    <div class="modal fade" id="agenciasModal" tabindex="-1" aria-labelledby="associadosModalLabel" aria-hidden="true" style="background-color:#0000009e;">
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
                  <i class="bi bi-buildings" style="font-size:25px;color:#787878;"></i>
                  <a class="link" href="/agencias/matriz/lista/" style="color:#787878;text-decoration: none;">Agências</a>
              </div>
              <div class="col d-flex flex-column align-items-center justify-content-center flex-collum" style="height:125px;background-color: #ebebeb;border-radius:5px;">
                  <i class="bi bi-building-add" style="font-size:25px;color:#787878;"></i>
                  <a class="link" href="/agencias/matriz/cadastrar/" style="color:#787878;text-decoration: none;">Nova Agências</a>
              </div>
              <div class="col d-flex flex-column align-items-center justify-content-center flex-collum" style="height:125px;border-radius:5px;">
                  
              </div>
              <div class="col d-flex flex-column align-items-center justify-content-center flex-collum" style="height:125px;border-radius:5px;">
                  
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
                  <a class="link" href="/agencias/matriz/transacoes/" style="color:#787878;text-decoration: none;">Transações</a>
              </div>
              <div class="col d-flex flex-column align-items-center justify-content-center flex-collum" style="height:125px;background-color: #ebebeb;border-radius:5px;">
                  <i class="bi bi-check2-all" style="font-size:25px;color:#787878;"></i>
                  <a class="link" href="/agencias/matriz/transacoes/cadastrar/" style="color:#787878;text-decoration: none;">Nova Transação</a>
              </div>
              <div class="col d-flex flex-column align-items-center justify-content-center flex-collum" style="height:125px;border-radius:5px;">
                  
              </div>
              <div class="col d-flex flex-column align-items-center justify-content-center flex-collum" style="height:125px;border-radius:5px;">
                  
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
            <h5 class="modal-title" id="ofertasModalLabel" style="color:#fff;">Navegação rápida</h5>
            <button type="button" class="btn-close" data-dismiss="modal" aria-label="Close" style="background: none; border: none; padding: 0;" onfocus="this.style.outline='none';" onblur="this.style.outline='';">
                <span aria-hidden="true" style="background: none;border: none;font-size: 25px;color: #fff;"><i class="fa fa-times"></i></span>
            </button>
          </div>
          <div class="modal-body">
          <!-- Add your modal content here -->
          <div class="row" style="gap:10px;padding-left: 20px; padding-right: 20px;">
              <div class="col d-flex flex-column align-items-center justify-content-center flex-collum" style="height:125px;background-color: #ebebeb;border-radius:5px;">
                  <i class="bi bi-tags" style="font-size:25px;color:#787878;"></i>
                  <a class="link" href="/agencias/matriz/ofertas/" style="color:#787878;text-decoration: none;">Ofertas</a>
              </div>
              <div class="col d-flex flex-column align-items-center justify-content-center flex-collum" style="height:125px;background-color: #ebebeb;border-radius:5px;">
                  <i class="bi bi-megaphone" style="font-size:25px;color:#787878;"></i>
                  <a class="link" href="/agencias/matriz/ofertas/minhas" style="color:#787878;text-decoration: none;">Minhas Ofertas</a>
              </div>
              <div class="col d-flex flex-column align-items-center justify-content-center flex-collum" style="height:125px;background-color: #ebebeb;border-radius:5px;">
                  <i class="bi bi-trash3" style="font-size:25px;color:#787878;"></i>
                  <a class="link" href="/agencias/matriz/ofertas/excluir" style="color:#787878;text-decoration: none;">Excluir Ofertas</a>
              </div>
              <div class="col d-flex flex-column align-items-center justify-content-center flex-collum" style="height:125px;background-color: #ebebeb;border-radius:5px;">
                  <i class="bi bi-journal-plus" style="font-size:25px;color:#787878;"></i>
                  <a class="link" href="/agencias/matriz/ofertas/cadastrar" style="color:#787878;text-decoration: none;">Nova Oferta</a>
              </div> 
          </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Bootstrap Modal Credito -->
    <div class="modal fade" id="creditoModal" tabindex="-1" aria-labelledby="creditoModalLabel" aria-hidden="true" style="background-color:#0000009e;">
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
                  <i class="bi bi-clipboard2-data-fill" style="font-size:25px;color:#787878;"></i>
                  <a class="link" href="/agencias/matriz/credito/" style="color:#787878;text-decoration: none;">Créditos</a>
              </div>
              <div class="col d-flex flex-column align-items-center justify-content-center flex-collum" style="height:125px;background-color: #ebebeb;border-radius:5px;">
                  <i class="bi bi-pie-chart-fill" style="font-size:25px;color:#787878;"></i>
                  <a class="link" href="/agencias/matriz/credito/analise/" style="color:#787878;text-decoration: none;">Analise</a>
              </div>
              <div class="col d-flex flex-column align-items-center justify-content-center flex-collum" style="height:125px;background-color: #ebebeb;border-radius:5px;">
                  <i class="bi bi-graph-up" style="font-size:25px;color:#787878;"></i>
                  <a class="link" href="/agencias/matriz/credito/solicitar/" style="color:#787878;text-decoration: none;">Solicitar Crédito</a>
              </div>
              <div class="col d-flex flex-column align-items-center justify-content-center flex-collum" style="height:125px;border-radius:5px;">
                  
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
                  <i class="bi bi-ticket-perforated" style="font-size:25px;color:#787878;"></i>
                  <a class="link" href="/agencias/matriz/vouchers/" style="color:#787878;text-decoration: none;">Vouchers</a>
              </div>
              <div class="col d-flex flex-column align-items-center justify-content-center flex-collum" style="height:125px;background-color: #ebebeb;border-radius:5px;">
                  <i class="bi bi-ticket-perforated-fill" style="font-size:25px;color:#787878;"></i>
                  <a class="link" href="#" style="color:#787878;text-decoration: none;">Meus Vouchers</a>
              </div>
              <div class="col d-flex flex-column align-items-center justify-content-center flex-collum" style="height:125px;background-color: #ebebeb;border-radius:5px;">
                  <i class="bi bi-trash3" style="font-size:25px;color:#787878;"></i>
                  <a class="link" href="/agencias/matriz/vouchers/cancelar/" style="color:#787878;text-decoration: none;">Cancelar Voucher</a>
              </div>
              <div class="col d-flex flex-column align-items-center justify-content-center flex-collum" style="height:125px;background-color: #ebebeb;border-radius:5px;">
                  <i class="bi bi-ticket-detailed" style="font-size:25px;color:#787878;"></i>
                  <a class="link" href="/agencias/matriz/vouchers/solicitacao/" style="color:#787878;text-decoration: none;">Solicitar Voucher</a>
              </div> 
          </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Bootstrap Modal Extrato -->
    <div class="modal fade" id="extratoModal" tabindex="-1" aria-labelledby="extratoModalLabel" aria-hidden="true" style="background-color:#0000009e;">
    <div class="modal-dialog modal-xl" style="padding-top:250px;padding-left:140px;width:100vw;height:100vh;background-color:#00000000;">
        <div class="modal-content w-100 h-100" style="background-color:#00000000;border:none;">
          <div class="modal-header" style="border-bottom: none;">
            <h5 class="modal-title" id="extratoModalLabel" style="color:#fff;">Navegação rápida</h5>
            <button type="button" class="btn-close" data-dismiss="modal" aria-label="Close" style="background: none; border: none; padding: 0;" onfocus="this.style.outline='none';" onblur="this.style.outline='';">
                <span aria-hidden="true" style="background: none;border: none;font-size: 25px;color: #fff;"><i class="fa fa-times"></i></span>
            </button>
          </div>
          <div class="modal-body">
          <!-- Add your modal content here -->
          <div class="row" style="gap:10px;padding-left: 20px; padding-right: 20px;">
              <div class="col d-flex flex-column align-items-center justify-content-center flex-collum" style="height:125px;background-color: #ebebeb;border-radius:5px;">
                  <i class="fa-solid fa-file-invoice-dollar" style="font-size:25px;color:#787878;"></i>
                  <a class="link mt-2" href="/agencias/matriz/extratos/" style="color:#787878;text-decoration: none;">Extratos</a>
              </div>
              <div class="col d-flex flex-column align-items-center justify-content-center flex-collum" style="height:125px;background-color: #ebebeb;border-radius:5px;">
                  <i class="fas fa-file-alt" style="font-size:25px;color:#787878;"></i>
                  <a class="link mt-2" href="/agencias/matriz/extratos/meu/" style="color:#787878;text-decoration: none;">Meus Extratos</a>
              </div>
              <div class="col d-flex flex-column align-items-center justify-content-center flex-collum" style="height:125px;border-radius:5px;">
                  
              </div>
              <div class="col d-flex flex-column align-items-center justify-content-center flex-collum" style="height:125px;border-radius:5px;">
                  
              </div>
          </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Bootstrap Modal Financeiro -->
    <div class="modal fade" id="finaceiroModal" tabindex="-1" aria-labelledby="financeiroModalLabel" aria-hidden="true" style="background-color:#0000009e;">
    <div class="modal-dialog modal-xl" style="padding-top:250px;padding-left:140px;width:100vw;height:100vh;background-color:#00000000;">
        <div class="modal-content w-100 h-100" style="background-color:#00000000;border:none;">
          <div class="modal-header" style="border-bottom: none;">
            <h5 class="modal-title" id="financeiroModalLabel" style="color:#fff;">Navegação rápida</h5>
            <button type="button" class="btn-close" data-dismiss="modal" aria-label="Close" style="background: none; border: none; padding: 0;" onfocus="this.style.outline='none';" onblur="this.style.outline='';">
                <span aria-hidden="true" style="background: none;border: none;font-size: 25px;color: #fff;"><i class="fa fa-times"></i></span>
            </button>
          </div>
          <div class="modal-body">
          <!-- Add your modal content here -->
          <div class="row" style="gap:10px;padding-left: 20px; padding-right: 20px;">
              <div class="col d-flex flex-column align-items-center justify-content-center flex-collum" style="height:125px;background-color: #ebebeb;border-radius:5px;">
                  <i class="fas fa-money-check-alt" style="font-size:25px;color:#787878;"></i>
                  <a class="link mt-2" href="/agencias/matriz/finaceiro/pagar/" style="color:#787878;text-decoration: none;">Contas a Pagar</a>
              </div>
              <div class="col d-flex flex-column align-items-center justify-content-center flex-collum" style="height:125px;background-color: #ebebeb;border-radius:5px;">
                  <i class="fas fa-money-bill-alt" style="font-size:25px;color:#787878;"></i>
                  <a class="link mt-2" href="/agencias/matriz/finaceiro/receber/" style="color:#787878;text-decoration: none;">Contas a Receber</a>
              </div>
              <div class="col d-flex flex-column align-items-center justify-content-center flex-collum" style="height:125px;border-radius:5px;">
                  
              </div>
              <div class="col d-flex flex-column align-items-center justify-content-center flex-collum" style="height:125px;border-radius:5px;">
                  
              </div>
          </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Bootstrap Modal Usuários -->
    <div class="modal fade" id="usuariosModal" tabindex="-1" aria-labelledby="usuariosModalLabel" aria-hidden="true" style="background-color:#0000009e;">
      <div class="modal-dialog modal-xl" style="padding-top:250px;padding-left:140px;width:100vw;height:100vh;background-color:#00000000;">
        <div class="modal-content w-100 h-100" style="background-color:#00000000;border:none;">
          <div class="modal-header" style="border-bottom: none;">
            <h5 class="modal-title" id="usuariosModalLabel" style="color:#fff;">Navegação rápida</h5>
            <button type="button" class="btn-close" data-dismiss="modal" aria-label="Close" style="background: none; border: none; padding: 0;" onfocus="this.style.outline='none';" onblur="this.style.outline='';">
                <span aria-hidden="true" style="background: none;border: none;font-size: 25px;color: #fff;"><i class="fa fa-times"></i></span>
            </button>
          </div>
          <div class="modal-body">
            <!-- Add your modal content here -->
            <div class="row" style="gap:10px;padding-left: 20px; padding-right: 20px;">
                <div class="col d-flex flex-column align-items-center justify-content-center flex-collum" style="height:125px;background-color: #fff;border-radius:5px;">
                    <i class="fas fa-user-cog mb-2" style="font-size:25px;color:#787878;"></i>
                    <a class="link" href="/agencias/matriz/conta/dados/" style="color:#787878;text-decoration: none;">Meus Dados</a>
                </div>
                <div class="col d-flex flex-column align-items-center justify-content-center flex-collum" style="height:125px;background-color: #fff;border-radius:5px;">
                    <i class="fas fa-users" style="font-size:25px;color:#787878;"></i>
                    <a class="link mt-2" href="/agencias/matriz/conta/usuarios/" style="color:#787878;text-decoration: none;">Usuários</a>
                </div>
                <div class="col d-flex flex-column align-items-center justify-content-center flex-collum" style="height:125px;background-color: #fff;border-radius:5px;">
                    <i class="fas fa-user-edit" style="font-size:25px;color:#787878;"></i>
                    <a class="link mt-2" href="/agencias/matriz/conta/editarUsuario/" style="color:#787878;text-decoration: none;">Editar Usuário</a>
                </div>
                <div class="col d-flex flex-column align-items-center justify-content-center flex-collum" style="height:125px;background-color: #fff;border-radius:5px;">
                    <i class="fas fa-user-plus" style="font-size:25px;color:#787878;"></i>
                    <a class="link mt-2" href="/agencias/matriz/conta/cadastrarUsuario/" style="color:#787878;text-decoration: none;">Cadastrar Usuário</a>
                </div>
                
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Bootstrap Modal Planos -->
    <div class="modal fade" id="planosModal" tabindex="-1" aria-labelledby="planosModalLabel" aria-hidden="true" style="background-color:#0000009e;">
    <div class="modal-dialog modal-xl" style="padding-top:250px;padding-left:140px;width:100vw;height:100vh;background-color:#00000000;">
        <div class="modal-content w-100 h-100" style="background-color:#00000000;border:none;">
          <div class="modal-header" style="border-bottom: none;">
            <h5 class="modal-title" id="planosModalLabel" style="color:#fff;">Navegação rápida</h5>
            <button type="button" class="btn-close" data-dismiss="modal" aria-label="Close" style="background: none; border: none; padding: 0;" onfocus="this.style.outline='none';" onblur="this.style.outline='';">
                <span aria-hidden="true" style="background: none;border: none;font-size: 25px;color: #fff;"><i class="fa fa-times"></i></span>
            </button>
          </div>
          <div class="modal-body">
          <!-- Add your modal content here -->
          <div class="row" style="gap:10px;padding-left: 20px; padding-right: 20px;">
              <div class="col d-flex flex-column align-items-center justify-content-center flex-collum" style="height:125px;background-color: #ebebeb;border-radius:5px;">
                  <i class="fa fa-list-alt" style="font-size:25px;color:#787878;"></i>
                  <a class="link mt-2" href="/agencias/matriz/planos/associados/" style="color:#787878;text-decoration: none;">Planos Associados</a>
              </div>
              <div class="col d-flex flex-column align-items-center justify-content-center flex-collum" style="height:125px;background-color: #ebebeb;border-radius:5px;">
                  <i class="fa fa-list-alt" style="font-size:25px;color:#787878;"></i>
                  <a class="link mt-2" href="/agencias/matriz/planos/agencias/" style="color:#787878;text-decoration: none;">Planos Agências</a>
              </div>
              <div class="col d-flex flex-column align-items-center justify-content-center flex-collum" style="height:125px;background-color: #ebebeb;border-radius:5px;">
                  <i class="fa fa-list-alt" style="font-size:25px;color:#787878;"></i>
                  <a class="link mt-2" href="/agencias/matriz/planos/gerentes/" style="color:#787878;text-decoration: none;">Planos Gerentes</a>
              </div>
              <div class="col d-flex flex-column align-items-center justify-content-center flex-collum" style="height:125px;border-radius:5px;">
                  
              </div>
          </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Bootstrap Modal Ctegorias -->
    <div class="modal fade" id="categoriasModal" tabindex="-1" aria-labelledby="categoriasModalLabel" aria-hidden="true" style="background-color:#0000009e;">
    <div class="modal-dialog modal-xl" style="padding-top:250px;padding-left:140px;width:100vw;height:100vh;background-color:#00000000;">
        <div class="modal-content w-100 h-100" style="background-color:#00000000;border:none;">
          <div class="modal-header" style="border-bottom: none;">
            <h5 class="modal-title" id="categoriasModalLabel" style="color:#fff;">Navegação rápida</h5>
            <button type="button" class="btn-close" data-dismiss="modal" aria-label="Close" style="background: none; border: none; padding: 0;" onfocus="this.style.outline='none';" onblur="this.style.outline='';">
                <span aria-hidden="true" style="background: none;border: none;font-size: 25px;color: #fff;"><i class="fa fa-times"></i></span>
            </button>
          </div>
          <div class="modal-body">
          <!-- Add your modal content here -->
          <div class="row" style="gap:10px;padding-left: 20px; padding-right: 20px;">
              <div class="col d-flex flex-column align-items-center justify-content-center flex-collum" style="height:125px;background-color: #ebebeb;border-radius:5px;">
                  <i class="fa fa-list-alt" style="font-size:25px;color:#787878;"></i>
                  <a class="link mt-2" href="/agencias/matriz/categorias/" style="color:#787878;text-decoration: none;">Categorias</a>
              </div>
              <div class="col d-flex flex-column align-items-center justify-content-center flex-collum" style="height:125px;background-color: #ebebeb;border-radius:5px;">
                  <i class="fa fa-list-alt" style="font-size:25px;color:#787878;"></i>
                  <a class="link mt-2" href="/agencias/matriz/categorias/subCategorias/" style="color:#787878;text-decoration: none;">Sub Categorias</a>
              </div>
              <div class="col d-flex flex-column align-items-center justify-content-center flex-collum" style="height:125px;border-radius:5px;">
                  
              </div>
              <div class="col d-flex flex-column align-items-center justify-content-center flex-collum" style="height:125px;border-radius:5px;">
                  
              </div>
          </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Bootstrap Modal Gerentes -->
    <div class="modal fade" id="gerentesModal" tabindex="-1" aria-labelledby="gerentesModalLabel" aria-hidden="true" style="background-color:#0000009e;">
    <div class="modal-dialog modal-xl" style="padding-top:250px;padding-left:140px;width:100vw;height:100vh;background-color:#00000000;">
        <div class="modal-content w-100 h-100" style="background-color:#00000000;border:none;">
          <div class="modal-header" style="border-bottom: none;">
            <h5 class="modal-title" id="gerentesModalLabel" style="color:#fff;">Navegação rápida</h5>
            <button type="button" class="btn-close" data-dismiss="modal" aria-label="Close" style="background: none; border: none; padding: 0;" onfocus="this.style.outline='none';" onblur="this.style.outline='';">
                <span aria-hidden="true" style="background: none;border: none;font-size: 25px;color: #fff;"><i class="fa fa-times"></i></span>
            </button>
          </div>
          <div class="modal-body">
          <!-- Add your modal content here -->
          <div class="row" style="gap:10px;padding-left: 20px; padding-right: 20px;">
              <div class="col d-flex flex-column align-items-center justify-content-center flex-collum" style="height:125px;background-color: #ebebeb;border-radius:5px;">
                  <i class="fa fa-user-plus" style="font-size:25px;color:#787878;"></i>
                  <a class="link mt-2" href="/agencias/matriz/gerentes/cadastrar/" style="color:#787878;text-decoration: none;">Novo Gerente</a>
              </div>
              <div class="col d-flex flex-column align-items-center justify-content-center flex-collum" style="height:125px;background-color: #ebebeb;border-radius:5px;">
                  <i class="fa fa-users" style="font-size:25px;color:#787878;"></i>
                  <a class="link mt-2" href="/agencias/matriz/gerentes/lista" style="color:#787878;text-decoration: none;">Gerentes</a>
              </div>
              <div class="col d-flex flex-column align-items-center justify-content-center flex-collum" style="height:125px;border-radius:5px;">
                  
              </div>
              <div class="col d-flex flex-column align-items-center justify-content-center flex-collum" style="height:125px;border-radius:5px;">
                  
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

