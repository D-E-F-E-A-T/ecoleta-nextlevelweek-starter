const buttonSearch = document.querySelector("#pagehome main a")
const modal = document.querySelector("#modal")
const close = document.querySelector("#modal a")

buttonSearch.addEventListener('click', () => {
    modal.classList.remove("hide")
})
close.addEventListener('click' , () => {
    modal.classList.toggle("hide")
})