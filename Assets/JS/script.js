const slides = document.querySelectorAll(".slide");
const herotwo = document.querySelector(".beam-card"); 
let indice = 0;
const card = document.querySelector(".sponsor-card");
//Identify if it has an card id into the html part

if(card){
setInterval(() => {

    slides[indice].classList.remove("active");

    indice++;

    if(indice >= slides.length){
        indice = 0;
    }

    slides[indice].classList.add("active");

}, 3000);
card.addEventListener("mousemove", (e) => {

    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = -(y - centerY) / 20;
    const rotateY = (x - centerX) / 20;

    card.style.transform =
        `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

});
}
//Identify if it has an herotwo id into the html part
if (herotwo) {
herotwo.addEventListener("mousemove", (e) => {

    const rect = herotwo.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    herotwo.style.setProperty("--x", `${x}px`);
    herotwo.style.setProperty("--y", `${y}px`);

});
}
async function loadComponent(id, file) {
    const response = await fetch(file);
    const data = await response.text();
    document.getElementById(id).innerHTML = data;
}
loadComponent("header", "/Components/Header/header.html");
loadComponent("footer", "/Components/Footer/footer.html");