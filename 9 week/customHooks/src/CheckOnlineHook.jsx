import { useState } from "react";

function userIsOnline() {
    const [onLine, setOnLine] = useState(false);
    window.addEventListener('online', () => {
        console.log("User Online");
        setOnLine(true);
    });
    window.addEventListener('offline', () => {
        console.log("User OffLine");
        setOnLine(false);
    });
    return onLine;
}

function CheckOnlineHook() {
    const onLine = userIsOnline();
    return <div>
        {(onLine) ? <p>Online</p> : <p>Offline</p>}
    </div>
}

export default CheckOnlineHook;