function duplicateCount(text){
    var nText = text.toLowerCase();
    var myObj = {}; 
    var counter = 0;
    for (var i = 0; i < nText.length; i++) {
        if (!myObj[nText[i]]){
            myObj[nText[i]] = 1;
        }
        else if (myObj[nText[i]] < 2) {
            myObj[nText[i]] += 1;
            counter++;
        }
    }
    return counter;
}