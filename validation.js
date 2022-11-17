const form = document.querySelector('form');
const notification = document.getElementById('notification');

form.addEventListener('submit', (e)=>{
  if(!form.checkValidity()){
    e.preventDefault(); 
    notification.innerHTML = 'Please fix errors: <br/>';
    checkName();
    checkSurname();
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
