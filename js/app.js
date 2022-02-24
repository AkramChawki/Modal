const button = document.querySelector("#open-modal");
const overlay = document.querySelector(".overlay");
const modal = overlay.querySelector(".modal");
const modalbtn = modal.querySelector("button");

button.addEventListener("click", () => {
    overlay.classList.remove("hide");
})
overlay.addEventListener("click", () => {
    overlay.classList.add("hide");
})

modal.addEventListener("click", (e) => {
    e.stopPropagation();
})

modalbtn.addEventListener("click", () => {
    overlay.classList.add("hide");
})
