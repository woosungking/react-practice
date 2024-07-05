import React, { useEffect } from "react";

const Timer=(props)=>{
    useEffect(()=>{
        const timer = setInterval(()=>{
            console.log("타이머 돌아가는중");
        },1000);

        return()=>{
            clearInterval(timer);
            console.log("타이머 종료");
        };
    },[]);

    return(
        <div>
            <span>타이머 시작 콘솔 확인!</span>
        </div>
    );
};

export default Timer;