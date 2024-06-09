document.addEventListener("DOMContentLoaded", e => {

  let countSlideImg = 0
  let slidesImgs = document.querySelectorAll("[data-slideritem=img]")
  let translateX = 0

  document.addEventListener("click", e => {
    const { target } = e

    if (target.closest("[data-slidermove=left]")) {
      countSlideImg--
      translateX -= document.querySelector(".slider__img").clientWidth
      if (countSlideImg < 0) {
        countSlideImg = 0
        translateX = 0
      }
      document.querySelector("[data-container=sliderimgs]").scrollLeft -= document.querySelector(".slider__img").clientWidth
    }
    if (target.closest("[data-slidermove=right]")) {
      countSlideImg++
      translateX += document.querySelector(".slider__img").clientWidth
      if (countSlideImg > (slidesImgs.length - 1)) {
        countSlideImg = slidesImgs.length - 1
        translateX = (document.querySelector(".slider__img").clientWidth * (slidesImgs.length - 1))
      }
      document.querySelector("[data-container=sliderimgs]").scrollLeft += document.querySelector(".slider__img").clientWidth
    }

    slidesImgs.forEach(slideImg => {
      if (slideImg.dataset.slideritemcount != countSlideImg + 1) {
        slideImg.classList.add("slider__img--scale")
      } else {
        slideImg.classList.remove("slider__img--scale")
      }
    })

  })

  // Para Tablet/Mobiles
  if (window.innerWidth < 767) {
    let opciones = {
      root:document.querySelector("[data-container=sliderimgs]"),
      rootMargin: "0% 20% 0% 20%",
      threshold: 0.5
    }

    let observer = new IntersectionObserver(
      (entradas) => {
        if (entradas[0].isIntersecting) {
          slidesImgs.forEach(slideImg => {
            if (slideImg.dataset.slideritemcount != entradas[0].target.dataset.slideritemcount) {
              slideImg.classList.add("slider__img--scale")
            } else {
              slideImg.classList.remove("slider__img--scale")
            }
          })
        }
      }, opciones)

    slidesImgs.forEach(slideImg => {
      observer.observe(slideImg)
    })
  }

})