'use strict';

const textArea = document.querySelectorAll('[data-autoresize]');

textArea.forEach(item => {
    let textAreaH = item.offsetHeight;
    item.addEventListener('input', event => {
        let target = event.target;

        target.style.height = textAreaH + 'px';
        target.style.height = target.scrollHeight + 'px';
    });
});