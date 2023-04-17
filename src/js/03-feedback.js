import throttle from "lodash.throttle";

const KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');
const { email, message } = form.elements;

let dataForm = JSON.parse(localStorage.getItem(KEY)) || {};

reloedPage();

form.addEventListener('input', throttle(onInputData, 500));
form.addEventListener('submit', onFormSubmit);

function onInputData(e) {
    dataForm = { email: email.value, message: message.value
    };
    localStorage.setItem(KEY, JSON.stringify(dataForm));

}


function reloedPage() {
    if (dataForm) {
        email.value = dataForm.email || '' ;
        message.value = dataForm.message || '';
    }
}

function onFormSubmit(e) {
    e.preventDefault();

    if(email.value === '' || message.value === '') {
return alert('Please fill in all fields!');
    } else {
        console.log({email: email.value, message: message.value});

    }

localStorage.removeItem(KEY);
e.currentTarget.reset();
dataForm = {};
}
