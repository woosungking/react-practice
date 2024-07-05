import React, { useEffect, useState } from "react";
import Timer from "./component/Timer";

const UseEffectEx =()=>{
    const [count, setCount] = useState(0);
    const [name, setName] = useState("");

    const handleAddCount=()=>{
        setCount((prev)=>{
            return (prev+1);
        })
    }

    const handleAddName=(event)=>{
        setName(event.target.value);
    };

    useEffect(()=>{
        console.log("컴포넌트가 랜더링 될때마다 실행!!");
    });
    useEffect(()=>{
        console.log("컴포넌트가 \"처음\" 랜더링 될때마다 실행");
    },[])
    useEffect(()=>{
        console.log("useState를 사용하여 count의 숫자가 변화할때마다 실행");
    },[count]); //  useState를 사용하여 count의 숫자가 변화할때마다 실행
    useEffect(()=>{
        console.log("useState를 사용하여 name이 변화할때마다 실행");
    },[name]);

    const [timer, setTimer] = useState(false);
    const handleToggleTimer=()=>{
        setTimer(!timer);
    };
    return(
        <>
        <div>
            <p>{count}번 클릭했습니다.</p>
            <button onClick={handleAddCount}>Click Me!!</button>
            <input type="text" onChange={handleAddName} value={name} />
            <p>{name}</p>
        </div>

        {timer&&<Timer></Timer>}
        <button onClick={()=>handleToggleTimer()}> click</button>
        </>
    );
}

export default UseEffectEx;