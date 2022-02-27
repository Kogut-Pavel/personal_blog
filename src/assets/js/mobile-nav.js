'use strict';

const burger = document.getElementById('sidebarToggle');
const sidebar = document.getElementById('sidebar');
const page = document.getElementById('page');
const body = document.body;

function closeSidebar() {
    body.classList.remove('show-sidebar');
    document.querySelector('.page__mask').remove();
}

function showSidebar() {
    let mask = document.createElement('div');
    mask.classList.add('page__mask');
    mask.addEventListener('click', closeSidebar);
    page.appendChild(mask);
    body.classList.add('show-sidebar');
}

burger.addEventListener('click', event => {
    if (body.classList.contains('show-sidebar')) {
        closeSidebar();
    } else {
        showSidebar();
    }
});


const hasSubnav = document.querySelectorAll('.nav--mobile .has-subnav');
const subnav = document.querySelector('.nav--mobile .subnav');


hasSubnav.forEach(item => {
    item.addEventListener('click', () => {  
        subnav.classList.toggle('active');
    });
});





