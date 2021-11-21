(function(window) {
	var goodbyeWord = "Good Bye";
	var goodbyeSpeaker = function (givenName) {
  		console.log(goodbyeWord + " " + givenName);
	}
	
	window.goodbyeSpeaker = goodbyeSpeaker;

})(window);