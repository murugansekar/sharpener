//1
var itemList = document.getElementById('items');
itemList.addEventListener('click', removeItem);
function removeItem(e)
{
  if(e.target.classList.contains('delete'))
  {
    var li = e.target.parentElement;
    itemList.removeChild(li);
  }
}
//2
itemList.addEventListener('click', editItem);

