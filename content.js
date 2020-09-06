var source = document.getElementsByClassName("source-link font-bold micro-text greyscale-3")
if (source[0].title == "YUMMLY"){
	// redirect to #recipeDirections
	location.replace(window.location.href + "#recipeDirections");

} else {
	// redirect to #directions
	location.replace(window.location.href + "#directions");
	
	// Looking for print buttons
	var buttons = document.getElementsByTagName("button");
	for (let i = 0; i < buttons.length; i++){
		if (buttons[i].text == "Print"){
			// Every website does this differently, so this is just guessing
			
			if (buttons[i].hasAttribute("data-mv-print")){
				location.replace(buttons[i].data-mv-print);
			}
		}
	}
	
	// If that doesn't work, try looking for a's
	var a = document.getElementsByTagName("a");
	for (let i = 0; i < a.length; i++){
		
		if (a[i].hasAttribute("class")){
			if (a[i].getAttribute("class").includes("print")){
				// Chances are if there is a link, it's to the print page
				if (a[i].hasAttribute("href")){
					location.replace(a[i].href);
				}
			}
		}
	}
}

// Disgusting
//alert('Eww, Yummly!');