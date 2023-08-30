class sideBtn extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        
        <button class=" btn show-side-btn" type="button"">
            <i data="show-side-navigation1" class="fas fa-bars"></i>
        </button>

        `;
    }
  }
  customElements.define("side-btn", sideBtn);
  