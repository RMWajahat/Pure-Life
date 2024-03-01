// attributes
const form = document.getElementById('form');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');
const confirmEmail = document.getElementById('confirmEmail');
const phone = document.getElementById('phoneNo');
const password = document.getElementById('password');
const birthYear = document.getElementById('birthYear');
const radioStudying = document.getElementById('studying');
const radioNotStudying = document.getElementById('notStudying');
const radioEmployed = document.getElementById('emp');
const radioSeekEmp = document.getElementById('seekEmp');
const radioEmpOther = document.getElementById('empOther');

form.addEventListener('submit', e => {
  checkValidation();

  if (isFormValid() == true) {
    form.submit();
  } else {
    e.preventDefault();
  }
})

const isFormValid = () => {
  const formItem = form.querySelectorAll('.form-item');
  const formItem2 = form.querySelectorAll('.form-item2');
  let result = true;
  formItem.forEach((container) => {
    if (container.classList.contains('error')) {
      result = false;
    }
  }); 
  formItem2.forEach((container) => {
    if (container.classList.contains('error')) {
      result = false;
    }
  })
  return result;
}

const setErrorMessage = (e, message) => {
  const formItem = e.parentElement;
  const error = formItem.querySelector('.error');

  error.innerText = message;
  formItem.classList.add('error');
  formItem.classList.remove('valid');
}

const setSuccessMessage = e => {
  const formItem = e.parentElement;
  const error = formItem.querySelector('.error');

  error.innerText = '';
  formItem.classList.add('valid');
  formItem.classList.remove('error');
}

const isValidEmail = userInput => {
  const regex = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?(\.[a-z]{2,8})?$/;
  return regex.test(userInput);
} 

const isValidPhoneNumber = userInput => {
  const regex = /^\+614\d{2}\d{3}\d{3}$/;
  return regex.test(userInput);
}

const isValidPassword = userInput => {
  if (userInput.length < 6) {
    return setErrorMessage(password, 'Password should be more more than 6 characters.');
  } else if (userInput.search(/\d/) == -1) {
    return setErrorMessage(password, 'Password does not contain atleast 1 number');
  } else if (userInput.search(/[a-zA-Z]/) == -1) {
    return setErrorMessage(password, 'Password does not contain atleast 1 letter');
  }
  return true;
}

const checkValidation = () => {
  // First Name Validation
  if (firstName.value === '' || firstName.value === null) {
    setErrorMessage(firstName, 'First Name is required.');
  } else if (firstName.value.charAt(0) !== firstName.value.charAt(0).toUpperCase()) {
    setErrorMessage(firstName, 'First Name must start with a capital letter.');
  } else {
    setSuccessMessage(firstName);
  }

  // Last Name Validation
  if (lastName.value === '' || lastName.value === null) {
    setErrorMessage(lastName, 'Last Name is required.');
  } else {
    setSuccessMessage(lastName);
  }

  // Email Validation
  if (email.value === '' || email.value === null) {
    setErrorMessage(email, 'Email is required.');
  } else if (!isValidEmail(email.value)) {
    setErrorMessage(email, 'Enter a valid email, e.g. student@rmit.edu.au');
  } else {
    setSuccessMessage(email);
  }

  // Confirm Email Validation
  if (confirmEmail.value === '' || confirmEmail.value === null) {
    setErrorMessage(confirmEmail, 'Email is required.');
  } else if (confirmEmail.value !== email.value) {
    setErrorMessage(confirmEmail, 'The emails are not matching.');
  } else {
    setSuccessMessage(confirmEmail);
  }

  // Phone Validation
  if (phone.value === '' || phone.value === null) {
    setErrorMessage(phone, 'Phone Number is required.');
  } else if (!isValidPhoneNumber(phone.value)) {
    setErrorMessage(phone, 'Enter a valid phone number, e.g. +61498765432');
  } else {
    setSuccessMessage(phone);
  }

  // Birth Year Validation 
  const invalidAge = 2008;
  if (birthYear.value === '' || birthYear.value === null) {
    setErrorMessage(birthYear, "A Birth Year has not been selected.")
  } else if (birthYear.value > invalidAge) {
    setErrorMessage(birthYear, 'You must be 16 years of age or above.');
  } else {
    setSuccessMessage(birthYear);
    console.log("valid age");
  }

  // Student Status Validation
  if (radioStudying.checked == '' && radioNotStudying.checked == '') {
    setErrorMessage(radioStudying, "Status is not selected.")
    setErrorMessage(radioNotStudying, "Status is not selected.")
  } else {
    setSuccessMessage(radioStudying);
    setSuccessMessage(radioNotStudying);
    console.log("valid status");
  }

  // Employment Status Validation
  if (radioEmployed.checked == '' && radioSeekEmp.checked == '' && radioEmpOther.checked == '') {
    setErrorMessage(radioEmployed, "Status is not selected.")
    setErrorMessage(radioSeekEmp, "Status is not selected.")
    setErrorMessage(radioEmpOther, "Status is not selected.")
  } else {
    setSuccessMessage(radioEmployed);
    setSuccessMessage(radioSeekEmp);
    setSuccessMessage(radioEmpOther);
    console.log("valid status");
  }

  // Password Validation
  if (password.value === '' || password.value === null) {
    setErrorMessage(password, 'Password is required.');
  } else if (!isValidPassword(password.value)) {
    return;
  }
  else {
    setSuccessMessage(password);
  }
}