let aboutUs = document.getElementById('animationType1');
let aboutLeft = document.querySelector('.aboutLeft');
let aboutRight = document.querySelector('.aboutRight');

let techno1 = document.getElementById('techno1');
let techno2 = document.getElementById('techno2');
let techno3 = document.getElementById('techno3');
let techno4 = document.getElementById('techno4');


window.addEventListener('scroll', () => {
    // pokazuje sekcje o nas
    if (window.scrollY > aboutUs.offsetTop + aboutUs.offsetHeight * 0.3) {
        console.log("pokazuje element")
        aboutUs.classList.add('active');
        aboutLeft.classList.add('active');
        aboutRight.classList.add('active');
    }
    if (window.scrollY > techno1.offsetTop + techno1.offsetHeight * 0.5)
        techno1.classList.add('active');
    if (window.scrollY > techno2.offsetTop + techno2.offsetHeight * 0.5)
        techno2.classList.add('active');
    if (window.scrollY > techno3.offsetTop + techno3.offsetHeight * 0.5)
        techno3.classList.add('active');
    if (window.scrollY > techno4.offsetTop + techno4.offsetHeight * 0.5)
        techno4.classList.add('active');
});

