document.querySelector('#push').onclick = function(){
    if(document.querySelector('#newitem input').value.length == 0){
        alert("Enter an item.")
    }
    else{
        document.querySelector('#items').innerHTML += `
            <div class="item">
                <span id="itemname">
                    ${document.querySelector('#newitem input').value}
                </span>
                <button class="delete">
                    <i class="far fa-trash-alt"></i>
                </button>
            </div>
        `;

        var current_items = document.querySelectorAll(".delete");
        for(var i=0; i<current_items.length; i++){
            current_items[i].onclick = function(){
                this.parentNode.remove();
            }
        }

        var items = document.querySelectorAll(".item");
        for(var i=0; i<items.length; i++){
            items[i].onclick = function(){
                this.classList.toggle('completed');
            }
        }

        document.querySelector("#newitem input").value = "";
    }
}