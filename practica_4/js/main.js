//MOVEMENT ANIMATION
const card = document.querySelector('.card');
const container = document.querySelector('.showcase');
const btn = document.querySelector('.btn');
//ITEMS
const title = document.querySelector('.title');
const logo = document.querySelector('.logo img');
const lema = document.querySelector('.info h3');

//MOVING ANIMATION EVENT
card.addEventListener("mousemove", (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) /50;
    let yAxis = (window.innerHeight / 2 - e.pageY) /50;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

//ANIMATE IN
card.addEventListener("mouseenter", e => {
    card.style.transition = "none";
    //POPOUT
    title.style.transform = "translateZ(150px)";
    logo.style.transform = "translateZ(250px)";
    lema.style.transform = "translateZ(125px)";
});

//ANIMATE OUT
card.addEventListener("mouseleave", e => {
    card.style.transition = "all 0.5s ease";
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    //POPBACK
    title.style.transform = "translateZ(0px)";
    logo.style.transform = "translateZ(0px)";
    lema.style.transform = "translateZ(0px)";
});
