//var list = document.getElementById("list");
console.log(list);
//var listItems = list.getElementsByTagName("li");
console.log(listItems);
//var item = document.getElementsByClassName("game-item");


//change the color of the nav bar items

var listItems = document.querySelectorAll(".nav-item");

for (var i = 0; i < listItems.length; i++) {
    listItems[i].addEventListener("click", function () {
        // Remove "selected" class from all menu items
        var highlightedItems = document.querySelectorAll(".nav-item.selected");
        for (var j = 0; j < highlightedItems.length; j++) {
            highlightedItems[j].classList.remove("selected");
        }

        // Add "selected" class to the clicked menu item
        this.classList.add("selected");
    });
}


// Change the color of the nav bar items
/*
for (var i = 0; i < listItems.length; i++) {
    listItems[i].addEventListener("click", function () {
        var highlightedItems = document.querySelectorAll(".selected");

        for (var j = 0; j < highlightedItems.length; j++) {
            highlightedItems[j].classList.remove("selected");
        }

        this.classList.add("selected");
    });
}
*/


/*item.addEventListener("click", function(){

    item.classList.add("selected");




})*/