const form = document.querySelector('form');
const email = document.getElementById('e-mail'); 
const notification = document.getElementById('notification');

form.addEventListener('submit', (e)=>{
  if(!form.checkValidity()){
    e.preventDefault(); 
    notification.textContent = 'Please check your fields';
  }    
});
