class Contact extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `<div class="contact">
    <div class="container">
      <div class="row">
        <div class="col-lg-4">
          <h3>About DessertQueen</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            dolorum nisi iste ducimus animi expedita quia illum modi.
            Exercitationem ipsam cum aspernatur animi et ipsa quisquam! Harum
            velit minus quibusdam magnam delectus eveniet, quae soluta eius,
            deserunt eaque ratione corporis quis perferendis quod facilis
            illum aperiam totam id impedit modi.
          </p>
        </div>
        <div class="col-lg-5">
          <h3>Opening Hours</h3>
          <h6 class="days">Monday <span>11.00 AM - 11.00 PM</span></h6>
          <h6 class="days">Tuesday <span>11.00 AM - 11.00 PM</span></h6>
          <h6 class="days">Wednesday <span>11.00 AM - 11.00 PM</span></h6>
          <h6 class="days">Thursday <span>11.00 AM - 11.00 PM</span></h6>
          <h6 class="days">Friday <span>11.00 AM - 11.00 PM</span></h6>
          <h6 class="days">Saturday <span>11.00 AM - 11.00 PM</span></h6>
          <h6 class="days">Sunday <span>Closed</span></h6>
        </div>
        <div class="col-lg-3">
          <h3>Connect with us</h3>
          <h6>Customer Service</h6>
          <p>(0435) 888 888</p>
          <h6>E-Mail</h6>
          <p>contact@DessertQueen.com</p>
          <i class="fab fa-facebook-f icon"></i>
          <i class="fab fa-twitter icon"></i>
          <i class="fab fa-instagram icon"></i>
          <i class="fab fa-youtube icon"></i>
        </div>
      </div>
    </div>
  </div>`
  }
}

customElements.define("contact-layout", Contact);