import React, { useState } from "react";

const UseStateHookEx=()=>{
    const [clock, setClock] = useState(1);
    const timeUpdate=()=>{
        setClock(clock + 1);
    }

    // const [names, setNames] = useState(["심재홍","양세현"]);
    // 초기값에는 배열이 들어 갈 수 있다.
    // 초기값에 바로 값을 집어넣는다면 상태가 변화할때마다 랜더링이 되므로 엄청 무거워짐

    const initState=()=>{
        return ['심재홍', '양세현'];
    }

    const [names, setNames] = useState(()=>{
        return initState();
    })
    const [input, setInput] = useState('');

    const handleInputChange=(event)=>{
        setInput(event.target.value);
        console.log(input)
    };

    const handleUpload=()=>{
        setNames((prevState)=>{ // 현제 Names라는 State에는 [심재홍, 양세현]이 들어있으므로, prevState라는 배열에는 "[심재홍, 양세현]" 이 들어있음.
            return[input, ...prevState]; // 기존에 있던 값들은 뒤로 밀리고 새로온 값들이 앞으로 들어감.
        });
        //set이름(()=>{}) 이런식으로 콜백함수를 쓰면 "이름"에 저장되어있는 상태를 가지고 옴.
    }
    
    return(
    <>
        <div>
            <input type="text" value={input} onChange={handleInputChange} />
            <button onClick={handleUpload}>upload</button>
            {names.map((name, idx)=>{
                return <p> 키:{idx} 값:{name}</p>;
            })}
        </div>
        <div>
        <span>현제 시간 {clock}시</span>
        <button onClick={timeUpdate}>Update</button>
        </div>
    </>
    );
};

export default UseStateHookEx;