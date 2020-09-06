var source = document.getElementsByClassName("source-link font-bold micro-text greyscale-3")
if (source[0].title == "YUMMLY"){
	// redirect to #recipeDirections
	url = location.replace(window.location.href + "#recipeDirections");

} else {
	// redirect to #directions
	url = location.replace(window.location.href + "#directions");
	
}

// Find all instances of "print"
//const reg = new RegExp("print", "gi")
//var source = document.getElementsByTagName("button");
//var found = source.search(reg);

// Follow Link


// Disgusting
//alert('Eww, Yummly!');