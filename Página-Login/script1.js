const inputEmail = document.getElementById('inputEmail')
const inputPassword = document.getElementById('inputPassword')
const form = document.querySelector('.form')

form.addEventListener('submit', formValidation)

function formValidation(event) {
    event.preventDefault()

        // Isso aqui está ótimo para checar campos vazios.
    let isEmailEmpty = !emailValidation(inputEmail);
    let isPasswordEmpty = !passwordValidation(inputPassword);

    // Se algum campo estiver vazio, a gente para aqui mesmo.
    if (isEmailEmpty || isPasswordEmpty) {
        return;
    }

    // --- A LÓGICA DE LOGIN CORRIGIDA ---

    const usersList = JSON.parse(localStorage.getItem("user")) || [];
    const digitedEmail = inputEmail.value;
    
    // 1. Encontre o usuário SOMENTE pelo email.
    const userFound = usersList.find(user => user.email === digitedEmail);

    let isLoginSuccessful = false;

    // 2. AGORA, com base no que encontramos, tomamos as decisões.
    if (userFound) {
        // O email foi encontrado! Limpamos o erro de email.
        document.querySelector('.noticeWrongEmail').style.display = 'none';
        inputEmail.style.border = '1px solid #746730c9';

        // 3. E AGORA, DENTRO DESTE IF, checamos a senha DELE.
        const digitedPassword = inputPassword.value;

        if (userFound.password === digitedPassword) {
            // SUCESSO! O email existe e a senha bate.
            isLoginSuccessful = true;
            // Limpa o erro da senha também, caso houvesse.
            document.querySelector('.noticeWrongPassword').style.display = 'none';
            inputPassword.style.border = '1px solid #746730c9';

        } else {
            // ERRO 2: Senha incorreta.
            document.querySelector('.noticeWrongPassword').style.display = 'block';
            inputPassword.style.border = '2px solid red';
        }

    } else {
        // ERRO 1: Email não encontrado.
        document.querySelector('.noticeWrongEmail').style.display = 'block';
        inputEmail.style.border = '2px solid red';
    }


    // --- PASSO FINAL: O que fazer com o resultado? ---

    if (isLoginSuccessful) {
        alert(`Login realizado com sucesso! Seja bem vindo ${userFound.name}`);
        inputEmail.value = ''
        inputPassword.value = ''
    }
}


///////////////////////////////////////

inputEmail.addEventListener('blur', emailValidation)

function emailValidation() {

    if (inputEmail.value === ''){

        document.querySelector('.noticeFillEmail').style.display = 'block'
        document.querySelector('.noticeFillPassword').style.display = 'none'
        document.getElementById('inputEmail').style.border = '2px solid red'
        document.getElementById('inputEmail').style.backgroundColor = 'rgba(255, 0, 0, 0.432)'
        return false

} else {

        document.querySelector('.noticeFillEmail').style.display = 'none'
        document.querySelector('.noticeFillPassword').style.display = 'none'
        document.getElementById('inputEmail').style.border = '1px solid #746730c9'
        document.getElementById('inputEmail').style.backgroundColor = '#333333a8'
        return true
}

}

/////////////////////////////////////////

inputPassword.addEventListener('blur', passwordValidation)

function passwordValidation() {

    if(inputPassword.value ==='') {

        document.querySelector('.noticeFillPassword').style.display = 'block'
        document.querySelector('.noticeFillEmail').style.display = 'none'
        document.getElementById('inputPassword').style.border = '2px solid red'
        document.getElementById('inputPassword').style.backgroundColor = 'rgba(255, 0, 0, 0.432)'
        return false

    } else {
        document.querySelector('.noticeFillPassword').style.display = 'none'
        document.querySelector('.noticeFillEmail').style.display = 'none'
        document.getElementById('inputPassword').style.border = '1px solid #746730c9'
        document.getElementById('inputPassword').style.backgroundColor = '#333333a8'
        return true
    }


}