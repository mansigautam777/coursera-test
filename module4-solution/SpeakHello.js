(function(window) {
	var helloWord = "Hello";
	var helloSpeaker = function (givenName) {
		console.log(helloWord + " " + givenName);
	}

	window.helloSpeaker = helloSpeaker;

})(window);