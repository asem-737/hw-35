import{React, useState, useEffect} from 'react'

export const FuncComp = () => {
    const[inputValue, setInputValue] = useState ('hello');
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `вы нажали ${count}`;
    })

    let handleInput = event => {
        console.log(event.target.value);
        setInputValue(event.target.value);
    }
    return(
        <>
        <input type="text" onChange= {handleInput} />
        <div> Input value: {inputValue} </div>
        <hr/>
        <div>
            <button onClick= {() =>{setCount(count +1)}} >Count ++</button>
        </div>
        </>
    )
}