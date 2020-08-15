class Jumbotron extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `<div class="jumbotron jumbotron-fluid" id="jumbotron">
    <div class="container">
      <h3 class="display-4">Sweet, Tasty & Delicious!</h3>
      <h6>Order (0435) 888 888 / contact@DessertQueen.com</h6>
      <button type="button" class="btn btn-outline-light rounded-pill">
        Order
      </button>
    </div>
  </div>`
  }
}

customElements.define("jumbotron-layout", Jumbotron);