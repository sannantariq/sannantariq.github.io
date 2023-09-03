
document.addEventListener('DOMContentLoaded', function() {
    const menu = document.getElementsByClassName("sidebar")[0];
    Array.from(document.getElementsByClassName("nav-sec"))
        .forEach((item, index) => {
            item.onmouseover = () => {
                menu.dataset.activeIndex = index;
            };
        });
});

