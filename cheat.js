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

var arrayIndexes = [[1,2,3],[4,5,[6,7]]];

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

var arrayAdd = [1,2,3];

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

var arrayRemove = [1,2,3,4,5,6,7];

function popItem() {
	arrayRemove.pop();
	document.getElementById("removeFromArray").innerHTML = "array = [" + arrayRemove + "]";
}

function shiftItem() {
	arrayRemove.shift();
	document.getElementById("removeFromArray").innerHTML= "array = [" + arrayRemove + "]";
}