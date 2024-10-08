window.addEventListener("scroll", () => {
  // header scroll event
  let header = document.querySelector("header");
  let nav = document.querySelector("header nav");
  if(window.scrollY > header.offsetHeight){
    header.classList.add("header-scroll");
    nav.classList.replace("navbar-dark", "navbar-light");
  }
  else{
    header.classList.remove("header-scroll");
    nav.classList.replace("navbar-light", "navbar-dark");
  }

  // scroll top button
  let topBtn = document.querySelector(".scroll-top");
  let banner = document.querySelector(".banner");
  if(banner.clientHeight < window.scrollY){
    topBtn.classList.add("on");
    topBtn.onclick = () => {
      window.scroll({
        top: window.outerHeight + banner.outerHeight,
        left: 0,
        behavior: 'smooth'
      });
    };
  }
  else{
    topBtn.classList.remove("on");
  }
});

function contentScroll(pageName){
  event.preventDefault();
  let el = document.querySelector(pageName);
  window.scroll({
    top: el.offsetTop,
    left: 0,
    behavior: 'smooth'
  });
}