import { useState } from "react";

export default function Counter() {
    let [count, setCount] = useState(0);
    function addCount() {
        setCount(count + 1);
    }
    function minusCount() {
        setCount(count - 1);
    }
    function resetCount() {
        setCount(0);
    }
    return (
        <div>
            <span>Click to count</span>
            <h1>{count}</h1>
            <span><button onClick={addCount}>Going up</button>
            <button onClick={minusCount}>Going down</button>
            <button onClick={resetCount}>I call do-over</button></span>
        </div>
    );
}