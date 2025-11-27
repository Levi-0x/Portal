// alert("Loaded");
const pwdImage = document.querySelector('.hide-pwd');
const pwdInput = document.querySelector('#password');
const container = document.querySelector('.login-container')




window.addEventListener("DOMContentLoaded", () => {
    container.classList.add('loaded');
})

function ShowHide() {


    if (pwdInput.type === 'password') {
        pwdInput.type = 'text';
        pwdImage.src = 'ShowPwd.png';
    }
    else {
        pwdInput.type = 'password';
        pwdImage.src = 'HidePwd.png';
    }

}