function chamarMenu() {
    const $menu = document.querySelector('.menu');
    const $logo = document.querySelector('.logo');

    $menu.classList.toggle('menu-chamado');
    $logo.classList.toggle('logo-menu');
}