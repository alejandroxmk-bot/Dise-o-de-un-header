const openBtn = document.getElementById("entrada");
const closeBtn = document.getElementById("salida");
const navBar = document.getElementById("navegacion");

const actionNav = () => {
  navBar.classList.toggle("active");
};

openBtn.addEventListener("click", actionNav);
closeBtn.addEventListener("click", actionNav);
