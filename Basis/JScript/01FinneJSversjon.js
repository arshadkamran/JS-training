import System;
if (ScriptEngine) {  
    Console.WriteLine("Skriptmotoren: " + ScriptEngine()); 
    Console.WriteLine("Buildnr: " + ScriptEngineBuildVersion());
    Console.WriteLine("Hoved versjonnr. : " +ScriptEngineMajorVersion());
    Console.WriteLine("Del versjonnr. : "+ ScriptEngineMinorVersion());
}
