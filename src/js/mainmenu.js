const mainMenuToggle = () => {
  const mainMenu = document.querySelector(".main-menu");
  const button = document.querySelector(".page-header__toggle");
  mainMenu.classList.remove("main-menu--nojs");
  button.classList.remove("page-header__toggle--no-js");
  
  button.addEventListener("click", (e) => {
    e.preventDefault();
    if (mainMenu.classList.contains("main-menu--opened")) {
      mainMenu.classList.remove("main-menu--opened");
      button.classList.add("page-header__toggle--closed");
    } else {
      mainMenu.classList.add("main-menu--opened");
      button.classList.remove("page-header__toggle--closed");
    };
  });
  const arrow = document.querySelector(".main-menu__item--closed");
  const helpMenu = document.querySelector(".main-menu__help");
  arrow.addEventListener("click", (e) => {
    if (document.documentElement.clientWidth < 1320) {
      if (arrow.classList.contains("main-menu__item--closed")) {
        arrow.classList.remove("main-menu__item--closed");
        arrow.classList.add("main-menu__item--opened");
        helpMenu.classList.remove("main-menu__help--closed");
      } else {
        arrow.classList.remove("main-menu__item--opened");
        arrow.classList.add("main-menu__item--closed"); 
        helpMenu.classList.add("main-menu__help--closed");        
      }
    } 
  });
}



export default mainMenuToggle;