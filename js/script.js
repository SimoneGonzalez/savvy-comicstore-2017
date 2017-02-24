// Put all of your jQuery and JavaScript in this document.

window.onload = function(){
	console.log("helloworld");
	//Get submit button
	var submitbutton = document.getElementById("tfq");
	//Add listener to submit button
	if(submitbutton.addEventListener){
		submitbutton.addEventListener("click", function() {
			if (submitbutton.value == 'Search our website'){//Customize this text string to whatever you want
				submitbutton.value = '';
			}
		});
	}
}

/*Gena's form stuff
	The preventDefault() method cancels the event if it is cancelable, meaning that the
	default action that belongs to the event will not occur.
		For example, this can be useful when:
		Clicking on a "Submit" button, prevent it from submitting a form
		Clicking on a link, prevent the link from following the URL

serializeArray= method creates an array of objects (name and value) by serializing
form values. can select one or more form elements (like input and/or text area), or
the form element itself.

forEach = calls a function once for each element in an array, in order
*/

var count = 2;

$("form").on("submit", function(event) {
  event.preventDefault();
  var data = $(this).serializeArray();
  var formObject = {};
  formObject.id = ++count;
  data.forEach( function(field){
  formObject[field.name] = field.value;
});

if(formObject.password === "banana"){
    console.log(formObject);
    } else {
      alert( "Sorry, you didn't enter the correct password" );
    }
});
