import { useState } from "react"
function Counter() {
    const [counter, setCounter] = useState(1);
    const handleIncrease =() =>{
        setCounter(function (prevCounter) {
            return prevCounter + 1;
        })
    }
    const handleDecrease =() =>{
        setCounter(function (prevCounter) {
            return prevCounter - 1 ;
        })
    }
    return (
        <>
        <h2>Counter: {counter}</h2>
        <button onClick={handleIncrease}>Increase</button>
        <button onClick={handleDecrease}>Decrease</button>
        </>
    )
}
export default Counter;