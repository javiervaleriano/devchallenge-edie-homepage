const d = document,
      svcs = d.querySelector('.section__services__items'),
      portfolioImgs = d.querySelectorAll('.section__portfolio__item'),
      team = d.querySelector('.section__team'),
      observador2 = new IntersectionObserver(mostrarContenido, {
        root: null,
        rootMargin: '0px',
        threshold: 0.4
    });

observador2.observe(svcs);
observador2.observe(team);
portfolioImgs.forEach(img => observador2.observe(img));

function mostrarContenido(entradas) {
    entradas.forEach(entrada => {
        if (entrada.isIntersecting) {
            entrada.target.classList.add('aparece');
            observador2.unobserve(entrada.target);
        }
    });
}

export default function elmsScroll() {
    const secHeroHeight = d.querySelector('.section__hero').getBoundingClientRect().height,
          backTopBtn = d.querySelector('.back-to-top');

    window.pageYOffset > secHeroHeight - 100
    ? backTopBtn.classList.remove('invisible')
    : backTopBtn.classList.add('invisible');
}