const abrir = document.querySelector(".abrir-modal");
const fechar = document.querySelector("#fechar");
const fade = document.querySelector("#fade");
const modal = document.querySelector("#card-modal");
const snes = document.querySelector("#btn-snes");
const jogosSnes = document.querySelector("#nintendo")
const play = document.querySelector("#btn-play");
const jogosPLay = document.querySelector("#playstation");
const sega = document.querySelector("#btn-sega");
const jogosSega = document.querySelector("#sega");
const menus = document.querySelectorAll(".menu");


menus.forEach(menu => {
  menu.addEventListener("click", ()=> {

    const menuSelecionado = document.querySelector(".menu.selecionado");

    menuSelecionado.classList.remove("selecionado");

    menu.classList.add("selecionado");

  })
})


fechar.addEventListener("click", () => {
  toggleModal();
});

function toggleModal() {
  fade.classList.toggle("hide");
  modal.classList.toggle("hide");
}

[abrir, fechar, fade].forEach((el) => {
  el.addEventListener("click", () => toggleModal());
});

function fabrir(){
    toggleModal()
}

snes.addEventListener('click', ()=>{
    jogosSnes.style.display = 'flex';
    jogosPLay.style.display = 'none';
    jogosSega.style.display = 'none';
})

play.addEventListener('click', ()=>{
    jogosSnes.style.display = 'none';
    jogosPLay.style.display = 'flex';
    jogosSega.style.display = 'none';
})

sega.addEventListener('click', ()=>{
    jogosSnes.style.display = 'none';
    jogosPLay.style.display = 'none';
    jogosSega.style.display = 'flex';
})





