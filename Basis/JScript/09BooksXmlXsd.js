import System;
var xs, xd;

main();

function main() {
    try {
        xs = new ActiveXObject("MSXML2.XMLSchemaCache.6.0");
        xd = new ActiveXObject("MSXML2.DOMDocument.6.0");
    }
    catch (e) {
        Console.WriteLine("Mirosoft XML Core Services (MSXML) 6.0 is not installed.\n"
            + "Install MSXML 6.0 before continuing.");
        return;
    }

    try {
        xs.add("urn:books", "books.xsd");
    }
    catch (e) {
        Console.WriteLine("Failed to add to schema cache: " + e.description);
        return;
    }

    try {
        xd.schemas = xs;
        xd.async = false;
        xd.validateOnParse = false;
        xd.load("books.xml");
        xd.setProperty("MultipleErrorMessages", true);
    }
    catch (e) {
        Console.WriteLine("can't load books.xml : " + e.description);
        return;
    }

    var err = xd.validate();
    if (err.errorCode != 0) {
        for (var i = 0; i < err.allErrors.length; i++) {
            var e = err.allErrors.item(i);
            Console.WriteLine("errorItem[" + i + "]: " + e.reason + "\n");
        }
    }
    else
        Console.WriteLine("valid dom as follows:\n" + xd.xml);

}