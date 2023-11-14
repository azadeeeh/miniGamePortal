var list = document.getElementById("list");
console.log(list);
if (list != null)
    var listItems = list.getElementsByTagName("li");
console.log(listItems);

var headButton = document.getElementById("headButton");
var nav = document.querySelector("nav");

//back button
function goBack() {
    window.history.back();
}

//change the color of the nav bar items
if (list != null)
    for (li of listItems) {
        li.addEventListener("click", function () {
            var x = document.querySelectorAll(".selected");
            for (var j = 0; j < x.length; j++) {
                x[j].classList.remove("selected");
            }
            this.classList.add("selected");
        });
    }

/*function button() {
    nav.style.display = (nav.style.display === 'block') ? 'none' : 'block';
    console.log("clicked");
}

headButton.addEventListener("click", button);*/

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