const myForm = document.querySelector('#my-form')
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
//const OutputName = document.querySelector('.OutputName');
//const OutputMail = document.querySelector('.OutputMail');
myForm.addEventListener('submit', onSubmit);
document.addEventListener('DOMContentLoaded',Refresh)
//window.onbeforeunload = Refresh;
function Refresh()
{
  let myObj_deserialized = JSON.parse(localStorage.getItem('myObj'))
  var html = "<table border='1|1'>"
  setTimeout(() => 
  {
  for(var i=0;i<myObj_deserialized.length;i++)
  {
    html+='<tr>'
    html+='<td>'+myObj_deserialized[i].name+'</td>';
    html+='<td>'+myObj_deserialized[i].email+'</td>';
    html+='</tr>'
  }
  document.getElementById("table").innerHTML = html
  }, 50);
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
    var ObjectsPresent=[]
    if(localStorage.getItem('myObj'))
    {
      ObjectsPresent=JSON.parse(localStorage.getItem('myObj'))
    }
    let myNewObj={name:nameInput.value,email:emailInput.value}
    ObjectsPresent.push(myNewObj)
    let ObjectsPresent_serialized = JSON.stringify(ObjectsPresent)
    localStorage.setItem('myObj',ObjectsPresent_serialized)
    nameInput.value = '';
    emailInput.value = '';
  }
}