const emailInput = document.getElementById('email');
const emailError = document.getElementById('emailError');
const nameInput = document.getElementById('fullname');
const nameError = document.getElementById('nameError');
const msgForm = document.getElementById('msgForm');


//Javascript Regex for Email Validation.
const regEmail = /^[(\w\d\W)+]+@[\w+]+\.[\w+]+$/i;
// /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;

  // Javascript Regex for Name validation
  const regName = /^[a-zA-Z][a-zA-Z]+/;


 emailInput.addEventListener('input', event => {
  if(emailInput.value == ''){
    
    emailInput.className = 'invalid';
    emailError.innerHTML = '*email is required';
    emailError.className = 'error__message'
  } else if (!regEmail.test(emailInput.value)){
    
    emailInput.className = 'invalid';
    emailError.innerHTML = 'enter valid email';
    emailError.className = 'error__message'
  } else if(regEmail.test(emailInput.value)) {
    
    emailInput.className = 'valid';
   emailError.innerHTML = 'ok';
   emailError.className = 'ok__message'
  }
  }
 )


 nameInput.addEventListener('input', event => {
  if(nameInput.value == ''){
   
    nameInput.className = 'invalid';
    nameError.innerHTML = '*name is required';
    nameError.className = 'error__message'
  } else if (!regName.test(nameInput.value)){
    
    nameInput.className = 'invalid';
    nameError.innerHTML = 'enter valid name';
    nameError.className = 'error__message'
    console.log("nameInput.className", nameInput.className);
  } else if(regName.test(nameInput.value)) {
    
    nameInput.className = 'valid';
    nameError.innerHTML = 'ok'
    nameError.className = 'ok__message'
  }
  }
 )

msgForm.addEventListener('submit', event => {
  if (nameInput.className == 'invalid' || emailInput.className == 'invalid'){
    alert('Fill the form correctly');
      event.preventDefault();
  } else if(nameInput.value == '' && emailInput.value == ''){
    alert('Form is empty. Please fill the form correctly');
  } 
  
  else {
    alert('Message sent successfully');
  }
  /* if (nameValid && emailValid) {
    alert('Message sent successfully');
    
   } else {
      alert('Fill the form correctly');
      event.preventDefault();
   } */
})
