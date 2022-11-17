const form = document.querySelector('form');
const notification = document.getElementById('notification');

form.addEventListener('submit', (e)=>{
  if(!form.checkValidity()){
    e.preventDefault(); 
    notification.textContent = 'Please check your fields';
    checkName();
  }    

});

function checkName(){
  if(form.name.validity.patternMismatch){
    form.name.setCustomValidity('Can\'t contain numbers or special characters');
  }else if (form.name.validity.valueMissing){
    form.name.setCustomValidity('Required');
  }
  form.name.reportValidity();
}
