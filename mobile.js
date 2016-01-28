//Settings
var borderSpaceTop = 0;
var borderSpaceBottom = 70;  //Should be set to same as card spacing
var cardSpacing = 70;

//Global variables. DO NOT TOUCH
var selectedCard;

function selectIndex(index) {
    var cards = document.getElementsByClassName("card");
    if (index < 0)  //If a negative index is given
        index += cards.length;  //Make the index count from the back
    selectedCard = cards[index];
    activateSelected();
}

function select(card) {
    selectedCard = card;
    activateSelected();
}

function activateSelected() {
    var cards = document.getElementsByClassName("card");
    var headerRotationContainers = document.getElementsByClassName("card_header_rotation_container");
    var selectedIndex = 0;
    for (var i = 0; i < cards.length; i++) {
        if (cards[i] == selectedCard) {
            selectedIndex = i;
        }
    }
    for (var i = 0; i < selectedIndex; i++) {   //For all cards to the left of the selected card
        cards[i].style.top = borderSpaceTop + "px";
        /*cards[i].style.webkitFilter = "grayscale(90%) brightness(50%)";
        cards[i].style.filter = "grayscale(90%) brightness(50%)";*/
        /*headerRotationContainers[i].style.webkitAnimationName = "header_rotation_reverse";*/
    }
    for (var i = selectedIndex + 1; i < cards.length; i++) {    //For all cards to the bottom of the selected card
        cards[i].style.top = document.getElementById("clipping_container").clientHeight - ((cards.length - 1) * cardSpacing) - borderSpaceBottom + "px";
        /*cards[i].style.webkitFilter = "grayscale(90%) brightness(50%)";
        cards[i].style.filter = "grayscale(90%) brightness(50%)";*/
        /*headerRotationContainers[i].style.webkitAnimationName = "header_rotation";*/
    }
    //For the selected card
    //selectedCard.style.top = ((window.innerHeight - selectedCard.offsetHeight) / 2) + "px";    Use this if you want the selected card to be centered
    selectedCard.style.top = borderSpaceTop + "px";   //Use this if you want the select card to be top aligned
    /*selectedCard.style.webkitFilter = "grayscale(0%) brightness(100%)";
    selectedCard.style.filter = "grayscale(0%) brightness(100%)";*/
    /*headerRotationContainers[selectedIndex].style.webkitAnimationName = "header_rotation_reverse";*/
}