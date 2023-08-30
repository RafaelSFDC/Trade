class SideBar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
          
        <nav class="sidebar" id="sidebar">
        <div
          class="sidebar-header d-flex justify-content-center align-items-center px-3 py-4"
        >
          <img
            class="rounded-pill img-fluid"
            width="65"
            src="https://uniim1.shutterfly.com/ng/services/mediarender/THISLIFE/021036514417/media/23148907008/medium/1501685726/enhance"
            alt=""
          />
          <div class="ms-2">
            <h5 class="fs-6 mb-0">
              <a class="text-decoration-none" href="#">Jone Doe</a>
            </h5>
            <p class="mt-1 mb-0">Lorem ipsum dolor sit amet consectetur.</p>
          </div>
        </div>

        <div class="sidebar-sticky pb-5">
          <ul class="nav flex-column">
            <li class="nav-item">
              <a class="nav-link text-purple active" href="../matriz/dashboard-matriz.html">
                <i class="height fas fa-home"></i>
                Início
              </a>
            </li>

            <li class="nav-item">
              <a
                class="dropdown-text text-purple collapsed"
                href="#associadosSubmenu"
                data-toggle="collapse"
                aria-expanded="false"
              >
                <i class="nav-icon height fas fa-users"></i>
                Associados
                <i class="height fas fa-chevron-right float-right"></i>
              </a>
              <ul class="nav collapse" id="associadosSubmenu">
                <li class="nav-item pl-3">
                  <a class="nav-link text-secondary" href="/associados/">
                    <i class="0"></i>
                    Associados
                  </a>
                </li>
                <li class="nav-item pl-3">
                  <a class="nav-link text-secondary" href="/associados/lista/">
                    <i class="0"></i>
                    Lista de associados
                  </a>
                </li>
                <li class="nav-item pl-3">
                  <a
                    class="nav-link text-secondary"
                    href="/associados/bloquear/"
                  >
                    <i class="0"></i>
                    Bloquear associado
                  </a>
                </li>
                <li class="nav-item pl-3">
                  <a
                    class="nav-link text-secondary"
                    href="/associados/cadastrar/"
                  >
                    <i class="0"></i>
                    Novo associado
                  </a>
                </li>
              </ul>
            </li>

            <li class="nav-item">
              <a
                class="dropdown-text text-purple collapsed"
                href="#agenciasSubmenu"
                data-toggle="collapse"
                aria-expanded="false"
              >
                <i class="height fas fa-building"></i>
                Agências
                <i class="height fas fa-chevron-right float-right"></i>
              </a>
              <ul class="nav collapse" id="agenciasSubmenu">
                <li class="nav-item pl-3">
                  <a class="nav-link text-secondary" href="/agencias/matriz/lista/">
                    <i class="0"></i>
                    Listar unidades
                  </a>
                </li>
                <li class="nav-item pl-3">
                  <a
                    class="nav-link text-secondary"
                    href="../agencias/matriz/cadastrar"
                  >
                    <i class="0"></i>
                    Nova Unidade
                  </a>
                </li>
              </ul>
            </li>

            <li class="nav-item">
              <a
                class="dropdown-text text-purple collapsed"
                href="#transacoesSubmenu"
                data-toggle="collapse"
                aria-expanded="false"
              >
                <i class="height fas fa-handshake"></i>
                Transações
                <i class="height fas fa-chevron-right float-right"></i>
              </a>
              <ul class="nav collapse" id="transacoesSubmenu">
                <li class="nav-item pl-3">
                  <a class="nav-link text-secondary" href="/transacoes/">
                    <i class="0"></i>
                    Transações
                  </a>
                </li>
                <li class="nav-item pl-3">
                  <a class="nav-link text-secondary" href="/transacoes/minhas/">
                    <i class="0"></i>
                    Minhas transações
                  </a>
                </li>
                <li class="nav-item pl-3">
                  <a
                    class="nav-link text-secondary"
                    href="/transacoes/cadastrar/"
                  >
                    <i class="0"></i>
                    Nova transação
                  </a>
                </li>
                <li class="nav-item pl-3">
                  <a
                    class="nav-link text-secondary"
                    href="/transacoes/estornar/"
                  >
                    <i class="0"></i>
                    Estornar transação
                  </a>
                </li>
              </ul>
            </li>

            <li class="nav-item">
              <a
                class="dropdown-text text-purple collapsed"
                href="#ofertasSubmenu"
                data-toggle="collapse"
                aria-expanded="false"
              >
                <i class="height fas fa-tags"></i>
                Ofertas
                <i class="height fas fa-chevron-right float-right"></i>
              </a>
              <ul class="nav collapse" id="ofertasSubmenu">
                <li class="nav-item pl-3">
                  <a class="nav-link text-secondary" href="/ofertas/">
                    <i class="0"></i>
                    Ofertas
                  </a>
                </li>
                <li class="nav-item pl-3">
                  <a class="nav-link text-secondary" href="/ofertas/minhas">
                    <i class="0"></i>
                    Minhas ofertas
                  </a>
                </li>
                <li class="nav-item pl-3">
                  <a class="nav-link text-secondary" href="/ofertas/excluir/">
                    <i class="0"></i>
                    Excluir oferta
                  </a>
                </li>
                <li class="nav-item pl-3">
                  <a class="nav-link text-secondary" href="/ofertas/cadastrar/">
                    <i class="0"></i>
                    Nova oferta
                  </a>
                </li>
              </ul>
            </li>

            <li class="nav-item">
              <a
                class="dropdown-text text-purple collapsed"
                href="#voucherSubmenu"
                data-toggle="collapse"
                aria-expanded="false"
              >
                <i class="height fas fa-percentage"></i>
                Voucher
                <i class="height fas fa-chevron-right float-right"></i>
              </a>
              <ul class="nav collapse" id="voucherSubmenu">
                <li class="nav-item pl-3">
                  <a class="nav-link text-secondary" href="/vouchers/">
                    <i class="0"></i>
                    Vouchers
                  </a>
                </li>
                <li class="nav-item pl-3">
                  <a
                    class="nav-link text-secondary"
                    href="/vouchers/solicitacao/"
                  >
                    <i class="0"></i>
                    Solicitar Voucher
                  </a>
                </li>
                <li class="nav-item pl-3">
                  <a class="nav-link text-secondary" href="/vouchers/cancelar/">
                    <i class="0"></i>
                    Cancelar Voucher
                  </a>
                </li>
              </ul>
            </li>

            <li class="nav-item">
              <a
                class="dropdown-text text-purple collapsed"
                href="#extratoSubmenu"
                data-toggle="collapse"
                aria-expanded="false"
              >
                <i class="height fas fa-receipt"></i>
                Extrato
                <i class="height fas fa-chevron-right float-right"></i>
              </a>
              <ul class="nav collapse" id="extratoSubmenu">
                <li class="nav-item pl-3">
                  <a class="nav-link text-secondary" href="/extratos/">
                    <i class="0"></i>
                    Extratos
                  </a>
                </li>
                <li class="nav-item pl-3">
                  <a class="nav-link text-secondary" href="/extratos/meu/">
                    <i class="0"></i>
                    Meu extrato
                  </a>
                </li>
              </ul>
            </li>

            <li class="nav-item">
              <a
                class="dropdown-text text-purple collapsed"
                href="#financeiroSubmenu"
                data-toggle="collapse"
                aria-expanded="false"
              >
                <i class="height fas fa-hand-holding-usd"></i>
                Financeiro
                <i class="height fas fa-chevron-right float-right"></i>
              </a>
              <ul class="nav collapse" id="financeiroSubmenu">
                <li class="nav-item pl-3">
                  <a class="nav-link text-secondary" href="/financeiro/pagar/">
                    <i class="0"></i>
                    Contas a pagar
                  </a>
                </li>
                <li class="nav-item pl-3">
                  <a
                    class="nav-link text-secondary"
                    href="/financeiro/receber/"
                  >
                    <i class="0"></i>
                    Contas a receber
                  </a>
                </li>
              </ul>
            </li>

            <li class="nav-item">
              <a
                class="dropdown-text text-purple collapsed"
                href="#contaSubmenu"
                data-toggle="collapse"
                aria-expanded="false"
              >
                <i class="height fas fa-cog"></i>
                Minha conta
                <i class="height fas fa-chevron-right float-right"></i>
              </a>
              <ul class="nav collapse" id="contaSubmenu">
                <li class="nav-item pl-3">
                  <a class="nav-link text-secondary" href="/conta/dados/">
                    <i class="0"></i>
                    Meus dados
                  </a>
                </li>
                <li class="nav-item pl-3">
                  <a class="nav-link text-secondary" href="/conta/usuarios/">
                    <i class="0"></i>
                    Usuários
                  </a>
                </li>
                <li class="nav-item pl-3">
                  <a
                    class="nav-link text-secondary"
                    href="/conta/editarUsuario/"
                  >
                    <i class="0"></i>
                    Editar Usuário
                  </a>
                </li>
                <li class="nav-item pl-3">
                  <a
                    class="nav-link text-secondary"
                    href="/conta/cadastrarUsuario/"
                  >
                    <i class="0"></i>
                    Novo Usuário
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
          `;
  }
}

customElements.define("side-bar", SideBar);
