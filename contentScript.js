var t = document.createElement('script');
t.src = chrome.extension.getURL('Sweetalert2.js');
t.type = "module";
console.log(t);
(document.head||document.documentElement).appendChild(t);

var s = document.createElement('script');
s.src = chrome.extension.getURL('script.js');
(document.head||document.documentElement).appendChild(s);
s.onload = function() {
    s.parentNode.removeChild(s);
};
