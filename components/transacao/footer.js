class Footer extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        
      <nav class="navbar bg-orange p-10 footer">
          <h2>® Rede Trade 2023</h2>
      </nav>
        `;
    }
  }
  customElements.define("footer-bar", Footer);