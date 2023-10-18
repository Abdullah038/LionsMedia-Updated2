document.addEventListener('DOMContentLoaded', function() {
    const wdContent = document.querySelector('.visualContent-WD');
    const smContent = document.querySelector('.visualContent-SM');
    const bContent = document.querySelector('.visualContent-B');
    const ccContent = document.querySelector('.visualContent-CC');

    const wdParagraph = document.querySelector('#paragraph-WD');
    const smParagraph = document.querySelector('#paragraph-SM');
    const bParagraph = document.querySelector('#paragraph-B');
    const ccParagraph = document.querySelector('#paragraph-CC');

    const contents = [wdContent, smContent, bContent, ccContent];
    const paragraphs = [wdParagraph, smParagraph, bParagraph, ccParagraph];

    wdParagraph.classList.add('active');

    const colors = ['color1', 'color2', 'color3', 'color4'];

    const listItems = document.querySelectorAll('.list-container li');
    const body = document.body;

    listItems.forEach((li, index) => {
        li.addEventListener('click', function() {
            colors.forEach(color => {
                body.classList.remove(color);
            });

            body.classList.add(colors[index]);

            contents.forEach(content => {
                content.classList.remove('active');
                content.classList.remove('slide-in');
                content.classList.add('slide-out');
            });

            paragraphs.forEach(paragraph => {
                paragraph.classList.remove('active');
                paragraph.classList.remove('slide-in');
                paragraph.classList.add('slide-out');
            });

            const hrefValue = this.querySelector('a').getAttribute('href');

            switch (hrefValue) {
                case "#web-development":
                case "#paragraph-WD":
                    wdContent.classList.add('slide-in');
                    wdContent.classList.add('active');
                    wdParagraph.classList.add('slide-in');
                    wdParagraph.classList.add('active');
                    break;
                case "#social-media":
                case "#paragraph-SM":
                    smContent.classList.add('slide-in');
                    smContent.classList.add('active');
                    smParagraph.classList.add('slide-in');
                    smParagraph.classList.add('active');
                    break;
                case "#branding":
                case "#paragraph-B":
                    bContent.classList.add('slide-in');
                    bContent.classList.add('active');
                    bParagraph.classList.add('slide-in');
                    bParagraph.classList.add('active');
                    break;
                case "#content-creation":
                case "#paragraph-CC":
                    ccContent.classList.add('slide-in');
                    ccContent.classList.add('active');
                    ccParagraph.classList.add('slide-in');
                    ccParagraph.classList.add('active');
                    break;
            }
        });
    });

    const webDevLink = document.querySelector('.list-container a[href="#web-development"]');
    if (webDevLink) {
        webDevLink.classList.add('active');
    }

    // Add event listeners for the dropdown links
    const dropdownLinks = document.querySelectorAll('.sub-menu a');
    dropdownLinks.forEach((link, index) => {
        link.addEventListener('click', function(event) {
            event.preventDefault();

            listItems.forEach(li => {
                li.querySelector('a').classList.remove('active');
            });

            link.classList.add('active');

            const hrefValue = link.getAttribute('href').replace('#paragraph-', '#');

            const correspondingLink = document.querySelector(`.list-container a[href="${hrefValue}"]`);
            if (correspondingLink) {
                correspondingLink.click();
            }
        });
    });
});

$(document).ready(function() {
    $(".list-container a").on("click", function(event) {
        event.preventDefault();
        $(".list-container a").removeClass("active");
        $(this).addClass("active");
        $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top
        }, 500);
    });

    const hash = window.location.hash;
    if (hash) {
        $("html, body").animate({
            scrollTop: $(hash).offset().top
        }, 500);
    }
});


$(document).ready(function() {
    const wdContent = document.querySelector('.visualContent-WD');
    const smContent = document.querySelector('.visualContent-SM');
    // ... rest of your content selections

    const listItems = document.querySelectorAll('.list-container li');
    const body = document.body;

    listItems.forEach((li, index) => {
        li.addEventListener('click', function() {
            // ... rest of your click handling logic
        });
    });

    // ... rest of your existing logic

    $(".list-container a").on("click", function(event) {
        event.preventDefault();
        $(".list-container a").removeClass("active");
        $(this).addClass("active");
        $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top
        }, 500);
    });

    // Check for a hash in the URL and trigger a click on the corresponding link
    const hash = window.location.hash;
    if (hash) {
        const correspondingLink = document.querySelector(`.list-container a[href="${hash}"]`);
        if (correspondingLink) {
            correspondingLink.click();
        } else {
            // For handling paragraph links in the dropdown
            const modifiedHash = hash.replace('#paragraph-', '#');
            const paragraphLink = document.querySelector(`.list-container a[href="${modifiedHash}"]`);
            if (paragraphLink) {
                paragraphLink.click();
            }
        }

        $("html, body").animate({
            scrollTop: $(hash).offset().top
        }, 500);
    }
});