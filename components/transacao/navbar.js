class NavBar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      
    <nav class="navbar navbar-light bg-orange p-0 px-4 nav-reset">
        <ul class="navbar-nav ml-auto">
            <li class="nav-item text-right">
                <a class="nav-link p-0" href="/">
                    <img src="/assets/img/logo.png"  class="logo" width="50%" alt="" />
                </a>
            </li>
        </ul>
    </nav>
      `;
  }
}
customElements.define("nav-bar", NavBar);
