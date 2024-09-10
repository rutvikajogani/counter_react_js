
import { useState } from "react"

export function Counter1() {

    const [count, setCount] = useState(0);
    const [value, setValue] = useState(5);
    const [inputValueNumber ,setInputValue] = useState(0)
    

    const inputvalue = (event) => {
        setInputValue (event.target.value)
    }

    const setValueFn = () => {
        setValue(Number(inputValueNumber));
    }

    return (
        <>
        <div className="main_counter1">
            <h1>Counter 1</h1>
          <div  className="inputfiled"> <input type="number" placeholder="Enter the number" onChange={inputvalue} />
            <button onClick={setValueFn}>set</button></div> 
            <p>Current Set value :{value}</p>
           <div className="buttonss"> <button onClick={() => { setCount(count + value) }}>Add</button>
            <button onClick={() => { if (count - value >= 0) { setCount(count - value) } }}>Remove</button></div>
            <h1>{count}</h1>
            </div>
        </>
    )
}