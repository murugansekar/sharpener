var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');
filter.addEventListener('keyup',action)
form.addEventListener('submit', addItemDescription);

function addItemDescription(e)
{
  e.preventDefault();
  var newItem = document.getElementById('item').value+' ----- ';
  var newDescription = document.getElementById('description').value;
  var li = document.createElement('li');
  li.className = 'list-group-item';
  li.appendChild(document.createTextNode(newItem));
  var description = document.createTextNode(newDescription);
  li.appendChild(description);
  itemList.appendChild(li);
}


function action(e)
{
  var text = e.target.value.toLowerCase();
  var items = document.getElementsByTagName('li');
  Array.from(items).forEach(function(item)
  {
    var itemName = item.textContent;
    if(itemName.toLowerCase().indexOf(text) != -1)
    {
      item.style.display = 'block';
    }
    else
    {
      item.style.display = 'none';
    }
  });
  
}