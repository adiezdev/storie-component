import { useEffect, useState } from "react"


/**
 * hook contador
 */
export const useCount = (tope: number, autoStart: boolean = true) => {
    const delay = 100;

    const [count, setCount] = useState(0)
    const [isRunning, setIsRunning] = useState(autoStart)

    useEffect(() => {
        if (isRunning) {
            const interval = setInterval(() => {
                setCount(count + 1)
            }, isRunning ? delay : 0)

            if (count > tope) {
                setIsRunning(false)
                setCount(1)
            }

            return () => clearInterval(interval)
        }
    }, [isRunning, count])

    const start = () => {
        setIsRunning(true)
    }

    const stop = () => {
        setIsRunning(false)
    }

    const reset = () => {
        setCount(1)
        if(!isRunning)
            setIsRunning(true)
    }

    return {
        count,
        start,
        stop,
        reset,
        isPlay: isRunning
    }
}
