const slider = () => {
  console.log('start')
  console.log(document.documentElement.clientWidth)
  const buttons = document.querySelectorAll(".main__features__button");
  const slides = document.querySelectorAll(".main__features__slide");
  const sliderSmall = () => {
    buttons.forEach((el) => el.classList.remove("main__features__button--inactive"))
    slides.forEach((el) => el.classList.remove("main__features__slide--active"))
    slides[0].classList.add("main__features__slide--active");
    for (let i = 0; i < buttons.length; i += 1 ) {
      buttons[i].addEventListener("click", (e) => {
        buttons.forEach((el) => el.classList.remove("main__features__button--active"))
        slides.forEach((el) => el.classList.remove("main__features__slide--active"))
        buttons[i].classList.add("main__features__button--active");
        slides[i].classList.add("main__features__slide--active");
      })
    }
  } 
  const sliderBig = () => {
    slides.forEach((el) => el.classList.remove("main__features__slide--active"))
    slides[0].classList.add("main__features__slide--active");
    slides[1].classList.add("main__features__slide--active");
    buttons.forEach((el) => el.classList.remove("main__features__button--active"))
    buttons[0].classList.add("main__features__button--active");
    buttons[2].classList.add("main__features__button--inactive");
    buttons[3].classList.add("main__features__button--inactive");
    for (let i = 0; i < buttons.length - 2; i += 1 ) {
      buttons[i].addEventListener("click", (e) => {
        buttons.forEach((el) => el.classList.remove("main__features__button--active"))
        slides.forEach((el) => el.classList.remove("main__features__slide--active"))
        buttons[i].classList.add("main__features__button--active");
        if (i === 0) {
          slides[0].classList.add("main__features__slide--active");
          slides[1].classList.add("main__features__slide--active");
        } else {
          slides[2].classList.add("main__features__slide--active");
          slides[3].classList.add("main__features__slide--active");          
        }
      })
    }
  }
  if (document.documentElement.clientWidth < 1320) {
    console.log('1')
    sliderSmall();
  } else {
    console.log('2')
    sliderBig();
  }
  window.addEventListener("resize", event => {
    if (document.documentElement.clientWidth < 1320) {
      console.log('1')
      sliderSmall();
    } else {
      console.log('2')
      sliderBig();
    }
  }, false);

}
  
export default slider;