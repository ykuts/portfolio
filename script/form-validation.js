const emailInput = document.getElementById('email');
const emailError = document.getElementById('emailError');
const nameInput = document.getElementById('fullname');
const nameError = document.getElementById('nameError');
const msgForm = document.getElementById('msgForm');


function validationForm() {
  const name = document.getElementById('fullname').value;
  const email = document.getElementById('email').value;


  //Javascript Regex for Email Validation.
  const regEmail = 
  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;


  // Javascript Regex for Name validation
  const regName = /\d+$/g;

  if (name == "" || regName.test(name)) {
      window.alert
      ("Please enter your name properly.");
      nameInput.focus();
      return false;
  }

  if (email == "" || !regEmail.test(email)) {
      window.alert
      ("Please enter a valid e-mail address.");
      emailInput.focus();
      return false;
  }



  return true;
}



// function validateEmail(email) {
//   // Regular expression for email validation
//   const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   return emailPattern.test(email);
// }


// if (nameInput.value === '') {
//   nameError.textContent = 'Name is required';
// }

// nameInput.addEventListener('input', event => {
//   if(event) {
//     nameInput.value === '' ? nameInput.setCustomValidity('Fill the name') :
//       nameInput.setCustomValidity('');
//   }
// })

// if (emailInput.validity.valueMissing) {
//     emailInput.setCustomValidity('Email is required');
//     emailError.textContent = emailInput.validationMessage;
//   }

//   else {
//     this.setCustomValidity('');
//   }


// emailInput.addEventListener('input', function() {
//   if (!validateEmail(this.value)) {
//     this.setCustomValidity('Invalid email format');
//   } else {
//     this.setCustomValidity('');
//   }
//   emailError.textContent = this.validationMessage;
// });



msgForm.addEventListener('submit', function(event) {
  event.preventDefault();
  // You can perform additional actions like submitting the form here
  if (validationForm()){
  console.log('Form submitted successfully!');
  msgForm.reset();
} else {nameInput.focus();}
});


/* const form = document.getElementById("msgForm");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    let mail = document.getElementById("email");
    let fname = document.getElementById("fullname");
    const validityStateEmail = mail.validity;

    if  (validityStateEmail.valueMissing) {
        mail.setCustomValidity("You gotta fill this out, yo!");
        console.log("empty");
      } else {
        mail.setCustomValidity("");
      } 

      mail.reportValidity();

 /*  if (email.value == "" || fullname.value == "") {
    //alert("Ensure you input a value in both fields!");
    e.target.setCustomValidity("jhgjhg");
    //e.target.setCustomValidity("This field cannot be left blank");
  } else if (!emailRegExp.test(email.value)) {
    alert("Enter valid email!");
  } else {
    // perform operation with form input
    alert("This form has been successfully submitted!");
    console.log(
      `This form has a username of ${fname.value} and password of ${email.value}`
    );

    form.reset();
  } 
}); */