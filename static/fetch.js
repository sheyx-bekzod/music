const name = document.querySelector('#reg_name'),
    blockOne = document.querySelector(".block_1"),
    reg_email = document.querySelector('#reg_email'),
    reg_password = document.querySelector('#reg_password'),
    reg_confirm_password = document.querySelector('#reg_confirm_password');
sumbitBtn = document.querySelector(".submit")


const elem = document.querySelector('.msg')
console.log(elem)

reg_password.addEventListener("change", () => {
    // console.log(reg_password.length)
    if (reg_password.value.length < 8) {
        elem.innerHTML = ""
        elem.innerHTML = "password length must be order 8 "
        sumbitBtn.disabled = true
        console.log('password length must be order 8')
    } else {
        elem.innerHTML = ""
        sumbitBtn.disabled = false
    }
})

const elem1 = document.querySelector('.msg1')

reg_confirm_password.addEventListener("change", () => {
    if (reg_confirm_password.value.length < 8) {
        elem1.innerHTML = ""
        elem1.innerHTML = "password length must be order 8"
        console.log('password length must be order 8')
    } else {
        elem1.innerHTML = ""
        sumbitBtn.disabled = false
        if (reg_password.value !== reg_confirm_password.value) {
            elem1.innerHTML = ""
            elem1.innerHTML = "Confirm password do not match"
            sumbitBtn.disabled = true
        } else {
            elem1.innerHTML = ""
            sumbitBtn.disabled = false
        }
    }
})


sumbitBtn.addEventListener("click", sendRequest)

function sendRequest() {
    fetch('/post', {
        method: 'POST',
        headers: 'Content-Type, application/json',
        body: JSON.stringify(
            {
                name: name.value,
                email: reg_email.value,
                password: reg_password.value,
                reg_confirm_password: reg_confirm_password
            }
        )
    })
        .then(res => res.json())
        .then(res => console.log(res))
        .catch(error => console.error(error))
}