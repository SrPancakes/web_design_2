//MOVEMENT ANIMATION
const card = document.querySelector('.project_card');

//MOVING ANIMATION EVENT
card.addEventListener("mousemove", (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) /10;
    let yAxis = (window.innerHeight / 2 - e.pageY) /10;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`[0];
});

//ANIMATE IN
card.addEventListener("mouseenter", e => {
    card.style.transition = "none";
});

//ANIMATE OUT
card.addEventListener("mouseleave", e => {
    card.style.transition = "all 0.5s ease";
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
});
