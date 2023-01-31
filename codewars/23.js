function abbrevName(name){
    let newArray = name.split(" ");
    return newArray[0][0].toUpperCase() + "." + newArray[1][0].toUpperCase();
    }