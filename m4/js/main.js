// бургер-меню
document.addEventListener('click', burgerInit)

function burgerInit(event) {

    const burgerIcon = event.target.closest('.burger-icon')
    const burgerNavLink = event.target.closest('.nav__link')

    if (!burgerIcon && !burgerNavLink) return
    if (document.documentElement.clientWidth > 1000) return

    if (!document.body.classList.contains('body--opened-menu')) {
        document.body.classList.add('body--opened-menu')
    } else {
        document.body.classList.remove('body--opened-menu')
    }
}

// модалка

const modalButton1 = document.querySelector('.hero__button')
const modalButton2 = document.querySelector('.description__button')
const modal = document.querySelector('.modal')
const body = document.body

modalButton1.addEventListener('click', openModal)
modalButton2.addEventListener('click', openModal)
modal.addEventListener('click', closeModal)

function openModal(event) {
    event.preventDefault()
    modal.classList.add('modal--opened')
    body.classList.add('body--fixed')
}

function closeModal(event) {
    event.preventDefault()
    const target = event.target

    if (target.closest('.modal__cancel') || target.classList.contains('modal')) {
        modal.classList.remove('modal--opened')
        body.classList.remove('body--fixed')
    }

    document.addEventListener('keydown', (event) => {
        if (event.code === 'Escape') {
            modal.classList.remove('modal--opened')
        }
    })
}

// галлерея продуктов

new Swiper('.products__slider', {

    spaceBetween: 15,
    slidesPerView: 2,

    navigation: {
        nextEl: '.products__next',
        prevEl: '.products__prev',
    },

    breakpoints: {
        1601: {
            slidesPerView: 3,
            spaceBetween: 35,
        },
        

    }

});