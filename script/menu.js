let isMenuToggled = false;  // Flag to check if the menu is toggled

function toggleMenu() {
    const menu = document.querySelector('.mobile-menu');
    const icon = document.querySelector('.menu-icon');
    const body = document.querySelector('body');

    body.classList.toggle('menu-open');
    icon.classList.toggle('menu-toggle');

    // Toggle the flag
    isMenuToggled = !isMenuToggled;

    // Set bar colors based on toggle state
    if (isMenuToggled) {
        setMenuIconBarColor('white');
    } else {
        updateBarColorBasedOnScroll();  // Update colors based on scroll position when closing the menu
    }
}

function toggleDropdown() {
    var dropdownContent = document.querySelector(".dropdown-content");
    var arrowDown = document.querySelector(".arrow.down");
    var arrowUp = document.querySelector(".arrow.up");
    var body = document.body;

    if (dropdownContent.style.display === "block") {
        dropdownContent.style.display = "none";
        arrowDown.style.display = "inline";
        arrowUp.style.display = "none";
    } else {
        dropdownContent.style.display = "block";
        arrowDown.style.display = "none";
        arrowUp.style.display = "inline";
    }
}

function toggleMenu() {
    const menu = document.querySelector('.mobile-menu');
    const icon = document.querySelector('.menu-icon');
    const body = document.querySelector('body');

    // Toggle menu-open class for icon
    icon.classList.toggle('menu-open');

    // Open/Close menu logic
    if (menu.style.width === "80%") {
        menu.style.width = "0%";
        body.classList.remove('no-scroll');

        // Hide the bars immediately when the menu is closing
        const bars = document.querySelectorAll('.bar');
        bars.forEach(bar => bar.style.display = 'none');

        // Use setTimeout to delay the appearance of the bars
        setTimeout(() => {
            bars.forEach(bar => bar.style.display = 'block');
        }, 300);
    } else {
        menu.style.width = "80%";
        body.classList.add('no-scroll');
    }
}
