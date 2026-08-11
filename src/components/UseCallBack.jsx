import { useState, useCallback } from "react";

function Counter() {
    const [count, setCount] = useState(0);

    const handleClick = useCallback(() => {
        console.log('Clicked');
    }, [])

    return (
        <div>
            <p>Count: {count}</p>

            <button onClick={() => setCount(prev => prev + 1)}>
                +
            </button>

            <button onClick={handleClick}>
                Say hello
            </button>
        </div>
    );
}