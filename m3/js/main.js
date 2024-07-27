(function () {
    // бургер-меню
    document.addEventListener('click', burgerInit)

    function burgerInit(event) {

        // элемент с родителем .burger-icon
        const burgerIcon = event.target.closest('.burger-icon')
        // элемент с родителем .nav__link
        const burgerNavLink = event.target.closest('.nav__link')

        // если пользователь нажал не на элементы с такими родителями, то функиця завершает свою работу
        if (!burgerIcon && !burgerNavLink) return
        // чтобы при нажатии навиагции при ширине окна больше 900px не появлялся класс body--opened-menu
        if (document.documentElement.clientWidth > 900) return

        if (!document.body.classList.contains('body--opened-menu')) {
            document.body.classList.add('body--opened-menu')
        } else {
            document.body.classList.remove('body--opened-menu')
        }
    }

    // модалка

    const modalButton = document.querySelector('.about__img-button')
    const modal = document.querySelector('.modal')
    const body = document.body

    modalButton.addEventListener('click', openModal)
    modal.addEventListener('click', closeModal)

    function openModal(event) {
        event.preventDefault()
        // открытие модалки
        modal.classList.add('modal--opened')
        // убирание скролла страницы
        body.classList.add('body--fixed')
    }

    function closeModal(event) {
        event.preventDefault()
        const target = event.target

        // проверяем чтобы элемент либо имел класс modal__cancel либо имел родителя с таким классом
        // чтобы элемент имел класс modal (для нас это оверлей)
        if (target.closest('.modal__cancel') || target.classList.contains('modal')) {
            modal.classList.remove('modal--opened')
            body.classList.remove('body--fixed')
        }

        // слушатель событий нажатий клавиш
        document.addEventListener('keydown', (event) => {
            // если нажать на Escape модальное окно закроется
            if (event.code === 'Escape') {
                modal.classList.remove('modal--opened')
            }
        })
    }


    const tabControls = document.querySelector('.tab-controls')

    tabControls.addEventListener('click', toggleTab)

    function toggleTab(e) {

        const tabControl = e.target.closest('.tab-controls__link')

        if (!tabControl) return
        e.preventDefault()
        if (tabControl.classList.contains('tab-controls__link--active')) return

        const tabContentID = tabControl.getAttribute('href')
        // вкладка на которую хотим переключиться
        const tabContent = document.querySelector(tabContentID)
        // активная до этого кнопка недели
        const activeControl = document.querySelector('.tab-controls__link--active')
        // активная до этого вкладка
        const activeContent = document.querySelector('.tab-content--show')

        if (activeControl) {
            activeControl.classList.remove('tab-controls__link--active')
        }
        if (activeContent) {
            activeContent.classList.remove('tab-content--show')
        }

        tabControl.classList.add('tab-controls__link--active')
        tabContent.classList.add('tab-content--show')

    }

})()
