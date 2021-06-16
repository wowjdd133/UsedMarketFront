import { useEffect, useRef, useState } from "react";
import { idText } from "typescript";

export const useTimerHook = (second: number) => {
    const [timerSecond, setTimerSecond] = useState<number>(second);
    const [isActive, setIsActive] = useState<boolean>(false);
    const countRef = useRef<number | null>(null);

    useEffect(() => {
        console.log(isActive, timerSecond);
        if(isActive) {
            countRef.current = setInterval(() => {
                setTimerSecond(timerSecond - 1);
            }, 1000);

            if(timerSecond === 0) {
                clearInterval(countRef.current);
            }
        }

        return () => {
            if(countRef.current) {
                clearInterval(countRef.current);
            }
        }
    }, [timerSecond, isActive])

    const handleReset = () => {
        if(countRef && countRef.current) {
            console.log('제거')
            clearInterval(countRef.current);
        }
        setTimerSecond(second);
    }

    return {
        timerSecond,
        isActive,
        setIsActive,
        handleReset
    };
}