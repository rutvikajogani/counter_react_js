import { useState } from "react";

function Counter() {
  const [value, setValue] = useState(0);
  
  
  function Plus(){
    setValue(value + 1)
  }
  function Minus(){
    setValue(value - 1)
    if(value <= 0){
      setValue(0)
    }
   
  }

  return (
    <>
    <div className="main_counter">
    <h1>counter</h1>
     <h1>{value}</h1>
     <div className="buttons">
     <button onClick={Plus}>plus</button>
     <button onClick={Minus}>minus</button>
     <button onClick={() => {setValue(0)}}>reset</button></div>
     </div>
    </>
  )
}

export default Counter
