
function ShowFolder(){ 
    var fso, f, shell; 
//    shell = new regedit("WScript.Shell");
    fso = new ActiveXObject("Scripting.FileSystemObject"); 
    f = fso.GetFolder("\\"); 

    return f; 
    } 

    print(ShowFolder()); 