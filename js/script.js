// Put all of your jQuery and JavaScript in this document.

window.onload = function(){
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
/////////////////////////////////////////////////////////
//Rebecca's Object Additions//
////////////////////////////////////////////////////////
var book1 = {
    "title": "Spawn, #1 (Comic Book) Comic – Color, 1992",
    "author": "TODD MCFARLANE",
		"picture": "https://images-na.ssl-images-amazon.com/images/I/51oYHJNoHTL._SX324_BO1,204,203,200_.jpg",
		"selling-points": "Single issue comic book, #1 Classic Todd McFarlane story and art",
    "price": "$5.99",
    ]
}
var book2 = {
    "title": "Spawn, #2 (Comic Book) Comic - Color, 1992",
    "author": "TODD MCFARLANE",
		"picture": "https://images-na.ssl-images-amazon.com/images/I/51w44xM5PIL._SX298_BO1,204,203,200_.jpg",
		"selling-points": "Single issue comic book, #2 Classic Todd McFarlane story and art",
    "price": "$7.99",
    ]
}
var book3 = {
    "title": "Spawn, #3 (Comic Book) Comic – Color, 1992",
    "author": "TODD MCFARLANE",
		"picture": "https://images-na.ssl-images-amazon.com/images/I/51rTGZmBE7L._SX322_BO1,204,203,200_.jpg",
		"selling-points": "Single issue comic book, #3 Classic Todd McFarlane story and art",
    "price": "$6.99",
    ]
}
var book4 = {
    "title": "Spawn, #4 (Comic Book) Comic – Color, 1992",
    "author": "TODD MCFARLANE",
		"picture": "https://images-na.ssl-images-amazon.com/images/I/61qackl4H7L._SX323_BO1,204,203,200_.jpg",
		"selling-points": "Single issue comic book, #4 Classic Todd McFarlane story and art",
    "price": "$12.99",
    ]
}
var book5 = {
    "title": "Spawn, #5 (Comic Book) Comic – Color, 1992",
    "author": "TODD MCFARLANE",
		"picture": "https://images-na.ssl-images-amazon.com/images/I/51mGQH6REzL._SX322_BO1,204,203,200_.jpg",
		"selling-points": "Single issue comic book, #5 Classic Todd McFarlane story and art",
    "price": "$8.50",
    ]
}
var book6 = {
    "title": "Spawn, #6 (Comic Book) Comic – Color, 1992",
    "author": "TODD MCFARLANE",
		"picture": "https://images-na.ssl-images-amazon.com/images/I/61%2BCM2Z1EgL.jpg",
		"selling-points": "Single issue comic book, #6 Classic Todd McFarlane story and art",
    "price": "$16.25",
    ]
}
