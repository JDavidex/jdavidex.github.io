let slogan = document.getElementById('slogan');
window.addEventListener('scroll', function () {
    let value = window.scrollY;
    slogan.style.marginBottom = value * 1 + 'px';
})

let boxes = document.querySelectorAll('.box');
function scrollTrigger() {
    boxes.forEach(boxxx => {
        if (boxxx.offsetTop < window.scrollY) {
            boxxx.classList.add('active')
        }
        else {
            boxxx.classList.remove('active')
        }
    })
}
window.addEventListener('scroll', scrollTrigger);