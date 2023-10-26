if (typeof window != 'undefined') {
    window.onerror = function(message, source, lineNumber, colNumber, errorObject) {
        console.log("Error Details");
        console.log(`Message: ${message}`);
        console.log(`Source: ${source}`);
        console.log(`Line number: ${lineNumber}`);
        console.log(`Col number: ${colNumber}`);
        console.log(`Error Object: `, errorObject );
    }
    var func = {};
    func();
}

import express from "express";
var app = express();
app.listen( 3000, () => console.log("server listening on port 3000"));