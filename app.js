let userNumber = 0;
let secretNumber = 0;
let attempts = 0;
let maximumNumber = 10;
let selectedNumbersList = [];

function textSetter(element, text) {
    let selectedElement = document.getElementById(element);
    selectedElement.innerHTML = text;
}

function clearBox() {
    document.getElementById('inputSection').value = '';
}

function generateRandomNumber() {
    let randomNumber = Math.floor(Math.random() * maximumNumber) + 1;
    if (selectedNumbersList.length === maximumNumber) {
        document.getElementById('newGameButton').removeAttribute('disabled');
        return;
    } else if (selectedNumbersList.includes(randomNumber)) {
        return generateRandomNumber();
    } else {
        selectedNumbersList.push(randomNumber);
        return randomNumber;
    }
}

function verifyAttempt() {
    userNumber = parseInt(document.getElementById('inputSection').value);
    attempts++;
    clearBox();
    if (isNaN(userNumber) || userNumber < 1 || userNumber > maximumNumber) {
        textSetter('displayMessage', `Por favor, ingresa un número entre 1 y ${maximumNumber}`);
        return;
    }
    if (userNumber === secretNumber) {
        textSetter('displayMessage', `¡Correcto! Acertaste el número en ${attempts} ${attempts === 1 ? 'intento' : 'intentos'}`);
        document.getElementById('newGameButton').removeAttribute('disabled');
    } else if (userNumber > secretNumber) {
        textSetter('displayMessage', 'El número es menor')
    } else {
        textSetter('displayMessage', 'El número es mayor')
    }
}

function initialConditions() {
    if (selectedNumbersList.length === maximumNumber) {
        textSetter('displayMessage', "Todos los números han sido sorteados. Presiona 'Volver a jugar' para reiniciar el juego");
        selectedNumbersList = [];
        attempts = 0;
        return;
    } else {
        clearBox();
        attempts = 0;
        document.getElementById('newGameButton').setAttribute('disabled', 'true');
        textSetter('displayMessage', 'Ingresa un número entre 1 y 10');
        secretNumber = generateRandomNumber();
    }
}

initialConditions();