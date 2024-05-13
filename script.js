// დავალება 1

const paragragh = document.createElement("p");
document.body.appendChild(paragragh);
const btn = document.querySelector(".btn");

btn.addEventListener("click", function () {
  paragragh.textContent = "Hello, Dynamic World";
});

// დავალება 2

const lorem1 = document.querySelector(".lorem");

lorem1.textContent = "New text content";

// დავალება 3

const submit = document.getElementById("submit");

submit.addEventListener("click", function (e) {
  alert("Hello world");
  e.preventDefault();
});

// დავალება 4

const img = document.querySelector(".img");

const navMobile = document.querySelector(".nav-list-mobile");

img.addEventListener("click", function () {
  navMobile.classList.toggle("show");
});
