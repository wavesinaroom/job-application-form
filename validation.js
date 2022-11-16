const form = document.querySelector('form');
const email = document.getElementById('e-mail'); 

form.addEventListener('submit', (e)=>{
  if(!email.validity.valid){
    alert('nah');
    event.preventDefault();
  } });
