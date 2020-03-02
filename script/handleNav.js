const openButton = document.querySelector('.openMenu');
const menu = document.querySelector('.menu');

let flag = false;

openButton.addEventListener('click', () => {
    if (menu.classList.contains('active'))
        menu.classList.remove('active')
    else
        menu.classList.add('active')
})

