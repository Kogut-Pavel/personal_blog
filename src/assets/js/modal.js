'use strict';

const modalBtn = document.querySelectorAll('[data-modal]');
const body = document.body;
const modalClose = document.querySelectorAll('.modal__close');
const modal = document.querySelectorAll('.modal');

// Добавляем слушатель на кнопки с модальными окнами и добавляем классы при клике
modalBtn.forEach(item => {
    item.addEventListener('click', event => {
        let target = event.currentTarget;
        let modalId = target.getAttribute('data-modal');
        let modal = document.getElementById(modalId);
        let modalContent = modal.querySelector('.modal__content');

        modalContent.addEventListener('click', event => {
            event.stopPropagation();
        });

        modal.classList.add('show');
        body.classList.add('no-scroll');

        setTimeout(() => {
            modalContent.style.transform = "none";
            modalContent.style.opacity = "1";
        }, 1);
        
    });
});

// Закрываем модальное окно, убирая классы
function closeModal(modal) {
    let modalContent = modal.querySelector('.modal__content');
    modalContent.removeAttribute('style');
    setTimeout(() => {
        modal.classList.remove('show');
        body.classList.remove('no-scroll');
    }, 200);
}


// Добавляем слушатель на крестики в модальных окнах
modalClose.forEach(item => {
    item.addEventListener('click', event => {
        let currentModal = event.currentTarget.closest('.modal');
        closeModal(currentModal);
    });
});

modal.forEach(item => {
    item.addEventListener('click', event => {
        let currentModal = event.currentTarget;
        closeModal(currentModal);


    });
});
