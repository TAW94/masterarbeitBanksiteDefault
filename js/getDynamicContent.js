$(document).ready(function() {

  var dynamicContent = localStorage.getItem("dynamicContent");

  // if(window.location.href === "https://taw94.github.io/masterarbeitBanksiteDefault/entscheidung.html/" || window.location.href === "file:///C:/Users/timwo/github/masterarbeitBanksiteDefault/entscheidung.html"){

 // $('#erklärungssection-000').addClass('dynamicContent');
 // $('#erklärungssection-010').addClass('dynamicContent');
 // $('#erklärungssection-011').addClass('dynamicContent');
 // $('#erklärungssection-100').addClass('dynamicContent');
 // $('#erklärungssection-101').addClass('dynamicContent');
 // $('#erklärungssection-110').addClass('dynamicContent');
 // $('#erklärungssection-111').addClass('dynamicContent');

  // var dynamicContent = localStorage.getItem("groupKey");

 // Check if the URL parameter is apples
 if (dynamicContent == "0-1-0") {
   $('#erklärungssection-010').show();
 }
 // Check if the URL parameter is oranges
 else if (dynamicContent == "0-1-1") {
   $('#erklärungssection-011').show();
 }
 // Check if the URL parameter is bananas
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

 // alert(dynamicLink);
 // alert(dynamicContent);

 $("#backToSurveyLink").attr("href", "www.google.de/" +dynamicContent);

});
