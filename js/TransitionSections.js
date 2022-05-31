/* Animate section entries */
function animate() {
    let animates = document.querySelectorAll(".animate");

    for(let i = 0; i < animates.length; i++) {
        let windowHeight = window.innerHeight;
        let elementTop = animates[i].getBoundingClientRect().top;
        let elementVisible = 150;

        if(elementTop < windowHeight - elementVisible) {
            animates[i].classList.add("active");
        }
        else {
            animates[i].classList.remove("active");
        }
    }
}

window.addEventListener("scroll", animate);

/* Show header in fixed position when scrolling down from its position */
window.addEventListener("scroll", function() {

    let header = document.querySelector(".header");
    let scrollValue = window.pageYOffset;

    if(scrollValue > 500) {
        header.classList.add("active");
    }
    else {
        header.classList.remove("active");
    }
});