/*===== MENU SHOW =====*/
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId);
    const nav = document.getElementById(navId);

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show');

            // Accessibility support
            const isExpanded = nav.classList.contains('show');
            toggle.setAttribute('aria-expanded', isExpanded);
        });
    }
};

showMenu('nav-toggle', 'nav-menu');


/*==================== REMOVE MENU MOBILE ====================*/
const navLinks = document.querySelectorAll('.nav__link');

function linkAction() {
    const navMenu = document.getElementById('nav-menu');
    const navToggle = document.getElementById('nav-toggle');

    if (navMenu) {
        navMenu.classList.remove('show');
    }

    if (navToggle) {
        navToggle.setAttribute('aria-expanded', 'false');
    }
}

navLinks.forEach(link => {
    link.addEventListener('click', linkAction);
});


/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
    const scrollDown = window.scrollY;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 100;
        const sectionId = current.getAttribute('id');

        const sectionLink = document.querySelector(
            `.nav__menu a[href="#${sectionId}"]`
        );

        if (!sectionLink) return;

        if (
            scrollDown >= sectionTop &&
            scrollDown < sectionTop + sectionHeight
        ) {
            sectionLink.classList.add('active-link');
        } else {
            sectionLink.classList.remove('active-link');
        }
    });
};

window.addEventListener('scroll', scrollActive);


/*==================== SCROLL REVEAL ANIMATION ====================*/
if (typeof ScrollReveal !== 'undefined') {

    const sr = ScrollReveal({
        origin: 'top',
        distance: '60px',
        duration: 1500,
        delay: 200,
        reset: false
    });

    // Home section
    sr.reveal('.home__data', {});
    sr.reveal('.home__img', { delay: 400 });
    sr.reveal('.home__social-icon', {
        interval: 200
    });

    // About section
    sr.reveal('.about__img', {});
    sr.reveal('.about__subtitle, .about__text', {
        delay: 400
    });

    // Skills section
    sr.reveal('.skills__subtitle, .skills__text', {});
    sr.reveal('.skills__img', {
        delay: 400
    });

    sr.reveal('.skills__data', {
        interval: 200
    });

    // Work / Projects section
    sr.reveal('.work__img', {
        interval: 200
    });

    // Resume section
    sr.reveal('.resume__content', {
        interval: 200
    });

    // Contact section
    sr.reveal('.arch_contact_us_duplicate .section-head', {
        origin: 'left',
        distance: '40px'
    });

    sr.reveal('.arch_contact_us_duplicate .form-wrapper', {
        origin: 'right',
        distance: '40px',
        delay: 300
    });

    sr.reveal('.arch_contact_us_duplicate .social-media-icon-container', {
        interval: 150,
        delay: 400
    });

}


/*==================== CONTACT FORM ====================*/
const contactForm = document.querySelector(
    '.arch_contact_us_duplicate form'
);

if (contactForm) {

    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const name = contactForm.querySelector(
            'input[placeholder="Name"]'
        )?.value.trim();

        const email = contactForm.querySelector(
            'input[type="email"]'
        )?.value.trim();

        const message = contactForm.querySelector(
            'textarea'
        )?.value.trim();

        if (!name || !email || !message) {
            alert('Please fill in all required fields.');
            return;
        }

        alert(
            `Thank you, ${name}! Your message has been received.`
        );

        contactForm.reset();
    });

}
