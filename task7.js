var itemList = document.querySelector('#items')

//1.parentElement
console.log(itemList.parentNode.parentElement.parentNode)
//2.lastelementchild
console.log(itemList.lastElementChild)
//3.lastchild
console.log(itemList.lastChild)
//4.createchild

//5.firstelementchild
console.log(itemList.firstElementChild)
//6.firstchild
console.log(itemList.firstChild)
//7.nextsibling
console.log(itemList.nextSibling)
//8.nextelementsibling
console.log(itemList.nextElementSibling)
//9.previoussibling
console.log(itemList.previousSibling)
//10.previouselementsibling
console.log(itemList.previousElementSibling)
//11.createelement
var newDiv = document.createElement('div')
newDiv.className='Hello';
newDiv.id ='hello1'
//12.setAttribute
newDiv.setAttribute('title','Hello Div')
//13.createtesxtnode
var newDivText = document.createTextNode('Hello world')
//14.appendchild
newDiv.appendChild(newDivText)
console.log(newDiv)


var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1')
container.insertBefore(newDiv,h1)
var h2 = document.querySelectorAll('.title')
var item1 = document.querySelector('.list-group-item')
//h2[1].insertBefore(newDiv,item1)

