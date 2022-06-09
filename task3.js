/*1) Document will be root element and it has two child elements named head and body. Head has one child element named <h1> and contains text 'Title'*/

//2)
document.title = "Manipulated";

//3)innertext pays attention to style.

var headerTitle = document.getElementById('main-header');
headerTitle.style.borderBottom = 'solid 3px #000';

var addItem = document.querySelector('.title');
addItem.style.color = 'green';
addItem.fontweight = 'bold';