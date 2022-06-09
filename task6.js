
//Make the 2nd item have green background color
var secondElement = document.querySelector('.list-group-item:nth-Child(2)');
secondElement.style.backgroundColor = 'green';

//Make the 3rd item invisible
var thirdElement = document.querySelector('.list-group-item:nth-Child(3)');
//thirdElement.remove();
thirdElement.style.display = 'none';


//Using QuerySelectorALL change the font color to green for 2nd item in the item list
var lists = document.querySelectorAll('.list-group-item')
lists[1].style.color = 'green'
//Choose all the odd elements and make their background green using QuerySelectorALL
var odd = document.querySelectorAll('li:nth-child(odd)')
for (var i=0;i<odd.length;i++)
{
    odd[i].style.backgroundColor = 'green'
}
/*What is the difference between queryselector and queryselectorall?
querySelector picks only the first element or single specified elemen.
querySelectorAll picks all the element related to the tqag or classname or id
*/