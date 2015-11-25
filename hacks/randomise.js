//----------------------------------------------------------------------------
// Randomise API
//----------------------------------------------------------------------------

function randomWord(length, words, seed){
    /* randomWord
        length: length of each word (default is 5 letters).
        words: number of words (default is 1 word).
        seed: a word to be planted randomly amongst the word(s) (optional)
    */
    words = typeof words !== 'undefined' ? words : 1;
    length = typeof length !== 'undefined' ? length : 5;
    
    var seedOn = typeof seed !== 'undefined';

    var text = "";
    var possible ="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    
    for (var j=0; j < words; j++){
        var word = "";
        for (var i=0; i < length; i++){
            word += possible.charAt(Math.floor(Math.random()*possible.length));
        }
        if (seedOn == true){
            var randomBool = Math.random() >= 0.8;
            if (randomBool == true){
                text += seed + " ";
                seedOn = false;
	    }
	}
        text += word + " ";
    }
    return text;
};

function randomNumber(digits){
    /* randomNumber
        max: how many digits of random number (default is 3).
    */
    length = typeof length !== 'undefined' ? length : 1000;
    return Math.floor(Math.random() * length);
};