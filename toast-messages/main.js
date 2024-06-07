/**
 * Funcion para mostar un mensaje
 * @param {Object} options - Objecto de Opciones.
 * @param {String} options.message - Mensaje a mostar.
 * @param {String} options.color - Color del Mesanje, opciones de color (red, blue, orange, green).
 * @returns {String} Html del mensaje encapsulado
 */
const renderMessage = ({ message = "", color = "green" }) => {
  const randomnumber = Math.ceil(Math.random() * 999999)
  const idDiv = `div-${randomnumber}`;
  const idBtn = `btn-${randomnumber}`;
  let time = 10;

  const styles = `
    <style>
    .message__area {
      position: fixed;
      inset: auto 6px 6px auto;
      display: grid;
      align-items: end;
      grid-template-rows: 1fr;
      gap: .5rem;
      color: #fff;
      z-index: 999;
      height: fit-content;
      width: 340px;
    }
    
    .msg__item--green {
      background-color: #3bba1f;
      box-shadow: 0px -4px 7px -2px #3bba1f50;
    }
    
    .msg__item--red {
      background-color: #ba1f1f;
      box-shadow: 0px -4px 7px -2px #ba1f1f50;
    }
    
    .msg__item--blue {
      background-color: #1f5cba;
      box-shadow: 0px -4px 7px -2px #1f5cba50;
    }
    
    .msg__item--orange {
      background-color: #ba671f;
      box-shadow: 0px -4px 7px -2px #ba671f50;
    }
    
    .message__area .msg__item__wrapp {
      position:absolute;
      bottom:2px;
      transform-origin:bottom;
      transition:all 500ms ease;
      animation: fade 500ms linear forwards;
    }
    
    .message__area .msg__item {
      position: relative;
      overflow: hidden;
      padding: 1rem;
      border-radius: .3rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      gap: .5rem;
      /* background-color: #242424;
      border: 1px solid #4e4e4e;
      box-shadow: 0px -4px 7px -2px #242424; */
    }
    
    .message__area .out {
      animation: fadeout 500ms linear forwards;
    }
    
    .message__area .msg__item__wrapp:nth-last-child(2) {
      scale: 0.98;
      bottom:12px;
      opacity:0.95;
      backdrop-filter:blur(1px);
    }
    
    .message__area .msg__item__wrapp:nth-last-child(3) {
      scale: 0.94;
      bottom:24px;
      opacity:0.9;
      backdrop-filter:blur(2px);
    }
    
    .message__area .msg__item__wrapp:nth-last-child(4) {
      scale: 0.88;
      bottom:36px;
      opacity:0.85;
      backdrop-filter:blur(3px);
    }
    
    .message__area .msg__item__wrapp:nth-last-child(n + 5) {
      visibility: hidden;
      bottom:0px;
      translate:0px 50vh;
      opacity: 0;
    }
    
    .message__area:hover {
      overflow:hidden;
      overflow-y:auto;
      height:calc(100dvh - 1%);
      scrollbar-width: thin;
    }
    
    .message__area:hover .msg__item__wrapp:nth-last-child(n + 1){
      visibility: visible;
      scale: 1;
      opacity: 1;
      translate:0px 0vh;
      position:initial;
    }
    
    @keyframes fade{
      from{
        opacity:0.5;
      }
      to{
        opacity:1;
      }
    }
    @keyframes fadeout{
      from{
        opacity:1;
      }
      to{
        opacity:0.5;
      }
    }
    
    .message__area .msg__close {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: .5rem;
      cursor: pointer;
      position: relative;
      z-index: 1;
      background-color: #e1e1e12e;
      border:1px solid transparent;
      border-radius: .5rem;
      color:#FFF;
    }

    .message__area .msg__close:hover {
      border: 1px solid #e1e1e1a1;
    }
    
    .message__area .timer {
      position: absolute;
      width: 100%;
      height: 10px;
      background: yellow;
      inset: auto 0px 0px;
      transition: all 1s ease-in-out;
      border-radius: .2rem;
    }

    </style>
  `;

  let timerBar = 100;
  // const cleartime = setInterval(() => {
  //   time--;
  //   document
  //     .getElementById(idDiv)
  //     .querySelector(".timer").style.width = `${(timerBar -=
  //       timerBar / time)}%`;
  //   if (time <= 0) {
  //     document.getElementById(idDiv)?.classList.add("out");
  //     setTimeout(() => {
  //       document.getElementById(idDiv)?.remove();
  //       clearInterval(cleartime);
  //     }, 250);
  //   }
  // }, 1000);

  document.addEventListener("click", (e) => {
    const { target } = e;
    if (target.closest(`[data-btn='${idBtn}']`)) {
      // clearInterval(cleartime);
      target.closest(`.${idDiv}`).remove();
    }
  });
  document.removeEventListener("click", (e) => { });

  const $body = document.querySelector("body");
  let $messageArea = $body.querySelector("#messageArea");
  if (!$body.querySelector("#messageArea")) {
    document.querySelector("head").insertAdjacentHTML("beforeend", styles);
    $body.insertAdjacentHTML(
      "afterbegin",
      ` <div class="message__area" id="messageArea">`
    );
    $messageArea = $body.querySelector("#messageArea");
  }
  $messageArea.insertAdjacentHTML(
    "afterbegin",
    `
      <div id="${idDiv}" class="msg__item__wrapp ${idDiv}">
        <div  class="msg__item msg__item--${color} ">
          <div>
            <span>${message}</span>
          </div>
          <div>
            <button type="button" class="msg__close" data-btn="${idBtn}">
              <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-xbox-x"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 21a9 9 0 0 0 9 -9a9 9 0 0 0 -9 -9a9 9 0 0 0 -9 9a9 9 0 0 0 9 9z" /><path d="M9 8l6 8" /><path d="M15 8l-6 8" /></svg>
            </button>
          </div>
          <div class="timer"></div>
        </div>
      </div>
    `
  );
};
document.addEventListener("click", (e) => {
  const { target } = e;

  if (target.dataset.btn === "rendermsg") {
    renderMessage({ message: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", color: "green" });
  }
});

document.removeEventListener("click", (e) => { });
