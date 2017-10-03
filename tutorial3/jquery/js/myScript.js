var totalItem = 0;

function addTotalItem() {
    totalItem++;
    document.getElementById("num_of_item").innerHTML = totalItem;
}

function resetTotalItem() {
    // set back to ZERO
    document.getElementById("num_of_item").innerHTML = 0;
    // set num of items back to ZERO
    totalItem = 0;
}

