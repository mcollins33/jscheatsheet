var array = [1, 2, 3, 4, 5];


function displayIndex() {
    var index = document.getElementById("index").value;
    var indexDisplay = "The value of index " + index + " is " + array[index];
    document.getElementById("indexValue").innerHTML = indexDisplay;
    document.getElementById("index").value = "";
};

var arrayModified = [1, 2, 3, 4, 5];

function changeIndex() {
    var index = document.getElementById("indexToChange").value;
    var value = document.getElementById("newValue").value;
    arrayModified[index] = value;
    document.getElementById("newArray").innerHTML = "array = [" + arrayModified + "]";
    document.getElementById("indexToChange").value = "";
    document.getElementById("newValue").value = "";
};

var arrayIndexes = [
    [1, 2, 3],
    [4, 5, [6, 7]]
];

function displayIndexes() {
    var indexes = document.getElementById("indexes").value;
    var indexesArray = indexes.split(' ').map(Number);
    var array = arrayIndexes;
    var arrayText = "array[";
    for (i = 0; i < indexesArray.length; i++) {
        if (i < indexesArray.length - 1) {
            arrayText = arrayText + indexesArray[i] + ", ";
        } else {
            arrayText = arrayText + indexesArray[i] + "]";
        }
        array = array[indexesArray[i]];
    }
    var indexesDisplay = "The value of " + arrayText + " is " + array;
    document.getElementById("indexesValue").innerHTML = indexesDisplay;
    document.getElementById("indexes").value = "";
}

var arrayAdd = [1, 2, 3];

function pushItem() {
    var item = document.getElementById("itemToAdd").value;
    arrayAdd.push(item);
    document.getElementById("addToArray").innerHTML = "array = [" + arrayAdd + "]";
    document.getElementById("itemToAdd").value = "";
}

function unshiftItem() {
    var item = document.getElementById("itemToAdd").value;
    arrayAdd.unshift(item);
    document.getElementById("addToArray").innerHTML = "array = [" + arrayAdd + "]";
    document.getElementById("itemToAdd").value = "";
}

var arrayRemove = [1, 2, 3, 4, 5, 6, 7];

function popItem() {
    arrayRemove.pop();
    document.getElementById("removeFromArray").innerHTML = "array = [" + arrayRemove + "]";
}

function shiftItem() {
    arrayRemove.shift();
    document.getElementById("removeFromArray").innerHTML = "array = [" + arrayRemove + "]";
}

var colorIfElse = "";

function displayColorIfElse() {
    colorNumber = document.getElementById("colorNumber").value;
    if (colorNumber == 0) {
        colorIfElse = "black";
    } else if (colorNumber == 1) {
        colorIfElse = "brown";
    } else if (colorNumber == 2) {
        colorIfElse = "blonde";
    } else if (colorNumber == 3) {
        colorIfElse = "red";
    } else {
        colorIfElse = "not specified";
    }
    document.getElementById("colorIfElse").innerHTML = "Your hair color using if else is " + colorIfElse;
}

var colorSwitch = "";

function displayColorSwitch() {
    colorNumber = parseInt(document.getElementById("colorNumber").value);
    switch (colorNumber) {
        case 0:
            colorSwitch = "black";
            break;
        case 1:
            colorSwitch = "brown";
            break;
        case 2:
            colorSwitch = "blonde";
            break;
        case 3:
            colorSwitch = "red";
            break;
        default:
            colorSwitch = "not specified";
    }
    document.getElementById("colorSwitch").innerHTML = "Your hair color using switch is " + colorSwitch;
}

var arrayDoWhile = [];

function doWhile() {
    i = parseInt(document.getElementById("arrayStart").value);
    do {
        arrayDoWhile.push(i);
        i++;
    } while (i <= document.getElementById("arrayEnd").value);
    document.getElementById("arrayFinal").innerHTML = "array = [" + arrayDoWhile + "]";
    arrayDoWhile = [];
    document.getElementById("arrayStart").value = null;
    document.getElementById("arrayEnd").value = null;
}