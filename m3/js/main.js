(function() {
    document.addEventListener('click', burgerInit)

    function burgerInit(event) {

        // элемент с родителем .burger-icon
        const burgerIcon = event.target.closest('.burger-icon')
        const burgerNavLink = event.target.closest('.nav__link')

        // если пользователь нажал не на элементы с такими родителями, то функиця завершает свою работу
        if (!burgerIcon && !burgerNavLink) return

        if (!document.body.classList.contains('body--opened-menu')) {
            document.body.classList.add('body--opened-menu')
        } else {
            document.body.classList.remove('body--opened-menu')
        }
    }
})()