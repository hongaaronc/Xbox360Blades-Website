//Settings
var borderSpaceLeft = 0;
var borderSpaceRight = 80;  //Should be set to same as card spacing
var cardSpacing = 80;

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
    var selectedIndex = 0;
    for (var i = 0; i < cards.length; i++) {
        if (cards[i] == selectedCard) {
            selectedIndex = i;
        }
    }
    for (var i = 0; i < selectedIndex; i++) {   //For all cards to the left of the selected card
        cards[i].style.left = borderSpaceLeft + "px";
        cards[i].style.opacity = "1";
        cards[i].style.webkitFilter = "grayscale(90%) brightness(50%)";
        cards[i].style.filter = "grayscale(90%) brightness(50%)";
        document.getElementsByClassName("card_header_rotation_container")[i].style.webkitAnimationName = "header_rotation_reverse";
    }
    for (var i = selectedIndex + 1; i < cards.length; i++) {    //For all cards to the right of the selected card
        cards[i].style.left = document.getElementById("clipping_container").clientWidth - ((cards.length - 1) * cardSpacing) - borderSpaceRight + "px";
        cards[i].style.opacity = "1";
        cards[i].style.webkitFilter = "grayscale(90%) brightness(50%)";
        cards[i].style.filter = "grayscale(90%) brightness(50%)";
        document.getElementsByClassName("card_header_rotation_container")[i].style.webkitAnimationName = "header_rotation";
    }
    //For the selected card
    //selectedCard.style.left = ((window.innerWidth - selectedCard.offsetWidth) / 2) + "px";    Use this if you want the selected card to be centered
    selectedCard.style.left = borderSpaceLeft + "px";   //Use this if you want the select card to be left aligned
    selectedCard.style.opacity = "1.0";
    selectedCard.style.webkitFilter = "grayscale(0%) brightness(100%)";
    selectedCard.style.filter = "grayscale(0%) brightness(100%)";
    document.getElementsByClassName("card_header_rotation_container")[selectedIndex].style.webkitAnimationName = "header_rotation_reverse";
    document.body.style.backgroundColor = selectedCard.getElementsByClassName("card_header")[0].style.backgroundColor;
}