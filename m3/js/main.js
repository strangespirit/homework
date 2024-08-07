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

        // проверяем чтобы элемент имел родителя с таким классом либо имел класс modal__cancel
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

    // табы

    const tabControls = document.querySelector('.tab-controls')

    tabControls.addEventListener('click', toggleTab)

    function toggleTab(event) {

        const tabControl = event.target.closest('.tab-controls__link')

        if (!tabControl) return
        event.preventDefault()
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

    // аккордеон

    const accordionLists = document.querySelectorAll('.accordion-list')

    accordionLists.forEach(element => {

        element.addEventListener('click', (event) => {

            // currentTarget - говорим с элементом, на который навесили обработчик событий
            const accordionList = event.currentTarget
            // ищем открытую вкладку
            const accordionOpenedItem = accordionList.querySelector('.accordion-list__item--opened')
            const accordionOpenedContent = accordionList.querySelector('.accordion-list__item--opened .accordion-list__content')

            // target - говорим с элементом с указанным классом ниже (с элементом у которого родитель .accordion-list__control)
            const accordionControl = event.target.closest('.accordion-list__control')
            if (!accordionControl) return
            event.preventDefault()
            // выбираем родителя элемента .accordion-list__control
            const accordionItem = accordionControl.parentElement
            // выбираем след элемент после .accordion-list__control (контент)
            const accordionContent = accordionControl.nextElementSibling

            // если уже есть открытая вкладка, то она закрывается при открытии новой
            // и если уже открытая вкладка не является той которую хотят открыть
            if (accordionOpenedItem && accordionItem != accordionOpenedItem) {
                accordionOpenedItem.classList.remove('accordion-list__item--opened');
                accordionOpenedContent.style.maxHeight = null;
            }

            accordionItem.classList.toggle('accordion-list__item--opened')

            if (accordionItem.classList.contains('accordion-list__item--opened')) {
                // узнаем правдивую высоту и увеличиваем на нее элемент (max-height: 0 то есть сначала высота равна 0)
                accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px'
            } else {
                accordionContent.style.maxHeight = null
            }
        })
    })

    // Слайдер-галлерея

    new Swiper('.gallery__slider', {

        spaceBetween: 15,
        slidesPerView: 1.5,

        pagination: {
            el: '.gallery__pagination',
            type: 'fraction',
        },

        navigation: {
            nextEl: '.gallery__next',
            prevEl: '.gallery__prev',
        },

        // адаптив для галлереи (идем от меньшего к большему)
        breakpoints: {

            451: {
                slidesPerView: 2,
            },

            601: {
                slidesPerView: 3,
            },
            
            601: {
                slidesPerView: 3,
            },

            801: {
                spaceBetween: 32,
            },

            // при больше или равном 1101px видим 4 слайда
            1101: {
                slidesPerView: 4,
            }
        }
    });


     // Слайдер-отзывы

    new Swiper('.reviews__slider', {

        spaceBetween: 30,
        slidesPerView: 1,
        centeredSlides: true,

        navigation: {
            nextEl: '.reviews__next',
            prevEl: '.reviews__prev',
        },

        scrollbar: {
            el: '.swiper-scrollbar',
            draggable: true,
        },

        breakpoints: {

            901: {
                slidesPerView: 1.5,
            },

            1201: {
                slidesPerView: 2.1,
            }
        }

    });

    // Маска для телефона

    const telInputs = document.querySelectorAll('input[type="tel"]')
    const im = new Inputmask('+7 (999) 999-99-99')
    im.mask(telInputs)

})()
