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


//Alternative 1 START

// 	function getUrlVars() {
//     var vars = {};
//     var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
//         vars[key] = value;
//     });
//     return vars;
// }

// var dynamicContent = getUrlVars()["grp"];
// var tic = getUrlVars()["tic"];

//Alternative 1 ENDE



//Alternative 2 START

// const queryString = window.location.search;
// const urlParams = new URLSearchParams(queryString);

// var dynamicContent = urlParams.get("grp");
// var tic = urlParams.get("tic");

//Alternative 2 ENDE



	// clears local storage
	//window.localStorage.clear();

	// Give the parameter a variable name





	var dynamicContent = getParameterByName('grp');
	var tic = getParameterByName('tic');
	// var return_tic = getParameterByName('return_tic');

	// save new defined parameter variable to local storage
	localStorage.setItem("dynamicContent", dynamicContent);
	localStorage.setItem("tic", tic);




	// localStorage.setItem("return_tic", return_tic);
