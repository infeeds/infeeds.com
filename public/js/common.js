document.addEventListener("DOMContentLoaded", function() {
  'use strict';

  const html = document.querySelector('html'),
    globalWrap = document.querySelector('.global-wrap'),
    body = document.querySelector('body'),
    menuToggle = document.querySelector(".hamburger"),
    menuList = document.querySelector(".main-nav"),
    toggleTheme = document.querySelector(".toggle-theme"),
    btnScrollToTop = document.querySelector(".top");


  /* =======================================================
  // Menu + Theme Switcher
  ======================================================= */
  menuToggle.addEventListener("click", () => {
    menu();
  });


  // Menu
  function menu() {
    menuToggle.classList.toggle("is-open");
    menuList.classList.toggle("is-visible");
  }


  // Theme Switcher
  if (toggleTheme) {
    toggleTheme.addEventListener("click", () => {
      darkMode();
    });
  };

  function darkMode() {
    if (html.classList.contains('dark-mode')) {
      html.classList.remove('dark-mode');
      localStorage.removeItem("theme");
      document.documentElement.removeAttribute("dark");
    } else {
      html.classList.add('dark-mode');
      localStorage.setItem("theme", "dark");
      document.documentElement.setAttribute("dark", "");
    }
  };


  /* ================================================================
  // Stop Animations During Window Resizing and Switching Theme Modes
  ================================================================ */
  let disableTransition;

  if (toggleTheme) {
    toggleTheme.addEventListener("click", () => {
      stopAnimation();
    });
  }

  window.addEventListener("resize", () => {
    stopAnimation();
  });

  function stopAnimation() {
    document.body.classList.add("disable-animation");
    clearTimeout(disableTransition);
    disableTransition = setTimeout(() => {
      document.body.classList.remove("disable-animation");
    }, 100);
  };


  /* =======================
  // Responsive Videos
  ======================= */
  if (typeof reframe === 'function') {
    reframe(".post__content iframe:not(.reframe-off), .page__content iframe:not(.reframe-off)");
  }


  /* =======================
  // LazyLoad Images
  ======================= */
  if (typeof LazyLoad === 'function') {
    const lazyLoadInstance = new LazyLoad({
      elements_selector: ".lazy"
    });
  }


  /* =======================
  // Zoom Image
  ======================= */
  if (typeof Lightense === 'function') {
    const lightense = document.querySelector(".page__content img, .post__content img, .gallery__image img"),
    imageLink = document.querySelectorAll(".page__content a img, .post__content a img, .gallery__image a img");

    if (imageLink) {
      for (let i = 0; i < imageLink.length; i++) imageLink[i].parentNode.classList.add("image-link");
      for (let i = 0; i < imageLink.length; i++) imageLink[i].classList.add("no-lightense");
    };

    if (lightense) {
      Lightense(".page__content img:not(.no-lightense), .post__content img:not(.no-lightense), .gallery__image img:not(.no-lightense)", {
      padding: 60,
      offset: 30
      });
    };
  }


  /* =======================
  // Convert Hex to RGBA
  ======================= */
  const hex2rgba = (hex, alpha = 0.15) => {
    if (!hex) return 'transparent';
    const matches = hex.match(/\w\w/g);
    if (!matches) return 'transparent';
    const [r, g, b] = matches.map(x => parseInt(x, 16));
    return `rgba(${r},${g},${b},${alpha})`;
  };
  const imageCover = document.querySelectorAll('.tag-color-js');


  // Adds a linear gradient to posts
  function linearGradient() {
    for (var i = 0; i < imageCover.length; i++) {
      const dataAccent = imageCover[i].getAttribute('data-accent');
      if (dataAccent) {
        const dataAttribute = hex2rgba(dataAccent);
        imageCover[i].style.background = dataAttribute;
      }
    }
  };

  linearGradient();


  /* =======================
  // Scroll Top Button
  ======================= */
  if (btnScrollToTop) {
    btnScrollToTop.addEventListener("click", function () {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
      });
    });
  }

});