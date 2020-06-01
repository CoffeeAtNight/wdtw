let aboutUs = document.getElementById('animationType1');
let aboutLeft = document.querySelector('.aboutLeft');
let aboutRight = document.querySelector('.aboutRight');

window.addEventListener('scroll', () => {
    // pokazuje sekcje o nas
    if (window.scrollY > aboutUs.offsetTop + aboutUs.offsetHeight * 0.3) {
        console.log("pokazuje element")
        aboutUs.classList.add('active');
        aboutLeft.classList.add('active');
        aboutRight.classList.add('active');
    }

});

