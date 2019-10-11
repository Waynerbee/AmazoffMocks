document.addEventListener('DOMContentLoaded', function() {
    var checkPageButton = document.getElementById('clickIt');
    checkPageButton.addEventListener('click', function() {

      chrome.tabs.getSelected(null, function(tab) {
        console.log ("Hello there!");
        alert("Hello..! It's my first chrome extension.");

      });
    }, false);
  }, false);
