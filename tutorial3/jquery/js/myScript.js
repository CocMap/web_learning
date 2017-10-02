var total_item_click = 0;


function ADD_TOTAL_ITEM(){
    total_item_click++;
    document.getElementById("num_of_item").innerHTML = total_item_click;
}

function TRASH_CLICK(){
    document.getElementById("num_of_item").innerHTML = 0;       //set back to ZERO
}

