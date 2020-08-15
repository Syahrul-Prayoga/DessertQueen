class NavBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `<nav class="navbar navbar-expand-lg navbar-light bg-light sticky-top">
    <div class="container">
      <a class="navbar-brand" href="#">DessertQueen</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav ml-auto">
          <a class="nav-item nav-link" href="#">Home</a>
          <a class="nav-item nav-link" href="#">Services</a>
          <a class="nav-item nav-link" href="#">Product</a>
          <a class="nav-item nav-link" href="#">Contact</a>
          <a class="nav-item nav-link" href="#">About</a>
        </div>
      </div>
    </div>
  </nav>`
  }
}

customElements.define("nav-bar", NavBar);