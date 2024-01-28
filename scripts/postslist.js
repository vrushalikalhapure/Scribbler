var modal = document.getElementById("myModalDel");

var del = document.getElementsByClassName("item");

var currentItemId;

for (var i = 0; i < deleteIcons.length; i++) {
    deleteIcons[i].addEventListener('click', function(event) {
      var itemId = event.currentTarget.parentElement.dataset.id;
      handleDelete(itemId);
    });
  }

function handleDelete(itemId){
    currentItemId = itemId;
    modal.style.display = "block";
}

function deleteItem(shouldDelete){
  modal.style.display = "none";

  if(shouldDelete){
    var itemToDelete = document.querySelector('.item[data-id="'+currentItemId+'"]');
    if(itemToDelete){
        itemToDelete.remove();
    }
  }
}

function redirectToAnotherPage(itemId){
    var url = 'post.html?id='+itemId;
    window.location.href = url;
}
