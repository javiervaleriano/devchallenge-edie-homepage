const d = document,
      $nav = d.querySelector('.nav'),
      $linksNav = d.querySelector('.nav__list'),
      $navToggle = d.querySelector('.nav__toggle');

function expandirNavbar() {
    $navToggle.classList.toggle('toggle--active');

    if ($navToggle.classList.contains('toggle--active')) {
        $nav.style.height = `${$linksNav.getBoundingClientRect().height}px`;

    } else {
        $nav.style.height = '0px';
    }
}

function contraerNavbar(e) {    
    if (window.innerWidth < 850) {
        $navToggle.classList.remove('toggle--active');
        $nav.style.height = '0px';
    }

    e.preventDefault();

    let obj = e.target,
        id = undefined;

    !obj.matches('.to-top__icon')
    ? id = obj.getAttribute('href').slice(1)
    : id = obj.parentElement.getAttribute('href').slice(1);

    const headerHght = d.querySelector('.header').getBoundingClientRect().height,
          section = d.getElementById(id);

    id === 'hero'
    ? window.scroll(0, 0)
    : id === 'footer'
    ? window.scroll(0, (section.offsetTop - headerHght))
    : window.scroll(0, (section.offsetTop - headerHght) - 15);
}

function probarToTop(obj) {
    return ['nav__links', 'footer__link', 'back-to-top', 'to-top__icon'].includes(obj.classList[obj.classList.length-1]);
}

const resources = {
    expandirNavbar,
    contraerNavbar,
    probarToTop
};

export default resources;