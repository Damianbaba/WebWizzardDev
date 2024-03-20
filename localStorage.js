const key = 'storageKey';

function getUserDataStorage() {
    const data = window.localStorage.getItem(key);

    return JSON.parse(data ?? {});
}

function setUserDataStorage(value) {
    const stringVal = JSON.stringify(value);

    return window.localStorage.setItem(key, stringVal);
}

function getUserDataFromInput() {
    const inputName = document.getElementById('userName');
    const inputEmail = document.getElementById('userEmail');

    return JSON.stringify({ name: inputName, email: inputEmail });
}

function setUserDataToInput(value) {
    const inputName = document.getElementById('userName');
    const inputEmail = document.getElementById('userEmail');

    inputEmail.value = value.email;
    inputName.value = value.name;
}

function onSubmit() {
    const userData = getUserDataFromInput();

    setUserDataStorage(userData);

    /* submit handler */
}

window.addEventListener('documentLoaded', () => {
    const userData = getUserDataStorage();

    if (userData) {
        setUserDataToInput(userData);
    }

    const submitButton = document.getElementById('submit');
    submitButton.addEventListener('click', onSubmit);
});