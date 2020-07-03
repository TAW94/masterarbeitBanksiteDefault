$(document).ready(function() {

  var dynamicContent = localStorage.getItem("dynamicContent");

 // Check if the URL parameter is 0-1-0, else checks all other group parameters. No group = 0-0-0
 if (dynamicContent == "0-1-0") {
   $('#erklärungssection-010').show();
 }
 else if (dynamicContent == "0-1-1") {
   $('#erklärungssection-011').show();
 }
 else if (dynamicContent == "1-0-0") {
   $('#erklärungssection-100').show();
 }
 else if (dynamicContent == "1-0-1") {
   $('#erklärungssection-101').show();
 }
 else if (dynamicContent == "1-1-0") {
   $('#erklärungssection-110').show();
 }
 else if (dynamicContent == "1-1-1") {
   $('#erklärungssection-111').show();
 }
 // Check if the URL parmeter is empty or not defined, display default content
 else {
   $('#erklärungssection-000').show();
 }

 $("#backToSurveyLink").attr("href", "https://www.google.de/search?q=" +dynamicContent);

});
