class Product extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `  <div class="product">
    <div class="container">
      <div class="row justify-content-center ">
        <div class="col-lg-6">
          <h3>MENU</h3>
        </div>
      </div>
      <div id="listMeal" class="row"></div>
    </div>
  </div>`
  }
}

customElements.define("product-item", Product);