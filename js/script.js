document.addEventListener("DOMContentLoaded", function() {
    initCTAButtons();
    initMenuToggle();
});

/*Mensagem de sucesso*/
function initCTAButtons() {
    const ctaButtons = document.querySelectorAll(".cta");
    if (ctaButtons.length > 0) {
        ctaButtons.forEach(button => {
            button.addEventListener("click", function() {
                alert("Parabéns! Você garantiu seu acesso ao ebook.");
            });
        });
    }
}

/*Menu responsivo*/
const menuToggle = document.querySelector(".menu-toggle");

function initMenuToggle() {
  const navbarNav = document.querySelector(".navbar-nav");
  
  if (menuToggle && navbarNav) {
      menuToggle.addEventListener("click", function () {
          navbarNav.classList.toggle("show");
          menuToggle.classList.toggle("active");
      });
  } 
}

// linha no a (animação)
function initNavHighlight() {
  const navItems = document.querySelectorAll(".navbar-nav .nav-item");
  const savedNavItem = localStorage.getItem("selectedNavItem");
  
  navItems.forEach((item) => {
    const link = item.querySelector("a");
    
    if (savedNavItem && link.getAttribute("href") === savedNavItem) {
      navItems.forEach((i) => i.classList.remove("active"));
      item.classList.add("active");
    }
    
    item.addEventListener("click", () => {
      // Remove a classe 'active' de todos os itens e adiciona somente no clicado
      navItems.forEach((i) => i.classList.remove("active"));
      item.classList.add("active");
      localStorage.setItem("selectedNavItem", link.getAttribute("href"));
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initMenuToggle();
  initNavHighlight();
});

// Ao carregar a página, inicializa tudo
document.addEventListener("DOMContentLoaded", () => {
  initMenuToggle();
  initNavHighlight();
});

// video button (Play / Pause)
const video = document.getElementById("video-marketing");
const playButton = document.getElementById("play-button");
const playIcon = document.getElementById("play-icon");

function playPause() {

    if (video.paused) {
        video.play();
        playIcon.src = "/assets/icons/pause-icon.png"; // Muda para o ícone de pause
    } else {
        video.pause();
        playIcon.src = "/assets/icons/play-icon.png"; // Volta para o ícone de play
    }
}

// Oculta o botão depois que o vídeo começar a tocar
video.addEventListener("play", () => {
    playButton.style.opacity = "0";
});

// Mostra o botão novamente quando o vídeo for pausado
video.addEventListener("pause", () => {
    playButton.style.opacity = "1";
});


// Dark end Light mode
const themeSwitch = document.getElementById("theme-switch");
const themeIcon = document.getElementById("theme-icon");

function toggleTheme() {
    if (document.body.classList.contains("dark-mode")) {
      document.body.classList.remove("dark-mode");
      themeIcon.src = "/assets/icons/dark_mode_24.svg";
      localStorage.setItem("theme", "light");
    } else {
      document.body.classList.add("dark-mode");
      themeIcon.src = "/assets/icons/light_mode_24.svg";
      localStorage.setItem("theme", "dark");
    }
  }
  
  themeSwitch.addEventListener("click", toggleTheme);
  
  window.addEventListener("load", () => {
    const savedTheme = localStorage.getItem("theme") || "light";
    if (savedTheme === "dark") {
      document.body.classList.add("dark-mode");
      themeIcon.src = "/assets/icons/light_mode_24.svg";
    }
  });

// close menu 
document.addEventListener("DOMContentLoaded", () => {
    const navMenu = document.querySelector(".navbar-nav");
  
    navMenu.addEventListener("click", (event) => {
      // Verifica se o clique ocorreu em um <a> ou em um elemento dentro de um <a>
      if (event.target.closest("a")) {
        navMenu.classList.remove("show");
        
        // Remove class active
        menuToggle.classList.remove("active");
      }
    });
});

// navbar line-bottom
