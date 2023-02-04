function check() {
    const display = document.getElementById("display")
    const password = document.getElementById("password")
    const confirmPassword = document.getElementById("confirm-password")

    if(password.value != confirmPassword.value) {
        display.innerText = "*Passwords do not match"
        display.style.color = "red"
    } else {
        display.innerText = ""
    }

}