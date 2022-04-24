const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

document.getElementById("sign-in-form").addEventListener("submit", (event) => {
  event.preventDefault();
});
document.getElementById("sign-up-form").addEventListener("submit", (event) => {
  event.preventDefault();
});