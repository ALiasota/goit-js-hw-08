import throttle from 'lodash.throttle';

const STOR_KEY = 'feedback-form-state';
const refs = {
    form: document.querySelector('.feedback-form'),
    email: document.querySelector('input'),
    message: document.querySelector('textarea')
}

const formData = {};
refs.form.addEventListener('input', throttle((e) => {
    formData.email = refs.email.value;
    formData.message = refs.email.value;    
    formData[e.target.name] = e.target.value;    
    localStorage.setItem(STOR_KEY, JSON.stringify(formData));
}, 500));

 function insertValues () {
    const values = localStorage.getItem(STOR_KEY);
    if (values) {
        const formData = JSON.parse(values);
        if (formData.email === undefined) {
            formData.email = "";
        }

        if (formData.message === undefined) {
            formData.message = "";
        }
        refs.email.value = formData.email;        
        refs.message.value = formData.message;       
    }
}

insertValues();

refs.form.addEventListener('submit', (e) => {
    e.preventDefault();   
    const formSubmit = {};     
    formSubmit[e.currentTarget.elements[0].name] = e.currentTarget.elements[0].value;
    formSubmit[e.currentTarget.elements[1].name] = e.currentTarget.elements[1].value;
    if (e.currentTarget.elements[0].value && e.currentTarget.elements[1].value) {
        
        
    console.log(formSubmit);
    e.currentTarget.reset();
    localStorage.removeItem(STOR_KEY);
    }
})
