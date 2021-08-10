function printLatinWord(str) {
	return str.slice(1) + str.slice(0, 1) + "ay";
}



function convert() {
	var arr = document.getElementById("inputTxt").value.trim().split(" ");

	for (var i = 0; i < arr.length; i++) {
		str = printLatinWord(arr[i]);
		document.getElementById("res").innerHTML += str + " ";
	}

	document.getElementById("res").innerHTML += "\n";	
}


function start() {
	document.getElementById("convert").addEventListener("click", convert, false);
}




window.addEventListener( "load", start, false );