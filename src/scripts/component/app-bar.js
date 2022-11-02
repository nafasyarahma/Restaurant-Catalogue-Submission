class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
            <div class="app-bar__brand">
                <img src="logo.png" alt="Logo">
            </div>

            <div class="app-bar__menu">
                <button id="hamburgerButton">☰</button>
            </div>

            <nav id="navigationDrawer" class="app-bar__navigation">
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="#/favorite">Favorite</a></li>
                <li><a href="https://www.linkedin.com/in/nafasya-rahma-safitra/" rel="noopener" target='_blank'>About Us</a></li>
            </ul>
            </nav>
        `;
  }
}

customElements.define('app-bar', AppBar);
