



var xmlhttp = new XMLHttpRequest();

xmlhttp.open("GET", "partial.html", true);
xmlhttp.send();

var text = xmlhttp.responseText;
alert(text);


//xmlhttp.onreadystatechange = function() {
//    //console.log('xmlhttp.readyState: '+xmlhttp.readyState+'\n\rxmlhttp.status: '+xmlhttp.status);
//
//    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
//        document.getElementById("myDiv").innerHTML = xmlhttp.responseText;
//    }
//};




