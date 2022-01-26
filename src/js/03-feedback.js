import throttle from 'lodash.throttle';

const STOR_KEY = 'feedback-form-state';
const refs = {
    form: document.querySelector('.feedback-form'),
    email: document.querySelector('input'),
    message: document.querySelector('textarea')
}

const formData = {};
refs.form.addEventListener('input', throttle((e) => {    
    formData[e.target.name] = e.target.value;    
    localStorage.setItem(STOR_KEY, JSON.stringify(formData));
}, 500));

 function insertValues () {
    const values = localStorage.getItem(STOR_KEY);
    if (values) {
        const formData = JSON.parse(values);
        refs.email.value = formData.email;
        refs.message.textContent = formData.message;        
    }
}

insertValues();

refs.form.addEventListener('submit', (e) => {
    e.preventDefault();   
        
    formData[e.currentTarget.elements[0].name] = e.currentTarget.elements[0].value;
    formData[e.currentTarget.elements[1].name] = e.currentTarget.elements[1].value;
    console.log(formData);
    e.currentTarget.reset();
    localStorage.removeItem(STOR_KEY);
})
