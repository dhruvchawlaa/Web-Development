var count = 99;
var temp = count;
while (count >= 0) {
    var bottleWord = "bottles";
    if (count === 1) {
        bottleWord = "bottle";
    }

    if (count > 0) {
        console.log(count + " " + bottleWord +" of beer on the wall, " + count +  " " + bottleWord +" of beer.");
    } else {
        console.log("No more bottles of beer on the wall, no more bottles of beer.");
    }
    
    count--;

    if (count > 0) {
        console.log("Take one down and pass it around, " + count + " " + bottleWord + " of beer on the wall.");
    } else if ( count === 0) {
        console.log("Take one down and pass it around, no more bottles of beers on the wall.");
    } else {
        console.log("Go to the store and buy some more, " + temp + " " + bottleWord + " of beer on the wall.");
    }
    
}