class Navbar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <style>
            /* Add your CSS styles here */
            .modal {
                display: none;
                position: fixed;
                z-index: 1000;
                left: 0;
                top: 0;
                width: 100%;
                height: 100%;
                overflow: auto;
                background-color: rgba(0, 0, 0, 0.5);
            }
  
            .modal-content {
                background-color: #f68b1f;
                margin: 15% auto;
                padding: 20px;
                border: 1px solid #888;
                width: 80%;
            }
  
            .close {
                color: red;
                float: right;
                font-size: 28px;
                font-weight: bold;
            }
  
            .close:hover,
            .close:focus {
                color: black;
                text-decoration: none;
                cursor: pointer;
            }
  
            /* Rest of your existing CSS styles */
            nav {
                height: 40px;
                display: flex;
                align-items: center;
                justify-content: center;
                background-color: #0a0a23;
            }
  
            ul {
                padding: 0;
            }
  
            a {
                font-weight: 700;
                margin: 0 25px;
                color: #fff;
                text-decoration: none;
            }
  
            a:hover {
                padding-bottom: 5px;
                box-shadow: inset 0 -2px 0 0 #fff;
            }
        </style>
        <navbar>
          <nav class="navbar navbar-expand-lg bg-#f68b1f overflow-y-hidden">
           
          





          <div class="container-fluid ml-lg-5">
          <a class="navbar-brand" href="/"><img src="/img/macroweb.gif" class="macroweb"></a>



          <button class="navbar-toggler" type="button" dataBsToggle="collapse" data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          








          
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
  
            <ul class="navbar-nav me-auto mb-9 mb-lg-0 ml-lg-auto d-flex">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="index.html">HOME</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="about.html">ABOUT US</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="services.html">SERVICES</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="event.html">EVENTS</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="download.html">DOWNLOAD</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="contact.html">CONTACT</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="http://admin.macroweb.in/">LOGIN</a>
              </li>
            </ul>
          </div>
        </div>




















          </nav>
  
          <!-- Full screen modal -->
          <div id="fullScreenModal" class="modal">
            <div class="modal-content">
              <span class="close" onclick="closeModal()">&times;</span>
              <h5></h5>
              <ul class="navbar-nav  d-flex text-center">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="index.html">HOME</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="about.html">ABOUT US</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="services.html">SERVICES</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="event.html">EVENTS</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="download.html">DOWNLOAD</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="contact.html">CONTACT</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="http://admin.macroweb.in/">LOGIN</a>
              </li>
            </ul>
             
            
            </div>
          </div>






          








        </navbar>
      `;

    // Find the button element in the component
    const button = this.querySelector("button");

    // Add an event listener to the button
    button.addEventListener("click", () => {
      openModal();
    });
  }
}

customElements.define("navbar-component", Navbar);
function openModal() {
  const modal = document.getElementById("fullScreenModal");
  modal.style.display = "block";
}

function closeModal() {
  const modal = document.getElementById("fullScreenModal");
  modal.style.display = "none";
}
