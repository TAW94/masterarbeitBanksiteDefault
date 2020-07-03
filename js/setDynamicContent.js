// display dynamic content based on Link
// Parse the URL parameter

	function getParameterByName(name, url) {
	    if (!url) url = window.location.href;
	    name = name.replace(/[\[\]]/g, "\\$&");
	    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
	        results = regex.exec(url);
	    if (!results) return null;
	    if (!results[2]) return '';
	    return decodeURIComponent(results[2].replace(/\+/g, " "));
	}

	// clears local storage
	//window.localStorage.clear();

	// Give the parameter a variable name
	var dynamicContent = getParameterByName('grp');

	// save new defined parameter variable to local storage
	localStorage.setItem("dynamicContent", dynamicContent);
