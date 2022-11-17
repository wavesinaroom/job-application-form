const form = document.querySelector('form');
const notification = document.getElementById('notification');

form.addEventListener('submit', (e)=>{
  if(!form.checkValidity()){
    e.preventDefault(); 
    notification.innerHTML = 'Please fix errors: <br/>';
    checkName();
    checkSurname();
    checkCity();
    checkPhoneNumber();
    checkEmail();
  }    

});

function checkName(){
  if(form.name.validity.patternMismatch){
    notification.innerHTML += '* Name can\'t contain numbers or special characters <br/>'; 
  }else if (form.name.validity.valueMissing){
    notification.innerHTML += '* Name is required <br/>'; 
  }
}

function checkSurname(){
  if(form.surname.validity.patternMismatch){
    notification.innerHTML += '* Surname can\'t contain numbers or special characters <br/>'; 
  }else if (form.surname.validity.valueMissing){
    notification.innerHTML += '* Surname is required <br/>'; 
  }
}

function checkCity(){
  if(form.city.validity.patternMismatch){
    notification.innerHTML += '* City can\'t contain numbers or special characters <br/>'; 
  }else if (form.city.validity.valueMissing){
    notification.innerHTML += '* City is required <br/>'; 
  }
}

function checkPhoneNumber(){
  if(form.phoneNumber.validity.patternMismatch){
    notification.innerHTML += '* Phone number can\'t contain letters or special characters <br/>'; 
  }
}

function checkEmail(){
  if(form.email.validity.typeMismatch){
    notification.innerHTML += '* Invalid Email format<br/>'; 
  }else if (form.email.validity.valueMissing){
    notification.innerHTML += '* Email is required <br/>'; 
  }
}



