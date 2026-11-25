// header.js
document.addEventListener("DOMContentLoaded", function() {
  
  // 1. Header ka HTML Structure
  const headerHTML = `
    <header class="site-header">
      <div class="container">
        
        <!-- Logo -->
        <a href="#" class="logo">
          <img src="https://www.safehandssecurityservices.com.au/wp-content/uploads/2025/11/cropped-cropped-Untitled-design-28.webp" alt="Safehands Security Services">
        </a>

        <!-- Mobile Hamburger Button -->
        <button class="mobile-toggle" aria-label="Toggle Menu">☰</button>

        <!-- Navigation Menu -->
        <nav class="main-nav">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Gallery</a></li>
            
            <!-- Dropdown Item -->
            <li class="has-dropdown">
              <a href="#">Our Services ▾</a>
              <ul class="dropdown-menu">
                <li><a href="https://www.safehandssecurityservices.com.au/services/alarm-installation-adelaide-services/" target="_blank">Alarm</a></li>
                <li><a href="https://www.safehandssecurityservices.com.au/services/construction-site-security-services-adelaide/" target="_blank">Construction Security</a></li>
                <li><a href="https://www.safehandssecurityservices.com.au/services/crowd-controller-adelaide/" target="_blank">Crowd Controller</a></li>
                <li><a href="https://www.safehandssecurityservices.com.au/services/door-supervisor-security-services/" target="_blank">Door Supervisor</a></li>
                <li><a href="https://www.safehandssecurityservices.com.au/services/event-security-services-adelaide/" target="_blank">Event Security</a></li>
                <li><a href="https://www.safehandssecurityservices.com.au/services/k9-unit/" target="_blank">K9 Unit</a></li>
                <li><a href="https://www.safehandssecurityservices.com.au/services/loss-prevention-security-services/" target="_blank">Loss Prevention</a></li>
                <li><a href="https://www.safehandssecurityservices.com.au/services/mobile-patrols-adelaide-security/" target="_blank">Mobile Patrols</a></li>
                <li><a href="https://www.safehandssecurityservices.com.au/services/party-security-adelaide/" target="_blank">Party Security</a></li>
                <li><a href="https://www.safehandssecurityservices.com.au/services/residential-security/" target="_blank">Residential Security</a></li>
                <li><a href="https://www.safehandssecurityservices.com.au/services/security-guards-adelaide-services/" target="_blank">Security Guard Services</a></li>
                <li><a href="https://www.safehandssecurityservices.com.au/services/cctv-installation-adelaide/" target="_blank">CCTV Installation</a></li>
                <li><a href="https://www.safehandssecurityservices.com.au/services/home-security-systems/" target="_blank">Home Security Systems</a></li>
                <li><a href="https://www.safehandssecurityservices.com.au/services/cash-in-transit-services-in-adelaide/" target="_blank">Cash in Transit Services</a></li>
              </ul>
            </li>
            
            <li><a href="#">Case Studies</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </nav>

        <!-- Call Now Button -->
        <a href="tel:1300723321" class="btn-call">CALL NOW</a>

      </div>
    </header>
  `;

  // 2. Header ka CSS
  const headerCSS = `
    <style>
      /* Reset & Basic */
      .site-header * { box-sizing: border-box; margin: 0; padding: 0; }
      
      .site-header {
        background: #ffffff;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
        position: sticky;
        top: 0;
        z-index: 1000;
        font-family: 'Lato', system-ui, sans-serif;
      }

      .site-header .container {
        max-width: 1180px;
        margin: 0 auto;
        padding: 0 24px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 90px;
      }

      /* Logo */
      .site-header .logo img {
        height: 60px;
        width: auto;
        display: block;
      }

      /* Main Menu */
      .site-header .main-nav ul {
        display: flex;
        list-style: none;
        gap: 30px;
        align-items: center;
      }

      .site-header .main-nav ul li {
        position: relative;
      }

      .site-header .main-nav ul li a {
        text-decoration: none;
        color: #333;
        font-size: 15px;
        font-weight: 500;
        transition: color 0.3s;
        padding: 10px 0;
        display: block;
      }

      .site-header .main-nav ul li a:hover {
        color: #b12525;
      }

      /* Dropdown Menu */
      .site-header .dropdown-menu {
        position: absolute;
        top: 100%;
        left: 0;
        background: #ffffff;
        min-width: 220px;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
        border: 1px solid #eee;
        opacity: 0;
        visibility: hidden;
        transform: translateY(10px);
        transition: all 0.2s ease;
        border-radius: 4px;
        padding: 8px, 8px; 
        z-index: 100;
        display: flex;
        flex-direction: column; 
      }

      .site-header .main-nav ul li.has-dropdown:hover .dropdown-menu {
        opacity: 1;
        visibility: visible;
        transform: translateY(0);
      }

      .site-header .dropdown-menu li {
        width: 100%;
        margin: 0;
      }

      /* Har row (item) ki padding - FIXED */
      .site-header .dropdown-menu li a {
        padding: 0px 20px; /* Top/Bottom 2px, Left/Right 20px */
        font-size: 14px;
        line-height: 0; /* LINE HEIGHT FIX - Space kam karne ke liye */
        color: #666;
        white-space: nowrap;
        display: block;
        transition: 0.2s;
      }

      .site-header .dropdown-menu li a:hover {
        background: #f8f9fa;
        color: #b12525;
      }

      /* Call Now Button */
      .site-header .btn-call {
        background: #222;
        color: #fff;
        padding: 12px 24px;
        text-decoration: none;
        font-size: 13px;
        font-weight: 700;
        border-radius: 4px;
        transition: 0.3s;
        letter-spacing: 0.5px;
        white-space: nowrap;
      }

      .site-header .btn-call:hover {
        background: #b12525;
      }

      /* Mobile Toggle (Hamburger) */
      .site-header .mobile-toggle {
        display: none;
        background: none;
        border: none;
        font-size: 26px;
        cursor: pointer;
        color: #333;
      }

      /* Responsive */
      @media (max-width: 992px) {
        .site-header .main-nav {
          position: absolute;
          top: 90px;
          left: 0;
          width: 100%;
          background: #fff;
          box-shadow: 0 10px 20px rgba(0,0,0,0.1);
          display: none;
          padding: 20px 0;
        }
        
        .site-header .main-nav.active {
          display: block;
        }

        .site-header .main-nav ul {
          flex-direction: column;
          gap: 0;
        }

        .site-header .main-nav ul li {
          width: 100%;
        }

        .site-header .main-nav ul li a {
          padding: 15px 24px;
          border-bottom: 1px solid #eee;
        }

        /* Dropdown Mobile */
        .site-header .dropdown-menu {
          position: static;
          box-shadow: none;
          border: none;
          opacity: 1;
          visibility: visible;
          transform: none;
          display: none;
          background: #f8f9fa;
          padding: 0; 
        }
        
        .site-header .dropdown-menu li a {
          padding: 10px 40px; 
        }

        .site-header .main-nav ul li.has-dropdown:hover .dropdown-menu {
          display: block;
        }

        .site-header .mobile-toggle {
          display: block;
        }
        
        .site-header .btn-call {
          display: none;
        }
      }
    </style>
  `;

  // 3. HTML aur CSS ko page mein inject karo
  const placeholder = document.getElementById('header-placeholder');
  if (placeholder) {
    placeholder.innerHTML = headerCSS + headerHTML;
  }

  // 4. Mobile Menu Toggle Logic
  const mobileToggle = document.querySelector(".mobile-toggle");
  const mainNav = document.querySelector(".main-nav");

  if (mobileToggle && mainNav) {
    mobileToggle.addEventListener("click", function() {
      mainNav.classList.toggle("active");
    });
  }
});
