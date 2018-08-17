var elem = document.getElementById("content");
var elem2 = document.getElementById("content2");

elem2.innerHTML = "<br/><p style='color: white;'>Display</p>" + elem.outerHTML;