class Jumbotron extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <div class="hero">
            <div class="hero__inner">
                <h1 class="hero__title">Explore, Visit, and Enjoy</h1>
                <p class="hero__tagline">Choose your favorite restaurant only in PResto</p>
            </div>
        </div>
        `;
  }
}

customElements.define('app-jumbotron', Jumbotron);
