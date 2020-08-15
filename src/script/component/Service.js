class Service extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `<div class="service">
    <div class="bg"></div>
    <div class="container">
      <h6>You Can Eat Anything <br />from 11:00 AM to 11:00 PM.</h6>
    </div>
  </div>`
  }
}

customElements.define("service-layout", Service);