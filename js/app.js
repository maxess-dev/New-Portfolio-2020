function projectHover(){
    
    const item1 = document.querySelector(".grid-item-1");
    const sousItem1 = document.querySelector(".contents-tools-1");

    const item2 = document.querySelector(".grid-item-2");
    const sousItem2 = document.querySelector(".contents-tools-2");

    const item3 = document.querySelector(".grid-item-3");
    const sousItem3 = document.querySelector(".contents-tools-3");

    const item4 = document.querySelector(".grid-item-4");
    const sousItem4 = document.querySelector(".contents-tools-4");

    const item5 = document.querySelector(".grid-item-5");
    const sousItem5 = document.querySelector(".contents-tools-5");
    
    item1.addEventListener("click",() => {
        sousItem1.style.display = "flex";
    })

    item1.addEventListener("mouseleave",() => {
        sousItem1.style.display = "none";
    })

    item2.addEventListener("click",() => {
        sousItem2.style.display = "flex";
        
    })

    item2.addEventListener("mouseleave",() => {
        sousItem2.style.display = "none";
    })

    item3.addEventListener("click",() => {
        sousItem3.style.display = "flex";
        
    })

    item3.addEventListener("mouseleave",() => {
        sousItem3.style.display = "none";
    })

    item4.addEventListener("click",() => {
        sousItem4.style.display = "flex";
        
    })

    item4.addEventListener("mouseleave",() => {
        sousItem4.style.display = "none";
    })

    item5.addEventListener("click",() => {
        sousItem5.style.display = "flex";
        
    })

    item5.addEventListener("mouseleave",() => {
        sousItem5.style.display = "none";
    })

}

projectHover()


ScrollReveal().reveal('.skills-box-1', { delay: 500 });
ScrollReveal().reveal('.skills-box-2', { delay: 700 });
ScrollReveal().reveal('.skills-box-3', { delay: 900 });

ScrollReveal().reveal('.grid-item-1', { delay: 1100 });
ScrollReveal().reveal('.grid-item-2', { delay: 1300 });
ScrollReveal().reveal('.grid-item-3', { delay: 1500 });
ScrollReveal().reveal('.grid-item-4', { delay: 1700 });
ScrollReveal().reveal('.grid-item-5', { delay: 1900 });

ScrollReveal().reveal('#studies', { delay: 500 });
ScrollReveal().reveal('.dot-1', { delay: 700 });
ScrollReveal().reveal('.dot-2', { delay: 900 });
ScrollReveal().reveal('.dot-4', { delay: 1100 });
ScrollReveal().reveal('.dot-6', { delay: 1300 });

ScrollReveal().reveal('#end', { delay: 1300 });
ScrollReveal().reveal('.go-up', { delay: 1500 });