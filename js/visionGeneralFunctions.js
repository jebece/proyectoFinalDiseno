document.addEventListener('DOMContentLoaded', function () {
    ejecutarScript();
});

window.addEventListener('load', function () {
    ejecutarScript();
});

function ejecutarScript() {
    var elemento = document.getElementById('vision__content');
    setTimeout(function () {
        elemento.style.opacity = '1';
        elemento.style.transform = 'translateY(0)';
    }, 100);
}