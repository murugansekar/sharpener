const myForm = document.querySelector('#my-form')
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const OutputName = document.querySelector('.OutputName');
const OutputMail = document.querySelector('.OutputMail');
myForm.addEventListener('submit', onSubmit);
window.onbeforeunload = Refresh;
function Refresh()
{
  let myObj_deserialized = JSON.parse(localStorage.getItem('myObj'))
  nameInput.value = '';
  emailInput.value = '';
  OutputName.innerHTML = myObj_deserialized.name;
  OutputMail.innerHTML = myObj_deserialized.email;
  e.preventDefault();
}
function onSubmit(e) 
{
  e.preventDefault();
  if(nameInput.value === '' || emailInput.value === '') 
  {
    msg.classList.add('error');
    msg.innerHTML = 'Please enter all fields';
    setTimeout(() => msg.remove(), 3000);
  } 
  else 
  {
    let myObj={name:nameInput.value,email:emailInput.value}
    let myObj_serialized = JSON.stringify(myObj)
    localStorage.setItem('myObj',myObj_serialized)
  }
}