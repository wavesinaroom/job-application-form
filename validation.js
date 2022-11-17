const form = document.querySelector('form');
const notification = document.getElementById('notification');

form.addEventListener('submit', (e)=>{
  if(!form.checkValidity()){
    e.preventDefault(); 
    notification.textContent = 'Please check your fields';
    alert(form.name.validity.patternMismatch);
    form.name.setCustomValidity('Wrong');
    form.name.reportValidity();
  }    
});
