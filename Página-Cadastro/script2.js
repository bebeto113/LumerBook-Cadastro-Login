const inputName = document.getElementById("fullName")
const inputEmail = document.getElementById('emailCadaster')
const inputPassword = document.getElementById('passwordCadaster')
const inputConfirmPassword = document.getElementById('confirmPassword')

const form = document.querySelector('.form')

//FAZER: - CHAMAR AS FUNCOES QUANDO DER SUBMIT, - FAZER AS FUNCOES DO EMAIL, NOME E SENHAS (POR ENQANTO SÓ)

//////////////////////////////////////////

form.addEventListener('submit', formValidation)

function formValidation(event) {
    event.preventDefault()

    let formIsValid = true

    nameValidation(inputName)

    if (!nameValidation(inputName)) {
        formIsValid = false
    }






    if (formIsValid) {
        form.submit()  // só envia se tudo estiver ok
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
        document.querySelector('.noticeFill').style.display = 'block'
        return false

    } else if (value.match(/\d+/)) {

        document.getElementById('fullName').style.border = '2px solid red'
        document.getElementById('fullName').style.backgroundColor = 'rgba(255, 0, 0, 0.432)'
        document.querySelector('.noticeNumber').style.display = 'block'
        return false

    } else {

        document.getElementById('fullName').style.border = 'none'
        document.getElementById('fullName').style.backgroundColor = '#8f7429a8'
        document.querySelector('.noticeFill').style.display = 'none'
        document.querySelector('.noticeNumber').style.display = 'none'
        return true
    }

}


