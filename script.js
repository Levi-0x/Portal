// alert("Loaded");
const pwdImage = document.querySelector('.hide-pwd');
const pwdInput = document.querySelector('#password');
const container = document.querySelector('.login-container')

const sidebar = document.querySelector('.sidebar');
const nav = document.querySelector('nav');
const menuIcon = document.getElementById('menu-icon');




window.addEventListener("DOMContentLoaded", () => {
    container.classList.add('loaded');
})

function ShowHide() {


    if (pwdInput.type === 'password') {
        pwdInput.type = 'text';
        pwdImage.src = 'Icons/ShowPwd.png';
    }
    else {
        pwdInput.type = 'password';
        pwdImage.src = 'Icons/HidePwd.png';
    }

}

menuIcon.addEventListener('click', slide);

function slide() {
    sidebar.classList.toggle('open');
}
document.addEventListener('click', (e) => {
    if (!sidebar.contains(e.target) && !nav.contains(e.target)) {
        sidebar.classList.remove('open');
    }
});


