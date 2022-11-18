const form = document.querySelector('form');
const notification = document.getElementById('notification');
const inputs = [...document.querySelectorAll('input')];

form.addEventListener('submit', (e)=>{
  if(!form.checkValidity()){
    e.preventDefault(); 
    notification.innerHTML = 'Please fix errors: <br/>';
    checkName();
    checkSurname();
    checkCountry();
    checkCity();
    checkPhoneNumber();
    checkEmail();
    checkCVFile();
    checkCoverLetterFile();
    checkPortfolio();
    checkLinkedIn();
    checkAuthorization();
  }    

});

function checkName(){
  if(!form.name.validity.valid){
    document.querySelector('#name-div :nth-child(1)').style.color = 'red';
    document.querySelector('#name-div :nth-child(2)').style.borderColor = 'red';
  }
  if(form.name.validity.patternMismatch){
    notification.innerHTML += '* Name can\'t contain numbers or special characters <br/>'; 
  }else if (form.name.validity.valueMissing){
    notification.innerHTML += '* Name is required <br/>'; 
  }
}

function checkSurname(){
  if(!form.surname.validity.valid){
    document.querySelector('#surname-div :nth-child(1)').style.color = 'red';
    document.querySelector('#surname-div :nth-child(2)').style.borderColor = 'red';
  }
  if(form.surname.validity.patternMismatch){
    notification.innerHTML += '* Surname can\'t contain numbers or special characters <br/>'; 
  }else if (form.surname.validity.valueMissing){
    notification.innerHTML += '* Surname is required <br/>'; 
  }
}

function checkCountry(){
  if(!form.country.validity.valid){
    document.querySelector('#country-div :nth-child(1)').style.color = 'red';
    document.querySelector('#country-div :nth-child(2)').style.borderColor = 'red';
  }
  if(form.country.validity.patternMismatch){
    notification.innerHTML += '* Country can\'t contain numbers or special characters <br/>'; 
  }else if (form.country.validity.valueMissing){
    notification.innerHTML += '* Country is required <br/>'; 
  }
}

function checkCity(){
  if(!form.city.validity.valid){
    document.querySelector('#city-div :nth-child(1)').style.color = 'red';
    document.querySelector('#city-div :nth-child(2)').style.borderColor = 'red';
  }
  if(form.city.validity.patternMismatch){
    notification.innerHTML += '* City can\'t contain numbers or special characters <br/>'; 
  }else if (form.city.validity.valueMissing){
    notification.innerHTML += '* City is required <br/>'; 
  }
}

function checkPhoneNumber(){
  if(!form.phoneNumber.validity.valid){
    document.querySelector('#phone-div :nth-child(1)').style.color = 'red';
    document.querySelector('#phone-div :nth-child(2)').style.borderColor = 'red';
  }
  if(form.phoneNumber.validity.patternMismatch){
    notification.innerHTML += '* Phone number can\'t contain letters or special characters <br/>'; 
  }
}

function checkEmail(){
  if(!form.email.validity.valid){
    document.querySelector('#email-div :nth-child(1)').style.color = 'red';
    document.querySelector('#email-div :nth-child(2)').style.borderColor = 'red';
  }
  if(form.email.validity.typeMismatch){
    notification.innerHTML += '* Invalid Email format<br/>'; 
  }else if (form.email.validity.valueMissing){
    notification.innerHTML += '* Email is required <br/>'; 
  }
}

function checkCVFile(){
  if(!form.cv.validity.valid){
    document.querySelector('#cv-div :nth-child(1)').style.color = 'red';
  }
  if(document.getElementById('cv').files[0]){
    const fileInput = document.getElementById('cv');
    const allowed = ['pdf', 'docx', 'txt'];
    const extension = fileInput.files[0].name.split('.').pop();
    const maxFileSize = 5000;

    if(!allowed.includes(extension)){
      notification.innerHTML += '* Invalid CV file type <br/>';
    }else if(fileInput.files[0].size>maxFileSize){
      notification.innerHTML += '* File size shouldn\'t exceed 5MB <br/>';
    }  
  }else{
    notification.innerHTML += '* No CV file uploaded <br/>';
  }
}

function checkCoverLetterFile(){
  if(document.getElementById('cover-letter').files[0]){
    const fileInput = document.getElementById('cover-letter');
    const allowed = ['pdf', 'docx', 'txt'];
    const extension = fileInput.files[0].name.split('.').pop();
    const maxFileSize = 5000;

    if(!allowed.includes(extension)){
      document.querySelector('#cover-div :nth-child(1)').style.color = 'red';
      notification.innerHTML += '* Invalid Cover Letter file type <br/>';
    }else if(fileInput.files[0].size>maxFileSize){
      document.querySelector('#cover-div :nth-child(1)').style.color = 'red';
      notification.innerHTML += '* File size shouldn\'t exceed 5MB <br/>';
    }  
  }
}

function checkPortfolio(){
  if(form.portfolio.validity.typeMismatch){
    document.querySelector('#portfolio-div :nth-child(1)').style.color = 'red';
    document.querySelector('#portfolio-div :nth-child(2)').style.borderColor = 'red';
    notification.innerHTML += '* Invalid Portfolio url format<br/>'; 
  }else if (form.portfolio.value === ''){
    document.querySelector('#portfolio-div :nth-child(1)').style.color = 'red';
    document.querySelector('#portfolio-div :nth-child(2)').style.borderColor = 'red';
    notification.innerHTML += '* Portfolio url is required <br/>'; 
  }
}

function checkLinkedIn(){
  if(!form.linkedin.validity.valid){
    document.querySelector('#linkedin-div :nth-child(1)').style.color = 'red';
    document.querySelector('#linkedin-div :nth-child(2)').style.borderColor = 'red';
  }
  if(form.linkedin.validity.typeMismatch){
    notification.innerHTML += '* Invalid LinkedIn url format<br/>';
  }
}

function checkAuthorization(){
  if(form.personalDataCheck.validity.valueMissing){
    document.querySelector('#authorize-div :nth-child(2)').style.color = 'red';
    notification.innerHTML += '* Check privacy authorization policy';
  }
}
