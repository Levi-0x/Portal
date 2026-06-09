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
        pwdImage.src = 'Icons/ShowPwd.png';
    }
    else {
        pwdInput.type = 'password';
        pwdImage.src = 'Icons/HidePwd.png';
    }

}


    function login() {
    const username = document.querySelector("#username").value
    const password = document.querySelector("#password")
    password.type = "text"
    const pwd = password.value 

    if(username.trim() === "" || pwd.trim() === ""){
        alert("Please fill out both password and username")
        return
    }

    window.location.href = "page_1.html";
    }

    document.querySelector("#login-btn").addEventListener("click" , login )


