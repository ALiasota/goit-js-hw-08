import throttle from 'lodash.throttle';

const STOR_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');
const formData = {};
form.addEventListener('input', throttle((e) => {
    formData.email = form.elements.email.value;
    formData.message = form.elements.message.value;    
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
        form.elements.email.value = formData.email;        
        form.elements.message.value = formData.message;       
    }
}

insertValues();

form.addEventListener('submit', (e) => {
    e.preventDefault();   
    const formSubmit = {};     
    formSubmit[e.currentTarget.elements[0].name] = e.currentTarget.elements[0].value;
    formSubmit[e.currentTarget.elements[1].name] = e.currentTarget.elements[1].value;
    if (!e.currentTarget.elements[0].value || !e.currentTarget.elements[1].value) {        
        alert("Enter email and message");
        return;
    }

    console.log(formSubmit);
    e.currentTarget.reset();
    localStorage.removeItem(STOR_KEY);
})
