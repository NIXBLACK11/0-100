import { useEffect, useState } from "react";

function useDebounce(value, timeout) {
    const [debouncedValue, setDebouncedValue] = useState(value);
    useEffect(() => {
        let valueTimeout = setTimeout(() => {
            setDebouncedValue(value);
        }, timeout);

        return () => {
            clearTimeout(valueTimeout);
        }
    }, [value]);
    return debouncedValue;
}

function DebounceHook() {
    const [inputValue, setInputValue] = useState('');
    const debounceValue = useDebounce(inputValue, 500);

    useEffect(() => {
        //fetch data from the backend
    }, [debounceValue]);

    return <div>
        Debounced value is {debounceValue}<br/>
        <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Search..."
        />
    </div>
}

export default DebounceHook;