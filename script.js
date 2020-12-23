// shuffle the pictures

var isPlaying = false;

var ourCardSlots = document.querySelectorAll(".image");

//create an ordered aray with numbers 1-6 twice

var notShuffledDeck = twoOrderedLists(ourCardSlots);

var shuffledDeck = shuffleTheDeck(notShuffledDeck);

// assignAlternateImage(shuffledDeck);

// now assign the image source of each image class randomly using this list!
//create an object where each image class has an alternate img src
// document.onclick = function(){


// FIRST PARTLY SUCCESFULL CODE, this placed all of the pictures in our desired spots, ******************************
//so lets safe the original and try to make a function out of this ***************************************

// for( let i = 0; i<shuffledDeck.length; i++){
//     document.querySelectorAll(".image")[i].addEventListener("click", function(){
//         for (i = 0; i < shuffledDeck.length; i++){
//             var picLocation = shuffledDeck[i];
//             // console.log(picLocation);
 
//             document.getElementById("pic" + (i+1) ).src = "images/image" + picLocation + ".png";
        
//         };
//     });
// };

putImagesInRandomLocations();

function putImagesInRandomLocations(){

            for (i = 0; i < shuffledDeck.length; i++){
                var picLocation = shuffledDeck[i];
                // console.log(picLocation);
     
                document.getElementById("pic" + (i+1) ).src = "images/image" + picLocation + ".png";
            
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