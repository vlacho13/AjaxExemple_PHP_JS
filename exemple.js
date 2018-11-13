var xmlHttp = createXmlHttpRequestObject();

function createXmlHttpRequestObject() {
    var xmlHttp;    
    try {
        xmlHttp = new XMLHttpRequest();
    } catch (e) {
        try {
            xmlHttp = ActiveXObject("Microsoft.XMLHTTP")
        } catch (error) {
            alert("Erreur lors de la creation de l'objet XMLHttpRequest");
        }
    }

    if (!XMLHttpRequest) {
        alert("Erreur lors de la creation de l'objet XMLHttpRequest");
    } else {
        return xmlHttp;
    }
}

function process() {
    if (xmlHttp.readyState == 0 || xmlHttp.readyState == 4) {
        var name = encodeURIComponent(document.getElementById("name").value);
        xmlHttp.open("GET", "exemple.php?name="+name, true);
        xmlHttp.onreadystatechange = handleResponse;
        xmlHttp.send(null);
    } else {
        setTimeout("process()", 1000);
    }
}

function handleResponse() {
    if (xmlHttp.readyState == 4) {
        if (xmlHttp.status == 200) {
            var response = xmlHttp.responseXML;            
            var xmlRoot = response.documentElement;
            console.log(xmlRoot);
            var message = xmlRoot.firstChild.data;

            document.getElementById("answer").innerHTML = '<span style="color: blue">' + message + '</span>' 

            setTimeout("process()", 1000);
        } else {
            alert("Erreur au niveau de la lecture de la donnée");
        }
    }
}