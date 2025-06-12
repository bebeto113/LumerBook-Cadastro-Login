const inputName = document.getElementById("fullName")
const inputEmail = document.getElementById('emailCadaster')
const inputPassword = document.getElementById('passwordCadaster')
const inputConfirmPassword = document.getElementById('confirmPassword')

const form = document.querySelector('.form')

//////////////////////////////////////////

form.addEventListener('submit', formValidation)

function formValidation(event) {
    event.preventDefault()

    let formIsValid = true


    const isNameValid = nameValidation(inputName)

    if (!isNameValid) { 
        formIsValid = false
    }

    const isEmailValid = emailValidation(inputEmail)

    if (!isEmailValid) {
        formIsValid = false
    }

    const isPasswordValid = passwordValidation(inputPassword)

    if (!isPasswordValid) {
        formIsValid = false
    }

    const isRealyPasswordValid = realyPasswordValidation(inputConfirmPassword)

    if (!isRealyPasswordValid) {
        formIsValid = false
    }


    if (formIsValid) {
        form.submit()  // só envia se tudo estiver ok
        console.log('deu certo')
    }

    if (formIsValid) {

    let formInformations = []

        const storedUsers = localStorage.getItem("user")
        if (storedUsers) {
            formInformations = JSON.parse(storedUsers)
        }

        formInformations.push({
            name: inputName.value,
            email: inputEmail.value,
            password: inputPassword.value
        })

        const userJSON = JSON.stringify(formInformations)
        localStorage.setItem("user", userJSON)

        console.log("Usuário salvo!")

    window.location.href = "../Página-Login/indexLogin.html"

    inputEmail.value = ''
    inputName.value = ''
    inputConfirmPassword.value = ''
    inputPassword.value = ''
}
}

///////////////////////////

inputName.addEventListener('input', function () {
    nameValidation(inputName)
})

function nameValidation(input) {
    const value = input.value

    if (value === '') {

        document.getElementById('fullName').style.border = '2px solid red'
        document.getElementById('fullName').style.backgroundColor = 'rgba(255, 0, 0, 0.432)'
        document.querySelector('.noticeFillName').style.display = 'block'
        return false

    } else if (!value.match(/^[A-Za-zÀ-ÿ\s]+$/)) {

        document.getElementById('fullName').style.border = '2px solid red'
        document.getElementById('fullName').style.backgroundColor = 'rgba(255, 0, 0, 0.432)'
        document.querySelector('.noticeNumber').style.display = 'block'
        return false

    } else {

        document.getElementById('fullName').style.border = 'none'
        document.getElementById('fullName').style.backgroundColor = '#8f7429a8'
        document.querySelector('.noticeFillName').style.display = 'none'
        document.querySelector('.noticeNumber').style.display = 'none'
        return true
    }

}

///////////////////////////////////

inputEmail.addEventListener('blur', () => {
    emailValidation(inputEmail)
})

function emailValidation(input) {

    const value = input.value

    if (value === '') {

        document.getElementById('emailCadaster').style.border = '2px solid red'
        document.getElementById('emailCadaster').style.backgroundColor = 'rgba(255, 0, 0, 0.432)'
        document.querySelector('.noticeFillEmail').style.display = 'block'
        document.querySelector('.noticeWrongEmail').style.display = 'none'
        return false
    }

    else if (!value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {

        document.getElementById('emailCadaster').style.border = '2px solid red'
        document.getElementById('emailCadaster').style.backgroundColor = 'rgba(255, 0, 0, 0.432)'
        document.querySelector('.noticeWrongEmail').style.display = 'block'
        document.querySelector('.noticeFillEmail').style.display = 'none'
        return false
    }

    else {

        document.getElementById('emailCadaster').style.border = 'none'
        document.getElementById('emailCadaster').style.backgroundColor = '#8f7429a8'
        document.querySelector('.noticeFillEmail').style.display = 'none'
        document.querySelector('.noticeWrongEmail').style.display = 'none'
        return true
    }
}


////////////////////////////////////////////

inputPassword.addEventListener('input', () => {
    passwordValidation(inputPassword)
})

function passwordValidation(input) {

    const value = input.value

    if (value === '') {
        document.getElementById('passwordCadaster').style.border = '2px solid red'
        document.getElementById('passwordCadaster').style.backgroundColor = 'rgba(255, 0, 0, 0.432)'
        document.querySelector('.noticeFillPassword').style.display = 'block'
        document.querySelector('.noticeWrongPassword').style.display = 'none'
        return false
    }

    else if (value.length < 8) {
        document.getElementById('passwordCadaster').style.border = '2px solid red'
        document.getElementById('passwordCadaster').style.backgroundColor = 'rgba(255, 0, 0, 0.432)'
        document.querySelector('.noticeFillPassword').style.display = 'none'
        document.querySelector('.noticeWrongPassword').style.display = 'block'
        return false
    }
    
    else {
        document.getElementById('passwordCadaster').style.border = 'none'
        document.getElementById('passwordCadaster').style.backgroundColor = '#8f7429a8'
        document.querySelector('.noticeFillPassword').style.display = 'none'
        document.querySelector('.noticeWrongPassword').style.display = 'none'
        return true
    }
}

///////////////////////////////////////////////

inputConfirmPassword.addEventListener('blur', () => {
    realyPasswordValidation(inputConfirmPassword)
})

function realyPasswordValidation(input) {
    const value = inputConfirmPassword.value

    if (value === '') {
        document.getElementById('confirmPassword').style.border = '2px solid red'
        document.getElementById('confirmPassword').style.backgroundColor = 'rgba(255, 0, 0, 0.432)'
        document.querySelector('.noticeFillConfirmPassword').style.display = 'block'
        document.querySelector('.noticeWrongConfirmPassword').style.display = 'none'
        return false
    }

    else if (inputConfirmPassword.value !== inputPassword.value) {
        document.getElementById('confirmPassword').style.border = '2px solid red'
        document.getElementById('confirmPassword').style.backgroundColor = 'rgba(255, 0, 0, 0.432)'
        document.querySelector('.noticeFillConfirmPassword').style.display = 'none'
        document.querySelector('.noticeWrongConfirmPassword').style.display = 'block'
        return false
    }

    else {
        document.getElementById('confirmPassword').style.border = 'none'
        document.getElementById('confirmPassword').style.backgroundColor = '#8f7429a8'
        document.querySelector('.noticeFillConfirmPassword').style.display = 'none'
        document.querySelector('.noticeWrongConfirmPassword').style.display = 'none'
        return true
    }
}