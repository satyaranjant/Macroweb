class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
        <style>
          nav {
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color:  #0a0a23;
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
        <header>
        <nav class="navbar navbar-expand-lg navbar-light bg-transparent">
        <div class="container-fluid justify-content-between">
          <!-- Left elements -->
          <div class="d-flex">
            <!-- Brand -->
            <p class="text-black font-weight-bold ml-4 mt-3">
              <img src="/img/call-removebg-preview.png" class="img1" />06784|241990|241991
            </p>
          </div>
          <!-- Left elements -->
  
  
  
  
          <!-- Center elements -->
          <ul class="navbar-nav flex-row d-none d-md-flex overflow-hidden justify-content-between">
            <li class="nav-item me-3 me-lg-1 active">
              <a class="nav-link" href="https://www.facebook.com/MacrowebTechnology2016/?ref=aymt_homepage_panel">
                <img src="/img/facebook-removebg-preview.png" class="fb" /> </a>
            </li>
  
            <li class="nav-item me-3 me-lg-1">
              <a class="nav-link" href="https://twitter.com/i/flow/login?redirect_after_login=%2FMacroweb2">
                <img src="/img/tweet-removebg-preview.png" class="twitter" />
              </a>
            </li>
  
            <li class="nav-item me-3 me-lg-1">
              <a class="nav-link" href="https://www.youtube.com/embed/eye43XMl9WQ?autoplay=1&mute=1">
                <img src="/img/youtube-removebg-preview.png" class="yt" />
              </a>
            </li>
  
            <li class="nav-item me-3 me-lg-1">
              <a class="nav-link" href="https://mail.google.com/mail/">
                <img src="/img/gmail-removebg-preview.png" class="gmail" />
              </a>
            </li>
  
            <li class="nav-item me-3 me-lg-1">
              <a class="nav-link" href="https://www.google.com/">
                <img src="/img/google-removebg-preview.png" class="google" />
              </a>
            </li>
  
            <li class="nav-item me-3 me-lg-1">
              <a class="nav-link" href="https://instagram.com/macroweb_technology?igshid=OGQ5ZDc2ODk2ZA==">
                <img src="/img/insta-removebg-preview.png" class="instagram" />
              </a>
            </li>
          </ul>
          <!-- Center elements -->
  
  
  
  
          <!-- Right elements -->
          <ul class="navbar-nav flex-row">
            <p class="text-black font-weight-bold ml-4 mr-4 mt-3">
              <img src="/img/email-removebg-preview.png" class="img1" />admin@macroweb.in
            </p>
  
          </ul>
          <!-- Right elements -->
        </div>
      </nav>
        </header>
      `;
  }
}

customElements.define("header-component", Header);
