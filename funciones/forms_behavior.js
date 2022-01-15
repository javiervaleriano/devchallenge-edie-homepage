const d = document;

function formBehavior(obj) {
    obj.querySelector('.form__input').focus();
}

function validarForms(obj) {
    const $form = obj.parentElement.parentElement,
          $field = $form.querySelector('.form__field'),
          $input = $field.querySelector('[required]'),
          $loader = $form.querySelector('.form__loader');
          
    let pattern = new RegExp($input.pattern),
        val = $input.value,
        formMsg = d.createElement('span');

    $form.onsubmit = e => e.preventDefault();

    if (pattern.test(val)) {
        $loader.classList.remove('none');

        formMsg.classList.add('form__message', 'msg__success');
        formMsg.textContent = '✔ Envío exitoso';

        setTimeout(function () {
            $loader.classList.add('none');
            $loader.insertAdjacentElement('afterend', formMsg);
            $form.reset();

            setTimeout(() => formMsg.classList.add('none'), 2500);
        }, 1500);

    } else {
        formMsg.classList.add('form__message', 'msg__error');
        formMsg.textContent = $input.title;
        $loader.insertAdjacentElement('afterend', formMsg);

        setTimeout(() => formMsg.classList.add('none'), 3000);
    }
}

export { formBehavior, validarForms };