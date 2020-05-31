const openButton = document.querySelector('.openMenu');
const menu = document.querySelector('.menu');

let flag = false;

openButton.addEventListener('click', () => {
    if (menu.classList.contains('active'))
        menu.classList.remove('active')
    else
        menu.classList.add('active')
})

//set active page
if (document.URL.includes('index')) {
    let item = document.getElementById('start');
    let item2 = document.getElementById('startDesk');
    item.classList.add('active');
    item2.classList.add('active');
}
else if (document.URL.includes('contact')) {
    let item = document.getElementById('contact');
    let item2 = document.getElementById('contactDesk');
    item.classList.add('active');
    item2.classList.add('active');
}
else if (document.URL.includes('todo')) {
    let item = document.getElementById('todo');
    let item2 = document.getElementById('todoDesk');
    item.classList.add('active');
    item2.classList.add('active');
}


