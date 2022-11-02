class AppFooter extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <p>Copyright &copy; 2022 | PResto</p>
        `;
  }
}

customElements.define('app-footer', AppFooter);
