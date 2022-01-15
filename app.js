import elmsScroll from "./funciones/scroll_behavior.js";
import { formBehavior, validarForms } from "./funciones/forms_behavior.js";
import fn from "./funciones/navbar_behavior.js";
import randomLink from "./funciones/random_footer_link.js";

const d = document;

window.addEventListener('scroll', function () {
    elmsScroll();
});

d.addEventListener('click', (e) => {
    const obj = e.target;

    if (obj.matches('.nav__toggle') ||
        obj.matches('.nav__toggle__line')) {
        fn.expandirNavbar();
    
    } else if (fn.probarToTop(obj)) {
        fn.contraerNavbar(e);

    } else if (obj.matches('.form__field')) {
        formBehavior(obj);

    } else if (obj.matches('.form__btn')) {
        validarForms(obj);
    }
});

window.addEventListener('resize', () => {
    if (window.innerWidth >= 850) {
        d.querySelector('.nav').style.height = 'fit-content';
    }
});

setInterval(() => randomLink(), 5000);
randomLink();