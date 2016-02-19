var openAllWindows = function(){
	var urls = document.getElementById('urls-input').value.split('\n');
	for(var i = 0; i < urls.length; i++){
		if(urls[i].indexOf('.') > 0){
			if(urls[i].indexOf('://') < 0){
				window.open('http://' + urls[i]);
			} else {
				window.open(urls[i]);
			}
		}
	}	
}

var clearWindows = function(){
	document.getElementById('urls-input').value = "";	
}

document.getElementById("open").addEventListener("click", function(el){
	el.preventDefault();
	openAllWindows();
});

document.getElementById("clear").addEventListener("click", function(el){
	el.preventDefault();
	clearWindows();
});
