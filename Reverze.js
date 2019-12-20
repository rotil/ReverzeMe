Java.perform(function(){
    console.log("\nreverzeme detection bypass with Frida");
    var Attack = Java.use("com.example.reverzeme.ChallengeJNI");
    console.log("\nHijacking com.example.reverzeme.ChallengeJNI function in Attack class");


    Attack.checkIfDeviceIsEmulator.implementation = function(){
        console.log("\nInside the checkIfDeviceIsEmulator function");
         console.log("Password " + this.stringFromJNI());
         console.log("Flag " + this.stringOtherHalfKey("s1r"));
        return Java.use("java.lang.Boolean").$new("false");
    }; 


});


//frida -Uf com.example.reverzeme -l reverzeme.js --no-pause