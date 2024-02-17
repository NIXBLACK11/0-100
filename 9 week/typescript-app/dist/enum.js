"use strict";
// type keyInput = "up" | "down";
// or use an enum
var keyInput;
(function (keyInput) {
    keyInput[keyInput["up"] = 0] = "up";
    keyInput[keyInput["down"] = 1] = "down";
})(keyInput || (keyInput = {}));
function doSomething(keyPressed) {
    if (keyPressed == keyInput.up) {
    }
}
doSomething(keyInput.up);
