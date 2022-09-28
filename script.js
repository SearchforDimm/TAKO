let activeDrag = false;
const tabMenu = document.querySelector(".horizontal-menus");

tabMenu.addEventListener("mousemove", (drag) => {
    if(!activeDrag) return;
    tabMenu.scrollLeft -= drag.movementX;
})

tabMenu.addEventListener("mousedown", () => {
    activeDrag = true;
})