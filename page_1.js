const sidebar = document.querySelector('.sidebar');
const nav = document.querySelector('nav');
const menuIcon = document.getElementById('menu-icon');
const overlay = document.querySelector('.overlay');



menuIcon.addEventListener('click', slide);
overlay.addEventListener('click', () =>{
        sidebar.classList.remove('open');
    overlay.classList.remove("active")
});

function slide() {
    sidebar.classList.toggle('open');
    overlay.classList.add("active")
}
