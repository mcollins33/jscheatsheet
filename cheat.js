var array = [1, 2, 3, 4, 5];


function displayIndex() {
    var index = document.getElementById("index").value;
    console.log(index);
    var indexDisplay = "The value of index " + index + " is " + array[index];
    console.log(indexDisplay);
    document.getElementById("indexValue").innerHTML = indexDisplay;
    document.getElementById("index").value = "";
};

var arrayModified = [1, 2, 3, 4, 5];

function changeIndex() {
    var index = document.getElementById("indexToChange").value;
    var value = document.getElementById("newValue").value;
    arrayModified[index] = value;
    var newArray = "[";
    for (i = 0; i < arrayModified.length; i++) {
        if (i < arrayModified.length - 1) {
            newArray = newArray + arrayModified[i] + ", ";
        } else {
        	newArray = newArray + arrayModified[i];
        }
    };
    newArray = "array = " + newArray + "]";
    document.getElementById("newArray").innerHTML = newArray;
    document.getElementById("indexToChange").value = "";
    document.getElementById("newValue").value = "";
};