import System;

var bytesPerGB = 1024 * 1024 * 1024;  

var fso = new ActiveXObject("Scripting.FileSystemObject");  

Console.WriteLine(fso.Drives);  
var e = new Enumerator(fso.Drives);  

var driveString = "";  

e.moveFirst();  
while (e.atEnd() == false)  
{  
    var drv = e.item();  

    driveString += drv.Path + " - ";  

    if (drv.IsReady){  
        var freeGB = drv.FreeSpace / bytesPerGB;  
        var totalGB = drv.TotalSize / bytesPerGB;  

        driveString += freeGB.toFixed(3) + " GB free of ";  
        driveString += totalGB.toFixed(3) + " GB";  
    }  
    else{  
        driveString += "Not Ready";  
    }  

    driveString += "\n";;  

    e.moveNext();  
}  
Console.WriteLine(driveString);  
