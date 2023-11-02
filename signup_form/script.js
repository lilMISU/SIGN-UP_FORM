document.addEventListener("DOMContentLoaded", function () {
    let password = document.querySelector('#password');
    let confirmPassword = document.querySelector('#password_confirm');
    let error = document.querySelector('#error');

    if (password == "" && confirmPassword == "")
        error.innerHTML = "*passwords do not match";
    else if (password == confirmPassword) {
        error.innerHTML = "";
    }
})