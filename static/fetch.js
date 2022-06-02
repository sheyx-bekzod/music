const name = document.querySelector('#reg_name'),
    blockOne = document.querySelector(".block_1"),
    reg_email = document.querySelector('#reg_email'),
    reg_password = document.querySelector('#reg_password'),
    reg_confirm_password = document.querySelector('#reg_confirm_password'),
    nameInfo = document.querySelector('.name-info'),
    emailInfo = document.querySelector('.email-info'),
    sumbitBtn = document.querySelector("#submit");


const elem = document.querySelector('.msg')


name.addEventListener("change", () => {
    if (name.value.length < 2) {
        nameInfo.innerHTML = ""
        nameInfo.innerHTML = "password length must be order 2 "
        sumbitBtn.disabled = true
        console.log('password length must be order 2')
    } else {
        nameInfo.innerHTML = ""
        sumbitBtn.disabled = false
    }
})


reg_email.addEventListener("change", () => {
    if (reg_email.value.length < 5) {
        emailInfo.innerHTML = ""
        emailInfo.innerHTML = "password length must be order 5 "
        sumbitBtn.disabled = true
        console.log('password length must be order 5')
    } else {
        emailInfo.innerHTML = ""
        sumbitBtn.disabled = false
    }
})


reg_password.addEventListener("input", () => {
    // console.log(reg_password.length)
    if (reg_password.value.length < 8) {
        elem.innerHTML = ""
        elem.innerHTML = "password length must be order 8 "
        sumbitBtn.disabled = true
        console.log('password length must be order 8')
    } else {
        elem.innerHTML = ""
        sumbitBtn.disabled = false
        if (reg_password.value.length >= 8) {
            elem.innerHTML = ""
            sumbitBtn.disabled = true
        }
        if (reg_confirm_password.value) {
            if (reg_password.value !== reg_confirm_password.value) {
                elem.innerHTML = ""
                elem1.innerHTML = "Confirm password do not match"
                sumbitBtn.disabled = true
                console.log('password length must be order 8')
            }
        }
    }
})

const elem1 = document.querySelector('.msg1')

reg_confirm_password.addEventListener("input", () => {
    if (reg_password.value !== reg_confirm_password.value) {
        elem1.innerHTML = ""
        elem1.innerHTML = "Confirm password do not match"
        sumbitBtn.disabled = true
    } else {
        elem1.innerHTML = ""
        sumbitBtn.disabled = false
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
}