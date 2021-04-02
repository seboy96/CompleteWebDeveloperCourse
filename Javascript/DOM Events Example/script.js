// Selecting the elements we wanted, and caching them in variables
var enterButton = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");


// returns the length of user input
function inputLength() {
	return input.value.length;
}

// creates an li element and appends to end of ul element
function createListElement() {
	var li = document.createElement("li");
	// need to give text content for li element
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	// clears the user input after event occurs
	input.value = "";
	addDeleteButton(li);
}

// adds li element after a click event occurs
function addListAfterClick() {
	if(inputLength() > 0) {
		createListElement();
	}
}

// adds li element after enter key is pressed
function addListAfterKeypress(event) {
	if(inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function addDeleteButton(parent) {
	var deleteButton = document.createElement("button");
	deleteButton.appendChild(document.createTextNode("Delete!"));
	deleteButton.classList.add("delete");
	parent.appendChild(deleteButton);
}

// toggles the done class for an li element when clicked
function toggleDone(e) {
	if(e.target.nodeName == "LI") {
		e.target.classList.toggle("done");
	}
}

function deleteItem(e) {
	if(e.target.className == "delete") {
		var element = e.target.parentElement;
		element.remove();
	}
}

enterButton.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

ul.addEventListener("click", toggleDone);

ul.addEventListener("click", deleteItem);