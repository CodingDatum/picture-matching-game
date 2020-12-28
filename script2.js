// shuffle the pictures

var user = prompt("What's your name champ??");
var username = user.toUpperCase();

var activeCards = 0;

var imageCount = 0;

var firstCard;
var secondCard;

var isPlaying = false;

var ourCardSlots = document.querySelectorAll(".image");

//create an ordered aray with numbers 1-6 twice

var notShuffledDeck = twoOrderedLists(ourCardSlots);

var shuffledDeck = shuffleTheDeck(notShuffledDeck);

for( let i = 0; i<shuffledDeck.length; i++){
    document.querySelectorAll(".image")[i].addEventListener("click", function(){
        var picLocation = shuffledDeck[i];
        var picSource = "images/image" + picLocation + ".png";
        var currentSlot = document.getElementById("pic" + (i+1));
        console.log(activeCards);
        if(activeCards < 3){
            showImages(currentSlot, picSource);
        };
        
        // for (let j = 0; j < shuffledDeck.length; j++){
            
        // };
    });
};

function showImages(slot, source){

    if(activeCards === 0){
        slot.src = source;
        firstCard = slot;
        activeCards = activeCards + 1;
    }else if(activeCards === 1){
        slot.src = source;
        secondCard = slot;
        activeCards ++;
        if(firstCard.src === secondCard.src){
            imageCount += 2;
            activeCards = 0;
            if(imageCount < shuffledDeck.length){
                return;
            }else{
                setTimeout(function(){
                    window.alert("HOLY SHIT " + username + " YOU FUCKING DID IT!!!!");
                }, 500);
            };
        }else{
            setTimeout(function(){
                secondCard.src = "images/question-mark.png";
                firstCard.src = "images/question-mark.png";
                activeCards = 0;
            }, 3000);
        };
    };

}

function twoOrderedLists(numberOfCards){

    //start with first half of list then do it again for second half
    var orderedList = [];
    var twice = 0;
    while(twice<2){
        for(var i = 0; i < ((numberOfCards.length) / 2 ) ; i++ ){

            var numberToAdd = i + 1;
            orderedList.push(numberToAdd);
    
        };
        twice ++;
    };

    return orderedList;
}

function shuffleTheDeck(deck){

    // generate a random number, and use it as the index number from which to remove and store the value into a variable
    // then add this variable to a new array

    var newArray = [];

    while(deck.length>0){

        var randomNumber = Math.floor(Math.random()*deck.length);
        var removedCard = deck.splice(randomNumber, 1);
        newArray.push(removedCard[0]);

    }

    return newArray;

}