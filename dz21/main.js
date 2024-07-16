let btn = document.querySelector('.btn-open')
let modal = document.querySelector('.modal')
let body = document.body

btn.addEventListener('click', () => {
    // открытие модалки
    modal.classList.add('modal--open')
    // убирание скролла страницы
    body.classList.add('body--fixed')
})

modal.addEventListener('click', (event) => {
    let target = event.target
    // из-за всплытия событий модалка будет закрываться при нажатии на нее
    // проверяем чтобы элемент имел класс modal, чтобы модалка закрывалась только при нажатии на подложку или на Х
    if (target && (target.classList.contains('modal') || target.classList.contains('modal__btn-close'))) {
        modal.classList.remove('modal--open')
        body.classList.remove('body--fixed')
    }
}) 

// слушатель событий нажатий клавиш
document.addEventListener('keydown', (event) => {
    // если нажать на Escape модальное окно закроется
    if (event.code === 'Escape') {
        modal.classList.remove('modal--open')
    }
})