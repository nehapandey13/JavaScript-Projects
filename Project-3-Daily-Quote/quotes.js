var arrayOfQuotes=[
    {
        "author":"Dr. Seuss ",
        "quote":"Don't cry because it's over. Smile because it happened." 
    },

    {
        "author":"Albert Einstein",
        "quote":"Anyone who has never made a mistake has never tried anything new. "
    },


    {
        "author":"C.S. Lewis",
        "quote":"Don't let your happiness depend on something you may lose."
    },


    {
        "author":"Stephen King",
        "quote":"Monsters are real, ghosts are real, too. They live inside us, and sometimes they win. "
    },


    {
        "author":"Herman Hesse",
        "quote":"Some of us think holding on makes us strong; but sometimes it is letting go."
    },


    {
        "author":"Margaret Atwood",
        "quote":"Life's not fair; why should I be?"
    },


    {
        "author":"Robert Ingersoll",
        "quote":"We rise by lifting others."
    },

]
function randomSelector(arrayLength){
    return Math.floor(Math.random()*arrayLength);
}

function generateQuote(){
    var randomNumber=randomSelector(arrayOfQuotes.length);

    document.getElementById("quoteOutput").innerHTML='"'+arrayOfQuotes[randomNumber].quote + '"';
    document.getElementById("authorOutput").innerHTML="_"+arrayOfQuotes[randomNumber].author;
}