import System;

var xmlFile1 = "W:\\_PoC\\_JScript\\08XmlFil.xml"
var xmlObj;

var xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
function loadXML(xmlFile) {
    xmlDoc.async = "false";
    xmlDoc.onreadystatechange = verify;
    xmlDoc.load(xmlFile);
    xmlObj = xmlDoc.documentElement;
    //  Console.WriteLine(xmlFile); 
    //  Console.WriteLine(xmlObj);
}

function verify() {
    // 0 Object is not initialized 
    // 1 Loading object is loading data 
    // 2 Loaded object has loaded data 
    // 3 Data from object can be worked with 
    // 4 Object completely initialized 
    if (xmlDoc.readyState != 4) {
        return false;
    }
}

loadXML(xmlFile1);
print(xmlObj.xml);
Console.WriteLine(xmlObj.xml);
Console.WriteLine(xmlObj.childNodes(2).firstChild.text);

Console.WriteLine((xmlObj.childNodes(0).firstChild.text) + " " + (xmlObj.childNodes(0).getAttribute("id")));

Console.WriteLine((xmlObj.childNodes(1).firstChild.text) + " " + (xmlObj.childNodes(1).getAttribute("age")));

Console.WriteLine((xmlObj.childNodes(2).firstChild.text) + " " + (xmlObj.childNodes(2).getAttribute("sex")));




