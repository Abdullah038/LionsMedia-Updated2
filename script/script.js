document.addEventListener('DOMContentLoaded', function() {
    var paragraph = document.querySelector('.excellence p.expandable-content');
    var shortDescription = document.createElement('span');
    var moreLink = document.createElement('span');
    var lessLink = document.createElement('span');

    shortDescription.textContent = paragraph.textContent.slice(0, paragraph.textContent.length / 2) + '...';
    shortDescription.className = 'short-description';

    moreLink.textContent = 'more...';
    moreLink.className = 'more-link';
    moreLink.onclick = function() {
        paragraph.style.display = 'block';
        shortDescription.style.display = 'none';
        moreLink.style.display = 'none';
        lessLink.style.display = 'inline'; // This will show the "Show less" on mobile view
    };

    lessLink.textContent = 'Show less';
    lessLink.className = 'less-link';
    lessLink.onclick = function() {
        paragraph.style.display = 'none';
        shortDescription.style.display = 'block';
        moreLink.style.display = 'inline'; // This will show the "more..." on mobile view
        lessLink.style.display = 'none'; 
    };

    paragraph.parentNode.insertBefore(shortDescription, paragraph);
    paragraph.parentNode.insertBefore(moreLink, paragraph);
    paragraph.parentNode.insertBefore(lessLink, paragraph.nextSibling); // Inserting lessLink after the paragraph
});

document.addEventListener('scroll', function() {
    if (!isMenuToggled) {  // Only proceed if the menu is not toggled
        updateBarColorBasedOnScroll();
    }
});
function updateBarColorBasedOnScroll() {
    const header = document.querySelector('header');
    const navbarBrand = document.querySelector('.navbar .navbar-brand');
    const navLinks = document.querySelectorAll('.navbar .nav-link');
    const dropdownMenuItems = document.querySelectorAll('.navbar .dropdown-menu-item a'); // select dropdown menu items
    const inlineBlocks = document.querySelectorAll('.d-inline-block');
    const aboutUsSection = document.getElementById('full-aboutUs');
    const servicesSection = document.getElementById('services');
    const testimonialsSection = document.getElementById('testimonials');
    const menuIconBars = document.querySelectorAll('.menu-icon .bar');

    function setMenuIconBarColor(color) {
        menuIconBars.forEach(bar => bar.style.backgroundColor = color);
    }

    const aboutUsPosition = aboutUsSection.getBoundingClientRect().top + window.scrollY;
    const servicesPosition = servicesSection.getBoundingClientRect().top + window.scrollY;
    const testimonialsPosition = testimonialsSection.getBoundingClientRect().top + window.scrollY;

    function setTextColor(color) {
        navbarBrand.setAttribute('style', `color: ${color} !important`);
        navLinks.forEach(link => link.setAttribute('style', `color: ${color} !important`));
        dropdownMenuItems.forEach(item => item.style.color = color); // change color of dropdown menu items
    }

    if (window.scrollY < aboutUsPosition) {
        header.style.backgroundColor = 'rgba(211, 211, 211, 0.1)';
        setTextColor('black');
        inlineBlocks.forEach(block => block.style.filter = 'none');
        setMenuIconBarColor('black');
    } else if (window.scrollY >= aboutUsPosition && window.scrollY < servicesPosition) {
        header.style.backgroundColor = 'rgb(0 0 0 / 62%)';
        setTextColor('white');
        inlineBlocks.forEach(block => block.style.filter = 'invert(1)');
        setMenuIconBarColor('white');
    } else if (window.scrollY >= servicesPosition && window.scrollY < testimonialsPosition) {
        header.style.backgroundColor = 'rgba(211, 211, 211, 0.1)';
        setTextColor('black');
        inlineBlocks.forEach(block => block.style.filter = 'none');
        setMenuIconBarColor('black');
    } else if (window.scrollY >= testimonialsPosition) {
        header.style.backgroundColor = 'rgb(0 0 0 / 62%)';
        setTextColor('white');
        inlineBlocks.forEach(block => block.style.filter = 'invert(1)');
        setMenuIconBarColor('white');
    }
}
