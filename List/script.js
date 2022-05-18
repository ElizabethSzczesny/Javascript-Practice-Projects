var inputAdd = document.getElementById("input-add");
var iconAdd = document.getElementById("pencil");
var list = document.getElementById("list");


iconAdd.addEventListener('click', () => addItem());


function addItem(){
    var item = inputAdd.value;
    var li = document.createElement('li');
    list.appendChild(li);
    li.innerHTML = item + '<i class="fa-solid fa-minus"></i>';
    inputAdd.value = "";

    var deleteIcons = document.getElementsByClassName("fa-minus");
    for (let i=0; i < deleteIcons.length; i++){
        var itemsDelete = document.getElementsByTagName("li");
        deleteIcons[i].addEventListener('click', function(){
            itemsDelete[i].innerHTML = "";
        })
    }
}
    



    /*.addEventListener('click', function(){
        li.innerHTML = "";
    })*/
    //console.log(inputAdd.value);




