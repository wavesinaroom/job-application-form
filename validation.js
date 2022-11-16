const form = document.querySelector('form');
const email = document.getElementById('e-mail'); 
const notification = document.getElementById('notification');

form.addEventListener('submit', (e)=>{
  if(email.validity.valid){
    notification.textContent = 'error'; 
    e.preventDefault();
  } 
});