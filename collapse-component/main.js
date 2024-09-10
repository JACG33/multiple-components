document.addEventListener("DOMContentLoaded", e => {
  
  document.addEventListener("click", e => {
    const {target}=e

    if (target.closest("#toggle-open")) {
      const $containWrap = target.closest(".wrapper__component").querySelector("[data-contain=wrap]")
      
      $containWrap.classList.toggle("wrapper__component__items--show")
    }
  })
})