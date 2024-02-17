// type keyInput = "up" | "down";

// or use an enum

enum keyInput {
    up,
    down
}

function doSomething(keyPressed: keyInput) {
    if(keyPressed==keyInput.up) {
        
    }
}

doSomething(keyInput.up);