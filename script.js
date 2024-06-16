const inputField = document.querySelector('input');
const errorMessage = document.querySelector('#input-error');
const emailRegexp = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;

function validateInput() {
    if (!inputField.value.match(emailRegexp)) {
        errorMessage.style.display = 'inline-block'; // none to inline-block makes it appear
    } else {
        errorMessage.style.display = 'none';
    }
}

inputField.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
    validateInput();
    }
});
